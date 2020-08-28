/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.landLords = (function() {

    var landLords = {};

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

    landLords.LandLordsScene = (function() {

        function LandLordsScene(properties) {
            this.Players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsScene.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        LandLordsScene.prototype.Players = $util.emptyArray;

        LandLordsScene.create = function create(properties) {
            return new LandLordsScene(properties);
        };

        LandLordsScene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.Players != null && message.Players.length)
                for (var i = 0; i < message.Players.length; ++i)
                    $root.landLords.LandLordsPlayer.encode(message.Players[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        LandLordsScene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsScene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeStamp = reader.int64();
                    break;
                case 2:
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

        LandLordsScene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsScene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
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

        LandLordsScene.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsScene)
                return object;
            var message = new $root.landLords.LandLordsScene();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.Players) {
                if (!Array.isArray(object.Players))
                    throw TypeError(".landLords.LandLordsScene.Players: array expected");
                message.Players = [];
                for (var i = 0; i < object.Players.length; ++i) {
                    if (typeof object.Players[i] !== "object")
                        throw TypeError(".landLords.LandLordsScene.Players: object expected");
                    message.Players[i] = $root.landLords.LandLordsPlayer.fromObject(object.Players[i]);
                }
            }
            return message;
        };

        LandLordsScene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Players = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.Players && message.Players.length) {
                object.Players = [];
                for (var j = 0; j < message.Players.length; ++j)
                    object.Players[j] = $root.landLords.LandLordsPlayer.toObject(message.Players[j], options);
            }
            return object;
        };

        LandLordsScene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsScene;
    })();

    landLords.LandLordsStateFree = (function() {

        function LandLordsStateFree(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsStateFree.prototype.Times = null;

        LandLordsStateFree.create = function create(properties) {
            return new LandLordsStateFree(properties);
        };

        LandLordsStateFree.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LandLordsStateFree.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsStateFree.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsStateFree();
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

        LandLordsStateFree.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsStateFree.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        LandLordsStateFree.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsStateFree)
                return object;
            var message = new $root.landLords.LandLordsStateFree();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".landLords.LandLordsStateFree.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        LandLordsStateFree.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        LandLordsStateFree.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsStateFree;
    })();

    landLords.LandLordsStateStart = (function() {

        function LandLordsStateStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsStateStart.prototype.Times = null;

        LandLordsStateStart.create = function create(properties) {
            return new LandLordsStateStart(properties);
        };

        LandLordsStateStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LandLordsStateStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsStateStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsStateStart();
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

        LandLordsStateStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsStateStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        LandLordsStateStart.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsStateStart)
                return object;
            var message = new $root.landLords.LandLordsStateStart();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".landLords.LandLordsStateStart.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        LandLordsStateStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        LandLordsStateStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsStateStart;
    })();

    landLords.LandLordsStateCall = (function() {

        function LandLordsStateCall(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsStateCall.prototype.Times = null;
        LandLordsStateCall.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        LandLordsStateCall.create = function create(properties) {
            return new LandLordsStateCall(properties);
        };

        LandLordsStateCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(16).uint64(message.UserID);
            return writer;
        };

        LandLordsStateCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsStateCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsStateCall();
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

        LandLordsStateCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsStateCall.verify = function verify(message) {
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

        LandLordsStateCall.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsStateCall)
                return object;
            var message = new $root.landLords.LandLordsStateCall();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".landLords.LandLordsStateCall.Times: object expected");
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

        LandLordsStateCall.toObject = function toObject(message, options) {
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

        LandLordsStateCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsStateCall;
    })();

    landLords.LandLordsStatePlaying = (function() {

        function LandLordsStatePlaying(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsStatePlaying.prototype.Times = null;
        LandLordsStatePlaying.prototype.LastChairID = 0;
        LandLordsStatePlaying.prototype.LastCards = null;

        LandLordsStatePlaying.create = function create(properties) {
            return new LandLordsStatePlaying(properties);
        };

        LandLordsStatePlaying.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.LastChairID != null && Object.hasOwnProperty.call(message, "LastChairID"))
                writer.uint32(16).uint32(message.LastChairID);
            if (message.LastCards != null && Object.hasOwnProperty.call(message, "LastCards"))
                $root.gamecomm.CardInfo.encode(message.LastCards, writer.uint32(26).fork()).ldelim();
            return writer;
        };

        LandLordsStatePlaying.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsStatePlaying.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsStatePlaying();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.LastChairID = reader.uint32();
                    break;
                case 3:
                    message.LastCards = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsStatePlaying.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsStatePlaying.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.LastChairID != null && message.hasOwnProperty("LastChairID"))
                if (!$util.isInteger(message.LastChairID))
                    return "LastChairID: integer expected";
            if (message.LastCards != null && message.hasOwnProperty("LastCards")) {
                var error = $root.gamecomm.CardInfo.verify(message.LastCards);
                if (error)
                    return "LastCards." + error;
            }
            return null;
        };

        LandLordsStatePlaying.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsStatePlaying)
                return object;
            var message = new $root.landLords.LandLordsStatePlaying();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".landLords.LandLordsStatePlaying.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            if (object.LastChairID != null)
                message.LastChairID = object.LastChairID >>> 0;
            if (object.LastCards != null) {
                if (typeof object.LastCards !== "object")
                    throw TypeError(".landLords.LandLordsStatePlaying.LastCards: object expected");
                message.LastCards = $root.gamecomm.CardInfo.fromObject(object.LastCards);
            }
            return message;
        };

        LandLordsStatePlaying.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.LastChairID = 0;
                object.LastCards = null;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            if (message.LastChairID != null && message.hasOwnProperty("LastChairID"))
                object.LastChairID = message.LastChairID;
            if (message.LastCards != null && message.hasOwnProperty("LastCards"))
                object.LastCards = $root.gamecomm.CardInfo.toObject(message.LastCards, options);
            return object;
        };

        LandLordsStatePlaying.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsStatePlaying;
    })();

    landLords.LandLordsStateOver = (function() {

        function LandLordsStateOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsStateOver.prototype.Times = null;

        LandLordsStateOver.create = function create(properties) {
            return new LandLordsStateOver(properties);
        };

        LandLordsStateOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LandLordsStateOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsStateOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsStateOver();
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

        LandLordsStateOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsStateOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        LandLordsStateOver.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsStateOver)
                return object;
            var message = new $root.landLords.LandLordsStateOver();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".landLords.LandLordsStateOver.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        LandLordsStateOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        LandLordsStateOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsStateOver;
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

    landLords.LandLordsDealResp = (function() {

        function LandLordsDealResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsDealResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsDealResp.prototype.CardsHand = $util.newBuffer([]);

        LandLordsDealResp.create = function create(properties) {
            return new LandLordsDealResp(properties);
        };

        LandLordsDealResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.CardsHand != null && Object.hasOwnProperty.call(message, "CardsHand"))
                writer.uint32(18).bytes(message.CardsHand);
            return writer;
        };

        LandLordsDealResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsDealResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsDealResp();
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

        LandLordsDealResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsDealResp.verify = function verify(message) {
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

        LandLordsDealResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsDealResp)
                return object;
            var message = new $root.landLords.LandLordsDealResp();
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

        LandLordsDealResp.toObject = function toObject(message, options) {
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

        LandLordsDealResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsDealResp;
    })();

    landLords.LandLordsCallReq = (function() {

        function LandLordsCallReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsCallReq.prototype.Score = 0;

        LandLordsCallReq.create = function create(properties) {
            return new LandLordsCallReq(properties);
        };

        LandLordsCallReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(8).uint32(message.Score);
            return writer;
        };

        LandLordsCallReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsCallReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsCallReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Score = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsCallReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsCallReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score))
                    return "Score: integer expected";
            return null;
        };

        LandLordsCallReq.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsCallReq)
                return object;
            var message = new $root.landLords.LandLordsCallReq();
            if (object.Score != null)
                message.Score = object.Score >>> 0;
            return message;
        };

        LandLordsCallReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Score = 0;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score = message.Score;
            return object;
        };

        LandLordsCallReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsCallReq;
    })();

    landLords.LandLordsCallResp = (function() {

        function LandLordsCallResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsCallResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsCallResp.prototype.Score = 0;

        LandLordsCallResp.create = function create(properties) {
            return new LandLordsCallResp(properties);
        };

        LandLordsCallResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(16).uint32(message.Score);
            return writer;
        };

        LandLordsCallResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsCallResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsCallResp();
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

        LandLordsCallResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsCallResp.verify = function verify(message) {
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

        LandLordsCallResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsCallResp)
                return object;
            var message = new $root.landLords.LandLordsCallResp();
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

        LandLordsCallResp.toObject = function toObject(message, options) {
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

        LandLordsCallResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsCallResp;
    })();

    landLords.LandLordsDoubleReq = (function() {

        function LandLordsDoubleReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsDoubleReq.prototype.Number = 0;

        LandLordsDoubleReq.create = function create(properties) {
            return new LandLordsDoubleReq(properties);
        };

        LandLordsDoubleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Number != null && Object.hasOwnProperty.call(message, "Number"))
                writer.uint32(8).uint32(message.Number);
            return writer;
        };

        LandLordsDoubleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsDoubleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsDoubleReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Number = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsDoubleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsDoubleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Number != null && message.hasOwnProperty("Number"))
                if (!$util.isInteger(message.Number))
                    return "Number: integer expected";
            return null;
        };

        LandLordsDoubleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsDoubleReq)
                return object;
            var message = new $root.landLords.LandLordsDoubleReq();
            if (object.Number != null)
                message.Number = object.Number >>> 0;
            return message;
        };

        LandLordsDoubleReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Number = 0;
            if (message.Number != null && message.hasOwnProperty("Number"))
                object.Number = message.Number;
            return object;
        };

        LandLordsDoubleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsDoubleReq;
    })();

    landLords.LandLordsDoubleResp = (function() {

        function LandLordsDoubleResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsDoubleResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsDoubleResp.prototype.Number = 0;

        LandLordsDoubleResp.create = function create(properties) {
            return new LandLordsDoubleResp(properties);
        };

        LandLordsDoubleResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Number != null && Object.hasOwnProperty.call(message, "Number"))
                writer.uint32(16).uint32(message.Number);
            return writer;
        };

        LandLordsDoubleResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsDoubleResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsDoubleResp();
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

        LandLordsDoubleResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsDoubleResp.verify = function verify(message) {
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

        LandLordsDoubleResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsDoubleResp)
                return object;
            var message = new $root.landLords.LandLordsDoubleResp();
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

        LandLordsDoubleResp.toObject = function toObject(message, options) {
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

        LandLordsDoubleResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsDoubleResp;
    })();

    landLords.LandLordsTrusteeReq = (function() {

        function LandLordsTrusteeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsTrusteeReq.prototype.IsTrustee = false;

        LandLordsTrusteeReq.create = function create(properties) {
            return new LandLordsTrusteeReq(properties);
        };

        LandLordsTrusteeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsTrustee != null && Object.hasOwnProperty.call(message, "IsTrustee"))
                writer.uint32(8).bool(message.IsTrustee);
            return writer;
        };

        LandLordsTrusteeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsTrusteeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsTrusteeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsTrustee = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsTrusteeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsTrusteeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsTrustee != null && message.hasOwnProperty("IsTrustee"))
                if (typeof message.IsTrustee !== "boolean")
                    return "IsTrustee: boolean expected";
            return null;
        };

        LandLordsTrusteeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsTrusteeReq)
                return object;
            var message = new $root.landLords.LandLordsTrusteeReq();
            if (object.IsTrustee != null)
                message.IsTrustee = Boolean(object.IsTrustee);
            return message;
        };

        LandLordsTrusteeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsTrustee = false;
            if (message.IsTrustee != null && message.hasOwnProperty("IsTrustee"))
                object.IsTrustee = message.IsTrustee;
            return object;
        };

        LandLordsTrusteeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsTrusteeReq;
    })();

    landLords.LandLordsTrusteeResp = (function() {

        function LandLordsTrusteeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsTrusteeResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsTrusteeResp.prototype.IsTrustee = false;

        LandLordsTrusteeResp.create = function create(properties) {
            return new LandLordsTrusteeResp(properties);
        };

        LandLordsTrusteeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsTrustee != null && Object.hasOwnProperty.call(message, "IsTrustee"))
                writer.uint32(16).bool(message.IsTrustee);
            return writer;
        };

        LandLordsTrusteeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsTrusteeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsTrusteeResp();
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

        LandLordsTrusteeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsTrusteeResp.verify = function verify(message) {
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

        LandLordsTrusteeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsTrusteeResp)
                return object;
            var message = new $root.landLords.LandLordsTrusteeResp();
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

        LandLordsTrusteeResp.toObject = function toObject(message, options) {
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

        LandLordsTrusteeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsTrusteeResp;
    })();

    landLords.LandLordsBottomCardResp = (function() {

        function LandLordsBottomCardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsBottomCardResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsBottomCardResp.prototype.CardsBottom = $util.newBuffer([]);

        LandLordsBottomCardResp.create = function create(properties) {
            return new LandLordsBottomCardResp(properties);
        };

        LandLordsBottomCardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.CardsBottom != null && Object.hasOwnProperty.call(message, "CardsBottom"))
                writer.uint32(18).bytes(message.CardsBottom);
            return writer;
        };

        LandLordsBottomCardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsBottomCardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsBottomCardResp();
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

        LandLordsBottomCardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsBottomCardResp.verify = function verify(message) {
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

        LandLordsBottomCardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsBottomCardResp)
                return object;
            var message = new $root.landLords.LandLordsBottomCardResp();
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

        LandLordsBottomCardResp.toObject = function toObject(message, options) {
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

        LandLordsBottomCardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsBottomCardResp;
    })();

    landLords.LandLordsOutCardReq = (function() {

        function LandLordsOutCardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsOutCardReq.prototype.Cards = null;

        LandLordsOutCardReq.create = function create(properties) {
            return new LandLordsOutCardReq(properties);
        };

        LandLordsOutCardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.gamecomm.CardInfo.encode(message.Cards, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LandLordsOutCardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsOutCardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsOutCardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Cards = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LandLordsOutCardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsOutCardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.gamecomm.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        LandLordsOutCardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsOutCardReq)
                return object;
            var message = new $root.landLords.LandLordsOutCardReq();
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".landLords.LandLordsOutCardReq.Cards: object expected");
                message.Cards = $root.gamecomm.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        LandLordsOutCardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Cards = null;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.gamecomm.CardInfo.toObject(message.Cards, options);
            return object;
        };

        LandLordsOutCardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsOutCardReq;
    })();

    landLords.LandLordsOutCardResp = (function() {

        function LandLordsOutCardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsOutCardResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsOutCardResp.prototype.Cards = null;

        LandLordsOutCardResp.create = function create(properties) {
            return new LandLordsOutCardResp(properties);
        };

        LandLordsOutCardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.gamecomm.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        LandLordsOutCardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsOutCardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsOutCardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
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

        LandLordsOutCardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsOutCardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.gamecomm.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        LandLordsOutCardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsOutCardResp)
                return object;
            var message = new $root.landLords.LandLordsOutCardResp();
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
                    throw TypeError(".landLords.LandLordsOutCardResp.Cards: object expected");
                message.Cards = $root.gamecomm.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        LandLordsOutCardResp.toObject = function toObject(message, options) {
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
                object.Cards = $root.gamecomm.CardInfo.toObject(message.Cards, options);
            return object;
        };

        LandLordsOutCardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsOutCardResp;
    })();

    landLords.LandLordsAward = (function() {

        function LandLordsAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsAward.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LandLordsAward.prototype.RemainCards = $util.newBuffer([]);
        LandLordsAward.prototype.GetGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        LandLordsAward.create = function create(properties) {
            return new LandLordsAward(properties);
        };

        LandLordsAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.RemainCards != null && Object.hasOwnProperty.call(message, "RemainCards"))
                writer.uint32(18).bytes(message.RemainCards);
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
                    message.RemainCards = reader.bytes();
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
            if (message.RemainCards != null && message.hasOwnProperty("RemainCards"))
                if (!(message.RemainCards && typeof message.RemainCards.length === "number" || $util.isString(message.RemainCards)))
                    return "RemainCards: buffer expected";
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
            if (object.RemainCards != null)
                if (typeof object.RemainCards === "string")
                    $util.base64.decode(object.RemainCards, message.RemainCards = $util.newBuffer($util.base64.length(object.RemainCards)), 0);
                else if (object.RemainCards.length)
                    message.RemainCards = object.RemainCards;
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
                    object.RemainCards = "";
                else {
                    object.RemainCards = [];
                    if (options.bytes !== Array)
                        object.RemainCards = $util.newBuffer(object.RemainCards);
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
            if (message.RemainCards != null && message.hasOwnProperty("RemainCards"))
                object.RemainCards = options.bytes === String ? $util.base64.encode(message.RemainCards, 0, message.RemainCards.length) : options.bytes === Array ? Array.prototype.slice.call(message.RemainCards) : message.RemainCards;
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

    landLords.LandLordsCheckoutResp = (function() {

        function LandLordsCheckoutResp(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LandLordsCheckoutResp.prototype.players = $util.emptyArray;

        LandLordsCheckoutResp.create = function create(properties) {
            return new LandLordsCheckoutResp(properties);
        };

        LandLordsCheckoutResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.landLords.LandLordsAward.encode(message.players[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LandLordsCheckoutResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LandLordsCheckoutResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.landLords.LandLordsCheckoutResp();
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

        LandLordsCheckoutResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LandLordsCheckoutResp.verify = function verify(message) {
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

        LandLordsCheckoutResp.fromObject = function fromObject(object) {
            if (object instanceof $root.landLords.LandLordsCheckoutResp)
                return object;
            var message = new $root.landLords.LandLordsCheckoutResp();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".landLords.LandLordsCheckoutResp.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".landLords.LandLordsCheckoutResp.players: object expected");
                    message.players[i] = $root.landLords.LandLordsAward.fromObject(object.players[i]);
                }
            }
            return message;
        };

        LandLordsCheckoutResp.toObject = function toObject(message, options) {
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

        LandLordsCheckoutResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LandLordsCheckoutResp;
    })();

    return landLords;
})();

module.exports = $root;