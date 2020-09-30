/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.zhajinhua = (function() {

    var zhajinhua = {};

    zhajinhua.ZhajinhuaPlayer = (function() {

        function ZhajinhuaPlayer(properties) {
            this.Compares = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaPlayer.prototype.MyInfo = null;
        ZhajinhuaPlayer.prototype.IsSee = false;
        ZhajinhuaPlayer.prototype.RecentScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaPlayer.prototype.TotalScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaPlayer.prototype.Cards = null;
        ZhajinhuaPlayer.prototype.Compares = $util.emptyArray;
        ZhajinhuaPlayer.prototype.WinScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ZhajinhuaPlayer.create = function create(properties) {
            return new ZhajinhuaPlayer(properties);
        };

        ZhajinhuaPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MyInfo != null && Object.hasOwnProperty.call(message, "MyInfo"))
                $root.go.PlayerInfo.encode(message.MyInfo, writer.uint32(10).fork()).ldelim();
            if (message.IsSee != null && Object.hasOwnProperty.call(message, "IsSee"))
                writer.uint32(16).bool(message.IsSee);
            if (message.RecentScore != null && Object.hasOwnProperty.call(message, "RecentScore"))
                writer.uint32(24).int64(message.RecentScore);
            if (message.TotalScore != null && Object.hasOwnProperty.call(message, "TotalScore"))
                writer.uint32(32).int64(message.TotalScore);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.go.CardInfo.encode(message.Cards, writer.uint32(42).fork()).ldelim();
            if (message.Compares != null && message.Compares.length) {
                writer.uint32(50).fork();
                for (var i = 0; i < message.Compares.length; ++i)
                    writer.uint64(message.Compares[i]);
                writer.ldelim();
            }
            if (message.WinScore != null && Object.hasOwnProperty.call(message, "WinScore"))
                writer.uint32(56).int64(message.WinScore);
            return writer;
        };

        ZhajinhuaPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MyInfo = $root.go.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.IsSee = reader.bool();
                    break;
                case 3:
                    message.RecentScore = reader.int64();
                    break;
                case 4:
                    message.TotalScore = reader.int64();
                    break;
                case 5:
                    message.Cards = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    if (!(message.Compares && message.Compares.length))
                        message.Compares = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Compares.push(reader.uint64());
                    } else
                        message.Compares.push(reader.uint64());
                    break;
                case 7:
                    message.WinScore = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MyInfo != null && message.hasOwnProperty("MyInfo")) {
                var error = $root.go.PlayerInfo.verify(message.MyInfo);
                if (error)
                    return "MyInfo." + error;
            }
            if (message.IsSee != null && message.hasOwnProperty("IsSee"))
                if (typeof message.IsSee !== "boolean")
                    return "IsSee: boolean expected";
            if (message.RecentScore != null && message.hasOwnProperty("RecentScore"))
                if (!$util.isInteger(message.RecentScore) && !(message.RecentScore && $util.isInteger(message.RecentScore.low) && $util.isInteger(message.RecentScore.high)))
                    return "RecentScore: integer|Long expected";
            if (message.TotalScore != null && message.hasOwnProperty("TotalScore"))
                if (!$util.isInteger(message.TotalScore) && !(message.TotalScore && $util.isInteger(message.TotalScore.low) && $util.isInteger(message.TotalScore.high)))
                    return "TotalScore: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.go.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            if (message.Compares != null && message.hasOwnProperty("Compares")) {
                if (!Array.isArray(message.Compares))
                    return "Compares: array expected";
                for (var i = 0; i < message.Compares.length; ++i)
                    if (!$util.isInteger(message.Compares[i]) && !(message.Compares[i] && $util.isInteger(message.Compares[i].low) && $util.isInteger(message.Compares[i].high)))
                        return "Compares: integer|Long[] expected";
            }
            if (message.WinScore != null && message.hasOwnProperty("WinScore"))
                if (!$util.isInteger(message.WinScore) && !(message.WinScore && $util.isInteger(message.WinScore.low) && $util.isInteger(message.WinScore.high)))
                    return "WinScore: integer|Long expected";
            return null;
        };

        ZhajinhuaPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaPlayer)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaPlayer();
            if (object.MyInfo != null) {
                if (typeof object.MyInfo !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaPlayer.MyInfo: object expected");
                message.MyInfo = $root.go.PlayerInfo.fromObject(object.MyInfo);
            }
            if (object.IsSee != null)
                message.IsSee = Boolean(object.IsSee);
            if (object.RecentScore != null)
                if ($util.Long)
                    (message.RecentScore = $util.Long.fromValue(object.RecentScore)).unsigned = false;
                else if (typeof object.RecentScore === "string")
                    message.RecentScore = parseInt(object.RecentScore, 10);
                else if (typeof object.RecentScore === "number")
                    message.RecentScore = object.RecentScore;
                else if (typeof object.RecentScore === "object")
                    message.RecentScore = new $util.LongBits(object.RecentScore.low >>> 0, object.RecentScore.high >>> 0).toNumber();
            if (object.TotalScore != null)
                if ($util.Long)
                    (message.TotalScore = $util.Long.fromValue(object.TotalScore)).unsigned = false;
                else if (typeof object.TotalScore === "string")
                    message.TotalScore = parseInt(object.TotalScore, 10);
                else if (typeof object.TotalScore === "number")
                    message.TotalScore = object.TotalScore;
                else if (typeof object.TotalScore === "object")
                    message.TotalScore = new $util.LongBits(object.TotalScore.low >>> 0, object.TotalScore.high >>> 0).toNumber();
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaPlayer.Cards: object expected");
                message.Cards = $root.go.CardInfo.fromObject(object.Cards);
            }
            if (object.Compares) {
                if (!Array.isArray(object.Compares))
                    throw TypeError(".zhajinhua.ZhajinhuaPlayer.Compares: array expected");
                message.Compares = [];
                for (var i = 0; i < object.Compares.length; ++i)
                    if ($util.Long)
                        (message.Compares[i] = $util.Long.fromValue(object.Compares[i])).unsigned = true;
                    else if (typeof object.Compares[i] === "string")
                        message.Compares[i] = parseInt(object.Compares[i], 10);
                    else if (typeof object.Compares[i] === "number")
                        message.Compares[i] = object.Compares[i];
                    else if (typeof object.Compares[i] === "object")
                        message.Compares[i] = new $util.LongBits(object.Compares[i].low >>> 0, object.Compares[i].high >>> 0).toNumber(true);
            }
            if (object.WinScore != null)
                if ($util.Long)
                    (message.WinScore = $util.Long.fromValue(object.WinScore)).unsigned = false;
                else if (typeof object.WinScore === "string")
                    message.WinScore = parseInt(object.WinScore, 10);
                else if (typeof object.WinScore === "number")
                    message.WinScore = object.WinScore;
                else if (typeof object.WinScore === "object")
                    message.WinScore = new $util.LongBits(object.WinScore.low >>> 0, object.WinScore.high >>> 0).toNumber();
            return message;
        };

        ZhajinhuaPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Compares = [];
            if (options.defaults) {
                object.MyInfo = null;
                object.IsSee = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RecentScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RecentScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalScore = options.longs === String ? "0" : 0;
                object.Cards = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinScore = options.longs === String ? "0" : 0;
            }
            if (message.MyInfo != null && message.hasOwnProperty("MyInfo"))
                object.MyInfo = $root.go.PlayerInfo.toObject(message.MyInfo, options);
            if (message.IsSee != null && message.hasOwnProperty("IsSee"))
                object.IsSee = message.IsSee;
            if (message.RecentScore != null && message.hasOwnProperty("RecentScore"))
                if (typeof message.RecentScore === "number")
                    object.RecentScore = options.longs === String ? String(message.RecentScore) : message.RecentScore;
                else
                    object.RecentScore = options.longs === String ? $util.Long.prototype.toString.call(message.RecentScore) : options.longs === Number ? new $util.LongBits(message.RecentScore.low >>> 0, message.RecentScore.high >>> 0).toNumber() : message.RecentScore;
            if (message.TotalScore != null && message.hasOwnProperty("TotalScore"))
                if (typeof message.TotalScore === "number")
                    object.TotalScore = options.longs === String ? String(message.TotalScore) : message.TotalScore;
                else
                    object.TotalScore = options.longs === String ? $util.Long.prototype.toString.call(message.TotalScore) : options.longs === Number ? new $util.LongBits(message.TotalScore.low >>> 0, message.TotalScore.high >>> 0).toNumber() : message.TotalScore;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.go.CardInfo.toObject(message.Cards, options);
            if (message.Compares && message.Compares.length) {
                object.Compares = [];
                for (var j = 0; j < message.Compares.length; ++j)
                    if (typeof message.Compares[j] === "number")
                        object.Compares[j] = options.longs === String ? String(message.Compares[j]) : message.Compares[j];
                    else
                        object.Compares[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Compares[j]) : options.longs === Number ? new $util.LongBits(message.Compares[j].low >>> 0, message.Compares[j].high >>> 0).toNumber(true) : message.Compares[j];
            }
            if (message.WinScore != null && message.hasOwnProperty("WinScore"))
                if (typeof message.WinScore === "number")
                    object.WinScore = options.longs === String ? String(message.WinScore) : message.WinScore;
                else
                    object.WinScore = options.longs === String ? $util.Long.prototype.toString.call(message.WinScore) : options.longs === Number ? new $util.LongBits(message.WinScore.low >>> 0, message.WinScore.high >>> 0).toNumber() : message.WinScore;
            return object;
        };

        ZhajinhuaPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaPlayer;
    })();

    zhajinhua.EnterGameZjhResp = (function() {

        function EnterGameZjhResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterGameZjhResp.prototype.Player = null;
        EnterGameZjhResp.prototype.GameID = 0;

        EnterGameZjhResp.create = function create(properties) {
            return new EnterGameZjhResp(properties);
        };

        EnterGameZjhResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Player != null && Object.hasOwnProperty.call(message, "Player"))
                $root.zhajinhua.ZhajinhuaPlayer.encode(message.Player, writer.uint32(10).fork()).ldelim();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(16).uint32(message.GameID);
            return writer;
        };

        EnterGameZjhResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EnterGameZjhResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.EnterGameZjhResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Player = $root.zhajinhua.ZhajinhuaPlayer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.GameID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        EnterGameZjhResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EnterGameZjhResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Player != null && message.hasOwnProperty("Player")) {
                var error = $root.zhajinhua.ZhajinhuaPlayer.verify(message.Player);
                if (error)
                    return "Player." + error;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            return null;
        };

        EnterGameZjhResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.EnterGameZjhResp)
                return object;
            var message = new $root.zhajinhua.EnterGameZjhResp();
            if (object.Player != null) {
                if (typeof object.Player !== "object")
                    throw TypeError(".zhajinhua.EnterGameZjhResp.Player: object expected");
                message.Player = $root.zhajinhua.ZhajinhuaPlayer.fromObject(object.Player);
            }
            if (object.GameID != null)
                message.GameID = object.GameID >>> 0;
            return message;
        };

        EnterGameZjhResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Player = null;
                object.GameID = 0;
            }
            if (message.Player != null && message.hasOwnProperty("Player"))
                object.Player = $root.zhajinhua.ZhajinhuaPlayer.toObject(message.Player, options);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            return object;
        };

        EnterGameZjhResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGameZjhResp;
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
        ZhajinhuaSceneResp.prototype.TotalScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaSceneResp.prototype.MinScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaSceneResp.prototype.Banker = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaSceneResp.prototype.Fighters = $util.emptyArray;
        ZhajinhuaSceneResp.prototype.Inning = "";
        ZhajinhuaSceneResp.prototype.NoReadyTime = 0;
        ZhajinhuaSceneResp.prototype.LimitScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ZhajinhuaSceneResp.prototype.TurnCount = 0;

        ZhajinhuaSceneResp.create = function create(properties) {
            return new ZhajinhuaSceneResp(properties);
        };

        ZhajinhuaSceneResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.TotalScore != null && Object.hasOwnProperty.call(message, "TotalScore"))
                writer.uint32(16).int64(message.TotalScore);
            if (message.MinScore != null && Object.hasOwnProperty.call(message, "MinScore"))
                writer.uint32(24).int64(message.MinScore);
            if (message.Banker != null && Object.hasOwnProperty.call(message, "Banker"))
                writer.uint32(32).uint64(message.Banker);
            if (message.Fighters != null && message.Fighters.length)
                for (var i = 0; i < message.Fighters.length; ++i)
                    $root.zhajinhua.ZhajinhuaPlayer.encode(message.Fighters[i], writer.uint32(42).fork()).ldelim();
            if (message.Inning != null && Object.hasOwnProperty.call(message, "Inning"))
                writer.uint32(50).string(message.Inning);
            if (message.NoReadyTime != null && Object.hasOwnProperty.call(message, "NoReadyTime"))
                writer.uint32(56).int32(message.NoReadyTime);
            if (message.LimitScore != null && Object.hasOwnProperty.call(message, "LimitScore"))
                writer.uint32(64).int64(message.LimitScore);
            if (message.TurnCount != null && Object.hasOwnProperty.call(message, "TurnCount"))
                writer.uint32(72).int32(message.TurnCount);
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
                case 2:
                    message.TotalScore = reader.int64();
                    break;
                case 3:
                    message.MinScore = reader.int64();
                    break;
                case 4:
                    message.Banker = reader.uint64();
                    break;
                case 5:
                    if (!(message.Fighters && message.Fighters.length))
                        message.Fighters = [];
                    message.Fighters.push($root.zhajinhua.ZhajinhuaPlayer.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Inning = reader.string();
                    break;
                case 7:
                    message.NoReadyTime = reader.int32();
                    break;
                case 8:
                    message.LimitScore = reader.int64();
                    break;
                case 9:
                    message.TurnCount = reader.int32();
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
            if (message.TotalScore != null && message.hasOwnProperty("TotalScore"))
                if (!$util.isInteger(message.TotalScore) && !(message.TotalScore && $util.isInteger(message.TotalScore.low) && $util.isInteger(message.TotalScore.high)))
                    return "TotalScore: integer|Long expected";
            if (message.MinScore != null && message.hasOwnProperty("MinScore"))
                if (!$util.isInteger(message.MinScore) && !(message.MinScore && $util.isInteger(message.MinScore.low) && $util.isInteger(message.MinScore.high)))
                    return "MinScore: integer|Long expected";
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                if (!$util.isInteger(message.Banker) && !(message.Banker && $util.isInteger(message.Banker.low) && $util.isInteger(message.Banker.high)))
                    return "Banker: integer|Long expected";
            if (message.Fighters != null && message.hasOwnProperty("Fighters")) {
                if (!Array.isArray(message.Fighters))
                    return "Fighters: array expected";
                for (var i = 0; i < message.Fighters.length; ++i) {
                    var error = $root.zhajinhua.ZhajinhuaPlayer.verify(message.Fighters[i]);
                    if (error)
                        return "Fighters." + error;
                }
            }
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                if (!$util.isString(message.Inning))
                    return "Inning: string expected";
            if (message.NoReadyTime != null && message.hasOwnProperty("NoReadyTime"))
                if (!$util.isInteger(message.NoReadyTime))
                    return "NoReadyTime: integer expected";
            if (message.LimitScore != null && message.hasOwnProperty("LimitScore"))
                if (!$util.isInteger(message.LimitScore) && !(message.LimitScore && $util.isInteger(message.LimitScore.low) && $util.isInteger(message.LimitScore.high)))
                    return "LimitScore: integer|Long expected";
            if (message.TurnCount != null && message.hasOwnProperty("TurnCount"))
                if (!$util.isInteger(message.TurnCount))
                    return "TurnCount: integer expected";
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
            if (object.TotalScore != null)
                if ($util.Long)
                    (message.TotalScore = $util.Long.fromValue(object.TotalScore)).unsigned = false;
                else if (typeof object.TotalScore === "string")
                    message.TotalScore = parseInt(object.TotalScore, 10);
                else if (typeof object.TotalScore === "number")
                    message.TotalScore = object.TotalScore;
                else if (typeof object.TotalScore === "object")
                    message.TotalScore = new $util.LongBits(object.TotalScore.low >>> 0, object.TotalScore.high >>> 0).toNumber();
            if (object.MinScore != null)
                if ($util.Long)
                    (message.MinScore = $util.Long.fromValue(object.MinScore)).unsigned = false;
                else if (typeof object.MinScore === "string")
                    message.MinScore = parseInt(object.MinScore, 10);
                else if (typeof object.MinScore === "number")
                    message.MinScore = object.MinScore;
                else if (typeof object.MinScore === "object")
                    message.MinScore = new $util.LongBits(object.MinScore.low >>> 0, object.MinScore.high >>> 0).toNumber();
            if (object.Banker != null)
                if ($util.Long)
                    (message.Banker = $util.Long.fromValue(object.Banker)).unsigned = true;
                else if (typeof object.Banker === "string")
                    message.Banker = parseInt(object.Banker, 10);
                else if (typeof object.Banker === "number")
                    message.Banker = object.Banker;
                else if (typeof object.Banker === "object")
                    message.Banker = new $util.LongBits(object.Banker.low >>> 0, object.Banker.high >>> 0).toNumber(true);
            if (object.Fighters) {
                if (!Array.isArray(object.Fighters))
                    throw TypeError(".zhajinhua.ZhajinhuaSceneResp.Fighters: array expected");
                message.Fighters = [];
                for (var i = 0; i < object.Fighters.length; ++i) {
                    if (typeof object.Fighters[i] !== "object")
                        throw TypeError(".zhajinhua.ZhajinhuaSceneResp.Fighters: object expected");
                    message.Fighters[i] = $root.zhajinhua.ZhajinhuaPlayer.fromObject(object.Fighters[i]);
                }
            }
            if (object.Inning != null)
                message.Inning = String(object.Inning);
            if (object.NoReadyTime != null)
                message.NoReadyTime = object.NoReadyTime | 0;
            if (object.LimitScore != null)
                if ($util.Long)
                    (message.LimitScore = $util.Long.fromValue(object.LimitScore)).unsigned = false;
                else if (typeof object.LimitScore === "string")
                    message.LimitScore = parseInt(object.LimitScore, 10);
                else if (typeof object.LimitScore === "number")
                    message.LimitScore = object.LimitScore;
                else if (typeof object.LimitScore === "object")
                    message.LimitScore = new $util.LongBits(object.LimitScore.low >>> 0, object.LimitScore.high >>> 0).toNumber();
            if (object.TurnCount != null)
                message.TurnCount = object.TurnCount | 0;
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
                    object.TotalScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MinScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MinScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Banker = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Banker = options.longs === String ? "0" : 0;
                object.Inning = "";
                object.NoReadyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.LimitScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.LimitScore = options.longs === String ? "0" : 0;
                object.TurnCount = 0;
            }
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.TotalScore != null && message.hasOwnProperty("TotalScore"))
                if (typeof message.TotalScore === "number")
                    object.TotalScore = options.longs === String ? String(message.TotalScore) : message.TotalScore;
                else
                    object.TotalScore = options.longs === String ? $util.Long.prototype.toString.call(message.TotalScore) : options.longs === Number ? new $util.LongBits(message.TotalScore.low >>> 0, message.TotalScore.high >>> 0).toNumber() : message.TotalScore;
            if (message.MinScore != null && message.hasOwnProperty("MinScore"))
                if (typeof message.MinScore === "number")
                    object.MinScore = options.longs === String ? String(message.MinScore) : message.MinScore;
                else
                    object.MinScore = options.longs === String ? $util.Long.prototype.toString.call(message.MinScore) : options.longs === Number ? new $util.LongBits(message.MinScore.low >>> 0, message.MinScore.high >>> 0).toNumber() : message.MinScore;
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                if (typeof message.Banker === "number")
                    object.Banker = options.longs === String ? String(message.Banker) : message.Banker;
                else
                    object.Banker = options.longs === String ? $util.Long.prototype.toString.call(message.Banker) : options.longs === Number ? new $util.LongBits(message.Banker.low >>> 0, message.Banker.high >>> 0).toNumber(true) : message.Banker;
            if (message.Fighters && message.Fighters.length) {
                object.Fighters = [];
                for (var j = 0; j < message.Fighters.length; ++j)
                    object.Fighters[j] = $root.zhajinhua.ZhajinhuaPlayer.toObject(message.Fighters[j], options);
            }
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                object.Inning = message.Inning;
            if (message.NoReadyTime != null && message.hasOwnProperty("NoReadyTime"))
                object.NoReadyTime = message.NoReadyTime;
            if (message.LimitScore != null && message.hasOwnProperty("LimitScore"))
                if (typeof message.LimitScore === "number")
                    object.LimitScore = options.longs === String ? String(message.LimitScore) : message.LimitScore;
                else
                    object.LimitScore = options.longs === String ? $util.Long.prototype.toString.call(message.LimitScore) : options.longs === Number ? new $util.LongBits(message.LimitScore.low >>> 0, message.LimitScore.high >>> 0).toNumber() : message.LimitScore;
            if (message.TurnCount != null && message.hasOwnProperty("TurnCount"))
                object.TurnCount = message.TurnCount;
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
        ZhajinhuaStateFreeResp.prototype.Inning = "";

        ZhajinhuaStateFreeResp.create = function create(properties) {
            return new ZhajinhuaStateFreeResp(properties);
        };

        ZhajinhuaStateFreeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.Inning != null && Object.hasOwnProperty.call(message, "Inning"))
                writer.uint32(18).string(message.Inning);
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

        ZhajinhuaStateFreeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateFreeResp.verify = function verify(message) {
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

        ZhajinhuaStateFreeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateFreeResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateFreeResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateFreeResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.Inning != null)
                message.Inning = String(object.Inning);
            return message;
        };

        ZhajinhuaStateFreeResp.toObject = function toObject(message, options) {
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
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
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
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
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
                var error = $root.go.TimeInfo.verify(message.Times);
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
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
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
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
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
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
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

        ZhajinhuaStatePlayingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStatePlayingResp.verify = function verify(message) {
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

        ZhajinhuaStatePlayingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStatePlayingResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStatePlayingResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStatePlayingResp.Times: object expected");
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
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
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

    zhajinhua.ZhajinhuaStateCompareResp = (function() {

        function ZhajinhuaStateCompareResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateCompareResp.prototype.Times = null;
        ZhajinhuaStateCompareResp.prototype.Info = null;

        ZhajinhuaStateCompareResp.create = function create(properties) {
            return new ZhajinhuaStateCompareResp(properties);
        };

        ZhajinhuaStateCompareResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.zhajinhua.ZhajinhuaCompareResp.encode(message.Info, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ZhajinhuaStateCompareResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaStateCompareResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaStateCompareResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Info = $root.zhajinhua.ZhajinhuaCompareResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaStateCompareResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaStateCompareResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.zhajinhua.ZhajinhuaCompareResp.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        ZhajinhuaStateCompareResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateCompareResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateCompareResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateCompareResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateCompareResp.Info: object expected");
                message.Info = $root.zhajinhua.ZhajinhuaCompareResp.fromObject(object.Info);
            }
            return message;
        };

        ZhajinhuaStateCompareResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.Info = null;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.zhajinhua.ZhajinhuaCompareResp.toObject(message.Info, options);
            return object;
        };

        ZhajinhuaStateCompareResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateCompareResp;
    })();

    zhajinhua.ZhajinhuaStateOverResp = (function() {

        function ZhajinhuaStateOverResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaStateOverResp.prototype.Times = null;
        ZhajinhuaStateOverResp.prototype.WinnerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaStateOverResp.create = function create(properties) {
            return new ZhajinhuaStateOverResp(properties);
        };

        ZhajinhuaStateOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.WinnerId != null && Object.hasOwnProperty.call(message, "WinnerId"))
                writer.uint32(16).uint64(message.WinnerId);
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
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.WinnerId = reader.uint64();
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
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (!$util.isInteger(message.WinnerId) && !(message.WinnerId && $util.isInteger(message.WinnerId.low) && $util.isInteger(message.WinnerId.high)))
                    return "WinnerId: integer|Long expected";
            return null;
        };

        ZhajinhuaStateOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaStateOverResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaStateOverResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaStateOverResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
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

        ZhajinhuaStateOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.WinnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinnerId = options.longs === String ? "0" : 0;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (typeof message.WinnerId === "number")
                    object.WinnerId = options.longs === String ? String(message.WinnerId) : message.WinnerId;
                else
                    object.WinnerId = options.longs === String ? $util.Long.prototype.toString.call(message.WinnerId) : options.longs === Number ? new $util.LongBits(message.WinnerId.low >>> 0, message.WinnerId.high >>> 0).toNumber(true) : message.WinnerId;
            return object;
        };

        ZhajinhuaStateOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaStateOverResp;
    })();

    zhajinhua.ZhajinhuaTurnResp = (function() {

        function ZhajinhuaTurnResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaTurnResp.prototype.TurnCount = 0;

        ZhajinhuaTurnResp.create = function create(properties) {
            return new ZhajinhuaTurnResp(properties);
        };

        ZhajinhuaTurnResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TurnCount != null && Object.hasOwnProperty.call(message, "TurnCount"))
                writer.uint32(8).int32(message.TurnCount);
            return writer;
        };

        ZhajinhuaTurnResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaTurnResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaTurnResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TurnCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ZhajinhuaTurnResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaTurnResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TurnCount != null && message.hasOwnProperty("TurnCount"))
                if (!$util.isInteger(message.TurnCount))
                    return "TurnCount: integer expected";
            return null;
        };

        ZhajinhuaTurnResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaTurnResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaTurnResp();
            if (object.TurnCount != null)
                message.TurnCount = object.TurnCount | 0;
            return message;
        };

        ZhajinhuaTurnResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.TurnCount = 0;
            if (message.TurnCount != null && message.hasOwnProperty("TurnCount"))
                object.TurnCount = message.TurnCount;
            return object;
        };

        ZhajinhuaTurnResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaTurnResp;
    })();

    zhajinhua.ZhajinhuaDealResp = (function() {

        function ZhajinhuaDealResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaDealResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ZhajinhuaDealResp.prototype.Cards = null;

        ZhajinhuaDealResp.create = function create(properties) {
            return new ZhajinhuaDealResp(properties);
        };

        ZhajinhuaDealResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.go.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ZhajinhuaDealResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ZhajinhuaDealResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ZhajinhuaDealResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
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

        ZhajinhuaDealResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ZhajinhuaDealResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.go.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        ZhajinhuaDealResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaDealResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaDealResp();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".zhajinhua.ZhajinhuaDealResp.Cards: object expected");
                message.Cards = $root.go.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        ZhajinhuaDealResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Cards = null;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.go.CardInfo.toObject(message.Cards, options);
            return object;
        };

        ZhajinhuaDealResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhajinhuaDealResp;
    })();

    zhajinhua.ZhajinhuaHostResp = (function() {

        function ZhajinhuaHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ZhajinhuaHostResp.prototype.BankerID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ZhajinhuaHostResp.create = function create(properties) {
            return new ZhajinhuaHostResp(properties);
        };

        ZhajinhuaHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BankerID != null && Object.hasOwnProperty.call(message, "BankerID"))
                writer.uint32(8).uint64(message.BankerID);
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
                    message.BankerID = reader.uint64();
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
            if (message.BankerID != null && message.hasOwnProperty("BankerID"))
                if (!$util.isInteger(message.BankerID) && !(message.BankerID && $util.isInteger(message.BankerID.low) && $util.isInteger(message.BankerID.high)))
                    return "BankerID: integer|Long expected";
            return null;
        };

        ZhajinhuaHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaHostResp)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaHostResp();
            if (object.BankerID != null)
                if ($util.Long)
                    (message.BankerID = $util.Long.fromValue(object.BankerID)).unsigned = true;
                else if (typeof object.BankerID === "string")
                    message.BankerID = parseInt(object.BankerID, 10);
                else if (typeof object.BankerID === "number")
                    message.BankerID = object.BankerID;
                else if (typeof object.BankerID === "object")
                    message.BankerID = new $util.LongBits(object.BankerID.low >>> 0, object.BankerID.high >>> 0).toNumber(true);
            return message;
        };

        ZhajinhuaHostResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.BankerID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BankerID = options.longs === String ? "0" : 0;
            if (message.BankerID != null && message.hasOwnProperty("BankerID"))
                if (typeof message.BankerID === "number")
                    object.BankerID = options.longs === String ? String(message.BankerID) : message.BankerID;
                else
                    object.BankerID = options.longs === String ? $util.Long.prototype.toString.call(message.BankerID) : options.longs === Number ? new $util.LongBits(message.BankerID.low >>> 0, message.BankerID.high >>> 0).toNumber(true) : message.BankerID;
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
        ZhajinhuaFollowResp.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ZhajinhuaFollowResp.create = function create(properties) {
            return new ZhajinhuaFollowResp(properties);
        };

        ZhajinhuaFollowResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(16).int64(message.Score);
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
                    message.Score = reader.int64();
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
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                    return "Score: integer|Long expected";
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
            if (object.Score != null)
                if ($util.Long)
                    (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
                else if (typeof object.Score === "string")
                    message.Score = parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score = object.Score;
                else if (typeof object.Score === "object")
                    message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
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
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
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

        ZhajinhuaRaiseReq.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ZhajinhuaRaiseReq.create = function create(properties) {
            return new ZhajinhuaRaiseReq(properties);
        };

        ZhajinhuaRaiseReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(8).int64(message.Score);
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
                    message.Score = reader.int64();
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
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                    return "Score: integer|Long expected";
            return null;
        };

        ZhajinhuaRaiseReq.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ZhajinhuaRaiseReq)
                return object;
            var message = new $root.zhajinhua.ZhajinhuaRaiseReq();
            if (object.Score != null)
                if ($util.Long)
                    (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
                else if (typeof object.Score === "string")
                    message.Score = parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score = object.Score;
                else if (typeof object.Score === "object")
                    message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
            return message;
        };

        ZhajinhuaRaiseReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
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
        ZhajinhuaRaiseResp.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ZhajinhuaRaiseResp.create = function create(properties) {
            return new ZhajinhuaRaiseResp(properties);
        };

        ZhajinhuaRaiseResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(16).int64(message.Score);
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
                    message.Score = reader.int64();
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
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                    return "Score: integer|Long expected";
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
            if (object.Score != null)
                if ($util.Long)
                    (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
                else if (typeof object.Score === "string")
                    message.Score = parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score = object.Score;
                else if (typeof object.Score === "object")
                    message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
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
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
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
                    $root.zhajinhua.ZhajinhuaPlayer.encode(message.Infos[i], writer.uint32(18).fork()).ldelim();
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
                    message.Infos.push($root.zhajinhua.ZhajinhuaPlayer.decode(reader, reader.uint32()));
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
                    var error = $root.zhajinhua.ZhajinhuaPlayer.verify(message.Infos[i]);
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
                    message.Infos[i] = $root.zhajinhua.ZhajinhuaPlayer.fromObject(object.Infos[i]);
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
                    object.Infos[j] = $root.zhajinhua.ZhajinhuaPlayer.toObject(message.Infos[j], options);
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

$root.go = (function() {

    var go = {};

    go.PlayerState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PlayerLookOn"] = 0;
        values[valuesById[1] = "PlayerSitDown"] = 1;
        values[valuesById[2] = "PlayerAgree"] = 2;
        values[valuesById[3] = "PlayerCall"] = 3;
        values[valuesById[4] = "PlayerPlaying"] = 4;
        values[valuesById[5] = "PlayerPickUp"] = 5;
        values[valuesById[6] = "PlayerStandUp"] = 6;
        values[valuesById[7] = "PlayerGiveUp"] = 7;
        values[valuesById[8] = "PlayerCompareLose"] = 8;
        values[valuesById[9] = "PlayerFollow"] = 9;
        values[valuesById[10] = "PlayerRaise"] = 10;
        return values;
    })();

    go.GameModel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "General"] = 0;
        values[valuesById[1] = "Fight"] = 1;
        values[valuesById[2] = "Multiplayer"] = 2;
        values[valuesById[3] = "RoomCard"] = 3;
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
            case "PlayerCall":
            case 3:
                message.Sate = 3;
                break;
            case "PlayerPlaying":
            case 4:
                message.Sate = 4;
                break;
            case "PlayerPickUp":
            case 5:
                message.Sate = 5;
                break;
            case "PlayerStandUp":
            case 6:
                message.Sate = 6;
                break;
            case "PlayerGiveUp":
            case 7:
                message.Sate = 7;
                break;
            case "PlayerCompareLose":
            case 8:
                message.Sate = 8;
                break;
            case "PlayerFollow":
            case 9:
                message.Sate = 9;
                break;
            case "PlayerRaise":
            case 10:
                message.Sate = 10;
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
        ConfigInfo.prototype.Amount = 0;
        ConfigInfo.prototype.MaxChair = 0;

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
                writer.uint32(48).int32(message.Amount);
            if (message.MaxChair != null && Object.hasOwnProperty.call(message, "MaxChair"))
                writer.uint32(56).int32(message.MaxChair);
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
                case 6:
                    message.Amount = reader.int32();
                    break;
                case 7:
                    message.MaxChair = reader.int32();
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
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (!$util.isInteger(message.Amount))
                    return "Amount: integer expected";
            if (message.MaxChair != null && message.hasOwnProperty("MaxChair"))
                if (!$util.isInteger(message.MaxChair))
                    return "MaxChair: integer expected";
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
            if (object.Amount != null)
                message.Amount = object.Amount | 0;
            if (object.MaxChair != null)
                message.MaxChair = object.MaxChair | 0;
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
