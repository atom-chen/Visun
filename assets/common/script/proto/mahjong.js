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
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.go.PlayerInfo.encode(message.userInfo, writer.uint32(10).fork()).ldelim();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(16).int64(message.TimeStamp);
            if (message.FreeTime != null && Object.hasOwnProperty.call(message, "FreeTime"))
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
                    message.userInfo = $root.go.PlayerInfo.decode(reader, reader.uint32());
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
                var error = $root.go.PlayerInfo.verify(message.userInfo);
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
                message.userInfo = $root.go.PlayerInfo.fromObject(object.userInfo);
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
                object.userInfo = $root.go.PlayerInfo.toObject(message.userInfo, options);
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
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Site != null && Object.hasOwnProperty.call(message, "Site"))
                writer.uint32(16).uint32(message.Site);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                writer.uint32(26).bytes(message.Cards);
            if (message.IsBanker != null && Object.hasOwnProperty.call(message, "IsBanker"))
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
            if (message.Dice != null && Object.hasOwnProperty.call(message, "Dice"))
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
            if (message.Site != null && Object.hasOwnProperty.call(message, "Site"))
                writer.uint32(8).uint32(message.Site);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                writer.uint32(18).bytes(message.Cards);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
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
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(8).int32(message.Code);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                writer.uint32(18).bytes(message.Cards);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
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
            if (message.Site != null && Object.hasOwnProperty.call(message, "Site"))
                writer.uint32(8).uint32(message.Site);
            if (message.Codes != null && Object.hasOwnProperty.call(message, "Codes"))
                writer.uint32(18).bytes(message.Codes);
            if (message.GetGold != null && Object.hasOwnProperty.call(message, "GetGold"))
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
        PlayerInfo.prototype.Level = 0;
        PlayerInfo.prototype.Account = "";
        PlayerInfo.prototype.Sate = 0;
        PlayerInfo.prototype.PlatformID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
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
                writer.uint32(88).uint32(message.GameID);
            if (message.TableID != null && Object.hasOwnProperty.call(message, "TableID"))
                writer.uint32(96).uint32(message.TableID);
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
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Sate != null && message.hasOwnProperty("Sate"))
                if (!$util.isInteger(message.Sate))
                    return "Sate: integer expected";
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (!$util.isInteger(message.PlatformID) && !(message.PlatformID && $util.isInteger(message.PlatformID.low) && $util.isInteger(message.PlatformID.high)))
                    return "PlatformID: integer|Long expected";
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
            if (object.Sate != null)
                message.Sate = object.Sate | 0;
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
                object.Level = 0;
                object.Account = "";
                object.Sate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.PlatformID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformID = options.longs === String ? "0" : 0;
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
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Sate != null && message.hasOwnProperty("Sate"))
                object.Sate = message.Sate;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (typeof message.PlatformID === "number")
                    object.PlatformID = options.longs === String ? String(message.PlatformID) : message.PlatformID;
                else
                    object.PlatformID = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformID) : options.longs === Number ? new $util.LongBits(message.PlatformID.low >>> 0, message.PlatformID.high >>> 0).toNumber(true) : message.PlatformID;
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

    go.BeOut = (function() {

        function BeOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BeOut.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BeOut.prototype.GameID = 0;
        BeOut.prototype.Code = 0;
        BeOut.prototype.Hints = "";

        BeOut.create = function create(properties) {
            return new BeOut(properties);
        };

        BeOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(16).uint32(message.GameID);
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(24).uint32(message.Code);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
                writer.uint32(34).string(message.Hints);
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
                    message.GameID = reader.uint32();
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
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
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
            if (object.GameID != null)
                message.GameID = object.GameID >>> 0;
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
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
                object.GameID = 0;
                object.Code = 0;
                object.Hints = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        BeOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeOut;
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
        NotifyChangeGold.prototype.AlterGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        NotifyChangeGold.prototype.Code = 0;
        NotifyChangeGold.prototype.Reason = "";

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
            if (message.AlterGold != null && Object.hasOwnProperty.call(message, "AlterGold"))
                writer.uint32(24).int64(message.AlterGold);
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(32).uint32(message.Code);
            if (message.Reason != null && Object.hasOwnProperty.call(message, "Reason"))
                writer.uint32(42).string(message.Reason);
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

        NotifyChangeGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotifyChangeGold;
    })();

    return go;
})();

module.exports = $root;
