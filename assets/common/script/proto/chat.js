/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chat = (function() {

    var chat = {};

    chat.SimplePlayerInfo = (function() {

        function SimplePlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SimplePlayerInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SimplePlayerInfo.prototype.Sex = 0;
        SimplePlayerInfo.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SimplePlayerInfo.prototype.HeadID = 0;

        SimplePlayerInfo.create = function create(properties) {
            return new SimplePlayerInfo(properties);
        };

        SimplePlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                writer.uint32(16).uint32(message.Sex);
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                writer.uint32(24).int64(message.Gold);
            if (message.HeadID != null && message.hasOwnProperty("HeadID"))
                writer.uint32(32).uint32(message.HeadID);
            return writer;
        };

        SimplePlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SimplePlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SimplePlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Sex = reader.uint32();
                    break;
                case 3:
                    message.Gold = reader.int64();
                    break;
                case 4:
                    message.HeadID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SimplePlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SimplePlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                if (!$util.isInteger(message.Sex))
                    return "Sex: integer expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            if (message.HeadID != null && message.hasOwnProperty("HeadID"))
                if (!$util.isInteger(message.HeadID))
                    return "HeadID: integer expected";
            return null;
        };

        SimplePlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SimplePlayerInfo)
                return object;
            var message = new $root.chat.SimplePlayerInfo();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
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
            if (object.HeadID != null)
                message.HeadID = object.HeadID >>> 0;
            return message;
        };

        SimplePlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Sex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
                object.HeadID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
            if (message.HeadID != null && message.hasOwnProperty("HeadID"))
                object.HeadID = message.HeadID;
            return object;
        };

        SimplePlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SimplePlayerInfo;
    })();

    chat.GetOnlinePlayers = (function() {

        function GetOnlinePlayers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetOnlinePlayers.prototype.PageNum = 0;

        GetOnlinePlayers.create = function create(properties) {
            return new GetOnlinePlayers(properties);
        };

        GetOnlinePlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                writer.uint32(8).int32(message.PageNum);
            return writer;
        };

        GetOnlinePlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetOnlinePlayers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GetOnlinePlayers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PageNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetOnlinePlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetOnlinePlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                if (!$util.isInteger(message.PageNum))
                    return "PageNum: integer expected";
            return null;
        };

        GetOnlinePlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GetOnlinePlayers)
                return object;
            var message = new $root.chat.GetOnlinePlayers();
            if (object.PageNum != null)
                message.PageNum = object.PageNum | 0;
            return message;
        };

        GetOnlinePlayers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.PageNum = 0;
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                object.PageNum = message.PageNum;
            return object;
        };

        GetOnlinePlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetOnlinePlayers;
    })();

    chat.GetOnlinePlayersResp = (function() {

        function GetOnlinePlayersResp(properties) {
            this.Infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetOnlinePlayersResp.prototype.Infos = $util.emptyArray;

        GetOnlinePlayersResp.create = function create(properties) {
            return new GetOnlinePlayersResp(properties);
        };

        GetOnlinePlayersResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Infos != null && message.Infos.length)
                for (var i = 0; i < message.Infos.length; ++i)
                    $root.chat.SimplePlayerInfo.encode(message.Infos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GetOnlinePlayersResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetOnlinePlayersResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GetOnlinePlayersResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.chat.SimplePlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetOnlinePlayersResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetOnlinePlayersResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Infos != null && message.hasOwnProperty("Infos")) {
                if (!Array.isArray(message.Infos))
                    return "Infos: array expected";
                for (var i = 0; i < message.Infos.length; ++i) {
                    var error = $root.chat.SimplePlayerInfo.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        GetOnlinePlayersResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GetOnlinePlayersResp)
                return object;
            var message = new $root.chat.GetOnlinePlayersResp();
            if (object.Infos) {
                if (!Array.isArray(object.Infos))
                    throw TypeError(".chat.GetOnlinePlayersResp.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".chat.GetOnlinePlayersResp.Infos: object expected");
                    message.Infos[i] = $root.chat.SimplePlayerInfo.fromObject(object.Infos[i]);
                }
            }
            return message;
        };

        GetOnlinePlayersResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Infos = [];
            if (message.Infos && message.Infos.length) {
                object.Infos = [];
                for (var j = 0; j < message.Infos.length; ++j)
                    object.Infos[j] = $root.chat.SimplePlayerInfo.toObject(message.Infos[j], options);
            }
            return object;
        };

        GetOnlinePlayersResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetOnlinePlayersResp;
    })();

    chat.FindPlayer = (function() {

        function FindPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        FindPlayer.prototype.Name = "";

        FindPlayer.create = function create(properties) {
            return new FindPlayer(properties);
        };

        FindPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(10).string(message.Name);
            return writer;
        };

        FindPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        FindPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.FindPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        FindPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        FindPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        FindPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.FindPlayer)
                return object;
            var message = new $root.chat.FindPlayer();
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        FindPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Name = "";
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        FindPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindPlayer;
    })();

    chat.FindPlayerResp = (function() {

        function FindPlayerResp(properties) {
            this.Infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        FindPlayerResp.prototype.Infos = $util.emptyArray;

        FindPlayerResp.create = function create(properties) {
            return new FindPlayerResp(properties);
        };

        FindPlayerResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Infos != null && message.Infos.length)
                for (var i = 0; i < message.Infos.length; ++i)
                    $root.chat.SimplePlayerInfo.encode(message.Infos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        FindPlayerResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        FindPlayerResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.FindPlayerResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.chat.SimplePlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        FindPlayerResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        FindPlayerResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Infos != null && message.hasOwnProperty("Infos")) {
                if (!Array.isArray(message.Infos))
                    return "Infos: array expected";
                for (var i = 0; i < message.Infos.length; ++i) {
                    var error = $root.chat.SimplePlayerInfo.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        FindPlayerResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.FindPlayerResp)
                return object;
            var message = new $root.chat.FindPlayerResp();
            if (object.Infos) {
                if (!Array.isArray(object.Infos))
                    throw TypeError(".chat.FindPlayerResp.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".chat.FindPlayerResp.Infos: object expected");
                    message.Infos[i] = $root.chat.SimplePlayerInfo.fromObject(object.Infos[i]);
                }
            }
            return message;
        };

        FindPlayerResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Infos = [];
            if (message.Infos && message.Infos.length) {
                object.Infos = [];
                for (var j = 0; j < message.Infos.length; ++j)
                    object.Infos[j] = $root.chat.SimplePlayerInfo.toObject(message.Infos[j], options);
            }
            return object;
        };

        FindPlayerResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindPlayerResp;
    })();

    chat.SetupGroup = (function() {

        function SetupGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SetupGroup.prototype.Name = "";

        SetupGroup.create = function create(properties) {
            return new SetupGroup(properties);
        };

        SetupGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(10).string(message.Name);
            return writer;
        };

        SetupGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SetupGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SetupGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SetupGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SetupGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        SetupGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SetupGroup)
                return object;
            var message = new $root.chat.SetupGroup();
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        SetupGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Name = "";
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        SetupGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetupGroup;
    })();

    chat.SetupGroupResp = (function() {

        function SetupGroupResp(properties) {
            this.AdminList = [];
            this.MemberList = [];
            this.BannedList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SetupGroupResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SetupGroupResp.prototype.GroupName = "";
        SetupGroupResp.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SetupGroupResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SetupGroupResp.prototype.AdminList = $util.emptyArray;
        SetupGroupResp.prototype.MemberList = $util.emptyArray;
        SetupGroupResp.prototype.BannedList = $util.emptyArray;

        SetupGroupResp.create = function create(properties) {
            return new SetupGroupResp(properties);
        };

        SetupGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.GroupName != null && message.hasOwnProperty("GroupName"))
                writer.uint32(18).string(message.GroupName);
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                writer.uint32(24).uint64(message.HostID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(32).int64(message.Timestamp);
            if (message.AdminList != null && message.AdminList.length) {
                writer.uint32(42).fork();
                for (var i = 0; i < message.AdminList.length; ++i)
                    writer.uint64(message.AdminList[i]);
                writer.ldelim();
            }
            if (message.MemberList != null && message.MemberList.length) {
                writer.uint32(50).fork();
                for (var i = 0; i < message.MemberList.length; ++i)
                    writer.uint64(message.MemberList[i]);
                writer.ldelim();
            }
            if (message.BannedList != null && message.BannedList.length) {
                writer.uint32(58).fork();
                for (var i = 0; i < message.BannedList.length; ++i)
                    writer.uint64(message.BannedList[i]);
                writer.ldelim();
            }
            return writer;
        };

        SetupGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SetupGroupResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SetupGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.GroupName = reader.string();
                    break;
                case 3:
                    message.HostID = reader.uint64();
                    break;
                case 4:
                    message.Timestamp = reader.int64();
                    break;
                case 5:
                    if (!(message.AdminList && message.AdminList.length))
                        message.AdminList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AdminList.push(reader.uint64());
                    } else
                        message.AdminList.push(reader.uint64());
                    break;
                case 6:
                    if (!(message.MemberList && message.MemberList.length))
                        message.MemberList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.MemberList.push(reader.uint64());
                    } else
                        message.MemberList.push(reader.uint64());
                    break;
                case 7:
                    if (!(message.BannedList && message.BannedList.length))
                        message.BannedList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BannedList.push(reader.uint64());
                    } else
                        message.BannedList.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SetupGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SetupGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.GroupName != null && message.hasOwnProperty("GroupName"))
                if (!$util.isString(message.GroupName))
                    return "GroupName: string expected";
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.AdminList != null && message.hasOwnProperty("AdminList")) {
                if (!Array.isArray(message.AdminList))
                    return "AdminList: array expected";
                for (var i = 0; i < message.AdminList.length; ++i)
                    if (!$util.isInteger(message.AdminList[i]) && !(message.AdminList[i] && $util.isInteger(message.AdminList[i].low) && $util.isInteger(message.AdminList[i].high)))
                        return "AdminList: integer|Long[] expected";
            }
            if (message.MemberList != null && message.hasOwnProperty("MemberList")) {
                if (!Array.isArray(message.MemberList))
                    return "MemberList: array expected";
                for (var i = 0; i < message.MemberList.length; ++i)
                    if (!$util.isInteger(message.MemberList[i]) && !(message.MemberList[i] && $util.isInteger(message.MemberList[i].low) && $util.isInteger(message.MemberList[i].high)))
                        return "MemberList: integer|Long[] expected";
            }
            if (message.BannedList != null && message.hasOwnProperty("BannedList")) {
                if (!Array.isArray(message.BannedList))
                    return "BannedList: array expected";
                for (var i = 0; i < message.BannedList.length; ++i)
                    if (!$util.isInteger(message.BannedList[i]) && !(message.BannedList[i] && $util.isInteger(message.BannedList[i].low) && $util.isInteger(message.BannedList[i].high)))
                        return "BannedList: integer|Long[] expected";
            }
            return null;
        };

        SetupGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SetupGroupResp)
                return object;
            var message = new $root.chat.SetupGroupResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.GroupName != null)
                message.GroupName = String(object.GroupName);
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            if (object.AdminList) {
                if (!Array.isArray(object.AdminList))
                    throw TypeError(".chat.SetupGroupResp.AdminList: array expected");
                message.AdminList = [];
                for (var i = 0; i < object.AdminList.length; ++i)
                    if ($util.Long)
                        (message.AdminList[i] = $util.Long.fromValue(object.AdminList[i])).unsigned = true;
                    else if (typeof object.AdminList[i] === "string")
                        message.AdminList[i] = parseInt(object.AdminList[i], 10);
                    else if (typeof object.AdminList[i] === "number")
                        message.AdminList[i] = object.AdminList[i];
                    else if (typeof object.AdminList[i] === "object")
                        message.AdminList[i] = new $util.LongBits(object.AdminList[i].low >>> 0, object.AdminList[i].high >>> 0).toNumber(true);
            }
            if (object.MemberList) {
                if (!Array.isArray(object.MemberList))
                    throw TypeError(".chat.SetupGroupResp.MemberList: array expected");
                message.MemberList = [];
                for (var i = 0; i < object.MemberList.length; ++i)
                    if ($util.Long)
                        (message.MemberList[i] = $util.Long.fromValue(object.MemberList[i])).unsigned = true;
                    else if (typeof object.MemberList[i] === "string")
                        message.MemberList[i] = parseInt(object.MemberList[i], 10);
                    else if (typeof object.MemberList[i] === "number")
                        message.MemberList[i] = object.MemberList[i];
                    else if (typeof object.MemberList[i] === "object")
                        message.MemberList[i] = new $util.LongBits(object.MemberList[i].low >>> 0, object.MemberList[i].high >>> 0).toNumber(true);
            }
            if (object.BannedList) {
                if (!Array.isArray(object.BannedList))
                    throw TypeError(".chat.SetupGroupResp.BannedList: array expected");
                message.BannedList = [];
                for (var i = 0; i < object.BannedList.length; ++i)
                    if ($util.Long)
                        (message.BannedList[i] = $util.Long.fromValue(object.BannedList[i])).unsigned = true;
                    else if (typeof object.BannedList[i] === "string")
                        message.BannedList[i] = parseInt(object.BannedList[i], 10);
                    else if (typeof object.BannedList[i] === "number")
                        message.BannedList[i] = object.BannedList[i];
                    else if (typeof object.BannedList[i] === "object")
                        message.BannedList[i] = new $util.LongBits(object.BannedList[i].low >>> 0, object.BannedList[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        SetupGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AdminList = [];
                object.MemberList = [];
                object.BannedList = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.GroupName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.GroupName != null && message.hasOwnProperty("GroupName"))
                object.GroupName = message.GroupName;
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            if (message.AdminList && message.AdminList.length) {
                object.AdminList = [];
                for (var j = 0; j < message.AdminList.length; ++j)
                    if (typeof message.AdminList[j] === "number")
                        object.AdminList[j] = options.longs === String ? String(message.AdminList[j]) : message.AdminList[j];
                    else
                        object.AdminList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AdminList[j]) : options.longs === Number ? new $util.LongBits(message.AdminList[j].low >>> 0, message.AdminList[j].high >>> 0).toNumber(true) : message.AdminList[j];
            }
            if (message.MemberList && message.MemberList.length) {
                object.MemberList = [];
                for (var j = 0; j < message.MemberList.length; ++j)
                    if (typeof message.MemberList[j] === "number")
                        object.MemberList[j] = options.longs === String ? String(message.MemberList[j]) : message.MemberList[j];
                    else
                        object.MemberList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.MemberList[j]) : options.longs === Number ? new $util.LongBits(message.MemberList[j].low >>> 0, message.MemberList[j].high >>> 0).toNumber(true) : message.MemberList[j];
            }
            if (message.BannedList && message.BannedList.length) {
                object.BannedList = [];
                for (var j = 0; j < message.BannedList.length; ++j)
                    if (typeof message.BannedList[j] === "number")
                        object.BannedList[j] = options.longs === String ? String(message.BannedList[j]) : message.BannedList[j];
                    else
                        object.BannedList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BannedList[j]) : options.longs === Number ? new $util.LongBits(message.BannedList[j].low >>> 0, message.BannedList[j].high >>> 0).toNumber(true) : message.BannedList[j];
            }
            return object;
        };

        SetupGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetupGroupResp;
    })();

    chat.SetupGroupAdmin = (function() {

        function SetupGroupAdmin(properties) {
            this.AdminList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SetupGroupAdmin.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SetupGroupAdmin.prototype.AdminList = $util.emptyArray;

        SetupGroupAdmin.create = function create(properties) {
            return new SetupGroupAdmin(properties);
        };

        SetupGroupAdmin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.AdminList != null && message.AdminList.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.AdminList.length; ++i)
                    writer.uint64(message.AdminList[i]);
                writer.ldelim();
            }
            return writer;
        };

        SetupGroupAdmin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SetupGroupAdmin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SetupGroupAdmin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    if (!(message.AdminList && message.AdminList.length))
                        message.AdminList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AdminList.push(reader.uint64());
                    } else
                        message.AdminList.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SetupGroupAdmin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SetupGroupAdmin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.AdminList != null && message.hasOwnProperty("AdminList")) {
                if (!Array.isArray(message.AdminList))
                    return "AdminList: array expected";
                for (var i = 0; i < message.AdminList.length; ++i)
                    if (!$util.isInteger(message.AdminList[i]) && !(message.AdminList[i] && $util.isInteger(message.AdminList[i].low) && $util.isInteger(message.AdminList[i].high)))
                        return "AdminList: integer|Long[] expected";
            }
            return null;
        };

        SetupGroupAdmin.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SetupGroupAdmin)
                return object;
            var message = new $root.chat.SetupGroupAdmin();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.AdminList) {
                if (!Array.isArray(object.AdminList))
                    throw TypeError(".chat.SetupGroupAdmin.AdminList: array expected");
                message.AdminList = [];
                for (var i = 0; i < object.AdminList.length; ++i)
                    if ($util.Long)
                        (message.AdminList[i] = $util.Long.fromValue(object.AdminList[i])).unsigned = true;
                    else if (typeof object.AdminList[i] === "string")
                        message.AdminList[i] = parseInt(object.AdminList[i], 10);
                    else if (typeof object.AdminList[i] === "number")
                        message.AdminList[i] = object.AdminList[i];
                    else if (typeof object.AdminList[i] === "object")
                        message.AdminList[i] = new $util.LongBits(object.AdminList[i].low >>> 0, object.AdminList[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        SetupGroupAdmin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AdminList = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.AdminList && message.AdminList.length) {
                object.AdminList = [];
                for (var j = 0; j < message.AdminList.length; ++j)
                    if (typeof message.AdminList[j] === "number")
                        object.AdminList[j] = options.longs === String ? String(message.AdminList[j]) : message.AdminList[j];
                    else
                        object.AdminList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AdminList[j]) : options.longs === Number ? new $util.LongBits(message.AdminList[j].low >>> 0, message.AdminList[j].high >>> 0).toNumber(true) : message.AdminList[j];
            }
            return object;
        };

        SetupGroupAdmin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetupGroupAdmin;
    })();

    chat.SetupGroupAdminResp = (function() {

        function SetupGroupAdminResp(properties) {
            this.AdminList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SetupGroupAdminResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SetupGroupAdminResp.prototype.AdminList = $util.emptyArray;
        SetupGroupAdminResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SetupGroupAdminResp.create = function create(properties) {
            return new SetupGroupAdminResp(properties);
        };

        SetupGroupAdminResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.AdminList != null && message.AdminList.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.AdminList.length; ++i)
                    writer.uint64(message.AdminList[i]);
                writer.ldelim();
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            return writer;
        };

        SetupGroupAdminResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SetupGroupAdminResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.SetupGroupAdminResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    if (!(message.AdminList && message.AdminList.length))
                        message.AdminList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AdminList.push(reader.uint64());
                    } else
                        message.AdminList.push(reader.uint64());
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SetupGroupAdminResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SetupGroupAdminResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.AdminList != null && message.hasOwnProperty("AdminList")) {
                if (!Array.isArray(message.AdminList))
                    return "AdminList: array expected";
                for (var i = 0; i < message.AdminList.length; ++i)
                    if (!$util.isInteger(message.AdminList[i]) && !(message.AdminList[i] && $util.isInteger(message.AdminList[i].low) && $util.isInteger(message.AdminList[i].high)))
                        return "AdminList: integer|Long[] expected";
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        SetupGroupAdminResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SetupGroupAdminResp)
                return object;
            var message = new $root.chat.SetupGroupAdminResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.AdminList) {
                if (!Array.isArray(object.AdminList))
                    throw TypeError(".chat.SetupGroupAdminResp.AdminList: array expected");
                message.AdminList = [];
                for (var i = 0; i < object.AdminList.length; ++i)
                    if ($util.Long)
                        (message.AdminList[i] = $util.Long.fromValue(object.AdminList[i])).unsigned = true;
                    else if (typeof object.AdminList[i] === "string")
                        message.AdminList[i] = parseInt(object.AdminList[i], 10);
                    else if (typeof object.AdminList[i] === "number")
                        message.AdminList[i] = object.AdminList[i];
                    else if (typeof object.AdminList[i] === "object")
                        message.AdminList[i] = new $util.LongBits(object.AdminList[i].low >>> 0, object.AdminList[i].high >>> 0).toNumber(true);
            }
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        SetupGroupAdminResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AdminList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.AdminList && message.AdminList.length) {
                object.AdminList = [];
                for (var j = 0; j < message.AdminList.length; ++j)
                    if (typeof message.AdminList[j] === "number")
                        object.AdminList[j] = options.longs === String ? String(message.AdminList[j]) : message.AdminList[j];
                    else
                        object.AdminList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AdminList[j]) : options.longs === Number ? new $util.LongBits(message.AdminList[j].low >>> 0, message.AdminList[j].high >>> 0).toNumber(true) : message.AdminList[j];
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        SetupGroupAdminResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetupGroupAdminResp;
    })();

    chat.CancelGroupAdmin = (function() {

        function CancelGroupAdmin(properties) {
            this.AdminList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CancelGroupAdmin.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        CancelGroupAdmin.prototype.AdminList = $util.emptyArray;

        CancelGroupAdmin.create = function create(properties) {
            return new CancelGroupAdmin(properties);
        };

        CancelGroupAdmin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.AdminList != null && message.AdminList.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.AdminList.length; ++i)
                    writer.uint64(message.AdminList[i]);
                writer.ldelim();
            }
            return writer;
        };

        CancelGroupAdmin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CancelGroupAdmin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.CancelGroupAdmin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    if (!(message.AdminList && message.AdminList.length))
                        message.AdminList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AdminList.push(reader.uint64());
                    } else
                        message.AdminList.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CancelGroupAdmin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CancelGroupAdmin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.AdminList != null && message.hasOwnProperty("AdminList")) {
                if (!Array.isArray(message.AdminList))
                    return "AdminList: array expected";
                for (var i = 0; i < message.AdminList.length; ++i)
                    if (!$util.isInteger(message.AdminList[i]) && !(message.AdminList[i] && $util.isInteger(message.AdminList[i].low) && $util.isInteger(message.AdminList[i].high)))
                        return "AdminList: integer|Long[] expected";
            }
            return null;
        };

        CancelGroupAdmin.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.CancelGroupAdmin)
                return object;
            var message = new $root.chat.CancelGroupAdmin();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.AdminList) {
                if (!Array.isArray(object.AdminList))
                    throw TypeError(".chat.CancelGroupAdmin.AdminList: array expected");
                message.AdminList = [];
                for (var i = 0; i < object.AdminList.length; ++i)
                    if ($util.Long)
                        (message.AdminList[i] = $util.Long.fromValue(object.AdminList[i])).unsigned = true;
                    else if (typeof object.AdminList[i] === "string")
                        message.AdminList[i] = parseInt(object.AdminList[i], 10);
                    else if (typeof object.AdminList[i] === "number")
                        message.AdminList[i] = object.AdminList[i];
                    else if (typeof object.AdminList[i] === "object")
                        message.AdminList[i] = new $util.LongBits(object.AdminList[i].low >>> 0, object.AdminList[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        CancelGroupAdmin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AdminList = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.AdminList && message.AdminList.length) {
                object.AdminList = [];
                for (var j = 0; j < message.AdminList.length; ++j)
                    if (typeof message.AdminList[j] === "number")
                        object.AdminList[j] = options.longs === String ? String(message.AdminList[j]) : message.AdminList[j];
                    else
                        object.AdminList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AdminList[j]) : options.longs === Number ? new $util.LongBits(message.AdminList[j].low >>> 0, message.AdminList[j].high >>> 0).toNumber(true) : message.AdminList[j];
            }
            return object;
        };

        CancelGroupAdmin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelGroupAdmin;
    })();

    chat.CancelGroupAdminResp = (function() {

        function CancelGroupAdminResp(properties) {
            this.AdminList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CancelGroupAdminResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        CancelGroupAdminResp.prototype.AdminList = $util.emptyArray;
        CancelGroupAdminResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CancelGroupAdminResp.create = function create(properties) {
            return new CancelGroupAdminResp(properties);
        };

        CancelGroupAdminResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.AdminList != null && message.AdminList.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.AdminList.length; ++i)
                    writer.uint64(message.AdminList[i]);
                writer.ldelim();
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            return writer;
        };

        CancelGroupAdminResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CancelGroupAdminResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.CancelGroupAdminResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    if (!(message.AdminList && message.AdminList.length))
                        message.AdminList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AdminList.push(reader.uint64());
                    } else
                        message.AdminList.push(reader.uint64());
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CancelGroupAdminResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CancelGroupAdminResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.AdminList != null && message.hasOwnProperty("AdminList")) {
                if (!Array.isArray(message.AdminList))
                    return "AdminList: array expected";
                for (var i = 0; i < message.AdminList.length; ++i)
                    if (!$util.isInteger(message.AdminList[i]) && !(message.AdminList[i] && $util.isInteger(message.AdminList[i].low) && $util.isInteger(message.AdminList[i].high)))
                        return "AdminList: integer|Long[] expected";
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        CancelGroupAdminResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.CancelGroupAdminResp)
                return object;
            var message = new $root.chat.CancelGroupAdminResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.AdminList) {
                if (!Array.isArray(object.AdminList))
                    throw TypeError(".chat.CancelGroupAdminResp.AdminList: array expected");
                message.AdminList = [];
                for (var i = 0; i < object.AdminList.length; ++i)
                    if ($util.Long)
                        (message.AdminList[i] = $util.Long.fromValue(object.AdminList[i])).unsigned = true;
                    else if (typeof object.AdminList[i] === "string")
                        message.AdminList[i] = parseInt(object.AdminList[i], 10);
                    else if (typeof object.AdminList[i] === "number")
                        message.AdminList[i] = object.AdminList[i];
                    else if (typeof object.AdminList[i] === "object")
                        message.AdminList[i] = new $util.LongBits(object.AdminList[i].low >>> 0, object.AdminList[i].high >>> 0).toNumber(true);
            }
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        CancelGroupAdminResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AdminList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.AdminList && message.AdminList.length) {
                object.AdminList = [];
                for (var j = 0; j < message.AdminList.length; ++j)
                    if (typeof message.AdminList[j] === "number")
                        object.AdminList[j] = options.longs === String ? String(message.AdminList[j]) : message.AdminList[j];
                    else
                        object.AdminList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AdminList[j]) : options.longs === Number ? new $util.LongBits(message.AdminList[j].low >>> 0, message.AdminList[j].high >>> 0).toNumber(true) : message.AdminList[j];
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        CancelGroupAdminResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelGroupAdminResp;
    })();

    chat.InviteEnterGroup = (function() {

        function InviteEnterGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        InviteEnterGroup.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        InviteEnterGroup.prototype.GroupName = "";

        InviteEnterGroup.create = function create(properties) {
            return new InviteEnterGroup(properties);
        };

        InviteEnterGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.GroupName != null && message.hasOwnProperty("GroupName"))
                writer.uint32(18).string(message.GroupName);
            return writer;
        };

        InviteEnterGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        InviteEnterGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.InviteEnterGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.GroupName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        InviteEnterGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        InviteEnterGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.GroupName != null && message.hasOwnProperty("GroupName"))
                if (!$util.isString(message.GroupName))
                    return "GroupName: string expected";
            return null;
        };

        InviteEnterGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.InviteEnterGroup)
                return object;
            var message = new $root.chat.InviteEnterGroup();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.GroupName != null)
                message.GroupName = String(object.GroupName);
            return message;
        };

        InviteEnterGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.GroupName = "";
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.GroupName != null && message.hasOwnProperty("GroupName"))
                object.GroupName = message.GroupName;
            return object;
        };

        InviteEnterGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InviteEnterGroup;
    })();

    chat.InviteEnterGroupResp = (function() {

        function InviteEnterGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        InviteEnterGroupResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        InviteEnterGroupResp.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        InviteEnterGroupResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        InviteEnterGroupResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        InviteEnterGroupResp.create = function create(properties) {
            return new InviteEnterGroupResp(properties);
        };

        InviteEnterGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                writer.uint32(16).uint64(message.HostID);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(24).uint64(message.UserID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(32).int64(message.Timestamp);
            return writer;
        };

        InviteEnterGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        InviteEnterGroupResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.InviteEnterGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.HostID = reader.uint64();
                    break;
                case 3:
                    message.UserID = reader.uint64();
                    break;
                case 4:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        InviteEnterGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        InviteEnterGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        InviteEnterGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.InviteEnterGroupResp)
                return object;
            var message = new $root.chat.InviteEnterGroupResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        InviteEnterGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        InviteEnterGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InviteEnterGroupResp;
    })();

    chat.GroupInvite = (function() {

        function GroupInvite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupInvite.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupInvite.prototype.Invite = null;

        GroupInvite.create = function create(properties) {
            return new GroupInvite(properties);
        };

        GroupInvite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.Invite != null && message.hasOwnProperty("Invite"))
                $root.chat.InviteEnterGroup.encode(message.Invite, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GroupInvite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupInvite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupInvite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.Invite = $root.chat.InviteEnterGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupInvite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupInvite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Invite != null && message.hasOwnProperty("Invite")) {
                var error = $root.chat.InviteEnterGroup.verify(message.Invite);
                if (error)
                    return "Invite." + error;
            }
            return null;
        };

        GroupInvite.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupInvite)
                return object;
            var message = new $root.chat.GroupInvite();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Invite != null) {
                if (typeof object.Invite !== "object")
                    throw TypeError(".chat.GroupInvite.Invite: object expected");
                message.Invite = $root.chat.InviteEnterGroup.fromObject(object.Invite);
            }
            return message;
        };

        GroupInvite.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.Invite = null;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Invite != null && message.hasOwnProperty("Invite"))
                object.Invite = $root.chat.InviteEnterGroup.toObject(message.Invite, options);
            return object;
        };

        GroupInvite.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupInvite;
    })();

    chat.GroupInviteResp = (function() {

        function GroupInviteResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupInviteResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupInviteResp.prototype.Resp = null;

        GroupInviteResp.create = function create(properties) {
            return new GroupInviteResp(properties);
        };

        GroupInviteResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                $root.chat.InviteEnterGroupResp.encode(message.Resp, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GroupInviteResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupInviteResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupInviteResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.Resp = $root.chat.InviteEnterGroupResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupInviteResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupInviteResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Resp != null && message.hasOwnProperty("Resp")) {
                var error = $root.chat.InviteEnterGroupResp.verify(message.Resp);
                if (error)
                    return "Resp." + error;
            }
            return null;
        };

        GroupInviteResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupInviteResp)
                return object;
            var message = new $root.chat.GroupInviteResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Resp != null) {
                if (typeof object.Resp !== "object")
                    throw TypeError(".chat.GroupInviteResp.Resp: object expected");
                message.Resp = $root.chat.InviteEnterGroupResp.fromObject(object.Resp);
            }
            return message;
        };

        GroupInviteResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.Resp = null;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                object.Resp = $root.chat.InviteEnterGroupResp.toObject(message.Resp, options);
            return object;
        };

        GroupInviteResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupInviteResp;
    })();

    chat.PrivateInvite = (function() {

        function PrivateInvite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateInvite.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateInvite.prototype.Invite = null;

        PrivateInvite.create = function create(properties) {
            return new PrivateInvite(properties);
        };

        PrivateInvite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(8).uint64(message.TargetId);
            if (message.Invite != null && message.hasOwnProperty("Invite"))
                $root.chat.InviteEnterGroup.encode(message.Invite, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        PrivateInvite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateInvite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateInvite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TargetId = reader.uint64();
                    break;
                case 2:
                    message.Invite = $root.chat.InviteEnterGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateInvite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateInvite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.Invite != null && message.hasOwnProperty("Invite")) {
                var error = $root.chat.InviteEnterGroup.verify(message.Invite);
                if (error)
                    return "Invite." + error;
            }
            return null;
        };

        PrivateInvite.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateInvite)
                return object;
            var message = new $root.chat.PrivateInvite();
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.Invite != null) {
                if (typeof object.Invite !== "object")
                    throw TypeError(".chat.PrivateInvite.Invite: object expected");
                message.Invite = $root.chat.InviteEnterGroup.fromObject(object.Invite);
            }
            return message;
        };

        PrivateInvite.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                object.Invite = null;
            }
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.Invite != null && message.hasOwnProperty("Invite"))
                object.Invite = $root.chat.InviteEnterGroup.toObject(message.Invite, options);
            return object;
        };

        PrivateInvite.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateInvite;
    })();

    chat.PrivateInviteResp = (function() {

        function PrivateInviteResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateInviteResp.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateInviteResp.prototype.Resp = null;

        PrivateInviteResp.create = function create(properties) {
            return new PrivateInviteResp(properties);
        };

        PrivateInviteResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(8).uint64(message.TargetId);
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                $root.chat.InviteEnterGroupResp.encode(message.Resp, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        PrivateInviteResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateInviteResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateInviteResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TargetId = reader.uint64();
                    break;
                case 2:
                    message.Resp = $root.chat.InviteEnterGroupResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateInviteResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateInviteResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.Resp != null && message.hasOwnProperty("Resp")) {
                var error = $root.chat.InviteEnterGroupResp.verify(message.Resp);
                if (error)
                    return "Resp." + error;
            }
            return null;
        };

        PrivateInviteResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateInviteResp)
                return object;
            var message = new $root.chat.PrivateInviteResp();
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.Resp != null) {
                if (typeof object.Resp !== "object")
                    throw TypeError(".chat.PrivateInviteResp.Resp: object expected");
                message.Resp = $root.chat.InviteEnterGroupResp.fromObject(object.Resp);
            }
            return message;
        };

        PrivateInviteResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                object.Resp = null;
            }
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                object.Resp = $root.chat.InviteEnterGroupResp.toObject(message.Resp, options);
            return object;
        };

        PrivateInviteResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateInviteResp;
    })();

    chat.EnterGroup = (function() {

        function EnterGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterGroup.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        EnterGroup.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        EnterGroup.create = function create(properties) {
            return new EnterGroup(properties);
        };

        EnterGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                writer.uint32(16).uint64(message.HostID);
            return writer;
        };

        EnterGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EnterGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.EnterGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.HostID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        EnterGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EnterGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            return null;
        };

        EnterGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.EnterGroup)
                return object;
            var message = new $root.chat.EnterGroup();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            return message;
        };

        EnterGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            return object;
        };

        EnterGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGroup;
    })();

    chat.EnterGroupResp = (function() {

        function EnterGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterGroupResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        EnterGroupResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        EnterGroupResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        EnterGroupResp.create = function create(properties) {
            return new EnterGroupResp(properties);
        };

        EnterGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(16).uint64(message.GroupId);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            return writer;
        };

        EnterGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EnterGroupResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.EnterGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.GroupId = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        EnterGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EnterGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        EnterGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.EnterGroupResp)
                return object;
            var message = new $root.chat.EnterGroupResp();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        EnterGroupResp.toObject = function toObject(message, options) {
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
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        EnterGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGroupResp;
    })();

    chat.GroupChat = (function() {

        function GroupChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupChat.prototype.Type = 0;
        GroupChat.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChat.prototype.Content = $util.newBuffer([]);

        GroupChat.create = function create(properties) {
            return new GroupChat(properties);
        };

        GroupChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(8).uint32(message.Type);
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(16).uint64(message.GroupId);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(26).bytes(message.Content);
            return writer;
        };

        GroupChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.GroupId = reader.uint64();
                    break;
                case 3:
                    message.Content = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!(message.Content && typeof message.Content.length === "number" || $util.isString(message.Content)))
                    return "Content: buffer expected";
            return null;
        };

        GroupChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupChat)
                return object;
            var message = new $root.chat.GroupChat();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Content != null)
                if (typeof object.Content === "string")
                    $util.base64.decode(object.Content, message.Content = $util.newBuffer($util.base64.length(object.Content)), 0);
                else if (object.Content.length)
                    message.Content = object.Content;
            return message;
        };

        GroupChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Content = "";
                else {
                    object.Content = [];
                    if (options.bytes !== Array)
                        object.Content = $util.newBuffer(object.Content);
                }
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = options.bytes === String ? $util.base64.encode(message.Content, 0, message.Content.length) : options.bytes === Array ? Array.prototype.slice.call(message.Content) : message.Content;
            return object;
        };

        GroupChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupChat;
    })();

    chat.GroupChatResp = (function() {

        function GroupChatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupChatResp.prototype.Type = 0;
        GroupChatResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChatResp.prototype.Content = $util.newBuffer([]);
        GroupChatResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GroupChatResp.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupChatResp.create = function create(properties) {
            return new GroupChatResp(properties);
        };

        GroupChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(8).uint32(message.Type);
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(16).uint64(message.GroupId);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(26).bytes(message.Content);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(32).int64(message.Timestamp);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                writer.uint32(40).uint64(message.SenderID);
            return writer;
        };

        GroupChatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupChatResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupChatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.GroupId = reader.uint64();
                    break;
                case 3:
                    message.Content = reader.bytes();
                    break;
                case 4:
                    message.Timestamp = reader.int64();
                    break;
                case 5:
                    message.SenderID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupChatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupChatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!(message.Content && typeof message.Content.length === "number" || $util.isString(message.Content)))
                    return "Content: buffer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (!$util.isInteger(message.SenderID) && !(message.SenderID && $util.isInteger(message.SenderID.low) && $util.isInteger(message.SenderID.high)))
                    return "SenderID: integer|Long expected";
            return null;
        };

        GroupChatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupChatResp)
                return object;
            var message = new $root.chat.GroupChatResp();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Content != null)
                if (typeof object.Content === "string")
                    $util.base64.decode(object.Content, message.Content = $util.newBuffer($util.base64.length(object.Content)), 0);
                else if (object.Content.length)
                    message.Content = object.Content;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            if (object.SenderID != null)
                if ($util.Long)
                    (message.SenderID = $util.Long.fromValue(object.SenderID)).unsigned = true;
                else if (typeof object.SenderID === "string")
                    message.SenderID = parseInt(object.SenderID, 10);
                else if (typeof object.SenderID === "number")
                    message.SenderID = object.SenderID;
                else if (typeof object.SenderID === "object")
                    message.SenderID = new $util.LongBits(object.SenderID.low >>> 0, object.SenderID.high >>> 0).toNumber(true);
            return message;
        };

        GroupChatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Content = "";
                else {
                    object.Content = [];
                    if (options.bytes !== Array)
                        object.Content = $util.newBuffer(object.Content);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SenderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderID = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = options.bytes === String ? $util.base64.encode(message.Content, 0, message.Content.length) : options.bytes === Array ? Array.prototype.slice.call(message.Content) : message.Content;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber(true) : message.SenderID;
            return object;
        };

        GroupChatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupChatResp;
    })();

    chat.GroupSendReward = (function() {

        function GroupSendReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupSendReward.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupSendReward.prototype.SendReward = null;

        GroupSendReward.create = function create(properties) {
            return new GroupSendReward(properties);
        };

        GroupSendReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.SendReward != null && message.hasOwnProperty("SendReward"))
                $root.luck.SendReward.encode(message.SendReward, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GroupSendReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupSendReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupSendReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.SendReward = $root.luck.SendReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupSendReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupSendReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.SendReward != null && message.hasOwnProperty("SendReward")) {
                var error = $root.luck.SendReward.verify(message.SendReward);
                if (error)
                    return "SendReward." + error;
            }
            return null;
        };

        GroupSendReward.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupSendReward)
                return object;
            var message = new $root.chat.GroupSendReward();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.SendReward != null) {
                if (typeof object.SendReward !== "object")
                    throw TypeError(".chat.GroupSendReward.SendReward: object expected");
                message.SendReward = $root.luck.SendReward.fromObject(object.SendReward);
            }
            return message;
        };

        GroupSendReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.SendReward = null;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.SendReward != null && message.hasOwnProperty("SendReward"))
                object.SendReward = $root.luck.SendReward.toObject(message.SendReward, options);
            return object;
        };

        GroupSendReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupSendReward;
    })();

    chat.GroupSendRewardResp = (function() {

        function GroupSendRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupSendRewardResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupSendRewardResp.prototype.Resp = null;

        GroupSendRewardResp.create = function create(properties) {
            return new GroupSendRewardResp(properties);
        };

        GroupSendRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                $root.luck.SendRewardResp.encode(message.Resp, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GroupSendRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupSendRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupSendRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.Resp = $root.luck.SendRewardResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupSendRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupSendRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Resp != null && message.hasOwnProperty("Resp")) {
                var error = $root.luck.SendRewardResp.verify(message.Resp);
                if (error)
                    return "Resp." + error;
            }
            return null;
        };

        GroupSendRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupSendRewardResp)
                return object;
            var message = new $root.chat.GroupSendRewardResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Resp != null) {
                if (typeof object.Resp !== "object")
                    throw TypeError(".chat.GroupSendRewardResp.Resp: object expected");
                message.Resp = $root.luck.SendRewardResp.fromObject(object.Resp);
            }
            return message;
        };

        GroupSendRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.Resp = null;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                object.Resp = $root.luck.SendRewardResp.toObject(message.Resp, options);
            return object;
        };

        GroupSendRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupSendRewardResp;
    })();

    chat.GroupGetReward = (function() {

        function GroupGetReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupGetReward.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupGetReward.prototype.GetReward = null;

        GroupGetReward.create = function create(properties) {
            return new GroupGetReward(properties);
        };

        GroupGetReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.GetReward != null && message.hasOwnProperty("GetReward"))
                $root.luck.GetReward.encode(message.GetReward, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GroupGetReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupGetReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupGetReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.GetReward = $root.luck.GetReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupGetReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupGetReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.GetReward != null && message.hasOwnProperty("GetReward")) {
                var error = $root.luck.GetReward.verify(message.GetReward);
                if (error)
                    return "GetReward." + error;
            }
            return null;
        };

        GroupGetReward.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupGetReward)
                return object;
            var message = new $root.chat.GroupGetReward();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.GetReward != null) {
                if (typeof object.GetReward !== "object")
                    throw TypeError(".chat.GroupGetReward.GetReward: object expected");
                message.GetReward = $root.luck.GetReward.fromObject(object.GetReward);
            }
            return message;
        };

        GroupGetReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.GetReward = null;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.GetReward != null && message.hasOwnProperty("GetReward"))
                object.GetReward = $root.luck.GetReward.toObject(message.GetReward, options);
            return object;
        };

        GroupGetReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupGetReward;
    })();

    chat.GroupGetRewardResp = (function() {

        function GroupGetRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupGetRewardResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupGetRewardResp.prototype.Resp = null;

        GroupGetRewardResp.create = function create(properties) {
            return new GroupGetRewardResp(properties);
        };

        GroupGetRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                $root.luck.GetRewardResp.encode(message.Resp, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GroupGetRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupGetRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupGetRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.Resp = $root.luck.GetRewardResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupGetRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupGetRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Resp != null && message.hasOwnProperty("Resp")) {
                var error = $root.luck.GetRewardResp.verify(message.Resp);
                if (error)
                    return "Resp." + error;
            }
            return null;
        };

        GroupGetRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupGetRewardResp)
                return object;
            var message = new $root.chat.GroupGetRewardResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Resp != null) {
                if (typeof object.Resp !== "object")
                    throw TypeError(".chat.GroupGetRewardResp.Resp: object expected");
                message.Resp = $root.luck.GetRewardResp.fromObject(object.Resp);
            }
            return message;
        };

        GroupGetRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.Resp = null;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                object.Resp = $root.luck.GetRewardResp.toObject(message.Resp, options);
            return object;
        };

        GroupGetRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupGetRewardResp;
    })();

    chat.PrivateSendReward = (function() {

        function PrivateSendReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateSendReward.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateSendReward.prototype.SendReward = null;

        PrivateSendReward.create = function create(properties) {
            return new PrivateSendReward(properties);
        };

        PrivateSendReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(8).uint64(message.TargetId);
            if (message.SendReward != null && message.hasOwnProperty("SendReward"))
                $root.luck.SendReward.encode(message.SendReward, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        PrivateSendReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateSendReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateSendReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TargetId = reader.uint64();
                    break;
                case 2:
                    message.SendReward = $root.luck.SendReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateSendReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateSendReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.SendReward != null && message.hasOwnProperty("SendReward")) {
                var error = $root.luck.SendReward.verify(message.SendReward);
                if (error)
                    return "SendReward." + error;
            }
            return null;
        };

        PrivateSendReward.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateSendReward)
                return object;
            var message = new $root.chat.PrivateSendReward();
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.SendReward != null) {
                if (typeof object.SendReward !== "object")
                    throw TypeError(".chat.PrivateSendReward.SendReward: object expected");
                message.SendReward = $root.luck.SendReward.fromObject(object.SendReward);
            }
            return message;
        };

        PrivateSendReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                object.SendReward = null;
            }
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.SendReward != null && message.hasOwnProperty("SendReward"))
                object.SendReward = $root.luck.SendReward.toObject(message.SendReward, options);
            return object;
        };

        PrivateSendReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateSendReward;
    })();

    chat.PrivateSendRewardResp = (function() {

        function PrivateSendRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateSendRewardResp.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateSendRewardResp.prototype.Resp = null;

        PrivateSendRewardResp.create = function create(properties) {
            return new PrivateSendRewardResp(properties);
        };

        PrivateSendRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(8).uint64(message.TargetId);
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                $root.luck.SendRewardResp.encode(message.Resp, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        PrivateSendRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateSendRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateSendRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TargetId = reader.uint64();
                    break;
                case 2:
                    message.Resp = $root.luck.SendRewardResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateSendRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateSendRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.Resp != null && message.hasOwnProperty("Resp")) {
                var error = $root.luck.SendRewardResp.verify(message.Resp);
                if (error)
                    return "Resp." + error;
            }
            return null;
        };

        PrivateSendRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateSendRewardResp)
                return object;
            var message = new $root.chat.PrivateSendRewardResp();
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.Resp != null) {
                if (typeof object.Resp !== "object")
                    throw TypeError(".chat.PrivateSendRewardResp.Resp: object expected");
                message.Resp = $root.luck.SendRewardResp.fromObject(object.Resp);
            }
            return message;
        };

        PrivateSendRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                object.Resp = null;
            }
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                object.Resp = $root.luck.SendRewardResp.toObject(message.Resp, options);
            return object;
        };

        PrivateSendRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateSendRewardResp;
    })();

    chat.PrivateGetReward = (function() {

        function PrivateGetReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateGetReward.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateGetReward.prototype.GetReward = null;

        PrivateGetReward.create = function create(properties) {
            return new PrivateGetReward(properties);
        };

        PrivateGetReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(8).uint64(message.TargetId);
            if (message.GetReward != null && message.hasOwnProperty("GetReward"))
                $root.luck.GetReward.encode(message.GetReward, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        PrivateGetReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateGetReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateGetReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TargetId = reader.uint64();
                    break;
                case 2:
                    message.GetReward = $root.luck.GetReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateGetReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateGetReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.GetReward != null && message.hasOwnProperty("GetReward")) {
                var error = $root.luck.GetReward.verify(message.GetReward);
                if (error)
                    return "GetReward." + error;
            }
            return null;
        };

        PrivateGetReward.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateGetReward)
                return object;
            var message = new $root.chat.PrivateGetReward();
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.GetReward != null) {
                if (typeof object.GetReward !== "object")
                    throw TypeError(".chat.PrivateGetReward.GetReward: object expected");
                message.GetReward = $root.luck.GetReward.fromObject(object.GetReward);
            }
            return message;
        };

        PrivateGetReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                object.GetReward = null;
            }
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.GetReward != null && message.hasOwnProperty("GetReward"))
                object.GetReward = $root.luck.GetReward.toObject(message.GetReward, options);
            return object;
        };

        PrivateGetReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateGetReward;
    })();

    chat.PrivateGetRewardResp = (function() {

        function PrivateGetRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateGetRewardResp.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateGetRewardResp.prototype.Resp = null;

        PrivateGetRewardResp.create = function create(properties) {
            return new PrivateGetRewardResp(properties);
        };

        PrivateGetRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(8).uint64(message.TargetId);
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                $root.luck.GetRewardResp.encode(message.Resp, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        PrivateGetRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateGetRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateGetRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TargetId = reader.uint64();
                    break;
                case 2:
                    message.Resp = $root.luck.GetRewardResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateGetRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateGetRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.Resp != null && message.hasOwnProperty("Resp")) {
                var error = $root.luck.GetRewardResp.verify(message.Resp);
                if (error)
                    return "Resp." + error;
            }
            return null;
        };

        PrivateGetRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateGetRewardResp)
                return object;
            var message = new $root.chat.PrivateGetRewardResp();
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.Resp != null) {
                if (typeof object.Resp !== "object")
                    throw TypeError(".chat.PrivateGetRewardResp.Resp: object expected");
                message.Resp = $root.luck.GetRewardResp.fromObject(object.Resp);
            }
            return message;
        };

        PrivateGetRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                object.Resp = null;
            }
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.Resp != null && message.hasOwnProperty("Resp"))
                object.Resp = $root.luck.GetRewardResp.toObject(message.Resp, options);
            return object;
        };

        PrivateGetRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateGetRewardResp;
    })();

    chat.PrivateChat = (function() {

        function PrivateChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateChat.prototype.Type = 0;
        PrivateChat.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateChat.prototype.Content = $util.newBuffer([]);

        PrivateChat.create = function create(properties) {
            return new PrivateChat(properties);
        };

        PrivateChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(8).uint32(message.Type);
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(16).uint64(message.TargetId);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(26).bytes(message.Content);
            return writer;
        };

        PrivateChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.TargetId = reader.uint64();
                    break;
                case 3:
                    message.Content = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!(message.Content && typeof message.Content.length === "number" || $util.isString(message.Content)))
                    return "Content: buffer expected";
            return null;
        };

        PrivateChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateChat)
                return object;
            var message = new $root.chat.PrivateChat();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.Content != null)
                if (typeof object.Content === "string")
                    $util.base64.decode(object.Content, message.Content = $util.newBuffer($util.base64.length(object.Content)), 0);
                else if (object.Content.length)
                    message.Content = object.Content;
            return message;
        };

        PrivateChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Content = "";
                else {
                    object.Content = [];
                    if (options.bytes !== Array)
                        object.Content = $util.newBuffer(object.Content);
                }
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = options.bytes === String ? $util.base64.encode(message.Content, 0, message.Content.length) : options.bytes === Array ? Array.prototype.slice.call(message.Content) : message.Content;
            return object;
        };

        PrivateChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateChat;
    })();

    chat.PrivateChatResp = (function() {

        function PrivateChatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateChatResp.prototype.Type = 0;
        PrivateChatResp.prototype.Content = $util.newBuffer([]);
        PrivateChatResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PrivateChatResp.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        PrivateChatResp.create = function create(properties) {
            return new PrivateChatResp(properties);
        };

        PrivateChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(8).uint32(message.Type);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(18).bytes(message.Content);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                writer.uint32(32).uint64(message.SenderID);
            return writer;
        };

        PrivateChatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PrivateChatResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.PrivateChatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.Content = reader.bytes();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                case 4:
                    message.SenderID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PrivateChatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PrivateChatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!(message.Content && typeof message.Content.length === "number" || $util.isString(message.Content)))
                    return "Content: buffer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (!$util.isInteger(message.SenderID) && !(message.SenderID && $util.isInteger(message.SenderID.low) && $util.isInteger(message.SenderID.high)))
                    return "SenderID: integer|Long expected";
            return null;
        };

        PrivateChatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateChatResp)
                return object;
            var message = new $root.chat.PrivateChatResp();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Content != null)
                if (typeof object.Content === "string")
                    $util.base64.decode(object.Content, message.Content = $util.newBuffer($util.base64.length(object.Content)), 0);
                else if (object.Content.length)
                    message.Content = object.Content;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            if (object.SenderID != null)
                if ($util.Long)
                    (message.SenderID = $util.Long.fromValue(object.SenderID)).unsigned = true;
                else if (typeof object.SenderID === "string")
                    message.SenderID = parseInt(object.SenderID, 10);
                else if (typeof object.SenderID === "number")
                    message.SenderID = object.SenderID;
                else if (typeof object.SenderID === "object")
                    message.SenderID = new $util.LongBits(object.SenderID.low >>> 0, object.SenderID.high >>> 0).toNumber(true);
            return message;
        };

        PrivateChatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                if (options.bytes === String)
                    object.Content = "";
                else {
                    object.Content = [];
                    if (options.bytes !== Array)
                        object.Content = $util.newBuffer(object.Content);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SenderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderID = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = options.bytes === String ? $util.base64.encode(message.Content, 0, message.Content.length) : options.bytes === Array ? Array.prototype.slice.call(message.Content) : message.Content;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber(true) : message.SenderID;
            return object;
        };

        PrivateChatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateChatResp;
    })();

    chat.GroupAddPerson = (function() {

        function GroupAddPerson(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupAddPerson.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupAddPerson.prototype.MemID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupAddPerson.create = function create(properties) {
            return new GroupAddPerson(properties);
        };

        GroupAddPerson.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                writer.uint32(16).uint64(message.MemID);
            return writer;
        };

        GroupAddPerson.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupAddPerson.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupAddPerson();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.MemID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupAddPerson.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupAddPerson.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (!$util.isInteger(message.MemID) && !(message.MemID && $util.isInteger(message.MemID.low) && $util.isInteger(message.MemID.high)))
                    return "MemID: integer|Long expected";
            return null;
        };

        GroupAddPerson.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupAddPerson)
                return object;
            var message = new $root.chat.GroupAddPerson();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.MemID != null)
                if ($util.Long)
                    (message.MemID = $util.Long.fromValue(object.MemID)).unsigned = true;
                else if (typeof object.MemID === "string")
                    message.MemID = parseInt(object.MemID, 10);
                else if (typeof object.MemID === "number")
                    message.MemID = object.MemID;
                else if (typeof object.MemID === "object")
                    message.MemID = new $util.LongBits(object.MemID.low >>> 0, object.MemID.high >>> 0).toNumber(true);
            return message;
        };

        GroupAddPerson.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MemID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MemID = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (typeof message.MemID === "number")
                    object.MemID = options.longs === String ? String(message.MemID) : message.MemID;
                else
                    object.MemID = options.longs === String ? $util.Long.prototype.toString.call(message.MemID) : options.longs === Number ? new $util.LongBits(message.MemID.low >>> 0, message.MemID.high >>> 0).toNumber(true) : message.MemID;
            return object;
        };

        GroupAddPerson.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupAddPerson;
    })();

    chat.GroupAddPersonResp = (function() {

        function GroupAddPersonResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupAddPersonResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupAddPersonResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupAddPersonResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GroupAddPersonResp.prototype.MemID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupAddPersonResp.create = function create(properties) {
            return new GroupAddPersonResp(properties);
        };

        GroupAddPersonResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(16).uint64(message.UserID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                writer.uint32(32).uint64(message.MemID);
            return writer;
        };

        GroupAddPersonResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupAddPersonResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupAddPersonResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                case 4:
                    message.MemID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupAddPersonResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupAddPersonResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (!$util.isInteger(message.MemID) && !(message.MemID && $util.isInteger(message.MemID.low) && $util.isInteger(message.MemID.high)))
                    return "MemID: integer|Long expected";
            return null;
        };

        GroupAddPersonResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupAddPersonResp)
                return object;
            var message = new $root.chat.GroupAddPersonResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            if (object.MemID != null)
                if ($util.Long)
                    (message.MemID = $util.Long.fromValue(object.MemID)).unsigned = true;
                else if (typeof object.MemID === "string")
                    message.MemID = parseInt(object.MemID, 10);
                else if (typeof object.MemID === "number")
                    message.MemID = object.MemID;
                else if (typeof object.MemID === "object")
                    message.MemID = new $util.LongBits(object.MemID.low >>> 0, object.MemID.high >>> 0).toNumber(true);
            return message;
        };

        GroupAddPersonResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MemID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MemID = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (typeof message.MemID === "number")
                    object.MemID = options.longs === String ? String(message.MemID) : message.MemID;
                else
                    object.MemID = options.longs === String ? $util.Long.prototype.toString.call(message.MemID) : options.longs === Number ? new $util.LongBits(message.MemID.low >>> 0, message.MemID.high >>> 0).toNumber(true) : message.MemID;
            return object;
        };

        GroupAddPersonResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupAddPersonResp;
    })();

    chat.GroupDelPerson = (function() {

        function GroupDelPerson(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupDelPerson.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupDelPerson.prototype.MemID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupDelPerson.create = function create(properties) {
            return new GroupDelPerson(properties);
        };

        GroupDelPerson.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                writer.uint32(16).uint64(message.MemID);
            return writer;
        };

        GroupDelPerson.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupDelPerson.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupDelPerson();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.MemID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupDelPerson.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupDelPerson.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (!$util.isInteger(message.MemID) && !(message.MemID && $util.isInteger(message.MemID.low) && $util.isInteger(message.MemID.high)))
                    return "MemID: integer|Long expected";
            return null;
        };

        GroupDelPerson.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupDelPerson)
                return object;
            var message = new $root.chat.GroupDelPerson();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.MemID != null)
                if ($util.Long)
                    (message.MemID = $util.Long.fromValue(object.MemID)).unsigned = true;
                else if (typeof object.MemID === "string")
                    message.MemID = parseInt(object.MemID, 10);
                else if (typeof object.MemID === "number")
                    message.MemID = object.MemID;
                else if (typeof object.MemID === "object")
                    message.MemID = new $util.LongBits(object.MemID.low >>> 0, object.MemID.high >>> 0).toNumber(true);
            return message;
        };

        GroupDelPerson.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MemID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MemID = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (typeof message.MemID === "number")
                    object.MemID = options.longs === String ? String(message.MemID) : message.MemID;
                else
                    object.MemID = options.longs === String ? $util.Long.prototype.toString.call(message.MemID) : options.longs === Number ? new $util.LongBits(message.MemID.low >>> 0, message.MemID.high >>> 0).toNumber(true) : message.MemID;
            return object;
        };

        GroupDelPerson.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupDelPerson;
    })();

    chat.GroupDelPersonResp = (function() {

        function GroupDelPersonResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupDelPersonResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupDelPersonResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupDelPersonResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GroupDelPersonResp.prototype.MemID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupDelPersonResp.create = function create(properties) {
            return new GroupDelPersonResp(properties);
        };

        GroupDelPersonResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(16).uint64(message.UserID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                writer.uint32(32).uint64(message.MemID);
            return writer;
        };

        GroupDelPersonResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupDelPersonResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupDelPersonResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                case 4:
                    message.MemID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupDelPersonResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupDelPersonResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (!$util.isInteger(message.MemID) && !(message.MemID && $util.isInteger(message.MemID.low) && $util.isInteger(message.MemID.high)))
                    return "MemID: integer|Long expected";
            return null;
        };

        GroupDelPersonResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupDelPersonResp)
                return object;
            var message = new $root.chat.GroupDelPersonResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            if (object.MemID != null)
                if ($util.Long)
                    (message.MemID = $util.Long.fromValue(object.MemID)).unsigned = true;
                else if (typeof object.MemID === "string")
                    message.MemID = parseInt(object.MemID, 10);
                else if (typeof object.MemID === "number")
                    message.MemID = object.MemID;
                else if (typeof object.MemID === "object")
                    message.MemID = new $util.LongBits(object.MemID.low >>> 0, object.MemID.high >>> 0).toNumber(true);
            return message;
        };

        GroupDelPersonResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MemID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MemID = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (typeof message.MemID === "number")
                    object.MemID = options.longs === String ? String(message.MemID) : message.MemID;
                else
                    object.MemID = options.longs === String ? $util.Long.prototype.toString.call(message.MemID) : options.longs === Number ? new $util.LongBits(message.MemID.low >>> 0, message.MemID.high >>> 0).toNumber(true) : message.MemID;
            return object;
        };

        GroupDelPersonResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupDelPersonResp;
    })();

    chat.GroupBanned = (function() {

        function GroupBanned(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupBanned.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupBanned.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupBanned.prototype.IsBanned = false;

        GroupBanned.create = function create(properties) {
            return new GroupBanned(properties);
        };

        GroupBanned.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(16).uint64(message.UserID);
            if (message.IsBanned != null && message.hasOwnProperty("IsBanned"))
                writer.uint32(24).bool(message.IsBanned);
            return writer;
        };

        GroupBanned.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupBanned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupBanned();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.IsBanned = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupBanned.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupBanned.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsBanned != null && message.hasOwnProperty("IsBanned"))
                if (typeof message.IsBanned !== "boolean")
                    return "IsBanned: boolean expected";
            return null;
        };

        GroupBanned.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupBanned)
                return object;
            var message = new $root.chat.GroupBanned();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.IsBanned != null)
                message.IsBanned = Boolean(object.IsBanned);
            return message;
        };

        GroupBanned.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsBanned = false;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.IsBanned != null && message.hasOwnProperty("IsBanned"))
                object.IsBanned = message.IsBanned;
            return object;
        };

        GroupBanned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupBanned;
    })();

    chat.GroupBannedResp = (function() {

        function GroupBannedResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupBannedResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupBannedResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupBannedResp.prototype.IsBanned = false;
        GroupBannedResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GroupBannedResp.prototype.MemID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupBannedResp.create = function create(properties) {
            return new GroupBannedResp(properties);
        };

        GroupBannedResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(16).uint64(message.UserID);
            if (message.IsBanned != null && message.hasOwnProperty("IsBanned"))
                writer.uint32(24).bool(message.IsBanned);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(32).int64(message.Timestamp);
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                writer.uint32(40).uint64(message.MemID);
            return writer;
        };

        GroupBannedResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupBannedResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupBannedResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.IsBanned = reader.bool();
                    break;
                case 4:
                    message.Timestamp = reader.int64();
                    break;
                case 5:
                    message.MemID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupBannedResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupBannedResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsBanned != null && message.hasOwnProperty("IsBanned"))
                if (typeof message.IsBanned !== "boolean")
                    return "IsBanned: boolean expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (!$util.isInteger(message.MemID) && !(message.MemID && $util.isInteger(message.MemID.low) && $util.isInteger(message.MemID.high)))
                    return "MemID: integer|Long expected";
            return null;
        };

        GroupBannedResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupBannedResp)
                return object;
            var message = new $root.chat.GroupBannedResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.IsBanned != null)
                message.IsBanned = Boolean(object.IsBanned);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            if (object.MemID != null)
                if ($util.Long)
                    (message.MemID = $util.Long.fromValue(object.MemID)).unsigned = true;
                else if (typeof object.MemID === "string")
                    message.MemID = parseInt(object.MemID, 10);
                else if (typeof object.MemID === "number")
                    message.MemID = object.MemID;
                else if (typeof object.MemID === "object")
                    message.MemID = new $util.LongBits(object.MemID.low >>> 0, object.MemID.high >>> 0).toNumber(true);
            return message;
        };

        GroupBannedResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsBanned = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MemID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MemID = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.IsBanned != null && message.hasOwnProperty("IsBanned"))
                object.IsBanned = message.IsBanned;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            if (message.MemID != null && message.hasOwnProperty("MemID"))
                if (typeof message.MemID === "number")
                    object.MemID = options.longs === String ? String(message.MemID) : message.MemID;
                else
                    object.MemID = options.longs === String ? $util.Long.prototype.toString.call(message.MemID) : options.longs === Number ? new $util.LongBits(message.MemID.low >>> 0, message.MemID.high >>> 0).toNumber(true) : message.MemID;
            return object;
        };

        GroupBannedResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupBannedResp;
    })();

    chat.GroupQuit = (function() {

        function GroupQuit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupQuit.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupQuit.create = function create(properties) {
            return new GroupQuit(properties);
        };

        GroupQuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            return writer;
        };

        GroupQuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupQuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupQuit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupQuit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupQuit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            return null;
        };

        GroupQuit.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupQuit)
                return object;
            var message = new $root.chat.GroupQuit();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            return message;
        };

        GroupQuit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            return object;
        };

        GroupQuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupQuit;
    })();

    chat.GroupQuitResp = (function() {

        function GroupQuitResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupQuitResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupQuitResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupQuitResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GroupQuitResp.create = function create(properties) {
            return new GroupQuitResp(properties);
        };

        GroupQuitResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(16).uint64(message.UserID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            return writer;
        };

        GroupQuitResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupQuitResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupQuitResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupQuitResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupQuitResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        GroupQuitResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupQuitResp)
                return object;
            var message = new $root.chat.GroupQuitResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        GroupQuitResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        GroupQuitResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupQuitResp;
    })();

    chat.GroupDismiss = (function() {

        function GroupDismiss(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupDismiss.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupDismiss.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GroupDismiss.create = function create(properties) {
            return new GroupDismiss(properties);
        };

        GroupDismiss.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(16).int64(message.Timestamp);
            return writer;
        };

        GroupDismiss.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupDismiss.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupDismiss();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupDismiss.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupDismiss.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        GroupDismiss.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupDismiss)
                return object;
            var message = new $root.chat.GroupDismiss();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        GroupDismiss.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        GroupDismiss.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupDismiss;
    })();

    chat.GroupDismissResp = (function() {

        function GroupDismissResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupDismissResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupDismissResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupDismissResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GroupDismissResp.create = function create(properties) {
            return new GroupDismissResp(properties);
        };

        GroupDismissResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(16).uint64(message.UserID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            return writer;
        };

        GroupDismissResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupDismissResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupDismissResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupDismissResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupDismissResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        GroupDismissResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupDismissResp)
                return object;
            var message = new $root.chat.GroupDismissResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        GroupDismissResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        GroupDismissResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupDismissResp;
    })();

    chat.GroupChangeHost = (function() {

        function GroupChangeHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupChangeHost.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChangeHost.prototype.OldID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChangeHost.prototype.NewID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupChangeHost.create = function create(properties) {
            return new GroupChangeHost(properties);
        };

        GroupChangeHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.OldID != null && message.hasOwnProperty("OldID"))
                writer.uint32(16).uint64(message.OldID);
            if (message.NewID != null && message.hasOwnProperty("NewID"))
                writer.uint32(24).uint64(message.NewID);
            return writer;
        };

        GroupChangeHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupChangeHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupChangeHost();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.OldID = reader.uint64();
                    break;
                case 3:
                    message.NewID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupChangeHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupChangeHost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.OldID != null && message.hasOwnProperty("OldID"))
                if (!$util.isInteger(message.OldID) && !(message.OldID && $util.isInteger(message.OldID.low) && $util.isInteger(message.OldID.high)))
                    return "OldID: integer|Long expected";
            if (message.NewID != null && message.hasOwnProperty("NewID"))
                if (!$util.isInteger(message.NewID) && !(message.NewID && $util.isInteger(message.NewID.low) && $util.isInteger(message.NewID.high)))
                    return "NewID: integer|Long expected";
            return null;
        };

        GroupChangeHost.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupChangeHost)
                return object;
            var message = new $root.chat.GroupChangeHost();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.OldID != null)
                if ($util.Long)
                    (message.OldID = $util.Long.fromValue(object.OldID)).unsigned = true;
                else if (typeof object.OldID === "string")
                    message.OldID = parseInt(object.OldID, 10);
                else if (typeof object.OldID === "number")
                    message.OldID = object.OldID;
                else if (typeof object.OldID === "object")
                    message.OldID = new $util.LongBits(object.OldID.low >>> 0, object.OldID.high >>> 0).toNumber(true);
            if (object.NewID != null)
                if ($util.Long)
                    (message.NewID = $util.Long.fromValue(object.NewID)).unsigned = true;
                else if (typeof object.NewID === "string")
                    message.NewID = parseInt(object.NewID, 10);
                else if (typeof object.NewID === "number")
                    message.NewID = object.NewID;
                else if (typeof object.NewID === "object")
                    message.NewID = new $util.LongBits(object.NewID.low >>> 0, object.NewID.high >>> 0).toNumber(true);
            return message;
        };

        GroupChangeHost.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.OldID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OldID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.NewID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NewID = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.OldID != null && message.hasOwnProperty("OldID"))
                if (typeof message.OldID === "number")
                    object.OldID = options.longs === String ? String(message.OldID) : message.OldID;
                else
                    object.OldID = options.longs === String ? $util.Long.prototype.toString.call(message.OldID) : options.longs === Number ? new $util.LongBits(message.OldID.low >>> 0, message.OldID.high >>> 0).toNumber(true) : message.OldID;
            if (message.NewID != null && message.hasOwnProperty("NewID"))
                if (typeof message.NewID === "number")
                    object.NewID = options.longs === String ? String(message.NewID) : message.NewID;
                else
                    object.NewID = options.longs === String ? $util.Long.prototype.toString.call(message.NewID) : options.longs === Number ? new $util.LongBits(message.NewID.low >>> 0, message.NewID.high >>> 0).toNumber(true) : message.NewID;
            return object;
        };

        GroupChangeHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupChangeHost;
    })();

    chat.GroupChangeHostResp = (function() {

        function GroupChangeHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupChangeHostResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChangeHostResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChangeHostResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GroupChangeHostResp.create = function create(properties) {
            return new GroupChangeHostResp(properties);
        };

        GroupChangeHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(16).uint64(message.UserID);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(24).int64(message.Timestamp);
            return writer;
        };

        GroupChangeHostResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupChangeHostResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GroupChangeHostResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupChangeHostResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupChangeHostResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        GroupChangeHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupChangeHostResp)
                return object;
            var message = new $root.chat.GroupChangeHostResp();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = false;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber();
            return message;
        };

        GroupChangeHostResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber() : message.Timestamp;
            return object;
        };

        GroupChangeHostResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupChangeHostResp;
    })();

    return chat;
})();

