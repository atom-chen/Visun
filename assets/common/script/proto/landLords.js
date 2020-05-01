/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.landLords = (function() {

    var landLords = {};

    landLords.GameLandLordsEnter = (function() {

        function GameLandLordsEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsEnter.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameLandLordsEnter.prototype.FreeTime = 0;
        GameLandLordsEnter.prototype.OutTime = 0;
        GameLandLordsEnter.prototype.CallTime = 0;
        GameLandLordsEnter.prototype.Free = null;
        GameLandLordsEnter.prototype.Start = null;
        GameLandLordsEnter.prototype.Call = null;
        GameLandLordsEnter.prototype.Playing = null;
        GameLandLordsEnter.prototype.Over = null;

        GameLandLordsEnter.create = function create(properties) {
            return new GameLandLordsEnter(properties);
        };

        GameLandLordsEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                writer.uint32(16).uint32(message.FreeTime);
            if (message.OutTime != null && message.hasOwnProperty("OutTime"))
                writer.uint32(24).uint32(message.OutTime);
            if (message.CallTime != null && message.hasOwnProperty("CallTime"))
                writer.uint32(32).uint32(message.CallTime);
            if (message.Free != null && message.hasOwnProperty("Free"))
                $root.gamecomm.GameStateFree.encode(message.Free, writer.uint32(42).fork()).ldelim();
            if (message.Start != null && message.hasOwnProperty("Start"))
                $root.gamecomm.GameStateStart.encode(message.Start, writer.uint32(50).fork()).ldelim();
            if (message.Call != null && message.hasOwnProperty("Call"))
                $root.gamecomm.GameStateCall.encode(message.Call, writer.uint32(58).fork()).ldelim();
            if (message.Playing != null && message.hasOwnProperty("Playing"))
                $root.gamecomm.GameStatePlaying.encode(message.Playing, writer.uint32(66).fork()).ldelim();
            if (message.Over != null && message.hasOwnProperty("Over"))
                $root.gamecomm.GameStateOver.encode(message.Over, writer.uint32(74).fork()).ldelim();
            return writer;
        };

        GameLandLordsEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsEnter();
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
                    message.Free = $root.gamecomm.GameStateFree.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.Start = $root.gamecomm.GameStateStart.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.Call = $root.gamecomm.GameStateCall.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.Playing = $root.gamecomm.GameStatePlaying.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.Over = $root.gamecomm.GameStateOver.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameLandLordsEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsEnter.verify = function verify(message) {
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
                var error = $root.gamecomm.GameStateFree.verify(message.Free);
                if (error)
                    return "Free." + error;
            }
            if (message.Start != null && message.hasOwnProperty("Start")) {
                var error = $root.gamecomm.GameStateStart.verify(message.Start);
                if (error)
                    return "Start." + error;
            }
            if (message.Call != null && message.hasOwnProperty("Call")) {
                var error = $root.gamecomm.GameStateCall.verify(message.Call);
                if (error)
                    return "Call." + error;
            }
            if (message.Playing != null && message.hasOwnProperty("Playing")) {
                var error = $root.gamecomm.GameStatePlaying.verify(message.Playing);
                if (error)
                    return "Playing." + error;
            }
            if (message.Over != null && message.hasOwnProperty("Over")) {
                var error = $root.gamecomm.GameStateOver.verify(message.Over);
                if (error)
                    return "Over." + error;
            }
            return null;
        };

        GameLandLordsEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsEnter)
                return object;
            var message = new $root.landLords.GameLandLordsEnter();
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
                    throw TypeError(".landLords.GameLandLordsEnter.Free: object expected");
                message.Free = $root.gamecomm.GameStateFree.fromObject(object.Free);
            }
            if (object.Start != null) {
                if (typeof object.Start !== "object")
                    throw TypeError(".landLords.GameLandLordsEnter.Start: object expected");
                message.Start = $root.gamecomm.GameStateStart.fromObject(object.Start);
            }
            if (object.Call != null) {
                if (typeof object.Call !== "object")
                    throw TypeError(".landLords.GameLandLordsEnter.Call: object expected");
                message.Call = $root.gamecomm.GameStateCall.fromObject(object.Call);
            }
            if (object.Playing != null) {
                if (typeof object.Playing !== "object")
                    throw TypeError(".landLords.GameLandLordsEnter.Playing: object expected");
                message.Playing = $root.gamecomm.GameStatePlaying.fromObject(object.Playing);
            }
            if (object.Over != null) {
                if (typeof object.Over !== "object")
                    throw TypeError(".landLords.GameLandLordsEnter.Over: object expected");
                message.Over = $root.gamecomm.GameStateOver.fromObject(object.Over);
            }
            return message;
        };

        GameLandLordsEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
                object.Free = $root.gamecomm.GameStateFree.toObject(message.Free, options);
            if (message.Start != null && message.hasOwnProperty("Start"))
                object.Start = $root.gamecomm.GameStateStart.toObject(message.Start, options);
            if (message.Call != null && message.hasOwnProperty("Call"))
                object.Call = $root.gamecomm.GameStateCall.toObject(message.Call, options);
            if (message.Playing != null && message.hasOwnProperty("Playing"))
                object.Playing = $root.gamecomm.GameStatePlaying.toObject(message.Playing, options);
            if (message.Over != null && message.hasOwnProperty("Over"))
                object.Over = $root.gamecomm.GameStateOver.toObject(message.Over, options);
            return object;
        };

        GameLandLordsEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsEnter;
    })();

    landLords.GameLandLordsPlayer = (function() {

        function GameLandLordsPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsPlayer.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameLandLordsPlayer.prototype.Cards = $util.newBuffer([]);
        GameLandLordsPlayer.prototype.IsBanker = false;

        GameLandLordsPlayer.create = function create(properties) {
            return new GameLandLordsPlayer(properties);
        };

        GameLandLordsPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                writer.uint32(26).bytes(message.Cards);
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                writer.uint32(32).bool(message.IsBanker);
            return writer;
        };

        GameLandLordsPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.Cards = reader.bytes();
                    break;
                case 4:
                    message.IsBanker = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameLandLordsPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                    return "Cards: buffer expected";
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                if (typeof message.IsBanker !== "boolean")
                    return "IsBanker: boolean expected";
            return null;
        };

        GameLandLordsPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsPlayer)
                return object;
            var message = new $root.landLords.GameLandLordsPlayer();
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
            if (object.IsBanker != null)
                message.IsBanker = Boolean(object.IsBanker);
            return message;
        };

        GameLandLordsPlayer.toObject = function toObject(message, options) {
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
                object.IsBanker = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                object.IsBanker = message.IsBanker;
            return object;
        };

        GameLandLordsPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsPlayer;
    })();

    landLords.GameLandLordsDeal = (function() {

        function GameLandLordsDeal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsDeal.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameLandLordsDeal.prototype.CardsHand = $util.newBuffer([]);

        GameLandLordsDeal.create = function create(properties) {
            return new GameLandLordsDeal(properties);
        };

        GameLandLordsDeal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.CardsHand != null && message.hasOwnProperty("CardsHand"))
                writer.uint32(18).bytes(message.CardsHand);
            return writer;
        };

        GameLandLordsDeal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsDeal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsDeal();
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

        GameLandLordsDeal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsDeal.verify = function verify(message) {
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

        GameLandLordsDeal.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsDeal)
                return object;
            var message = new $root.landLords.GameLandLordsDeal();
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

        GameLandLordsDeal.toObject = function toObject(message, options) {
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

        GameLandLordsDeal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsDeal;
    })();

    landLords.GameLandLordsCall = (function() {

        function GameLandLordsCall(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsCall.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameLandLordsCall.prototype.Score = 0;

        GameLandLordsCall.create = function create(properties) {
            return new GameLandLordsCall(properties);
        };

        GameLandLordsCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Score != null && message.hasOwnProperty("Score"))
                writer.uint32(16).uint32(message.Score);
            return writer;
        };

        GameLandLordsCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsCall();
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

        GameLandLordsCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsCall.verify = function verify(message) {
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

        GameLandLordsCall.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsCall)
                return object;
            var message = new $root.landLords.GameLandLordsCall();
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

        GameLandLordsCall.toObject = function toObject(message, options) {
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

        GameLandLordsCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsCall;
    })();

    landLords.GameLandLordsBottomCard = (function() {

        function GameLandLordsBottomCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsBottomCard.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameLandLordsBottomCard.prototype.CardsBottom = $util.newBuffer([]);

        GameLandLordsBottomCard.create = function create(properties) {
            return new GameLandLordsBottomCard(properties);
        };

        GameLandLordsBottomCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.CardsBottom != null && message.hasOwnProperty("CardsBottom"))
                writer.uint32(18).bytes(message.CardsBottom);
            return writer;
        };

        GameLandLordsBottomCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsBottomCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsBottomCard();
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

        GameLandLordsBottomCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsBottomCard.verify = function verify(message) {
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

        GameLandLordsBottomCard.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsBottomCard)
                return object;
            var message = new $root.landLords.GameLandLordsBottomCard();
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

        GameLandLordsBottomCard.toObject = function toObject(message, options) {
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

        GameLandLordsBottomCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsBottomCard;
    })();

    landLords.GameLandLordsOutCard = (function() {

        function GameLandLordsOutCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsOutCard.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameLandLordsOutCard.prototype.Cards = $util.newBuffer([]);
        GameLandLordsOutCard.prototype.Hints = "";

        GameLandLordsOutCard.create = function create(properties) {
            return new GameLandLordsOutCard(properties);
        };

        GameLandLordsOutCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                writer.uint32(18).bytes(message.Cards);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(26).string(message.Hints);
            return writer;
        };

        GameLandLordsOutCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsOutCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsOutCard();
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

        GameLandLordsOutCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsOutCard.verify = function verify(message) {
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

        GameLandLordsOutCard.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsOutCard)
                return object;
            var message = new $root.landLords.GameLandLordsOutCard();
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

        GameLandLordsOutCard.toObject = function toObject(message, options) {
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

        GameLandLordsOutCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsOutCard;
    })();

    landLords.GameLandLordsOperate = (function() {

        function GameLandLordsOperate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsOperate.prototype.Code = 0;
        GameLandLordsOperate.prototype.Cards = $util.newBuffer([]);
        GameLandLordsOperate.prototype.Hints = "";

        GameLandLordsOperate.create = function create(properties) {
            return new GameLandLordsOperate(properties);
        };

        GameLandLordsOperate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && message.hasOwnProperty("Code"))
                writer.uint32(8).int32(message.Code);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                writer.uint32(18).bytes(message.Cards);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(26).string(message.Hints);
            return writer;
        };

        GameLandLordsOperate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsOperate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsOperate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
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

        GameLandLordsOperate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsOperate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                    return "Cards: buffer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        GameLandLordsOperate.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsOperate)
                return object;
            var message = new $root.landLords.GameLandLordsOperate();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Cards != null)
                if (typeof object.Cards === "string")
                    $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
                else if (object.Cards.length)
                    message.Cards = object.Cards;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        GameLandLordsOperate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                if (options.bytes === String)
                    object.Cards = "";
                else {
                    object.Cards = [];
                    if (options.bytes !== Array)
                        object.Cards = $util.newBuffer(object.Cards);
                }
                object.Hints = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        GameLandLordsOperate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsOperate;
    })();

    landLords.GameLandLordsAward = (function() {

        function GameLandLordsAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsAward.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameLandLordsAward.prototype.Codes = $util.newBuffer([]);
        GameLandLordsAward.prototype.GetGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameLandLordsAward.create = function create(properties) {
            return new GameLandLordsAward(properties);
        };

        GameLandLordsAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Codes != null && message.hasOwnProperty("Codes"))
                writer.uint32(18).bytes(message.Codes);
            if (message.GetGold != null && message.hasOwnProperty("GetGold"))
                writer.uint32(24).int64(message.GetGold);
            return writer;
        };

        GameLandLordsAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsAward();
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

        GameLandLordsAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsAward.verify = function verify(message) {
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

        GameLandLordsAward.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsAward)
                return object;
            var message = new $root.landLords.GameLandLordsAward();
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

        GameLandLordsAward.toObject = function toObject(message, options) {
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

        GameLandLordsAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsAward;
    })();

    landLords.GameLandLordsCheckout = (function() {

        function GameLandLordsCheckout(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameLandLordsCheckout.prototype.players = $util.emptyArray;

        GameLandLordsCheckout.create = function create(properties) {
            return new GameLandLordsCheckout(properties);
        };

        GameLandLordsCheckout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.landLords.GameLandLordsAward.encode(message.players[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GameLandLordsCheckout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameLandLordsCheckout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.GameLandLordsCheckout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.landLords.GameLandLordsAward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameLandLordsCheckout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameLandLordsCheckout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.landLords.GameLandLordsAward.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        GameLandLordsCheckout.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.GameLandLordsCheckout)
                return object;
            var message = new $root.landLords.GameLandLordsCheckout();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".landLords.GameLandLordsCheckout.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".landLords.GameLandLordsCheckout.players: object expected");
                    message.players[i] = $root.landLords.GameLandLordsAward.fromObject(object.players[i]);
                }
            }
            return message;
        };

        GameLandLordsCheckout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.landLords.GameLandLordsAward.toObject(message.players[j], options);
            }
            return object;
        };

        GameLandLordsCheckout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLandLordsCheckout;
    })();

    return landLords;
})();

