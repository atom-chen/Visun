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
        FighterInfo.prototype.RecentBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FighterInfo.prototype.TotalBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
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
                writer.uint32(40).int64(message.RecentBetMoney);
            if (message.TotalBetMoney != null && Object.hasOwnProperty.call(message, "TotalBetMoney"))
                writer.uint32(48).int64(message.TotalBetMoney);
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
                    message.RecentBetMoney = reader.int64();
                    break;
                case 6:
                    message.TotalBetMoney = reader.int64();
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
                    (message.RecentBetMoney = $util.Long.fromValue(object.RecentBetMoney)).unsigned = false;
                else if (typeof object.RecentBetMoney === "string")
                    message.RecentBetMoney = parseInt(object.RecentBetMoney, 10);
                else if (typeof object.RecentBetMoney === "number")
                    message.RecentBetMoney = object.RecentBetMoney;
                else if (typeof object.RecentBetMoney === "object")
                    message.RecentBetMoney = new $util.LongBits(object.RecentBetMoney.low >>> 0, object.RecentBetMoney.high >>> 0).toNumber();
            if (object.TotalBetMoney != null)
                if ($util.Long)
                    (message.TotalBetMoney = $util.Long.fromValue(object.TotalBetMoney)).unsigned = false;
                else if (typeof object.TotalBetMoney === "string")
                    message.TotalBetMoney = parseInt(object.TotalBetMoney, 10);
                else if (typeof object.TotalBetMoney === "number")
                    message.TotalBetMoney = object.TotalBetMoney;
                else if (typeof object.TotalBetMoney === "object")
                    message.TotalBetMoney = new $util.LongBits(object.TotalBetMoney.low >>> 0, object.TotalBetMoney.high >>> 0).toNumber();
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
                    var long = new $util.Long(0, 0, false);
                    object.RecentBetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RecentBetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
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
                    object.RecentBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.RecentBetMoney) : options.longs === Number ? new $util.LongBits(message.RecentBetMoney.low >>> 0, message.RecentBetMoney.high >>> 0).toNumber() : message.RecentBetMoney;
            if (message.TotalBetMoney != null && message.hasOwnProperty("TotalBetMoney"))
                if (typeof message.TotalBetMoney === "number")
                    object.TotalBetMoney = options.longs === String ? String(message.TotalBetMoney) : message.TotalBetMoney;
                else
                    object.TotalBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBetMoney) : options.longs === Number ? new $util.LongBits(message.TotalBetMoney.low >>> 0, message.TotalBetMoney.high >>> 0).toNumber() : message.TotalBetMoney;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.gamecomm.CardInfo.toObject(message.Cards, options);
            return object;
        };

        FighterInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FighterInfo;
    })();

    zhajinhua.ZhajinhuaSceneResp = (function() {

        function ZhajinhuaSceneResp(properties) {
            this.Fighters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaSceneResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaSceneResp.prototype.TotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaSceneResp.prototype.MinBet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaSceneResp.prototype.CurHost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaSceneResp.prototype.Fighters = $util.emptyArray;

        ZhajinhuaSceneResp.create = function create(properties) {
            return new ZhajinhuaSceneResp(properties);
        };

        ZhajinhuaSceneResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.TotalBet != null && Object.hasOwnProperty.call(message, "TotalBet"))
                writer.uint32(24).int64(message.TotalBet);
            if (message.MinBet != null && Object.hasOwnProperty.call(message, "MinBet"))
                writer.uint32(32).uint64(message.MinBet);
            if (message.CurHost != null && Object.hasOwnProperty.call(message, "CurHost"))
                writer.uint32(40).uint64(message.CurHost);
            if (message.Fighters != null && message.Fighters.length)
                for (var i = 0; i < message.Fighters.length; ++i)
                    $root.zhajinhua.FighterInfo.encode(message.Fighters[i], writer.uint32(50).fork()).ldelim();
            return writer;
        };

        ZhajinhuaSceneResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaSceneResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaSceneResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeStamp = reader.int64();
                    break;
                case 3:
                    message.TotalBet = reader.int64();
                    break;
                case 4:
                    message.MinBet = reader.uint64();
                    break;
                case 5:
                    message.CurHost = reader.uint64();
                    break;
                case 6:
                    if (!(message.Fighters && message.Fighters.length))
                        message.Fighters = [];
                    message.Fighters.push($root.zhajinhua.FighterInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaSceneResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaSceneResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet"))
                if (!$util.isInteger(message.TotalBet) && !(message.TotalBet && $util.isInteger(message.TotalBet.low) && $util.isInteger(message.TotalBet.high)))
                    return "TotalBet: integer|Long expected";
            if (message.MinBet != null && message.hasOwnProperty("MinBet"))
                if (!$util.isInteger(message.MinBet) && !(message.MinBet && $util.isInteger(message.MinBet.low) && $util.isInteger(message.MinBet.high)))
                    return "MinBet: integer|Long expected";
            if (message.CurHost != null && message.hasOwnProperty("CurHost"))
                if (!$util.isInteger(message.CurHost) && !(message.CurHost && $util.isInteger(message.CurHost.low) && $util.isInteger(message.CurHost.high)))
                    return "CurHost: integer|Long expected";
            if (message.Fighters != null && message.hasOwnProperty("Fighters")) {
                if (!Array.isArray(message.Fighters))
                    return "Fighters: array expected";
                for (var i = 0; i < message.Fighters.length; ++i) {
                    var error = $root.zhajinhua.FighterInfo.verify(message.Fighters[i]);
                    if (error)
                        return "Fighters." + error;
                }
            }
            return null;
        };

        ZhajinhuaSceneResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaSceneResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaSceneResp();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.TotalBet != null)
                if ($util.Long)
                    (message.TotalBet = $util.Long.fromValue(object.TotalBet)).unsigned = false;
                else if (typeof object.TotalBet === "string")
                    message.TotalBet = parseInt(object.TotalBet, 10);
                else if (typeof object.TotalBet === "number")
                    message.TotalBet = object.TotalBet;
                else if (typeof object.TotalBet === "object")
                    message.TotalBet = new $util.LongBits(object.TotalBet.low >>> 0, object.TotalBet.high >>> 0).toNumber();
            if (object.MinBet != null)
                if ($util.Long)
                    (message.MinBet = $util.Long.fromValue(object.MinBet)).unsigned = true;
                else if (typeof object.MinBet === "string")
                    message.MinBet = parseInt(object.MinBet, 10);
                else if (typeof object.MinBet === "number")
                    message.MinBet = object.MinBet;
                else if (typeof object.MinBet === "object")
                    message.MinBet = new $util.LongBits(object.MinBet.low >>> 0, object.MinBet.high >>> 0).toNumber(true);
            if (object.CurHost != null)
                if ($util.Long)
                    (message.CurHost = $util.Long.fromValue(object.CurHost)).unsigned = true;
                else if (typeof object.CurHost === "string")
                    message.CurHost = parseInt(object.CurHost, 10);
                else if (typeof object.CurHost === "number")
                    message.CurHost = object.CurHost;
                else if (typeof object.CurHost === "object")
                    message.CurHost = new $util.LongBits(object.CurHost.low >>> 0, object.CurHost.high >>> 0).toNumber(true);
            if (object.Fighters) {
                if (!Array.isArray(object.Fighters))
                    throw TypeError(".zhajinhua.ZhajinhuaSceneResp.Fighters: array expected");
                message.Fighters = [];
                for (var i = 0; i < object.Fighters.length; ++i) {
                    if (typeof object.Fighters[i] !== "object")
                        throw TypeError(".zhajinhua.ZhajinhuaSceneResp.Fighters: object expected");
                    message.Fighters[i] = $root.zhajinhua.FighterInfo.fromObject(object.Fighters[i]);
                }
            }
            return message;
        };

        ZhajinhuaSceneResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Fighters = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalBet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MinBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MinBet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.CurHost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurHost = options.longs === String ? "0" : 0;
            }
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet"))
                if (typeof message.TotalBet === "number")
                    object.TotalBet = options.longs === String ? String(message.TotalBet) : message.TotalBet;
                else
                    object.TotalBet = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBet) : options.longs === Number ? new $util.LongBits(message.TotalBet.low >>> 0, message.TotalBet.high >>> 0).toNumber() : message.TotalBet;
            if (message.MinBet != null && message.hasOwnProperty("MinBet"))
                if (typeof message.MinBet === "number")
                    object.MinBet = options.longs === String ? String(message.MinBet) : message.MinBet;
                else
                    object.MinBet = options.longs === String ? $util.Long.prototype.toString.call(message.MinBet) : options.longs === Number ? new $util.LongBits(message.MinBet.low >>> 0, message.MinBet.high >>> 0).toNumber(true) : message.MinBet;
            if (message.CurHost != null && message.hasOwnProperty("CurHost"))
                if (typeof message.CurHost === "number")
                    object.CurHost = options.longs === String ? String(message.CurHost) : message.CurHost;
                else
                    object.CurHost = options.longs === String ? $util.Long.prototype.toString.call(message.CurHost) : options.longs === Number ? new $util.LongBits(message.CurHost.low >>> 0, message.CurHost.high >>> 0).toNumber(true) : message.CurHost;
            if (message.Fighters && message.Fighters.length) {
                object.Fighters = [];
                for (var j = 0; j < message.Fighters.length; ++j)
                    object.Fighters[j] = $root.zhajinhua.FighterInfo.toObject(message.Fighters[j], options);
            }
            return object;
        };

        ZhajinhuaSceneResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaSceneResp;
    })();

    zhajinhua.ZhajinhuaStateFreeResp = (function() {

        function ZhajinhuaStateFreeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateFreeResp.prototype.Times = null;

        ZhajinhuaStateFreeResp.create = function create(properties) {
            return new ZhajinhuaStateFreeResp(properties);
        };

        ZhajinhuaStateFreeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ZhajinhuaStateFreeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStateFreeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStateFreeResp();
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

        ZhajinhuaStateFreeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateFreeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        ZhajinhuaStateFreeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateFreeResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateFreeResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateFreeResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        ZhajinhuaStateFreeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        ZhajinhuaStateFreeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateFreeResp;
    })();

    zhajinhua.ZhajinhuaStateStartResp = (function() {

        function ZhajinhuaStateStartResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateStartResp.prototype.Times = null;

        ZhajinhuaStateStartResp.create = function create(properties) {
            return new ZhajinhuaStateStartResp(properties);
        };

        ZhajinhuaStateStartResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ZhajinhuaStateStartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStateStartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStateStartResp();
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

        ZhajinhuaStateStartResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateStartResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        ZhajinhuaStateStartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateStartResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateStartResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateStartResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        ZhajinhuaStateStartResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        ZhajinhuaStateStartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateStartResp;
    })();

    zhajinhua.ZhajinhuaStatePlayingResp = (function() {

        function ZhajinhuaStatePlayingResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStatePlayingResp.prototype.Times = null;
        ZhajinhuaStatePlayingResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaStatePlayingResp.create = function create(properties) {
            return new ZhajinhuaStatePlayingResp(properties);
        };

        ZhajinhuaStatePlayingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(16).uint64(message.UserID);
            return writer;
        };

        ZhajinhuaStatePlayingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStatePlayingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStatePlayingResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
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

        ZhajinhuaStatePlayingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStatePlayingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        ZhajinhuaStatePlayingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStatePlayingResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStatePlayingResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStatePlayingResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
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

        ZhajinhuaStatePlayingResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            return object;
        };

        ZhajinhuaStatePlayingResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStatePlayingResp;
    })();

    zhajinhua.ZhajinhuaStateOverResp = (function() {

        function ZhajinhuaStateOverResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateOverResp.prototype.Times = null;

        ZhajinhuaStateOverResp.create = function create(properties) {
            return new ZhajinhuaStateOverResp(properties);
        };

        ZhajinhuaStateOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ZhajinhuaStateOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStateOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStateOverResp();
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

        ZhajinhuaStateOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        ZhajinhuaStateOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateOverResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateOverResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateOverResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        ZhajinhuaStateOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        ZhajinhuaStateOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateOverResp;
    })();

    zhajinhua.ZhajinhuaHostResp = (function() {

        function ZhajinhuaHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaHostResp.prototype.CurHost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaHostResp.create = function create(properties) {
            return new ZhajinhuaHostResp(properties);
        };

        ZhajinhuaHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CurHost != null && Object.hasOwnProperty.call(message, "CurHost"))
                writer.uint32(8).uint64(message.CurHost);
            return writer;
        };

        ZhajinhuaHostResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaHostResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaHostResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CurHost = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaHostResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaHostResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CurHost != null && message.hasOwnProperty("CurHost"))
                if (!$util.isInteger(message.CurHost) && !(message.CurHost && $util.isInteger(message.CurHost.low) && $util.isInteger(message.CurHost.high)))
                    return "CurHost: integer|Long expected";
            return null;
        };

        ZhajinhuaHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaHostResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaHostResp();
            if (object.CurHost != null)
                if ($util.Long)
                    (message.CurHost = $util.Long.fromValue(object.CurHost)).unsigned = true;
                else if (typeof object.CurHost === "string")
                    message.CurHost = parseInt(object.CurHost, 10);
                else if (typeof object.CurHost === "number")
                    message.CurHost = object.CurHost;
                else if (typeof object.CurHost === "object")
                    message.CurHost = new $util.LongBits(object.CurHost.low >>> 0, object.CurHost.high >>> 0).toNumber(true);
            return message;
        };

        ZhajinhuaHostResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.CurHost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurHost = options.longs === String ? "0" : 0;
            if (message.CurHost != null && message.hasOwnProperty("CurHost"))
                if (typeof message.CurHost === "number")
                    object.CurHost = options.longs === String ? String(message.CurHost) : message.CurHost;
                else
                    object.CurHost = options.longs === String ? $util.Long.prototype.toString.call(message.CurHost) : options.longs === Number ? new $util.LongBits(message.CurHost.low >>> 0, message.CurHost.high >>> 0).toNumber(true) : message.CurHost;
            return object;
        };

        ZhajinhuaHostResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaHostResp;
    })();

    zhajinhua.ZhajinhuaReadyReq = (function() {

        function ZhajinhuaReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaReadyReq.prototype.IsReady = false;

        ZhajinhuaReadyReq.create = function create(properties) {
            return new ZhajinhuaReadyReq(properties);
        };

        ZhajinhuaReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsReady != null && Object.hasOwnProperty.call(message, "IsReady"))
                writer.uint32(8).bool(message.IsReady);
            return writer;
        };

        ZhajinhuaReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaReadyReq();
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

        ZhajinhuaReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                if (typeof message.IsReady !== "boolean")
                    return "IsReady: boolean expected";
            return null;
        };

        ZhajinhuaReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaReadyReq)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaReadyReq();
            if (object.IsReady != null)
                message.IsReady = Boolean(object.IsReady);
            return message;
        };

        ZhajinhuaReadyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsReady = false;
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                object.IsReady = message.IsReady;
            return object;
        };

        ZhajinhuaReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaReadyReq;
    })();

    zhajinhua.ZhajinhuaReadyResp = (function() {

        function ZhajinhuaReadyResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaReadyResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaReadyResp.create = function create(properties) {
            return new ZhajinhuaReadyResp(properties);
        };

        ZhajinhuaReadyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            return writer;
        };

        ZhajinhuaReadyResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaReadyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaReadyResp();
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

        ZhajinhuaReadyResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaReadyResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            return null;
        };

        ZhajinhuaReadyResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaReadyResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaReadyResp();
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

        ZhajinhuaReadyResp.toObject = function toObject(message, options) {
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

        ZhajinhuaReadyResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaReadyResp;
    })();

    zhajinhua.ZhajinhuaFollowReq = (function() {

        function ZhajinhuaFollowReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaFollowReq.create = function create(properties) {
            return new ZhajinhuaFollowReq(properties);
        };

        ZhajinhuaFollowReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        ZhajinhuaFollowReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaFollowReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaFollowReq();
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

        ZhajinhuaFollowReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaFollowReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        ZhajinhuaFollowReq.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaFollowReq)
                return object;
            return new $root.zhajinhua.ZhajinhuaFollowReq();
        };

        ZhajinhuaFollowReq.toObject = function toObject() {
            return {};
        };

        ZhajinhuaFollowReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaFollowReq;
    })();

    zhajinhua.ZhajinhuaFollowResp = (function() {

        function ZhajinhuaFollowResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaFollowResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaFollowResp.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ZhajinhuaFollowResp.create = function create(properties) {
            return new ZhajinhuaFollowResp(properties);
        };

        ZhajinhuaFollowResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(16).int64(message.Money);
            return writer;
        };

        ZhajinhuaFollowResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaFollowResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaFollowResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
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

        ZhajinhuaFollowResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaFollowResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        ZhajinhuaFollowResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaFollowResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaFollowResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
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

        ZhajinhuaFollowResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        ZhajinhuaFollowResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaFollowResp;
    })();

    zhajinhua.ZhajinhuaRaiseReq = (function() {

        function ZhajinhuaRaiseReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaRaiseReq.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ZhajinhuaRaiseReq.create = function create(properties) {
            return new ZhajinhuaRaiseReq(properties);
        };

        ZhajinhuaRaiseReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(8).int64(message.Money);
            return writer;
        };

        ZhajinhuaRaiseReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaRaiseReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaRaiseReq();
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

        ZhajinhuaRaiseReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaRaiseReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        ZhajinhuaRaiseReq.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaRaiseReq)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaRaiseReq();
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

        ZhajinhuaRaiseReq.toObject = function toObject(message, options) {
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

        ZhajinhuaRaiseReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaRaiseReq;
    })();

    zhajinhua.ZhajinhuaRaiseResp = (function() {

        function ZhajinhuaRaiseResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaRaiseResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaRaiseResp.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ZhajinhuaRaiseResp.create = function create(properties) {
            return new ZhajinhuaRaiseResp(properties);
        };

        ZhajinhuaRaiseResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(16).int64(message.Money);
            return writer;
        };

        ZhajinhuaRaiseResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaRaiseResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaRaiseResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
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

        ZhajinhuaRaiseResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaRaiseResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        ZhajinhuaRaiseResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaRaiseResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaRaiseResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
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

        ZhajinhuaRaiseResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        ZhajinhuaRaiseResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaRaiseResp;
    })();

    zhajinhua.ZhajinhuaLookReq = (function() {

        function ZhajinhuaLookReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaLookReq.create = function create(properties) {
            return new ZhajinhuaLookReq(properties);
        };

        ZhajinhuaLookReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        ZhajinhuaLookReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaLookReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaLookReq();
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

        ZhajinhuaLookReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaLookReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        ZhajinhuaLookReq.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaLookReq)
                return object;
            return new $root.zhajinhua.ZhajinhuaLookReq();
        };

        ZhajinhuaLookReq.toObject = function toObject() {
            return {};
        };

        ZhajinhuaLookReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaLookReq;
    })();

    zhajinhua.ZhajinhuaLookResp = (function() {

        function ZhajinhuaLookResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaLookResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaLookResp.prototype.Cards = null;

        ZhajinhuaLookResp.create = function create(properties) {
            return new ZhajinhuaLookResp(properties);
        };

        ZhajinhuaLookResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.gamecomm.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ZhajinhuaLookResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaLookResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaLookResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
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

        ZhajinhuaLookResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaLookResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.gamecomm.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        ZhajinhuaLookResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaLookResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaLookResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaLookResp.Cards: object expected");
                message.Cards = $root.gamecomm.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        ZhajinhuaLookResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                object.Cards = null;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.gamecomm.CardInfo.toObject(message.Cards, options);
            return object;
        };

        ZhajinhuaLookResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaLookResp;
    })();

    zhajinhua.ZhajinhuaCompareReq = (function() {

        function ZhajinhuaCompareReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaCompareReq.prototype.HitId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaCompareReq.create = function create(properties) {
            return new ZhajinhuaCompareReq(properties);
        };

        ZhajinhuaCompareReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HitId != null && Object.hasOwnProperty.call(message, "HitId"))
                writer.uint32(8).uint64(message.HitId);
            return writer;
        };

        ZhajinhuaCompareReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaCompareReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaCompareReq();
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

        ZhajinhuaCompareReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaCompareReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                if (!$util.isInteger(message.HitId) && !(message.HitId && $util.isInteger(message.HitId.low) && $util.isInteger(message.HitId.high)))
                    return "HitId: integer|Long expected";
            return null;
        };

        ZhajinhuaCompareReq.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaCompareReq)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaCompareReq();
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

        ZhajinhuaCompareReq.toObject = function toObject(message, options) {
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

        ZhajinhuaCompareReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaCompareReq;
    })();

    zhajinhua.ZhajinhuaCompareResp = (function() {

        function ZhajinhuaCompareResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaCompareResp.prototype.AttackerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaCompareResp.prototype.HitId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaCompareResp.prototype.WinnerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaCompareResp.prototype.AttackerCards = null;
        ZhajinhuaCompareResp.prototype.HitCards = null;

        ZhajinhuaCompareResp.create = function create(properties) {
            return new ZhajinhuaCompareResp(properties);
        };

        ZhajinhuaCompareResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AttackerId != null && Object.hasOwnProperty.call(message, "AttackerId"))
                writer.uint32(8).uint64(message.AttackerId);
            if (message.HitId != null && Object.hasOwnProperty.call(message, "HitId"))
                writer.uint32(16).uint64(message.HitId);
            if (message.WinnerId != null && Object.hasOwnProperty.call(message, "WinnerId"))
                writer.uint32(24).uint64(message.WinnerId);
            if (message.AttackerCards != null && Object.hasOwnProperty.call(message, "AttackerCards"))
                $root.gamecomm.CardInfo.encode(message.AttackerCards, writer.uint32(34).fork()).ldelim();
            if (message.HitCards != null && Object.hasOwnProperty.call(message, "HitCards"))
                $root.gamecomm.CardInfo.encode(message.HitCards, writer.uint32(42).fork()).ldelim();
            return writer;
        };

        ZhajinhuaCompareResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaCompareResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaCompareResp();
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
                    message.WinnerId = reader.uint64();
                    break;
                case 4:
                    message.AttackerCards = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.HitCards = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaCompareResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaCompareResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AttackerId != null && message.hasOwnProperty("AttackerId"))
                if (!$util.isInteger(message.AttackerId) && !(message.AttackerId && $util.isInteger(message.AttackerId.low) && $util.isInteger(message.AttackerId.high)))
                    return "AttackerId: integer|Long expected";
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                if (!$util.isInteger(message.HitId) && !(message.HitId && $util.isInteger(message.HitId.low) && $util.isInteger(message.HitId.high)))
                    return "HitId: integer|Long expected";
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (!$util.isInteger(message.WinnerId) && !(message.WinnerId && $util.isInteger(message.WinnerId.low) && $util.isInteger(message.WinnerId.high)))
                    return "WinnerId: integer|Long expected";
            if (message.AttackerCards != null && message.hasOwnProperty("AttackerCards")) {
                var error = $root.gamecomm.CardInfo.verify(message.AttackerCards);
                if (error)
                    return "AttackerCards." + error;
            }
            if (message.HitCards != null && message.hasOwnProperty("HitCards")) {
                var error = $root.gamecomm.CardInfo.verify(message.HitCards);
                if (error)
                    return "HitCards." + error;
            }
            return null;
        };

        ZhajinhuaCompareResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaCompareResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaCompareResp();
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
            if (object.WinnerId != null)
                if ($util.Long)
                    (message.WinnerId = $util.Long.fromValue(object.WinnerId)).unsigned = true;
                else if (typeof object.WinnerId === "string")
                    message.WinnerId = parseInt(object.WinnerId, 10);
                else if (typeof object.WinnerId === "number")
                    message.WinnerId = object.WinnerId;
                else if (typeof object.WinnerId === "object")
                    message.WinnerId = new $util.LongBits(object.WinnerId.low >>> 0, object.WinnerId.high >>> 0).toNumber(true);
            if (object.AttackerCards != null) {
                if (typeof object.AttackerCards !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaCompareResp.AttackerCards: object expected");
                message.AttackerCards = $root.gamecomm.CardInfo.fromObject(object.AttackerCards);
            }
            if (object.HitCards != null) {
                if (typeof object.HitCards !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaCompareResp.HitCards: object expected");
                message.HitCards = $root.gamecomm.CardInfo.fromObject(object.HitCards);
            }
            return message;
        };

        ZhajinhuaCompareResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.WinnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinnerId = options.longs === String ? "0" : 0;
                object.AttackerCards = null;
                object.HitCards = null;
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
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (typeof message.WinnerId === "number")
                    object.WinnerId = options.longs === String ? String(message.WinnerId) : message.WinnerId;
                else
                    object.WinnerId = options.longs === String ? $util.Long.prototype.toString.call(message.WinnerId) : options.longs === Number ? new $util.LongBits(message.WinnerId.low >>> 0, message.WinnerId.high >>> 0).toNumber(true) : message.WinnerId;
            if (message.AttackerCards != null && message.hasOwnProperty("AttackerCards"))
                object.AttackerCards = $root.gamecomm.CardInfo.toObject(message.AttackerCards, options);
            if (message.HitCards != null && message.hasOwnProperty("HitCards"))
                object.HitCards = $root.gamecomm.CardInfo.toObject(message.HitCards, options);
            return object;
        };

        ZhajinhuaCompareResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaCompareResp;
    })();

    zhajinhua.ZhajinhuaGiveupReq = (function() {

        function ZhajinhuaGiveupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaGiveupReq.create = function create(properties) {
            return new ZhajinhuaGiveupReq(properties);
        };

        ZhajinhuaGiveupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        ZhajinhuaGiveupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaGiveupReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaGiveupReq();
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

        ZhajinhuaGiveupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaGiveupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        ZhajinhuaGiveupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaGiveupReq)
                return object;
            return new $root.zhajinhua.ZhajinhuaGiveupReq();
        };

        ZhajinhuaGiveupReq.toObject = function toObject() {
            return {};
        };

        ZhajinhuaGiveupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaGiveupReq;
    })();

    zhajinhua.ZhajinhuaGiveupResp = (function() {

        function ZhajinhuaGiveupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaGiveupResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaGiveupResp.create = function create(properties) {
            return new ZhajinhuaGiveupResp(properties);
        };

        ZhajinhuaGiveupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            return writer;
        };

        ZhajinhuaGiveupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaGiveupResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaGiveupResp();
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

        ZhajinhuaGiveupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaGiveupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            return null;
        };

        ZhajinhuaGiveupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaGiveupResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaGiveupResp();
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

        ZhajinhuaGiveupResp.toObject = function toObject(message, options) {
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

        ZhajinhuaGiveupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaGiveupResp;
    })();

    zhajinhua.ZhajinhuaOverResp = (function() {

        function ZhajinhuaOverResp(properties) {
            this.Infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaOverResp.prototype.WinnerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaOverResp.prototype.Infos = $util.emptyArray;

        ZhajinhuaOverResp.create = function create(properties) {
            return new ZhajinhuaOverResp(properties);
        };

        ZhajinhuaOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.WinnerId != null && Object.hasOwnProperty.call(message, "WinnerId"))
                writer.uint32(8).uint64(message.WinnerId);
            if (message.Infos != null && message.Infos.length)
                for (var i = 0; i < message.Infos.length; ++i)
                    $root.gamecomm.NotifyChangeGold.encode(message.Infos[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ZhajinhuaOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaOverResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.WinnerId = reader.uint64();
                    break;
                case 2:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.gamecomm.NotifyChangeGold.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (!$util.isInteger(message.WinnerId) && !(message.WinnerId && $util.isInteger(message.WinnerId.low) && $util.isInteger(message.WinnerId.high)))
                    return "WinnerId: integer|Long expected";
            if (message.Infos != null && message.hasOwnProperty("Infos")) {
                if (!Array.isArray(message.Infos))
                    return "Infos: array expected";
                for (var i = 0; i < message.Infos.length; ++i) {
                    var error = $root.gamecomm.NotifyChangeGold.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        ZhajinhuaOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaOverResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaOverResp();
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
                    throw TypeError(".zhajinhua.ZhajinhuaOverResp.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".zhajinhua.ZhajinhuaOverResp.Infos: object expected");
                    message.Infos[i] = $root.gamecomm.NotifyChangeGold.fromObject(object.Infos[i]);
                }
            }
            return message;
        };

        ZhajinhuaOverResp.toObject = function toObject(message, options) {
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
                    object.Infos[j] = $root.gamecomm.NotifyChangeGold.toObject(message.Infos[j], options);
            }
            return object;
        };

        ZhajinhuaOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaOverResp;
    })();

    return zhajinhua;
})();

module.exports = $root;