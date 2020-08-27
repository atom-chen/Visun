/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.landLords = (function() {

    var landLords = {};

    landLords.LandLordsEnter = (function() {

        function LandLordsEnter(properties) {
            this.Players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsEnter.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        LandLordsEnter.prototype.FreeTime = 0;
        LandLordsEnter.prototype.OutTime = 0;
        LandLordsEnter.prototype.CallTime = 0;
        LandLordsEnter.prototype.Free = null;
        LandLordsEnter.prototype.Start = null;
        LandLordsEnter.prototype.Call = null;
        LandLordsEnter.prototype.Playing = null;
        LandLordsEnter.prototype.Over = null;
        LandLordsEnter.prototype.BeforeChairID = 0;
        LandLordsEnter.prototype.BeforeCards = $util.newBuffer([]);
        LandLordsEnter.prototype.Players = $util.emptyArray;

        LandLordsEnter.create = function create(properties) {
            return new LandLordsEnter(properties);
        };

        LandLordsEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.FreeTime != null && Object.hasOwnProperty.call(message, "FreeTime"))
                writer.uint32(16).uint32(message.FreeTime);
            if (message.OutTime != null && Object.hasOwnProperty.call(message, "OutTime"))
                writer.uint32(24).uint32(message.OutTime);
            if (message.CallTime != null && Object.hasOwnProperty.call(message, "CallTime"))
                writer.uint32(32).uint32(message.CallTime);
            if (message.Free != null && Object.hasOwnProperty.call(message, "Free"))
                $root.gamecomm.StateFree.encode(message.Free, writer.uint32(42).fork()).ldelim();
            if (message.Start != null && Object.hasOwnProperty.call(message, "Start"))
                $root.gamecomm.StateStart.encode(message.Start, writer.uint32(50).fork()).ldelim();
            if (message.Call != null && Object.hasOwnProperty.call(message, "Call"))
                $root.gamecomm.StateCall.encode(message.Call, writer.uint32(58).fork()).ldelim();
            if (message.Playing != null && Object.hasOwnProperty.call(message, "Playing"))
                $root.gamecomm.StatePlaying.encode(message.Playing, writer.uint32(66).fork()).ldelim();
            if (message.Over != null && Object.hasOwnProperty.call(message, "Over"))
                $root.gamecomm.StateOver.encode(message.Over, writer.uint32(74).fork()).ldelim();
            if (message.BeforeChairID != null && Object.hasOwnProperty.call(message, "BeforeChairID"))
                writer.uint32(80).uint32(message.BeforeChairID);
            if (message.BeforeCards != null && Object.hasOwnProperty.call(message, "BeforeCards"))
                writer.uint32(90).bytes(message.BeforeCards);
            if (message.Players != null && message.Players.length)
                for (var i = 0; i < message.Players.length; ++i)
                    $root.landLords.LandLordsPlayer.encode(message.Players[i], writer.uint32(98).fork()).ldelim();
            return writer;
        };

        LandLordsEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeStamp = reader.int64();
                    break;
                case 2:
                    message.FreeTime = reader.uint32();
                    break;
                case 3:
                    message.OutTime = reader.uint32();
                    break;
                case 4:
                    message.CallTime = reader.uint32();
                    break;
                case 5:
                    message.Free = $root.gamecomm.StateFree.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.Start = $root.gamecomm.StateStart.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.Call = $root.gamecomm.StateCall.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.Playing = $root.gamecomm.StatePlaying.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.Over = $root.gamecomm.StateOver.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.BeforeChairID = reader.uint32();
                    break;
                case 11:
                    message.BeforeCards = reader.bytes();
                    break;
                case 12:
                    if (!(message.Players && message.Players.length))
                        message.Players = [];
                    message.Players.push($root.landLords.LandLordsPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                if (!$util.isInteger(message.FreeTime))
                    return "FreeTime: integer expected";
            if (message.OutTime != null && message.hasOwnProperty("OutTime"))
                if (!$util.isInteger(message.OutTime))
                    return "OutTime: integer expected";
            if (message.CallTime != null && message.hasOwnProperty("CallTime"))
                if (!$util.isInteger(message.CallTime))
                    return "CallTime: integer expected";
            if (message.Free != null && message.hasOwnProperty("Free")) {
                var error = $root.gamecomm.StateFree.verify(message.Free);
                if (error)
                    return "Free." + error;
            }
            if (message.Start != null && message.hasOwnProperty("Start")) {
                var error = $root.gamecomm.StateStart.verify(message.Start);
                if (error)
                    return "Start." + error;
            }
            if (message.Call != null && message.hasOwnProperty("Call")) {
                var error = $root.gamecomm.StateCall.verify(message.Call);
                if (error)
                    return "Call." + error;
            }
            if (message.Playing != null && message.hasOwnProperty("Playing")) {
                var error = $root.gamecomm.StatePlaying.verify(message.Playing);
                if (error)
                    return "Playing." + error;
            }
            if (message.Over != null && message.hasOwnProperty("Over")) {
                var error = $root.gamecomm.StateOver.verify(message.Over);
                if (error)
                    return "Over." + error;
            }
            if (message.BeforeChairID != null && message.hasOwnProperty("BeforeChairID"))
                if (!$util.isInteger(message.BeforeChairID))
                    return "BeforeChairID: integer expected";
            if (message.BeforeCards != null && message.hasOwnProperty("BeforeCards"))
                if (!(message.BeforeCards && typeof message.BeforeCards.length === "number" || $util.isString(message.BeforeCards)))
                    return "BeforeCards: buffer expected";
            if (message.Players != null && message.hasOwnProperty("Players")) {
                if (!Array.isArray(message.Players))
                    return "Players: array expected";
                for (var i = 0; i < message.Players.length; ++i) {
                    var error = $root.landLords.LandLordsPlayer.verify(message.Players[i]);
                    if (error)
                        return "Players." + error;
                }
            }
            return null;
        };

        LandLordsEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsEnter)
                return object;
            var message = new $root.landLords.LandLordsEnter();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.FreeTime != null)
                message.FreeTime = object.FreeTime >>> 0;
            if (object.OutTime != null)
                message.OutTime = object.OutTime >>> 0;
            if (object.CallTime != null)
                message.CallTime = object.CallTime >>> 0;
            if (object.Free != null) {
                if (typeof object.Free !== "object")
                    throw TypeError(".landLords.LandLordsEnter.Free: object expected");
                message.Free = $root.gamecomm.StateFree.fromObject(object.Free);
            }
            if (object.Start != null) {
                if (typeof object.Start !== "object")
                    throw TypeError(".landLords.LandLordsEnter.Start: object expected");
                message.Start = $root.gamecomm.StateStart.fromObject(object.Start);
            }
            if (object.Call != null) {
                if (typeof object.Call !== "object")
                    throw TypeError(".landLords.LandLordsEnter.Call: object expected");
                message.Call = $root.gamecomm.StateCall.fromObject(object.Call);
            }
            if (object.Playing != null) {
                if (typeof object.Playing !== "object")
                    throw TypeError(".landLords.LandLordsEnter.Playing: object expected");
                message.Playing = $root.gamecomm.StatePlaying.fromObject(object.Playing);
            }
            if (object.Over != null) {
                if (typeof object.Over !== "object")
                    throw TypeError(".landLords.LandLordsEnter.Over: object expected");
                message.Over = $root.gamecomm.StateOver.fromObject(object.Over);
            }
            if (object.BeforeChairID != null)
                message.BeforeChairID = object.BeforeChairID >>> 0;
            if (object.BeforeCards != null)
                if (typeof object.BeforeCards === "string")
                    $util.base64.decode(object.BeforeCards, message.BeforeCards = $util.newBuffer($util.base64.length(object.BeforeCards)), 0);
                else if (object.BeforeCards.length)
                    message.BeforeCards = object.BeforeCards;
            if (object.Players) {
                if (!Array.isArray(object.Players))
                    throw TypeError(".landLords.LandLordsEnter.Players: array expected");
                message.Players = [];
                for (var i = 0; i < object.Players.length; ++i) {
                    if (typeof object.Players[i] !== "object")
                        throw TypeError(".landLords.LandLordsEnter.Players: object expected");
                    message.Players[i] = $root.landLords.LandLordsPlayer.fromObject(object.Players[i]);
                }
            }
            return message;
        };

        LandLordsEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Players = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                object.FreeTime = 0;
                object.OutTime = 0;
                object.CallTime = 0;
                object.Free = null;
                object.Start = null;
                object.Call = null;
                object.Playing = null;
                object.Over = null;
                object.BeforeChairID = 0;
                if (options.bytes === String)
                    object.BeforeCards = "";
                else {
                    object.BeforeCards = [];
                    if (options.bytes !== Array)
                        object.BeforeCards = $util.newBuffer(object.BeforeCards);
                }
            }
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                object.FreeTime = message.FreeTime;
            if (message.OutTime != null && message.hasOwnProperty("OutTime"))
                object.OutTime = message.OutTime;
            if (message.CallTime != null && message.hasOwnProperty("CallTime"))
                object.CallTime = message.CallTime;
            if (message.Free != null && message.hasOwnProperty("Free"))
                object.Free = $root.gamecomm.StateFree.toObject(message.Free, options);
            if (message.Start != null && message.hasOwnProperty("Start"))
                object.Start = $root.gamecomm.StateStart.toObject(message.Start, options);
            if (message.Call != null && message.hasOwnProperty("Call"))
                object.Call = $root.gamecomm.StateCall.toObject(message.Call, options);
            if (message.Playing != null && message.hasOwnProperty("Playing"))
                object.Playing = $root.gamecomm.StatePlaying.toObject(message.Playing, options);
            if (message.Over != null && message.hasOwnProperty("Over"))
                object.Over = $root.gamecomm.StateOver.toObject(message.Over, options);
            if (message.BeforeChairID != null && message.hasOwnProperty("BeforeChairID"))
                object.BeforeChairID = message.BeforeChairID;
            if (message.BeforeCards != null && message.hasOwnProperty("BeforeCards"))
                object.BeforeCards = options.bytes === String ? $util.base64.encode(message.BeforeCards, 0, message.BeforeCards.length) : options.bytes === Array ? Array.prototype.slice.call(message.BeforeCards) : message.BeforeCards;
            if (message.Players && message.Players.length) {
                object.Players = [];
                for (var j = 0; j < message.Players.length; ++j)
                    object.Players[j] = $root.landLords.LandLordsPlayer.toObject(message.Players[j], options);
            }
            return object;
        };

        LandLordsEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsEnter;
    })();

    landLords.LandLordsReadyReq = (function() {

        function LandLordsReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsReadyReq.prototype.IsReady = false;

        LandLordsReadyReq.create = function create(properties) {
            return new LandLordsReadyReq(properties);
        };

        LandLordsReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsReady != null && Object.hasOwnProperty.call(message, "IsReady"))
                writer.uint32(8).bool(message.IsReady);
            return writer;
        };

        LandLordsReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsReadyReq();
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

        LandLordsReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                if (typeof message.IsReady !== "boolean")
                    return "IsReady: boolean expected";
            return null;
        };

        LandLordsReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsReadyReq)
                return object;
            var message = new $root.landLords.LandLordsReadyReq();
            if (object.IsReady != null)
                message.IsReady = Boolean(object.IsReady);
            return message;
        };

        LandLordsReadyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsReady = false;
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                object.IsReady = message.IsReady;
            return object;
        };

        LandLordsReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsReadyReq;
    })();

    landLords.LandLordsReadyResp = (function() {

        function LandLordsReadyResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsReadyResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        LandLordsReadyResp.create = function create(properties) {
            return new LandLordsReadyResp(properties);
        };

        LandLordsReadyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            return writer;
        };

        LandLordsReadyResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsReadyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsReadyResp();
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

        LandLordsReadyResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsReadyResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            return null;
        };

        LandLordsReadyResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsReadyResp)
                return object;
            var message = new $root.landLords.LandLordsReadyResp();
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

        LandLordsReadyResp.toObject = function toObject(message, options) {
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

        LandLordsReadyResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsReadyResp;
    })();

    landLords.LandLordsPlayer = (function() {

        function LandLordsPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsPlayer.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsPlayer.prototype.ChairID = 0;
        LandLordsPlayer.prototype.CardsLen = 0;
        LandLordsPlayer.prototype.Cards = $util.newBuffer([]);
        LandLordsPlayer.prototype.IsBanker = false;
        LandLordsPlayer.prototype.IsTrustee = false;

        LandLordsPlayer.create = function create(properties) {
            return new LandLordsPlayer(properties);
        };

        LandLordsPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.ChairID != null && Object.hasOwnProperty.call(message, "ChairID"))
                writer.uint32(16).uint32(message.ChairID);
            if (message.CardsLen != null && Object.hasOwnProperty.call(message, "CardsLen"))
                writer.uint32(24).uint32(message.CardsLen);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                writer.uint32(34).bytes(message.Cards);
            if (message.IsBanker != null && Object.hasOwnProperty.call(message, "IsBanker"))
                writer.uint32(40).bool(message.IsBanker);
            if (message.IsTrustee != null && Object.hasOwnProperty.call(message, "IsTrustee"))
                writer.uint32(48).bool(message.IsTrustee);
            return writer;
        };

        LandLordsPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.ChairID = reader.uint32();
                    break;
                case 3:
                    message.CardsLen = reader.uint32();
                    break;
                case 4:
                    message.Cards = reader.bytes();
                    break;
                case 5:
                    message.IsBanker = reader.bool();
                    break;
                case 6:
                    message.IsTrustee = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                if (!$util.isInteger(message.ChairID))
                    return "ChairID: integer expected";
            if (message.CardsLen != null && message.hasOwnProperty("CardsLen"))
                if (!$util.isInteger(message.CardsLen))
                    return "CardsLen: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                    return "Cards: buffer expected";
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                if (typeof message.IsBanker !== "boolean")
                    return "IsBanker: boolean expected";
            if (message.IsTrustee != null && message.hasOwnProperty("IsTrustee"))
                if (typeof message.IsTrustee !== "boolean")
                    return "IsTrustee: boolean expected";
            return null;
        };

        LandLordsPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsPlayer)
                return object;
            var message = new $root.landLords.LandLordsPlayer();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.ChairID != null)
                message.ChairID = object.ChairID >>> 0;
            if (object.CardsLen != null)
                message.CardsLen = object.CardsLen >>> 0;
            if (object.Cards != null)
                if (typeof object.Cards === "string")
                    $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
                else if (object.Cards.length)
                    message.Cards = object.Cards;
            if (object.IsBanker != null)
                message.IsBanker = Boolean(object.IsBanker);
            if (object.IsTrustee != null)
                message.IsTrustee = Boolean(object.IsTrustee);
            return message;
        };

        LandLordsPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.ChairID = 0;
                object.CardsLen = 0;
                if (options.bytes === String)
                    object.Cards = "";
                else {
                    object.Cards = [];
                    if (options.bytes !== Array)
                        object.Cards = $util.newBuffer(object.Cards);
                }
                object.IsBanker = false;
                object.IsTrustee = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                object.ChairID = message.ChairID;
            if (message.CardsLen != null && message.hasOwnProperty("CardsLen"))
                object.CardsLen = message.CardsLen;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                object.IsBanker = message.IsBanker;
            if (message.IsTrustee != null && message.hasOwnProperty("IsTrustee"))
                object.IsTrustee = message.IsTrustee;
            return object;
        };

        LandLordsPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsPlayer;
    })();

    landLords.LandLordsDeal = (function() {

        function LandLordsDeal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsDeal.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsDeal.prototype.CardsHand = $util.newBuffer([]);

        LandLordsDeal.create = function create(properties) {
            return new LandLordsDeal(properties);
        };

        LandLordsDeal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.CardsHand != null && Object.hasOwnProperty.call(message, "CardsHand"))
                writer.uint32(18).bytes(message.CardsHand);
            return writer;
        };

        LandLordsDeal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsDeal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsDeal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.CardsHand = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsDeal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsDeal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.CardsHand != null && message.hasOwnProperty("CardsHand"))
                if (!(message.CardsHand && typeof message.CardsHand.length === "number" || $util.isString(message.CardsHand)))
                    return "CardsHand: buffer expected";
            return null;
        };

        LandLordsDeal.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsDeal)
                return object;
            var message = new $root.landLords.LandLordsDeal();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.CardsHand != null)
                if (typeof object.CardsHand === "string")
                    $util.base64.decode(object.CardsHand, message.CardsHand = $util.newBuffer($util.base64.length(object.CardsHand)), 0);
                else if (object.CardsHand.length)
                    message.CardsHand = object.CardsHand;
            return message;
        };

        LandLordsDeal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.CardsHand = "";
                else {
                    object.CardsHand = [];
                    if (options.bytes !== Array)
                        object.CardsHand = $util.newBuffer(object.CardsHand);
                }
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.CardsHand != null && message.hasOwnProperty("CardsHand"))
                object.CardsHand = options.bytes === String ? $util.base64.encode(message.CardsHand, 0, message.CardsHand.length) : options.bytes === Array ? Array.prototype.slice.call(message.CardsHand) : message.CardsHand;
            return object;
        };

        LandLordsDeal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsDeal;
    })();

    landLords.LandLordsCall = (function() {

        function LandLordsCall(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsCall.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsCall.prototype.Score = 0;

        LandLordsCall.create = function create(properties) {
            return new LandLordsCall(properties);
        };

        LandLordsCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(16).uint32(message.Score);
            return writer;
        };

        LandLordsCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsCall();
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

        LandLordsCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsCall.verify = function verify(message) {
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

        LandLordsCall.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsCall)
                return object;
            var message = new $root.landLords.LandLordsCall();
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

        LandLordsCall.toObject = function toObject(message, options) {
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

        LandLordsCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsCall;
    })();

    landLords.LandLordsDouble = (function() {

        function LandLordsDouble(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsDouble.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsDouble.prototype.Number = 0;

        LandLordsDouble.create = function create(properties) {
            return new LandLordsDouble(properties);
        };

        LandLordsDouble.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Number != null && Object.hasOwnProperty.call(message, "Number"))
                writer.uint32(16).uint32(message.Number);
            return writer;
        };

        LandLordsDouble.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsDouble.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsDouble();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Number = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsDouble.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsDouble.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Number != null && message.hasOwnProperty("Number"))
                if (!$util.isInteger(message.Number))
                    return "Number: integer expected";
            return null;
        };

        LandLordsDouble.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsDouble)
                return object;
            var message = new $root.landLords.LandLordsDouble();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Number != null)
                message.Number = object.Number >>> 0;
            return message;
        };

        LandLordsDouble.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Number = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Number != null && message.hasOwnProperty("Number"))
                object.Number = message.Number;
            return object;
        };

        LandLordsDouble.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsDouble;
    })();

    landLords.LandLordsTrustee = (function() {

        function LandLordsTrustee(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsTrustee.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsTrustee.prototype.IsTrustee = false;

        LandLordsTrustee.create = function create(properties) {
            return new LandLordsTrustee(properties);
        };

        LandLordsTrustee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsTrustee != null && Object.hasOwnProperty.call(message, "IsTrustee"))
                writer.uint32(16).bool(message.IsTrustee);
            return writer;
        };

        LandLordsTrustee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsTrustee.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsTrustee();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.IsTrustee = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsTrustee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsTrustee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsTrustee != null && message.hasOwnProperty("IsTrustee"))
                if (typeof message.IsTrustee !== "boolean")
                    return "IsTrustee: boolean expected";
            return null;
        };

        LandLordsTrustee.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsTrustee)
                return object;
            var message = new $root.landLords.LandLordsTrustee();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.IsTrustee != null)
                message.IsTrustee = Boolean(object.IsTrustee);
            return message;
        };

        LandLordsTrustee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsTrustee = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.IsTrustee != null && message.hasOwnProperty("IsTrustee"))
                object.IsTrustee = message.IsTrustee;
            return object;
        };

        LandLordsTrustee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsTrustee;
    })();

    landLords.LandLordsBottomCard = (function() {

        function LandLordsBottomCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsBottomCard.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsBottomCard.prototype.CardsBottom = $util.newBuffer([]);

        LandLordsBottomCard.create = function create(properties) {
            return new LandLordsBottomCard(properties);
        };

        LandLordsBottomCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.CardsBottom != null && Object.hasOwnProperty.call(message, "CardsBottom"))
                writer.uint32(18).bytes(message.CardsBottom);
            return writer;
        };

        LandLordsBottomCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsBottomCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsBottomCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.CardsBottom = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsBottomCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsBottomCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.CardsBottom != null && message.hasOwnProperty("CardsBottom"))
                if (!(message.CardsBottom && typeof message.CardsBottom.length === "number" || $util.isString(message.CardsBottom)))
                    return "CardsBottom: buffer expected";
            return null;
        };

        LandLordsBottomCard.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsBottomCard)
                return object;
            var message = new $root.landLords.LandLordsBottomCard();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.CardsBottom != null)
                if (typeof object.CardsBottom === "string")
                    $util.base64.decode(object.CardsBottom, message.CardsBottom = $util.newBuffer($util.base64.length(object.CardsBottom)), 0);
                else if (object.CardsBottom.length)
                    message.CardsBottom = object.CardsBottom;
            return message;
        };

        LandLordsBottomCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.CardsBottom = "";
                else {
                    object.CardsBottom = [];
                    if (options.bytes !== Array)
                        object.CardsBottom = $util.newBuffer(object.CardsBottom);
                }
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.CardsBottom != null && message.hasOwnProperty("CardsBottom"))
                object.CardsBottom = options.bytes === String ? $util.base64.encode(message.CardsBottom, 0, message.CardsBottom.length) : options.bytes === Array ? Array.prototype.slice.call(message.CardsBottom) : message.CardsBottom;
            return object;
        };

        LandLordsBottomCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsBottomCard;
    })();

    landLords.LandLordsOutCard = (function() {

        function LandLordsOutCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsOutCard.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsOutCard.prototype.Cards = $util.newBuffer([]);
        LandLordsOutCard.prototype.Hints = "";

        LandLordsOutCard.create = function create(properties) {
            return new LandLordsOutCard(properties);
        };

        LandLordsOutCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                writer.uint32(18).bytes(message.Cards);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
                writer.uint32(26).string(message.Hints);
            return writer;
        };

        LandLordsOutCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsOutCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsOutCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Cards = reader.bytes();
                    break;
                case 3:
                    message.Hints = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsOutCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsOutCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                    return "Cards: buffer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        LandLordsOutCard.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsOutCard)
                return object;
            var message = new $root.landLords.LandLordsOutCard();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Cards != null)
                if (typeof object.Cards === "string")
                    $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
                else if (object.Cards.length)
                    message.Cards = object.Cards;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        LandLordsOutCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Cards = "";
                else {
                    object.Cards = [];
                    if (options.bytes !== Array)
                        object.Cards = $util.newBuffer(object.Cards);
                }
                object.Hints = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        LandLordsOutCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsOutCard;
    })();

    landLords.LandLordsAward = (function() {

        function LandLordsAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsAward.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsAward.prototype.Codes = $util.newBuffer([]);
        LandLordsAward.prototype.GetGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        LandLordsAward.create = function create(properties) {
            return new LandLordsAward(properties);
        };

        LandLordsAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Codes != null && Object.hasOwnProperty.call(message, "Codes"))
                writer.uint32(18).bytes(message.Codes);
            if (message.GetGold != null && Object.hasOwnProperty.call(message, "GetGold"))
                writer.uint32(24).int64(message.GetGold);
            return writer;
        };

        LandLordsAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Codes = reader.bytes();
                    break;
                case 3:
                    message.GetGold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsAward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Codes != null && message.hasOwnProperty("Codes"))
                if (!(message.Codes && typeof message.Codes.length === "number" || $util.isString(message.Codes)))
                    return "Codes: buffer expected";
            if (message.GetGold != null && message.hasOwnProperty("GetGold"))
                if (!$util.isInteger(message.GetGold) && !(message.GetGold && $util.isInteger(message.GetGold.low) && $util.isInteger(message.GetGold.high)))
                    return "GetGold: integer|Long expected";
            return null;
        };

        LandLordsAward.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsAward)
                return object;
            var message = new $root.landLords.LandLordsAward();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Codes != null)
                if (typeof object.Codes === "string")
                    $util.base64.decode(object.Codes, message.Codes = $util.newBuffer($util.base64.length(object.Codes)), 0);
                else if (object.Codes.length)
                    message.Codes = object.Codes;
            if (object.GetGold != null)
                if ($util.Long)
                    (message.GetGold = $util.Long.fromValue(object.GetGold)).unsigned = false;
                else if (typeof object.GetGold === "string")
                    message.GetGold = parseInt(object.GetGold, 10);
                else if (typeof object.GetGold === "number")
                    message.GetGold = object.GetGold;
                else if (typeof object.GetGold === "object")
                    message.GetGold = new $util.LongBits(object.GetGold.low >>> 0, object.GetGold.high >>> 0).toNumber();
            return message;
        };

        LandLordsAward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Codes = "";
                else {
                    object.Codes = [];
                    if (options.bytes !== Array)
                        object.Codes = $util.newBuffer(object.Codes);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.GetGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GetGold = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Codes != null && message.hasOwnProperty("Codes"))
                object.Codes = options.bytes === String ? $util.base64.encode(message.Codes, 0, message.Codes.length) : options.bytes === Array ? Array.prototype.slice.call(message.Codes) : message.Codes;
            if (message.GetGold != null && message.hasOwnProperty("GetGold"))
                if (typeof message.GetGold === "number")
                    object.GetGold = options.longs === String ? String(message.GetGold) : message.GetGold;
                else
                    object.GetGold = options.longs === String ? $util.Long.prototype.toString.call(message.GetGold) : options.longs === Number ? new $util.LongBits(message.GetGold.low >>> 0, message.GetGold.high >>> 0).toNumber() : message.GetGold;
            return object;
        };

        LandLordsAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsAward;
    })();

    landLords.LandLordsCheckout = (function() {

        function LandLordsCheckout(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsCheckout.prototype.players = $util.emptyArray;

        LandLordsCheckout.create = function create(properties) {
            return new LandLordsCheckout(properties);
        };

        LandLordsCheckout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.landLords.LandLordsAward.encode(message.players[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LandLordsCheckout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsCheckout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsCheckout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.landLords.LandLordsAward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsCheckout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsCheckout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.landLords.LandLordsAward.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        LandLordsCheckout.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsCheckout)
                return object;
            var message = new $root.landLords.LandLordsCheckout();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".landLords.LandLordsCheckout.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".landLords.LandLordsCheckout.players: object expected");
                    message.players[i] = $root.landLords.LandLordsAward.fromObject(object.players[i]);
                }
            }
            return message;
        };

        LandLordsCheckout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.landLords.LandLordsAward.toObject(message.players[j], options);
            }
            return object;
        };

        LandLordsCheckout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsCheckout;
    })();

    return landLords;
})();

module.exports = $root;