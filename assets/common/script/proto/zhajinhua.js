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
                $root.go.CardInfo.encode(message.Cards, writer.uint32(58).fork()).ldelim();
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
                    message.Cards = $root.go.CardInfo.decode(reader, reader.uint32());
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
                var error = $root.go.CardInfo.verify(message.Cards);
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
                message.Cards = $root.go.CardInfo.fromObject(object.Cards);
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
                object.Cards = $root.go.CardInfo.toObject(message.Cards, options);
            return object;
        };

        FighterInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FighterInfo;
    })();

    zhajinhua.ZhajinhuaScene = (function() {

        function ZhajinhuaScene(properties) {
            this.Fighters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaScene.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaScene.prototype.TotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaScene.prototype.MinBet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaScene.prototype.CurHost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaScene.prototype.Fighters = $util.emptyArray;

        ZhajinhuaScene.create = function create(properties) {
            return new ZhajinhuaScene(properties);
        };

        ZhajinhuaScene.encode = function encode(message, writer) {
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

        ZhajinhuaScene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaScene();
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

        ZhajinhuaScene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaScene.verify = function verify(message) {
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

        ZhajinhuaScene.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaScene)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaScene();
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
                    throw TypeError(".zhajinhua.ZhajinhuaScene.Fighters: array expected");
                message.Fighters = [];
                for (var i = 0; i < object.Fighters.length; ++i) {
                    if (typeof object.Fighters[i] !== "object")
                        throw TypeError(".zhajinhua.ZhajinhuaScene.Fighters: object expected");
                    message.Fighters[i] = $root.zhajinhua.FighterInfo.fromObject(object.Fighters[i]);
                }
            }
            return message;
        };

        ZhajinhuaScene.toObject = function toObject(message, options) {
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

        ZhajinhuaScene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaScene;
    })();

    zhajinhua.ZhajinhuaStateFree = (function() {

        function ZhajinhuaStateFree(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateFree.prototype.Times = null;

        ZhajinhuaStateFree.create = function create(properties) {
            return new ZhajinhuaStateFree(properties);
        };

        ZhajinhuaStateFree.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ZhajinhuaStateFree.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStateFree.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStateFree();
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

        ZhajinhuaStateFree.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateFree.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        ZhajinhuaStateFree.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateFree)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateFree();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateFree.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        ZhajinhuaStateFree.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        ZhajinhuaStateFree.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateFree;
    })();

    zhajinhua.ZhajinhuaStateStart = (function() {

        function ZhajinhuaStateStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateStart.prototype.Times = null;

        ZhajinhuaStateStart.create = function create(properties) {
            return new ZhajinhuaStateStart(properties);
        };

        ZhajinhuaStateStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ZhajinhuaStateStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStateStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStateStart();
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

        ZhajinhuaStateStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        ZhajinhuaStateStart.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateStart)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateStart();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateStart.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        ZhajinhuaStateStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        ZhajinhuaStateStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateStart;
    })();

    zhajinhua.ZhajinhuaStatePlaying = (function() {

        function ZhajinhuaStatePlaying(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStatePlaying.prototype.Times = null;
        ZhajinhuaStatePlaying.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaStatePlaying.create = function create(properties) {
            return new ZhajinhuaStatePlaying(properties);
        };

        ZhajinhuaStatePlaying.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(16).uint64(message.UserID);
            return writer;
        };

        ZhajinhuaStatePlaying.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStatePlaying.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStatePlaying();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
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

        ZhajinhuaStatePlaying.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStatePlaying.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        ZhajinhuaStatePlaying.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStatePlaying)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStatePlaying();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStatePlaying.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
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

        ZhajinhuaStatePlaying.toObject = function toObject(message, options) {
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
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            return object;
        };

        ZhajinhuaStatePlaying.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStatePlaying;
    })();

    zhajinhua.ZhajinhuaStateOver = (function() {

        function ZhajinhuaStateOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateOver.prototype.Times = null;

        ZhajinhuaStateOver.create = function create(properties) {
            return new ZhajinhuaStateOver(properties);
        };

        ZhajinhuaStateOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ZhajinhuaStateOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStateOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStateOver();
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

        ZhajinhuaStateOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        ZhajinhuaStateOver.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateOver)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateOver();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateOver.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        ZhajinhuaStateOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        ZhajinhuaStateOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateOver;
    })();

    zhajinhua.ZhajinhuaHost = (function() {

        function ZhajinhuaHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaHost.prototype.CurHost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaHost.create = function create(properties) {
            return new ZhajinhuaHost(properties);
        };

        ZhajinhuaHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CurHost != null && Object.hasOwnProperty.call(message, "CurHost"))
                writer.uint32(8).uint64(message.CurHost);
            return writer;
        };

        ZhajinhuaHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaHost();
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

        ZhajinhuaHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaHost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CurHost != null && message.hasOwnProperty("CurHost"))
                if (!$util.isInteger(message.CurHost) && !(message.CurHost && $util.isInteger(message.CurHost.low) && $util.isInteger(message.CurHost.high)))
                    return "CurHost: integer|Long expected";
            return null;
        };

        ZhajinhuaHost.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaHost)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaHost();
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

        ZhajinhuaHost.toObject = function toObject(message, options) {
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

        ZhajinhuaHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaHost;
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
                $root.go.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
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
                    message.Cards = $root.go.CardInfo.decode(reader, reader.uint32());
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
                var error = $root.go.CardInfo.verify(message.Cards);
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
                message.Cards = $root.go.CardInfo.fromObject(object.Cards);
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
                object.Cards = $root.go.CardInfo.toObject(message.Cards, options);
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
                $root.go.CardInfo.encode(message.AttackerCards, writer.uint32(34).fork()).ldelim();
            if (message.HitCards != null && Object.hasOwnProperty.call(message, "HitCards"))
                $root.go.CardInfo.encode(message.HitCards, writer.uint32(42).fork()).ldelim();
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
                    message.AttackerCards = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.HitCards = $root.go.CardInfo.decode(reader, reader.uint32());
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
                var error = $root.go.CardInfo.verify(message.AttackerCards);
                if (error)
                    return "AttackerCards." + error;
            }
            if (message.HitCards != null && message.hasOwnProperty("HitCards")) {
                var error = $root.go.CardInfo.verify(message.HitCards);
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
                message.AttackerCards = $root.go.CardInfo.fromObject(object.AttackerCards);
            }
            if (object.HitCards != null) {
                if (typeof object.HitCards !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaCompareResp.HitCards: object expected");
                message.HitCards = $root.go.CardInfo.fromObject(object.HitCards);
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
                object.AttackerCards = $root.go.CardInfo.toObject(message.AttackerCards, options);
            if (message.HitCards != null && message.hasOwnProperty("HitCards"))
                object.HitCards = $root.go.CardInfo.toObject(message.HitCards, options);
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

    zhajinhua.ZhajinhuaOver = (function() {

        function ZhajinhuaOver(properties) {
            this.Infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaOver.prototype.WinnerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaOver.prototype.Infos = $util.emptyArray;

        ZhajinhuaOver.create = function create(properties) {
            return new ZhajinhuaOver(properties);
        };

        ZhajinhuaOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.WinnerId != null && Object.hasOwnProperty.call(message, "WinnerId"))
                writer.uint32(8).uint64(message.WinnerId);
            if (message.Infos != null && message.Infos.length)
                for (var i = 0; i < message.Infos.length; ++i)
                    $root.go.MoneyCalculateInfo.encode(message.Infos[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ZhajinhuaOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.WinnerId = reader.uint64();
                    break;
                case 2:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.go.MoneyCalculateInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (!$util.isInteger(message.WinnerId) && !(message.WinnerId && $util.isInteger(message.WinnerId.low) && $util.isInteger(message.WinnerId.high)))
                    return "WinnerId: integer|Long expected";
            if (message.Infos != null && message.hasOwnProperty("Infos")) {
                if (!Array.isArray(message.Infos))
                    return "Infos: array expected";
                for (var i = 0; i < message.Infos.length; ++i) {
                    var error = $root.go.MoneyCalculateInfo.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        ZhajinhuaOver.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaOver)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaOver();
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
                    throw TypeError(".zhajinhua.ZhajinhuaOver.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".zhajinhua.ZhajinhuaOver.Infos: object expected");
                    message.Infos[i] = $root.go.MoneyCalculateInfo.fromObject(object.Infos[i]);
                }
            }
            return message;
        };

        ZhajinhuaOver.toObject = function toObject(message, options) {
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
                    object.Infos[j] = $root.go.MoneyCalculateInfo.toObject(message.Infos[j], options);
            }
            return object;
        };

        ZhajinhuaOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaOver;
    })();

    return zhajinhua;
})();

