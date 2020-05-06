/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mahjong = (function() {

    var mahjong = {};

    mahjong.GameMahjongEnter = (function() {

        function GameMahjongEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameMahjongEnter.prototype.userInfo = null;
        GameMahjongEnter.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameMahjongEnter.prototype.FreeTime = 0;

        GameMahjongEnter.create = function create(properties) {
            return new GameMahjongEnter(properties);
        };

        GameMahjongEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                $root.gamecomm.PlayerInfo.encode(message.userInfo, writer.uint32(10).fork()).ldelim();
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                writer.uint32(16).int64(message.TimeStamp);
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                writer.uint32(24).uint32(message.FreeTime);
            return writer;
        };

        GameMahjongEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameMahjongEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.GameMahjongEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userInfo = $root.gamecomm.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.TimeStamp = reader.int64();
                    break;
                case 3:
                    message.FreeTime = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameMahjongEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameMahjongEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.gamecomm.PlayerInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                if (!$util.isInteger(message.FreeTime))
                    return "FreeTime: integer expected";
            return null;
        };

        GameMahjongEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.GameMahjongEnter)
                return object;
            var message = new $root.mahjong.GameMahjongEnter();
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".mahjong.GameMahjongEnter.userInfo: object expected");
                message.userInfo = $root.gamecomm.PlayerInfo.fromObject(object.userInfo);
            }
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
            return message;
        };

        GameMahjongEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                object.FreeTime = 0;
            }
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.gamecomm.PlayerInfo.toObject(message.userInfo, options);
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                object.FreeTime = message.FreeTime;
            return object;
        };

        GameMahjongEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMahjongEnter;
    })();

    mahjong.GameMahjongPlayer = (function() {

        function GameMahjongPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameMahjongPlayer.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameMahjongPlayer.prototype.Site = 0;
        GameMahjongPlayer.prototype.Cards = $util.newBuffer([]);
        GameMahjongPlayer.prototype.IsBanker = false;

        GameMahjongPlayer.create = function create(properties) {
            return new GameMahjongPlayer(properties);
        };

        GameMahjongPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Site != null && message.hasOwnProperty("Site"))
                writer.uint32(16).uint32(message.Site);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                writer.uint32(26).bytes(message.Cards);
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                writer.uint32(32).bool(message.IsBanker);
            return writer;
        };

        GameMahjongPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameMahjongPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.GameMahjongPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Site = reader.uint32();
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

        GameMahjongPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameMahjongPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Site != null && message.hasOwnProperty("Site"))
                if (!$util.isInteger(message.Site))
                    return "Site: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                    return "Cards: buffer expected";
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                if (typeof message.IsBanker !== "boolean")
                    return "IsBanker: boolean expected";
            return null;
        };

        GameMahjongPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.GameMahjongPlayer)
                return object;
            var message = new $root.mahjong.GameMahjongPlayer();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Site != null)
                message.Site = object.Site >>> 0;
            if (object.Cards != null)
                if (typeof object.Cards === "string")
                    $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
                else if (object.Cards.length)
                    message.Cards = object.Cards;
            if (object.IsBanker != null)
                message.IsBanker = Boolean(object.IsBanker);
            return message;
        };

        GameMahjongPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Site = 0;
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
            if (message.Site != null && message.hasOwnProperty("Site"))
                object.Site = message.Site;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
            if (message.IsBanker != null && message.hasOwnProperty("IsBanker"))
                object.IsBanker = message.IsBanker;
            return object;
        };

        GameMahjongPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMahjongPlayer;
    })();

    mahjong.GameMahjongBegins = (function() {

        function GameMahjongBegins(properties) {
            this.PlayersInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameMahjongBegins.prototype.Dice = $util.newBuffer([]);
        GameMahjongBegins.prototype.PlayersInfo = $util.emptyArray;

        GameMahjongBegins.create = function create(properties) {
            return new GameMahjongBegins(properties);
        };

        GameMahjongBegins.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Dice != null && message.hasOwnProperty("Dice"))
                writer.uint32(10).bytes(message.Dice);
            if (message.PlayersInfo != null && message.PlayersInfo.length)
                for (var i = 0; i < message.PlayersInfo.length; ++i)
                    $root.mahjong.GameMahjongPlayer.encode(message.PlayersInfo[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GameMahjongBegins.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameMahjongBegins.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.GameMahjongBegins();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Dice = reader.bytes();
                    break;
                case 2:
                    if (!(message.PlayersInfo && message.PlayersInfo.length))
                        message.PlayersInfo = [];
                    message.PlayersInfo.push($root.mahjong.GameMahjongPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameMahjongBegins.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameMahjongBegins.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Dice != null && message.hasOwnProperty("Dice"))
                if (!(message.Dice && typeof message.Dice.length === "number" || $util.isString(message.Dice)))
                    return "Dice: buffer expected";
            if (message.PlayersInfo != null && message.hasOwnProperty("PlayersInfo")) {
                if (!Array.isArray(message.PlayersInfo))
                    return "PlayersInfo: array expected";
                for (var i = 0; i < message.PlayersInfo.length; ++i) {
                    var error = $root.mahjong.GameMahjongPlayer.verify(message.PlayersInfo[i]);
                    if (error)
                        return "PlayersInfo." + error;
                }
            }
            return null;
        };

        GameMahjongBegins.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.GameMahjongBegins)
                return object;
            var message = new $root.mahjong.GameMahjongBegins();
            if (object.Dice != null)
                if (typeof object.Dice === "string")
                    $util.base64.decode(object.Dice, message.Dice = $util.newBuffer($util.base64.length(object.Dice)), 0);
                else if (object.Dice.length)
                    message.Dice = object.Dice;
            if (object.PlayersInfo) {
                if (!Array.isArray(object.PlayersInfo))
                    throw TypeError(".mahjong.GameMahjongBegins.PlayersInfo: array expected");
                message.PlayersInfo = [];
                for (var i = 0; i < object.PlayersInfo.length; ++i) {
                    if (typeof object.PlayersInfo[i] !== "object")
                        throw TypeError(".mahjong.GameMahjongBegins.PlayersInfo: object expected");
                    message.PlayersInfo[i] = $root.mahjong.GameMahjongPlayer.fromObject(object.PlayersInfo[i]);
                }
            }
            return message;
        };

        GameMahjongBegins.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.PlayersInfo = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.Dice = "";
                else {
                    object.Dice = [];
                    if (options.bytes !== Array)
                        object.Dice = $util.newBuffer(object.Dice);
                }
            if (message.Dice != null && message.hasOwnProperty("Dice"))
                object.Dice = options.bytes === String ? $util.base64.encode(message.Dice, 0, message.Dice.length) : options.bytes === Array ? Array.prototype.slice.call(message.Dice) : message.Dice;
            if (message.PlayersInfo && message.PlayersInfo.length) {
                object.PlayersInfo = [];
                for (var j = 0; j < message.PlayersInfo.length; ++j)
                    object.PlayersInfo[j] = $root.mahjong.GameMahjongPlayer.toObject(message.PlayersInfo[j], options);
            }
            return object;
        };

        GameMahjongBegins.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMahjongBegins;
    })();

    mahjong.GameMahjongOutcard = (function() {

        function GameMahjongOutcard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameMahjongOutcard.prototype.Site = 0;
        GameMahjongOutcard.prototype.Cards = $util.newBuffer([]);
        GameMahjongOutcard.prototype.Hints = "";

        GameMahjongOutcard.create = function create(properties) {
            return new GameMahjongOutcard(properties);
        };

        GameMahjongOutcard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Site != null && message.hasOwnProperty("Site"))
                writer.uint32(8).uint32(message.Site);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                writer.uint32(18).bytes(message.Cards);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(26).string(message.Hints);
            return writer;
        };

        GameMahjongOutcard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameMahjongOutcard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.GameMahjongOutcard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Site = reader.uint32();
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

        GameMahjongOutcard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameMahjongOutcard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Site != null && message.hasOwnProperty("Site"))
                if (!$util.isInteger(message.Site))
                    return "Site: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                    return "Cards: buffer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        GameMahjongOutcard.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.GameMahjongOutcard)
                return object;
            var message = new $root.mahjong.GameMahjongOutcard();
            if (object.Site != null)
                message.Site = object.Site >>> 0;
            if (object.Cards != null)
                if (typeof object.Cards === "string")
                    $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
                else if (object.Cards.length)
                    message.Cards = object.Cards;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        GameMahjongOutcard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Site = 0;
                if (options.bytes === String)
                    object.Cards = "";
                else {
                    object.Cards = [];
                    if (options.bytes !== Array)
                        object.Cards = $util.newBuffer(object.Cards);
                }
                object.Hints = "";
            }
            if (message.Site != null && message.hasOwnProperty("Site"))
                object.Site = message.Site;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        GameMahjongOutcard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMahjongOutcard;
    })();

    mahjong.GameMahjongOperate = (function() {

        function GameMahjongOperate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameMahjongOperate.prototype.Code = 0;
        GameMahjongOperate.prototype.Cards = $util.newBuffer([]);
        GameMahjongOperate.prototype.Hints = "";

        GameMahjongOperate.create = function create(properties) {
            return new GameMahjongOperate(properties);
        };

        GameMahjongOperate.encode = function encode(message, writer) {
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

        GameMahjongOperate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameMahjongOperate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.GameMahjongOperate();
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

        GameMahjongOperate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameMahjongOperate.verify = function verify(message) {
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

        GameMahjongOperate.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.GameMahjongOperate)
                return object;
            var message = new $root.mahjong.GameMahjongOperate();
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

        GameMahjongOperate.toObject = function toObject(message, options) {
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

        GameMahjongOperate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMahjongOperate;
    })();

    mahjong.GameMahjongAward = (function() {

        function GameMahjongAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameMahjongAward.prototype.Site = 0;
        GameMahjongAward.prototype.Codes = $util.newBuffer([]);
        GameMahjongAward.prototype.GetGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameMahjongAward.create = function create(properties) {
            return new GameMahjongAward(properties);
        };

        GameMahjongAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Site != null && message.hasOwnProperty("Site"))
                writer.uint32(8).uint32(message.Site);
            if (message.Codes != null && message.hasOwnProperty("Codes"))
                writer.uint32(18).bytes(message.Codes);
            if (message.GetGold != null && message.hasOwnProperty("GetGold"))
                writer.uint32(24).int64(message.GetGold);
            return writer;
        };

        GameMahjongAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameMahjongAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.GameMahjongAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Site = reader.uint32();
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

        GameMahjongAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameMahjongAward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Site != null && message.hasOwnProperty("Site"))
                if (!$util.isInteger(message.Site))
                    return "Site: integer expected";
            if (message.Codes != null && message.hasOwnProperty("Codes"))
                if (!(message.Codes && typeof message.Codes.length === "number" || $util.isString(message.Codes)))
                    return "Codes: buffer expected";
            if (message.GetGold != null && message.hasOwnProperty("GetGold"))
                if (!$util.isInteger(message.GetGold) && !(message.GetGold && $util.isInteger(message.GetGold.low) && $util.isInteger(message.GetGold.high)))
                    return "GetGold: integer|Long expected";
            return null;
        };

        GameMahjongAward.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.GameMahjongAward)
                return object;
            var message = new $root.mahjong.GameMahjongAward();
            if (object.Site != null)
                message.Site = object.Site >>> 0;
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

        GameMahjongAward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Site = 0;
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
            if (message.Site != null && message.hasOwnProperty("Site"))
                object.Site = message.Site;
            if (message.Codes != null && message.hasOwnProperty("Codes"))
                object.Codes = options.bytes === String ? $util.base64.encode(message.Codes, 0, message.Codes.length) : options.bytes === Array ? Array.prototype.slice.call(message.Codes) : message.Codes;
            if (message.GetGold != null && message.hasOwnProperty("GetGold"))
                if (typeof message.GetGold === "number")
                    object.GetGold = options.longs === String ? String(message.GetGold) : message.GetGold;
                else
                    object.GetGold = options.longs === String ? $util.Long.prototype.toString.call(message.GetGold) : options.longs === Number ? new $util.LongBits(message.GetGold.low >>> 0, message.GetGold.high >>> 0).toNumber() : message.GetGold;
            return object;
        };

        GameMahjongAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMahjongAward;
    })();

    mahjong.GameMahjongCheckout = (function() {

        function GameMahjongCheckout(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameMahjongCheckout.prototype.players = $util.emptyArray;

        GameMahjongCheckout.create = function create(properties) {
            return new GameMahjongCheckout(properties);
        };

        GameMahjongCheckout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.mahjong.GameMahjongAward.encode(message.players[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GameMahjongCheckout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameMahjongCheckout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.GameMahjongCheckout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.mahjong.GameMahjongAward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameMahjongCheckout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameMahjongCheckout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.mahjong.GameMahjongAward.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        GameMahjongCheckout.fromObject = function fromObject(object) {
            if (object instanceof $root.mahjong.GameMahjongCheckout)
                return object;
            var message = new $root.mahjong.GameMahjongCheckout();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".mahjong.GameMahjongCheckout.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".mahjong.GameMahjongCheckout.players: object expected");
                    message.players[i] = $root.mahjong.GameMahjongAward.fromObject(object.players[i]);
                }
            }
            return message;
        };

        GameMahjongCheckout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.mahjong.GameMahjongAward.toObject(message.players[j], options);
            }
            return object;
        };

        GameMahjongCheckout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMahjongCheckout;
    })();

    return mahjong;
})();

module.exports = $root;