$root.luck = (function() {

    var luck = {};

    luck.SendReward = (function() {

        function SendReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SendReward.prototype.Type = 0;
        SendReward.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendReward.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SendReward.create = function create(properties) {
            return new SendReward(properties);
        };

        SendReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(8).int32(message.Type);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(16).int64(message.Count);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(24).int64(message.Money);
            return writer;
        };

        SendReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SendReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.SendReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Count = reader.int64();
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

        SendReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SendReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        SendReward.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.SendReward)
                return object;
            var message = new $root.luck.SendReward();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
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

        SendReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        SendReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendReward;
    })();

    luck.SendRewardResp = (function() {

        function SendRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SendRewardResp.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.Type = 0;
        SendRewardResp.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SendRewardResp.prototype.StartTimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.WaitTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SendRewardResp.create = function create(properties) {
            return new SendRewardResp(properties);
        };

        SendRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(8).int64(message.ID);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(16).int32(message.Type);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(24).int64(message.Count);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(32).int64(message.Money);
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                writer.uint32(40).int64(message.TimeStamp);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                writer.uint32(48).uint64(message.SenderID);
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                writer.uint32(56).int64(message.StartTimeStamp);
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                writer.uint32(64).int64(message.WaitTime);
            return writer;
        };

        SendRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SendRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.SendRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.Type = reader.int32();
                    break;
                case 3:
                    message.Count = reader.int64();
                    break;
                case 4:
                    message.Money = reader.int64();
                    break;
                case 5:
                    message.TimeStamp = reader.int64();
                    break;
                case 6:
                    message.SenderID = reader.uint64();
                    break;
                case 7:
                    message.StartTimeStamp = reader.int64();
                    break;
                case 8:
                    message.WaitTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SendRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SendRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (!$util.isInteger(message.SenderID) && !(message.SenderID && $util.isInteger(message.SenderID.low) && $util.isInteger(message.SenderID.high)))
                    return "SenderID: integer|Long expected";
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (!$util.isInteger(message.StartTimeStamp) && !(message.StartTimeStamp && $util.isInteger(message.StartTimeStamp.low) && $util.isInteger(message.StartTimeStamp.high)))
                    return "StartTimeStamp: integer|Long expected";
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (!$util.isInteger(message.WaitTime) && !(message.WaitTime && $util.isInteger(message.WaitTime.low) && $util.isInteger(message.WaitTime.high)))
                    return "WaitTime: integer|Long expected";
            return null;
        };

        SendRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.SendRewardResp)
                return object;
            var message = new $root.luck.SendRewardResp();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.SenderID != null)
                if ($util.Long)
                    (message.SenderID = $util.Long.fromValue(object.SenderID)).unsigned = true;
                else if (typeof object.SenderID === "string")
                    message.SenderID = parseInt(object.SenderID, 10);
                else if (typeof object.SenderID === "number")
                    message.SenderID = object.SenderID;
                else if (typeof object.SenderID === "object")
                    message.SenderID = new $util.LongBits(object.SenderID.low >>> 0, object.SenderID.high >>> 0).toNumber(true);
            if (object.StartTimeStamp != null)
                if ($util.Long)
                    (message.StartTimeStamp = $util.Long.fromValue(object.StartTimeStamp)).unsigned = false;
                else if (typeof object.StartTimeStamp === "string")
                    message.StartTimeStamp = parseInt(object.StartTimeStamp, 10);
                else if (typeof object.StartTimeStamp === "number")
                    message.StartTimeStamp = object.StartTimeStamp;
                else if (typeof object.StartTimeStamp === "object")
                    message.StartTimeStamp = new $util.LongBits(object.StartTimeStamp.low >>> 0, object.StartTimeStamp.high >>> 0).toNumber();
            if (object.WaitTime != null)
                if ($util.Long)
                    (message.WaitTime = $util.Long.fromValue(object.WaitTime)).unsigned = false;
                else if (typeof object.WaitTime === "string")
                    message.WaitTime = parseInt(object.WaitTime, 10);
                else if (typeof object.WaitTime === "number")
                    message.WaitTime = object.WaitTime;
                else if (typeof object.WaitTime === "object")
                    message.WaitTime = new $util.LongBits(object.WaitTime.low >>> 0, object.WaitTime.high >>> 0).toNumber();
            return message;
        };

        SendRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SenderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartTimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartTimeStamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WaitTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WaitTime = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber(true) : message.SenderID;
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (typeof message.StartTimeStamp === "number")
                    object.StartTimeStamp = options.longs === String ? String(message.StartTimeStamp) : message.StartTimeStamp;
                else
                    object.StartTimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.StartTimeStamp) : options.longs === Number ? new $util.LongBits(message.StartTimeStamp.low >>> 0, message.StartTimeStamp.high >>> 0).toNumber() : message.StartTimeStamp;
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (typeof message.WaitTime === "number")
                    object.WaitTime = options.longs === String ? String(message.WaitTime) : message.WaitTime;
                else
                    object.WaitTime = options.longs === String ? $util.Long.prototype.toString.call(message.WaitTime) : options.longs === Number ? new $util.LongBits(message.WaitTime.low >>> 0, message.WaitTime.high >>> 0).toNumber() : message.WaitTime;
            return object;
        };

        SendRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRewardResp;
    })();

    luck.GetReward = (function() {

        function GetReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetReward.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GetReward.create = function create(properties) {
            return new GetReward(properties);
        };

        GetReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(8).int64(message.ID);
            return writer;
        };

        GetReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.GetReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            return null;
        };

        GetReward.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.GetReward)
                return object;
            var message = new $root.luck.GetReward();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            return message;
        };

        GetReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            return object;
        };

        GetReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetReward;
    })();

    luck.GetRewardResp = (function() {

        function GetRewardResp(properties) {
            this.MoneyList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetRewardResp.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GetRewardResp.prototype.StartTimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.WaitTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.Type = 0;
        GetRewardResp.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.RemainCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.RemainMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.BestMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.BestMoneyIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.MoneyList = $util.emptyArray;

        GetRewardResp.create = function create(properties) {
            return new GetRewardResp(properties);
        };

        GetRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(8).int64(message.ID);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                writer.uint32(16).uint64(message.SenderID);
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                writer.uint32(24).int64(message.StartTimeStamp);
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                writer.uint32(32).int64(message.WaitTime);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(40).int32(message.Type);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(48).int64(message.Count);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(56).int64(message.Money);
            if (message.RemainCount != null && message.hasOwnProperty("RemainCount"))
                writer.uint32(64).int64(message.RemainCount);
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                writer.uint32(72).int64(message.RemainMoney);
            if (message.BestMoney != null && message.hasOwnProperty("BestMoney"))
                writer.uint32(80).int64(message.BestMoney);
            if (message.BestMoneyIndex != null && message.hasOwnProperty("BestMoneyIndex"))
                writer.uint32(88).int64(message.BestMoneyIndex);
            if (message.MoneyList != null && message.MoneyList.length) {
                writer.uint32(98).fork();
                for (var i = 0; i < message.MoneyList.length; ++i)
                    writer.int64(message.MoneyList[i]);
                writer.ldelim();
            }
            return writer;
        };

        GetRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.GetRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.SenderID = reader.uint64();
                    break;
                case 3:
                    message.StartTimeStamp = reader.int64();
                    break;
                case 4:
                    message.WaitTime = reader.int64();
                    break;
                case 5:
                    message.Type = reader.int32();
                    break;
                case 6:
                    message.Count = reader.int64();
                    break;
                case 7:
                    message.Money = reader.int64();
                    break;
                case 8:
                    message.RemainCount = reader.int64();
                    break;
                case 9:
                    message.RemainMoney = reader.int64();
                    break;
                case 10:
                    message.BestMoney = reader.int64();
                    break;
                case 11:
                    message.BestMoneyIndex = reader.int64();
                    break;
                case 12:
                    if (!(message.MoneyList && message.MoneyList.length))
                        message.MoneyList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.MoneyList.push(reader.int64());
                    } else
                        message.MoneyList.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (!$util.isInteger(message.SenderID) && !(message.SenderID && $util.isInteger(message.SenderID.low) && $util.isInteger(message.SenderID.high)))
                    return "SenderID: integer|Long expected";
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (!$util.isInteger(message.StartTimeStamp) && !(message.StartTimeStamp && $util.isInteger(message.StartTimeStamp.low) && $util.isInteger(message.StartTimeStamp.high)))
                    return "StartTimeStamp: integer|Long expected";
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (!$util.isInteger(message.WaitTime) && !(message.WaitTime && $util.isInteger(message.WaitTime.low) && $util.isInteger(message.WaitTime.high)))
                    return "WaitTime: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.RemainCount != null && message.hasOwnProperty("RemainCount"))
                if (!$util.isInteger(message.RemainCount) && !(message.RemainCount && $util.isInteger(message.RemainCount.low) && $util.isInteger(message.RemainCount.high)))
                    return "RemainCount: integer|Long expected";
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                if (!$util.isInteger(message.RemainMoney) && !(message.RemainMoney && $util.isInteger(message.RemainMoney.low) && $util.isInteger(message.RemainMoney.high)))
                    return "RemainMoney: integer|Long expected";
            if (message.BestMoney != null && message.hasOwnProperty("BestMoney"))
                if (!$util.isInteger(message.BestMoney) && !(message.BestMoney && $util.isInteger(message.BestMoney.low) && $util.isInteger(message.BestMoney.high)))
                    return "BestMoney: integer|Long expected";
            if (message.BestMoneyIndex != null && message.hasOwnProperty("BestMoneyIndex"))
                if (!$util.isInteger(message.BestMoneyIndex) && !(message.BestMoneyIndex && $util.isInteger(message.BestMoneyIndex.low) && $util.isInteger(message.BestMoneyIndex.high)))
                    return "BestMoneyIndex: integer|Long expected";
            if (message.MoneyList != null && message.hasOwnProperty("MoneyList")) {
                if (!Array.isArray(message.MoneyList))
                    return "MoneyList: array expected";
                for (var i = 0; i < message.MoneyList.length; ++i)
                    if (!$util.isInteger(message.MoneyList[i]) && !(message.MoneyList[i] && $util.isInteger(message.MoneyList[i].low) && $util.isInteger(message.MoneyList[i].high)))
                        return "MoneyList: integer|Long[] expected";
            }
            return null;
        };

        GetRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.GetRewardResp)
                return object;
            var message = new $root.luck.GetRewardResp();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.SenderID != null)
                if ($util.Long)
                    (message.SenderID = $util.Long.fromValue(object.SenderID)).unsigned = true;
                else if (typeof object.SenderID === "string")
                    message.SenderID = parseInt(object.SenderID, 10);
                else if (typeof object.SenderID === "number")
                    message.SenderID = object.SenderID;
                else if (typeof object.SenderID === "object")
                    message.SenderID = new $util.LongBits(object.SenderID.low >>> 0, object.SenderID.high >>> 0).toNumber(true);
            if (object.StartTimeStamp != null)
                if ($util.Long)
                    (message.StartTimeStamp = $util.Long.fromValue(object.StartTimeStamp)).unsigned = false;
                else if (typeof object.StartTimeStamp === "string")
                    message.StartTimeStamp = parseInt(object.StartTimeStamp, 10);
                else if (typeof object.StartTimeStamp === "number")
                    message.StartTimeStamp = object.StartTimeStamp;
                else if (typeof object.StartTimeStamp === "object")
                    message.StartTimeStamp = new $util.LongBits(object.StartTimeStamp.low >>> 0, object.StartTimeStamp.high >>> 0).toNumber();
            if (object.WaitTime != null)
                if ($util.Long)
                    (message.WaitTime = $util.Long.fromValue(object.WaitTime)).unsigned = false;
                else if (typeof object.WaitTime === "string")
                    message.WaitTime = parseInt(object.WaitTime, 10);
                else if (typeof object.WaitTime === "number")
                    message.WaitTime = object.WaitTime;
                else if (typeof object.WaitTime === "object")
                    message.WaitTime = new $util.LongBits(object.WaitTime.low >>> 0, object.WaitTime.high >>> 0).toNumber();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.RemainCount != null)
                if ($util.Long)
                    (message.RemainCount = $util.Long.fromValue(object.RemainCount)).unsigned = false;
                else if (typeof object.RemainCount === "string")
                    message.RemainCount = parseInt(object.RemainCount, 10);
                else if (typeof object.RemainCount === "number")
                    message.RemainCount = object.RemainCount;
                else if (typeof object.RemainCount === "object")
                    message.RemainCount = new $util.LongBits(object.RemainCount.low >>> 0, object.RemainCount.high >>> 0).toNumber();
            if (object.RemainMoney != null)
                if ($util.Long)
                    (message.RemainMoney = $util.Long.fromValue(object.RemainMoney)).unsigned = false;
                else if (typeof object.RemainMoney === "string")
                    message.RemainMoney = parseInt(object.RemainMoney, 10);
                else if (typeof object.RemainMoney === "number")
                    message.RemainMoney = object.RemainMoney;
                else if (typeof object.RemainMoney === "object")
                    message.RemainMoney = new $util.LongBits(object.RemainMoney.low >>> 0, object.RemainMoney.high >>> 0).toNumber();
            if (object.BestMoney != null)
                if ($util.Long)
                    (message.BestMoney = $util.Long.fromValue(object.BestMoney)).unsigned = false;
                else if (typeof object.BestMoney === "string")
                    message.BestMoney = parseInt(object.BestMoney, 10);
                else if (typeof object.BestMoney === "number")
                    message.BestMoney = object.BestMoney;
                else if (typeof object.BestMoney === "object")
                    message.BestMoney = new $util.LongBits(object.BestMoney.low >>> 0, object.BestMoney.high >>> 0).toNumber();
            if (object.BestMoneyIndex != null)
                if ($util.Long)
                    (message.BestMoneyIndex = $util.Long.fromValue(object.BestMoneyIndex)).unsigned = false;
                else if (typeof object.BestMoneyIndex === "string")
                    message.BestMoneyIndex = parseInt(object.BestMoneyIndex, 10);
                else if (typeof object.BestMoneyIndex === "number")
                    message.BestMoneyIndex = object.BestMoneyIndex;
                else if (typeof object.BestMoneyIndex === "object")
                    message.BestMoneyIndex = new $util.LongBits(object.BestMoneyIndex.low >>> 0, object.BestMoneyIndex.high >>> 0).toNumber();
            if (object.MoneyList) {
                if (!Array.isArray(object.MoneyList))
                    throw TypeError(".luck.GetRewardResp.MoneyList: array expected");
                message.MoneyList = [];
                for (var i = 0; i < object.MoneyList.length; ++i)
                    if ($util.Long)
                        (message.MoneyList[i] = $util.Long.fromValue(object.MoneyList[i])).unsigned = false;
                    else if (typeof object.MoneyList[i] === "string")
                        message.MoneyList[i] = parseInt(object.MoneyList[i], 10);
                    else if (typeof object.MoneyList[i] === "number")
                        message.MoneyList[i] = object.MoneyList[i];
                    else if (typeof object.MoneyList[i] === "object")
                        message.MoneyList[i] = new $util.LongBits(object.MoneyList[i].low >>> 0, object.MoneyList[i].high >>> 0).toNumber();
            }
            return message;
        };

        GetRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.MoneyList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SenderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartTimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartTimeStamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WaitTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WaitTime = options.longs === String ? "0" : 0;
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RemainCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RemainCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RemainMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RemainMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BestMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BestMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BestMoneyIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BestMoneyIndex = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber(true) : message.SenderID;
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (typeof message.StartTimeStamp === "number")
                    object.StartTimeStamp = options.longs === String ? String(message.StartTimeStamp) : message.StartTimeStamp;
                else
                    object.StartTimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.StartTimeStamp) : options.longs === Number ? new $util.LongBits(message.StartTimeStamp.low >>> 0, message.StartTimeStamp.high >>> 0).toNumber() : message.StartTimeStamp;
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (typeof message.WaitTime === "number")
                    object.WaitTime = options.longs === String ? String(message.WaitTime) : message.WaitTime;
                else
                    object.WaitTime = options.longs === String ? $util.Long.prototype.toString.call(message.WaitTime) : options.longs === Number ? new $util.LongBits(message.WaitTime.low >>> 0, message.WaitTime.high >>> 0).toNumber() : message.WaitTime;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.RemainCount != null && message.hasOwnProperty("RemainCount"))
                if (typeof message.RemainCount === "number")
                    object.RemainCount = options.longs === String ? String(message.RemainCount) : message.RemainCount;
                else
                    object.RemainCount = options.longs === String ? $util.Long.prototype.toString.call(message.RemainCount) : options.longs === Number ? new $util.LongBits(message.RemainCount.low >>> 0, message.RemainCount.high >>> 0).toNumber() : message.RemainCount;
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                if (typeof message.RemainMoney === "number")
                    object.RemainMoney = options.longs === String ? String(message.RemainMoney) : message.RemainMoney;
                else
                    object.RemainMoney = options.longs === String ? $util.Long.prototype.toString.call(message.RemainMoney) : options.longs === Number ? new $util.LongBits(message.RemainMoney.low >>> 0, message.RemainMoney.high >>> 0).toNumber() : message.RemainMoney;
            if (message.BestMoney != null && message.hasOwnProperty("BestMoney"))
                if (typeof message.BestMoney === "number")
                    object.BestMoney = options.longs === String ? String(message.BestMoney) : message.BestMoney;
                else
                    object.BestMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BestMoney) : options.longs === Number ? new $util.LongBits(message.BestMoney.low >>> 0, message.BestMoney.high >>> 0).toNumber() : message.BestMoney;
            if (message.BestMoneyIndex != null && message.hasOwnProperty("BestMoneyIndex"))
                if (typeof message.BestMoneyIndex === "number")
                    object.BestMoneyIndex = options.longs === String ? String(message.BestMoneyIndex) : message.BestMoneyIndex;
                else
                    object.BestMoneyIndex = options.longs === String ? $util.Long.prototype.toString.call(message.BestMoneyIndex) : options.longs === Number ? new $util.LongBits(message.BestMoneyIndex.low >>> 0, message.BestMoneyIndex.high >>> 0).toNumber() : message.BestMoneyIndex;
            if (message.MoneyList && message.MoneyList.length) {
                object.MoneyList = [];
                for (var j = 0; j < message.MoneyList.length; ++j)
                    if (typeof message.MoneyList[j] === "number")
                        object.MoneyList[j] = options.longs === String ? String(message.MoneyList[j]) : message.MoneyList[j];
                    else
                        object.MoneyList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.MoneyList[j]) : options.longs === Number ? new $util.LongBits(message.MoneyList[j].low >>> 0, message.MoneyList[j].high >>> 0).toNumber() : message.MoneyList[j];
            }
            return object;
        };

        GetRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRewardResp;
    })();

    luck.RollDice = (function() {

        function RollDice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RollDice.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RollDice.create = function create(properties) {
            return new RollDice(properties);
        };

        RollDice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(8).int64(message.Count);
            return writer;
        };

        RollDice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RollDice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.RollDice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RollDice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RollDice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            return null;
        };

        RollDice.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.RollDice)
                return object;
            var message = new $root.luck.RollDice();
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            return message;
        };

        RollDice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            return object;
        };

        RollDice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RollDice;
    })();

    luck.RollDiceResp = (function() {

        function RollDiceResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RollDiceResp.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RollDiceResp.prototype.Numbers = $util.newBuffer([]);

        RollDiceResp.create = function create(properties) {
            return new RollDiceResp(properties);
        };

        RollDiceResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(8).int64(message.Count);
            if (message.Numbers != null && message.hasOwnProperty("Numbers"))
                writer.uint32(18).bytes(message.Numbers);
            return writer;
        };

        RollDiceResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RollDiceResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.RollDiceResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Count = reader.int64();
                    break;
                case 2:
                    message.Numbers = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RollDiceResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RollDiceResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Numbers != null && message.hasOwnProperty("Numbers"))
                if (!(message.Numbers && typeof message.Numbers.length === "number" || $util.isString(message.Numbers)))
                    return "Numbers: buffer expected";
            return null;
        };

        RollDiceResp.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.RollDiceResp)
                return object;
            var message = new $root.luck.RollDiceResp();
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Numbers != null)
                if (typeof object.Numbers === "string")
                    $util.base64.decode(object.Numbers, message.Numbers = $util.newBuffer($util.base64.length(object.Numbers)), 0);
                else if (object.Numbers.length)
                    message.Numbers = object.Numbers;
            return message;
        };

        RollDiceResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Numbers = "";
                else {
                    object.Numbers = [];
                    if (options.bytes !== Array)
                        object.Numbers = $util.newBuffer(object.Numbers);
                }
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Numbers != null && message.hasOwnProperty("Numbers"))
                object.Numbers = options.bytes === String ? $util.base64.encode(message.Numbers, 0, message.Numbers.length) : options.bytes === Array ? Array.prototype.slice.call(message.Numbers) : message.Numbers;
            return object;
        };

        RollDiceResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RollDiceResp;
    })();

    return luck;
})();

module.exports = $root;