$root.gamecomm = (function() {

    var gamecomm = {};

    gamecomm.ReqEnterGame = (function() {

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
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(8).uint32(message.GameID);
            return writer;
        };

        ReqEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.ReqEnterGame();
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
            if (object instanceof $root.gamecomm.ReqEnterGame)
                return object;
            var message = new $root.gamecomm.ReqEnterGame();
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

    gamecomm.ReqExitGame = (function() {

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
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(8).uint32(message.GameID);
            return writer;
        };

        ReqExitGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqExitGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.ReqExitGame();
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
            if (object instanceof $root.gamecomm.ReqExitGame)
                return object;
            var message = new $root.gamecomm.ReqExitGame();
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

    gamecomm.PlayerInfo = (function() {

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
        PlayerInfo.prototype.PlatformID = 0;
        PlayerInfo.prototype.RoomNum = 0;
        PlayerInfo.prototype.GameID = 0;
        PlayerInfo.prototype.TableID = 0;
        PlayerInfo.prototype.ChairID = 0;

        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(18).string(message.Name);
            if (message.Age != null && message.hasOwnProperty("Age"))
                writer.uint32(24).int32(message.Age);
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                writer.uint32(32).int32(message.Sex);
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                writer.uint32(40).int64(message.Gold);
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                writer.uint32(48).int32(message.VipLevel);
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(58).string(message.Account);
            if (message.Sate != null && message.hasOwnProperty("Sate"))
                writer.uint32(64).int32(message.Sate);
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                writer.uint32(72).uint32(message.PlatformID);
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                writer.uint32(80).uint32(message.RoomNum);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(88).uint32(message.GameID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(96).uint32(message.TableID);
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                writer.uint32(104).uint32(message.ChairID);
            return writer;
        };

        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.PlayerInfo();
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
                case 9:
                    message.PlatformID = reader.uint32();
                    break;
                case 10:
                    message.RoomNum = reader.uint32();
                    break;
                case 11:
                    message.GameID = reader.uint32();
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
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (!$util.isInteger(message.PlatformID))
                    return "PlatformID: integer expected";
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                if (!$util.isInteger(message.RoomNum))
                    return "RoomNum: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                if (!$util.isInteger(message.ChairID))
                    return "ChairID: integer expected";
            return null;
        };

        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.PlayerInfo)
                return object;
            var message = new $root.gamecomm.PlayerInfo();
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
            if (object.PlatformID != null)
                message.PlatformID = object.PlatformID >>> 0;
            if (object.RoomNum != null)
                message.RoomNum = object.RoomNum >>> 0;
            if (object.GameID != null)
                message.GameID = object.GameID >>> 0;
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
                object.VipLevel = 0;
                object.Account = "";
                object.Sate = 0;
                object.PlatformID = 0;
                object.RoomNum = 0;
                object.GameID = 0;
                object.TableID = 0;
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
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                object.PlatformID = message.PlatformID;
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                object.RoomNum = message.RoomNum;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                object.ChairID = message.ChairID;
            return object;
        };

        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    gamecomm.UserList = (function() {

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
                    $root.gamecomm.PlayerInfo.encode(message.AllInfos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        UserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        UserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.UserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AllInfos && message.AllInfos.length))
                        message.AllInfos = [];
                    message.AllInfos.push($root.gamecomm.PlayerInfo.decode(reader, reader.uint32()));
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
                    var error = $root.gamecomm.PlayerInfo.verify(message.AllInfos[i]);
                    if (error)
                        return "AllInfos." + error;
                }
            }
            return null;
        };

        UserList.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.UserList)
                return object;
            var message = new $root.gamecomm.UserList();
            if (object.AllInfos) {
                if (!Array.isArray(object.AllInfos))
                    throw TypeError(".gamecomm.UserList.AllInfos: array expected");
                message.AllInfos = [];
                for (var i = 0; i < object.AllInfos.length; ++i) {
                    if (typeof object.AllInfos[i] !== "object")
                        throw TypeError(".gamecomm.UserList.AllInfos: object expected");
                    message.AllInfos[i] = $root.gamecomm.PlayerInfo.fromObject(object.AllInfos[i]);
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
                    object.AllInfos[j] = $root.gamecomm.PlayerInfo.toObject(message.AllInfos[j], options);
            }
            return object;
        };

        UserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserList;
    })();

    gamecomm.PlayerRecord = (function() {

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
            if (message.User != null && message.hasOwnProperty("User"))
                $root.gamecomm.PlayerInfo.encode(message.User, writer.uint32(10).fork()).ldelim();
            if (message.Twice != null && message.hasOwnProperty("Twice"))
                writer.uint32(16).int32(message.Twice);
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                writer.uint32(24).int32(message.Ranking);
            if (message.Bankroll != null && message.hasOwnProperty("Bankroll"))
                writer.uint32(32).int32(message.Bankroll);
            if (message.WinLos != null && message.hasOwnProperty("WinLos"))
                writer.uint32(40).int64(message.WinLos);
            return writer;
        };

        PlayerRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PlayerRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.PlayerRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.gamecomm.PlayerInfo.decode(reader, reader.uint32());
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
                var error = $root.gamecomm.PlayerInfo.verify(message.User);
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
            if (object instanceof $root.gamecomm.PlayerRecord)
                return object;
            var message = new $root.gamecomm.PlayerRecord();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".gamecomm.PlayerRecord.User: object expected");
                message.User = $root.gamecomm.PlayerInfo.fromObject(object.User);
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
                object.User = $root.gamecomm.PlayerInfo.toObject(message.User, options);
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

    gamecomm.GameReady = (function() {

        function GameReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameReady.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameReady.prototype.IsReady = false;

        GameReady.create = function create(properties) {
            return new GameReady(properties);
        };

        GameReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                writer.uint32(16).bool(message.IsReady);
            return writer;
        };

        GameReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.IsReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                if (typeof message.IsReady !== "boolean")
                    return "IsReady: boolean expected";
            return null;
        };

        GameReady.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameReady)
                return object;
            var message = new $root.gamecomm.GameReady();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.IsReady != null)
                message.IsReady = Boolean(object.IsReady);
            return message;
        };

        GameReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsReady = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                object.IsReady = message.IsReady;
            return object;
        };

        GameReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameReady;
    })();

    gamecomm.GameBet = (function() {

        function GameBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBet.prototype.BetArea = 0;
        GameBet.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameBet.create = function create(properties) {
            return new GameBet(properties);
        };

        GameBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                writer.uint32(8).int32(message.BetArea);
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                writer.uint32(16).int64(message.BetScore);
            return writer;
        };

        GameBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BetArea = reader.int32();
                    break;
                case 2:
                    message.BetScore = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBet.verify = function verify(message) {
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

        GameBet.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameBet)
                return object;
            var message = new $root.gamecomm.GameBet();
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

        GameBet.toObject = function toObject(message, options) {
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

        GameBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBet;
    })();

    gamecomm.GameBetResult = (function() {

        function GameBetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBetResult.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameBetResult.prototype.BetArea = 0;
        GameBetResult.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBetResult.prototype.State = 0;
        GameBetResult.prototype.Hints = "";

        GameBetResult.create = function create(properties) {
            return new GameBetResult(properties);
        };

        GameBetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(16).int32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(26).string(message.Hints);
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                writer.uint32(32).int32(message.BetArea);
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                writer.uint32(40).int64(message.BetScore);
            return writer;
        };

        GameBetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameBetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 4:
                    message.BetArea = reader.int32();
                    break;
                case 5:
                    message.BetScore = reader.int64();
                    break;
                case 2:
                    message.State = reader.int32();
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

        GameBetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                if (!$util.isInteger(message.BetArea))
                    return "BetArea: integer expected";
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (!$util.isInteger(message.BetScore) && !(message.BetScore && $util.isInteger(message.BetScore.low) && $util.isInteger(message.BetScore.high)))
                    return "BetScore: integer|Long expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        GameBetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameBetResult)
                return object;
            var message = new $root.gamecomm.GameBetResult();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
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
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        GameBetResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.State = 0;
                object.Hints = "";
                object.BetArea = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetScore = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                object.BetArea = message.BetArea;
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (typeof message.BetScore === "number")
                    object.BetScore = options.longs === String ? String(message.BetScore) : message.BetScore;
                else
                    object.BetScore = options.longs === String ? $util.Long.prototype.toString.call(message.BetScore) : options.longs === Number ? new $util.LongBits(message.BetScore.low >>> 0, message.BetScore.high >>> 0).toNumber() : message.BetScore;
            return object;
        };

        GameBetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBetResult;
    })();

    gamecomm.GameRecord = (function() {

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
            if (message.Pork != null && message.hasOwnProperty("Pork"))
                writer.uint32(10).bytes(message.Pork);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(16).int32(message.Type);
            if (message.isWon != null && message.hasOwnProperty("isWon"))
                writer.uint32(24).bool(message.isWon);
            return writer;
        };

        GameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameRecord();
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
            if (object instanceof $root.gamecomm.GameRecord)
                return object;
            var message = new $root.gamecomm.GameRecord();
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

    gamecomm.GameRecordList = (function() {

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
                    $root.gamecomm.GameRecord.encode(message.list[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GameRecordList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameRecordList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameRecordList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.gamecomm.GameRecord.decode(reader, reader.uint32()));
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
                    var error = $root.gamecomm.GameRecord.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        GameRecordList.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameRecordList)
                return object;
            var message = new $root.gamecomm.GameRecordList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".gamecomm.GameRecordList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".gamecomm.GameRecordList.list: object expected");
                    message.list[i] = $root.gamecomm.GameRecord.fromObject(object.list[i]);
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
                    object.list[j] = $root.gamecomm.GameRecord.toObject(message.list[j], options);
            }
            return object;
        };

        GameRecordList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordList;
    })();

    gamecomm.GameResult = (function() {

        function GameResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameResult.prototype.Flag = 0;
        GameResult.prototype.Reason = $util.newBuffer([]);

        GameResult.create = function create(properties) {
            return new GameResult(properties);
        };

        GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                writer.uint32(8).int32(message.Flag);
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                writer.uint32(18).bytes(message.Reason);
            return writer;
        };

        GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Flag = reader.int32();
                    break;
                case 2:
                    message.Reason = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                if (!$util.isInteger(message.Flag))
                    return "Flag: integer expected";
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                if (!(message.Reason && typeof message.Reason.length === "number" || $util.isString(message.Reason)))
                    return "Reason: buffer expected";
            return null;
        };

        GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameResult)
                return object;
            var message = new $root.gamecomm.GameResult();
            if (object.Flag != null)
                message.Flag = object.Flag | 0;
            if (object.Reason != null)
                if (typeof object.Reason === "string")
                    $util.base64.decode(object.Reason, message.Reason = $util.newBuffer($util.base64.length(object.Reason)), 0);
                else if (object.Reason.length)
                    message.Reason = object.Reason;
            return message;
        };

        GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Flag = 0;
                if (options.bytes === String)
                    object.Reason = "";
                else {
                    object.Reason = [];
                    if (options.bytes !== Array)
                        object.Reason = $util.newBuffer(object.Reason);
                }
            }
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                object.Reason = options.bytes === String ? $util.base64.encode(message.Reason, 0, message.Reason.length) : options.bytes === Array ? Array.prototype.slice.call(message.Reason) : message.Reason;
            return object;
        };

        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResult;
    })();

    gamecomm.NotifyChangeGold = (function() {

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
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                writer.uint32(16).int64(message.Gold);
            if (message.Code != null && message.hasOwnProperty("Code"))
                writer.uint32(24).uint32(message.Code);
            return writer;
        };

        NotifyChangeGold.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        NotifyChangeGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.NotifyChangeGold();
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
            if (object instanceof $root.gamecomm.NotifyChangeGold)
                return object;
            var message = new $root.gamecomm.NotifyChangeGold();
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

    gamecomm.GameStateFree = (function() {

        function GameStateFree(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameStateFree.create = function create(properties) {
            return new GameStateFree(properties);
        };

        GameStateFree.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        GameStateFree.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameStateFree.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameStateFree();
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

        GameStateFree.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameStateFree.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        GameStateFree.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameStateFree)
                return object;
            return new $root.gamecomm.GameStateFree();
        };

        GameStateFree.toObject = function toObject() {
            return {};
        };

        GameStateFree.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStateFree;
    })();

    gamecomm.GameStateStart = (function() {

        function GameStateStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameStateStart.create = function create(properties) {
            return new GameStateStart(properties);
        };

        GameStateStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        GameStateStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameStateStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameStateStart();
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

        GameStateStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameStateStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        GameStateStart.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameStateStart)
                return object;
            return new $root.gamecomm.GameStateStart();
        };

        GameStateStart.toObject = function toObject() {
            return {};
        };

        GameStateStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStateStart;
    })();

    gamecomm.GameStateCall = (function() {

        function GameStateCall(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameStateCall.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GameStateCall.create = function create(properties) {
            return new GameStateCall(properties);
        };

        GameStateCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            return writer;
        };

        GameStateCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameStateCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameStateCall();
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

        GameStateCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameStateCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        GameStateCall.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameStateCall)
                return object;
            var message = new $root.gamecomm.GameStateCall();
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

        GameStateCall.toObject = function toObject(message, options) {
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

        GameStateCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStateCall;
    })();

    gamecomm.GameStatePlaying = (function() {

        function GameStatePlaying(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameStatePlaying.create = function create(properties) {
            return new GameStatePlaying(properties);
        };

        GameStatePlaying.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        GameStatePlaying.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameStatePlaying.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameStatePlaying();
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

        GameStatePlaying.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameStatePlaying.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        GameStatePlaying.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameStatePlaying)
                return object;
            return new $root.gamecomm.GameStatePlaying();
        };

        GameStatePlaying.toObject = function toObject() {
            return {};
        };

        GameStatePlaying.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStatePlaying;
    })();

    gamecomm.GameStateOver = (function() {

        function GameStateOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameStateOver.create = function create(properties) {
            return new GameStateOver(properties);
        };

        GameStateOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        GameStateOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameStateOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameStateOver();
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

        GameStateOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameStateOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        GameStateOver.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameStateOver)
                return object;
            return new $root.gamecomm.GameStateOver();
        };

        GameStateOver.toObject = function toObject() {
            return {};
        };

        GameStateOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStateOver;
    })();

    gamecomm.GameHost = (function() {

        function GameHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameHost.prototype.IsWant = false;

        GameHost.create = function create(properties) {
            return new GameHost(properties);
        };

        GameHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        GameHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameHost();
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

        GameHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameHost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        GameHost.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameHost)
                return object;
            var message = new $root.gamecomm.GameHost();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        GameHost.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        GameHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameHost;
    })();

    gamecomm.GameSuperHost = (function() {

        function GameSuperHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameSuperHost.prototype.IsWant = false;

        GameSuperHost.create = function create(properties) {
            return new GameSuperHost(properties);
        };

        GameSuperHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        GameSuperHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameSuperHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameSuperHost();
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

        GameSuperHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameSuperHost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        GameSuperHost.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameSuperHost)
                return object;
            var message = new $root.gamecomm.GameSuperHost();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        GameSuperHost.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        GameSuperHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameSuperHost;
    })();

    gamecomm.GameCall = (function() {

        function GameCall(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCall.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameCall.prototype.Score = 0;

        GameCall.create = function create(properties) {
            return new GameCall(properties);
        };

        GameCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Score != null && message.hasOwnProperty("Score"))
                writer.uint32(16).uint32(message.Score);
            return writer;
        };

        GameCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.GameCall();
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

        GameCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCall.verify = function verify(message) {
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

        GameCall.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.GameCall)
                return object;
            var message = new $root.gamecomm.GameCall();
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

        GameCall.toObject = function toObject(message, options) {
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

        GameCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCall;
    })();

    return gamecomm;
})();

module.exports = $root;