$root.go = (function() {

    var go = {};

    go.PlayerInfo = (function() {

        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PlayerInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.Name = "";
        PlayerInfo.prototype.Age = 0;
        PlayerInfo.prototype.Sex = 0;
        PlayerInfo.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerInfo.prototype.VipLevel = 0;
        PlayerInfo.prototype.Account = "";
        PlayerInfo.prototype.Sate = 0;
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
                writer.uint32(24).int32(message.Age);
            if (message.Sex != null && Object.hasOwnProperty.call(message, "Sex"))
                writer.uint32(32).int32(message.Sex);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(40).int64(message.Gold);
            if (message.VipLevel != null && Object.hasOwnProperty.call(message, "VipLevel"))
                writer.uint32(48).int32(message.VipLevel);
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(58).string(message.Account);
            if (message.Sate != null && Object.hasOwnProperty.call(message, "Sate"))
                writer.uint32(64).int32(message.Sate);
            if (message.ChairID != null && Object.hasOwnProperty.call(message, "ChairID"))
                writer.uint32(104).uint32(message.ChairID);
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
                case 3:
                    message.Age = reader.int32();
                    break;
                case 4:
                    message.Sex = reader.int32();
                    break;
                case 5:
                    message.Gold = reader.int64();
                    break;
                case 6:
                    message.VipLevel = reader.int32();
                    break;
                case 7:
                    message.Account = reader.string();
                    break;
                case 8:
                    message.Sate = reader.int32();
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
            if (message.Age != null && message.hasOwnProperty("Age"))
                if (!$util.isInteger(message.Age))
                    return "Age: integer expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                if (!$util.isInteger(message.Sex))
                    return "Sex: integer expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                if (!$util.isInteger(message.VipLevel))
                    return "VipLevel: integer expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Sate != null && message.hasOwnProperty("Sate"))
                if (!$util.isInteger(message.Sate))
                    return "Sate: integer expected";
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
            if (object.Age != null)
                message.Age = object.Age | 0;
            if (object.Sex != null)
                message.Sex = object.Sex | 0;
            if (object.Gold != null)
                if ($util.Long)
                    (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
                else if (typeof object.Gold === "string")
                    message.Gold = parseInt(object.Gold, 10);
                else if (typeof object.Gold === "number")
                    message.Gold = object.Gold;
                else if (typeof object.Gold === "object")
                    message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
            if (object.VipLevel != null)
                message.VipLevel = object.VipLevel | 0;
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Sate != null)
                message.Sate = object.Sate | 0;
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
                object.VipLevel = 0;
                object.Account = "";
                object.Sate = 0;
                object.ChairID = 0;
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
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                object.VipLevel = message.VipLevel;
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Sate != null && message.hasOwnProperty("Sate"))
                object.Sate = message.Sate;
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                object.ChairID = message.ChairID;
            return object;
        };

        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
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

    go.UserList = (function() {

        function UserList(properties) {
            this.AllInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserList.prototype.AllInfos = $util.emptyArray;

        UserList.create = function create(properties) {
            return new UserList(properties);
        };

        UserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllInfos != null && message.AllInfos.length)
                for (var i = 0; i < message.AllInfos.length; ++i)
                    $root.go.PlayerInfo.encode(message.AllInfos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        UserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        UserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.UserList();
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

        UserList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UserList.verify = function verify(message) {
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

        UserList.fromObject = function fromObject(object) {
            if (object instanceof $root.go.UserList)
                return object;
            var message = new $root.go.UserList();
            if (object.AllInfos) {
                if (!Array.isArray(object.AllInfos))
                    throw TypeError(".go.UserList.AllInfos: array expected");
                message.AllInfos = [];
                for (var i = 0; i < object.AllInfos.length; ++i) {
                    if (typeof object.AllInfos[i] !== "object")
                        throw TypeError(".go.UserList.AllInfos: object expected");
                    message.AllInfos[i] = $root.go.PlayerInfo.fromObject(object.AllInfos[i]);
                }
            }
            return message;
        };

        UserList.toObject = function toObject(message, options) {
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

        UserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserList;
    })();

    go.ReqEnterGame = (function() {

        function ReqEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqEnterGame.prototype.GameID = 0;

        ReqEnterGame.create = function create(properties) {
            return new ReqEnterGame(properties);
        };

        ReqEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint32(message.GameID);
            return writer;
        };

        ReqEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ReqEnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            return null;
        };

        ReqEnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ReqEnterGame)
                return object;
            var message = new $root.go.ReqEnterGame();
            if (object.GameID != null)
                message.GameID = object.GameID >>> 0;
            return message;
        };

        ReqEnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            return object;
        };

        ReqEnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqEnterGame;
    })();

    go.ReqExitGame = (function() {

        function ReqExitGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqExitGame.prototype.GameID = 0;

        ReqExitGame.create = function create(properties) {
            return new ReqExitGame(properties);
        };

        ReqExitGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint32(message.GameID);
            return writer;
        };

        ReqExitGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqExitGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ReqExitGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqExitGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqExitGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            return null;
        };

        ReqExitGame.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ReqExitGame)
                return object;
            var message = new $root.go.ReqExitGame();
            if (object.GameID != null)
                message.GameID = object.GameID >>> 0;
            return message;
        };

        ReqExitGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            return object;
        };

        ReqExitGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqExitGame;
    })();

    go.ReqChangeTable = (function() {

        function ReqChangeTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqChangeTable.prototype.GameID = 0;

        ReqChangeTable.create = function create(properties) {
            return new ReqChangeTable(properties);
        };

        ReqChangeTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint32(message.GameID);
            return writer;
        };

        ReqChangeTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqChangeTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ReqChangeTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqChangeTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqChangeTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            return null;
        };

        ReqChangeTable.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ReqChangeTable)
                return object;
            var message = new $root.go.ReqChangeTable();
            if (object.GameID != null)
                message.GameID = object.GameID >>> 0;
            return message;
        };

        ReqChangeTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            return object;
        };

        ReqChangeTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqChangeTable;
    })();

    go.NotifyChangeGold = (function() {

        function NotifyChangeGold(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        NotifyChangeGold.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        NotifyChangeGold.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        NotifyChangeGold.prototype.Code = 0;

        NotifyChangeGold.create = function create(properties) {
            return new NotifyChangeGold(properties);
        };

        NotifyChangeGold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(16).int64(message.Gold);
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(24).uint32(message.Code);
            return writer;
        };

        NotifyChangeGold.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        NotifyChangeGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.NotifyChangeGold();
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
                    message.Code = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        NotifyChangeGold.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        NotifyChangeGold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            return null;
        };

        NotifyChangeGold.fromObject = function fromObject(object) {
            if (object instanceof $root.go.NotifyChangeGold)
                return object;
            var message = new $root.go.NotifyChangeGold();
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
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            return message;
        };

        NotifyChangeGold.toObject = function toObject(message, options) {
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
                object.Code = 0;
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
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            return object;
        };

        NotifyChangeGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotifyChangeGold;
    })();

    go.MoneyCalculateInfo = (function() {

        function MoneyCalculateInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MoneyCalculateInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        MoneyCalculateInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        MoneyCalculateInfo.prototype.ChangeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MoneyCalculateInfo.prototype.Reason = "";

        MoneyCalculateInfo.create = function create(properties) {
            return new MoneyCalculateInfo(properties);
        };

        MoneyCalculateInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(16).uint64(message.Money);
            if (message.ChangeValue != null && Object.hasOwnProperty.call(message, "ChangeValue"))
                writer.uint32(24).int64(message.ChangeValue);
            if (message.Reason != null && Object.hasOwnProperty.call(message, "Reason"))
                writer.uint32(34).string(message.Reason);
            return writer;
        };

        MoneyCalculateInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        MoneyCalculateInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.MoneyCalculateInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Money = reader.uint64();
                    break;
                case 3:
                    message.ChangeValue = reader.int64();
                    break;
                case 4:
                    message.Reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        MoneyCalculateInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        MoneyCalculateInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.ChangeValue != null && message.hasOwnProperty("ChangeValue"))
                if (!$util.isInteger(message.ChangeValue) && !(message.ChangeValue && $util.isInteger(message.ChangeValue.low) && $util.isInteger(message.ChangeValue.high)))
                    return "ChangeValue: integer|Long expected";
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                if (!$util.isString(message.Reason))
                    return "Reason: string expected";
            return null;
        };

        MoneyCalculateInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.MoneyCalculateInfo)
                return object;
            var message = new $root.go.MoneyCalculateInfo();
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
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = true;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber(true);
            if (object.ChangeValue != null)
                if ($util.Long)
                    (message.ChangeValue = $util.Long.fromValue(object.ChangeValue)).unsigned = false;
                else if (typeof object.ChangeValue === "string")
                    message.ChangeValue = parseInt(object.ChangeValue, 10);
                else if (typeof object.ChangeValue === "number")
                    message.ChangeValue = object.ChangeValue;
                else if (typeof object.ChangeValue === "object")
                    message.ChangeValue = new $util.LongBits(object.ChangeValue.low >>> 0, object.ChangeValue.high >>> 0).toNumber();
            if (object.Reason != null)
                message.Reason = String(object.Reason);
            return message;
        };

        MoneyCalculateInfo.toObject = function toObject(message, options) {
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
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ChangeValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ChangeValue = options.longs === String ? "0" : 0;
                object.Reason = "";
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
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber(true) : message.Money;
            if (message.ChangeValue != null && message.hasOwnProperty("ChangeValue"))
                if (typeof message.ChangeValue === "number")
                    object.ChangeValue = options.longs === String ? String(message.ChangeValue) : message.ChangeValue;
                else
                    object.ChangeValue = options.longs === String ? $util.Long.prototype.toString.call(message.ChangeValue) : options.longs === Number ? new $util.LongBits(message.ChangeValue.low >>> 0, message.ChangeValue.high >>> 0).toNumber() : message.ChangeValue;
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                object.Reason = message.Reason;
            return object;
        };

        MoneyCalculateInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MoneyCalculateInfo;
    })();

    go.StateReady = (function() {

        function StateReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        StateReady.prototype.Times = null;

        StateReady.create = function create(properties) {
            return new StateReady(properties);
        };

        StateReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        StateReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        StateReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.StateReady();
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

        StateReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StateReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        StateReady.fromObject = function fromObject(object) {
            if (object instanceof $root.go.StateReady)
                return object;
            var message = new $root.go.StateReady();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".go.StateReady.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        StateReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        StateReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateReady;
    })();

    go.StateFree = (function() {

        function StateFree(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        StateFree.prototype.Times = null;

        StateFree.create = function create(properties) {
            return new StateFree(properties);
        };

        StateFree.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        StateFree.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        StateFree.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.StateFree();
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

        StateFree.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StateFree.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        StateFree.fromObject = function fromObject(object) {
            if (object instanceof $root.go.StateFree)
                return object;
            var message = new $root.go.StateFree();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".go.StateFree.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        StateFree.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        StateFree.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateFree;
    })();

    go.StateStart = (function() {

        function StateStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        StateStart.prototype.Times = null;

        StateStart.create = function create(properties) {
            return new StateStart(properties);
        };

        StateStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        StateStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        StateStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.StateStart();
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

        StateStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StateStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        StateStart.fromObject = function fromObject(object) {
            if (object instanceof $root.go.StateStart)
                return object;
            var message = new $root.go.StateStart();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".go.StateStart.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        StateStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        StateStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateStart;
    })();

    go.StatePlaying = (function() {

        function StatePlaying(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        StatePlaying.prototype.Times = null;

        StatePlaying.create = function create(properties) {
            return new StatePlaying(properties);
        };

        StatePlaying.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        StatePlaying.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        StatePlaying.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.StatePlaying();
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

        StatePlaying.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StatePlaying.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        StatePlaying.fromObject = function fromObject(object) {
            if (object instanceof $root.go.StatePlaying)
                return object;
            var message = new $root.go.StatePlaying();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".go.StatePlaying.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        StatePlaying.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        StatePlaying.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StatePlaying;
    })();

    go.StateOver = (function() {

        function StateOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        StateOver.prototype.Times = null;

        StateOver.create = function create(properties) {
            return new StateOver(properties);
        };

        StateOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        StateOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        StateOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.StateOver();
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

        StateOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StateOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        StateOver.fromObject = function fromObject(object) {
            if (object instanceof $root.go.StateOver)
                return object;
            var message = new $root.go.StateOver();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".go.StateOver.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        StateOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        StateOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateOver;
    })();

    go.StateCall = (function() {

        function StateCall(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        StateCall.prototype.Times = null;
        StateCall.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        StateCall.create = function create(properties) {
            return new StateCall(properties);
        };

        StateCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(16).uint64(message.UserID);
            return writer;
        };

        StateCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        StateCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.StateCall();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
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

        StateCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StateCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        StateCall.fromObject = function fromObject(object) {
            if (object instanceof $root.go.StateCall)
                return object;
            var message = new $root.go.StateCall();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".go.StateCall.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
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

        StateCall.toObject = function toObject(message, options) {
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
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            return object;
        };

        StateCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StateCall;
    })();

    go.Host = (function() {

        function Host(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Host.prototype.IsWant = false;

        Host.create = function create(properties) {
            return new Host(properties);
        };

        Host.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        Host.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Host.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.Host();
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

        Host.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Host.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        Host.fromObject = function fromObject(object) {
            if (object instanceof $root.go.Host)
                return object;
            var message = new $root.go.Host();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        Host.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        Host.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Host;
    })();

    go.HostEx = (function() {

        function HostEx(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        HostEx.prototype.IsWant = false;

        HostEx.create = function create(properties) {
            return new HostEx(properties);
        };

        HostEx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        HostEx.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        HostEx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.HostEx();
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

        HostEx.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        HostEx.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        HostEx.fromObject = function fromObject(object) {
            if (object instanceof $root.go.HostEx)
                return object;
            var message = new $root.go.HostEx();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        HostEx.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        HostEx.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HostEx;
    })();

    go.Call = (function() {

        function Call(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Call.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Call.prototype.Score = 0;

        Call.create = function create(properties) {
            return new Call(properties);
        };

        Call.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(16).uint32(message.Score);
            return writer;
        };

        Call.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Call.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.Call();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Score = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Call.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Call.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score))
                    return "Score: integer expected";
            return null;
        };

        Call.fromObject = function fromObject(object) {
            if (object instanceof $root.go.Call)
                return object;
            var message = new $root.go.Call();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Score != null)
                message.Score = object.Score >>> 0;
            return message;
        };

        Call.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Score = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score = message.Score;
            return object;
        };

        Call.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Call;
    })();

    go.BeOut = (function() {

        function BeOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BeOut.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BeOut.prototype.Code = 0;
        BeOut.prototype.Hints = $util.newBuffer([]);

        BeOut.create = function create(properties) {
            return new BeOut(properties);
        };

        BeOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(16).uint32(message.Code);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
                writer.uint32(26).bytes(message.Hints);
            return writer;
        };

        BeOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BeOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.BeOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Code = reader.uint32();
                    break;
                case 3:
                    message.Hints = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BeOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BeOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!(message.Hints && typeof message.Hints.length === "number" || $util.isString(message.Hints)))
                    return "Hints: buffer expected";
            return null;
        };

        BeOut.fromObject = function fromObject(object) {
            if (object instanceof $root.go.BeOut)
                return object;
            var message = new $root.go.BeOut();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Hints != null)
                if (typeof object.Hints === "string")
                    $util.base64.decode(object.Hints, message.Hints = $util.newBuffer($util.base64.length(object.Hints)), 0);
                else if (object.Hints.length)
                    message.Hints = object.Hints;
            return message;
        };

        BeOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Code = 0;
                if (options.bytes === String)
                    object.Hints = "";
                else {
                    object.Hints = [];
                    if (options.bytes !== Array)
                        object.Hints = $util.newBuffer(object.Hints);
                }
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = options.bytes === String ? $util.base64.encode(message.Hints, 0, message.Hints.length) : options.bytes === Array ? Array.prototype.slice.call(message.Hints) : message.Hints;
            return object;
        };

        BeOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeOut;
    })();

    go.Bet = (function() {

        function Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Bet.prototype.AreaId = 0;
        Bet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        Bet.create = function create(properties) {
            return new Bet(properties);
        };

        Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AreaId != null && Object.hasOwnProperty.call(message, "AreaId"))
                writer.uint32(8).int32(message.AreaId);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(16).int64(message.Money);
            return writer;
        };

        Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.Bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AreaId = reader.int32();
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

        Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Bet.verify = function verify(message) {
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

        Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.go.Bet)
                return object;
            var message = new $root.go.Bet();
            if (object.AreaId != null)
                message.AreaId = object.AreaId | 0;
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

        Bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AreaId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
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
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bet;
    })();

    go.BetResult = (function() {

        function BetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BetResult.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BetResult.prototype.AreaId = 0;
        BetResult.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        BetResult.create = function create(properties) {
            return new BetResult(properties);
        };

        BetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.AreaId != null && Object.hasOwnProperty.call(message, "AreaId"))
                writer.uint32(16).int32(message.AreaId);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(24).int64(message.Money);
            return writer;
        };

        BetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.BetResult();
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
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BetResult.verify = function verify(message) {
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

        BetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.go.BetResult)
                return object;
            var message = new $root.go.BetResult();
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
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            return message;
        };

        BetResult.toObject = function toObject(message, options) {
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
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                object.AreaId = message.AreaId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        BetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResult;
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
        PlayerRecord.prototype.Bankroll = 0;
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
                writer.uint32(32).int32(message.Bankroll);
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
                    message.Bankroll = reader.int32();
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
                if (!$util.isInteger(message.Bankroll))
                    return "Bankroll: integer expected";
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
                message.Bankroll = object.Bankroll | 0;
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
                object.Bankroll = 0;
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
                object.Bankroll = message.Bankroll;
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

        GameRecord.prototype.Pork = $util.newBuffer([]);
        GameRecord.prototype.Type = 0;
        GameRecord.prototype.isWon = false;

        GameRecord.create = function create(properties) {
            return new GameRecord(properties);
        };

        GameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Pork != null && Object.hasOwnProperty.call(message, "Pork"))
                writer.uint32(10).bytes(message.Pork);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(16).int32(message.Type);
            if (message.isWon != null && Object.hasOwnProperty.call(message, "isWon"))
                writer.uint32(24).bool(message.isWon);
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
                    message.Pork = reader.bytes();
                    break;
                case 2:
                    message.Type = reader.int32();
                    break;
                case 3:
                    message.isWon = reader.bool();
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
            if (message.Pork != null && message.hasOwnProperty("Pork"))
                if (!(message.Pork && typeof message.Pork.length === "number" || $util.isString(message.Pork)))
                    return "Pork: buffer expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.isWon != null && message.hasOwnProperty("isWon"))
                if (typeof message.isWon !== "boolean")
                    return "isWon: boolean expected";
            return null;
        };

        GameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GameRecord)
                return object;
            var message = new $root.go.GameRecord();
            if (object.Pork != null)
                if (typeof object.Pork === "string")
                    $util.base64.decode(object.Pork, message.Pork = $util.newBuffer($util.base64.length(object.Pork)), 0);
                else if (object.Pork.length)
                    message.Pork = object.Pork;
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.isWon != null)
                message.isWon = Boolean(object.isWon);
            return message;
        };

        GameRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.Pork = "";
                else {
                    object.Pork = [];
                    if (options.bytes !== Array)
                        object.Pork = $util.newBuffer(object.Pork);
                }
                object.Type = 0;
                object.isWon = false;
            }
            if (message.Pork != null && message.hasOwnProperty("Pork"))
                object.Pork = options.bytes === String ? $util.base64.encode(message.Pork, 0, message.Pork.length) : options.bytes === Array ? Array.prototype.slice.call(message.Pork) : message.Pork;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.isWon != null && message.hasOwnProperty("isWon"))
                object.isWon = message.isWon;
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

    return go;
})();

module.exports = $root;
