/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chat = (function() {

    var chat = {};

    chat.SetupGroup = (function() {

        function SetupGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SetupGroup.prototype.name = "";

        SetupGroup.create = function create(properties) {
            return new SetupGroup(properties);
        };

        SetupGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(10).string(message.name);
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
                    message.name = reader.string();
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
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        SetupGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.SetupGroup)
                return object;
            var message = new $root.chat.SetupGroup();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        SetupGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
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

    chat.GroupChat = (function() {

        function GroupChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupChat.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChat.prototype.Type = 0;
        GroupChat.prototype.Content = "";
        GroupChat.prototype.GoodLuck = null;

        GroupChat.create = function create(properties) {
            return new GroupChat(properties);
        };

        GroupChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(16).uint32(message.Type);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(26).string(message.Content);
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                $root.chat.ContestLuck.encode(message.GoodLuck, writer.uint32(34).fork()).ldelim();
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
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.Type = reader.uint32();
                    break;
                case 3:
                    message.Content = reader.string();
                    break;
                case 4:
                    message.GoodLuck = $root.chat.ContestLuck.decode(reader, reader.uint32());
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
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck")) {
                var error = $root.chat.ContestLuck.verify(message.GoodLuck);
                if (error)
                    return "GoodLuck." + error;
            }
            return null;
        };

        GroupChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupChat)
                return object;
            var message = new $root.chat.GroupChat();
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.GoodLuck != null) {
                if (typeof object.GoodLuck !== "object")
                    throw TypeError(".chat.GroupChat.GoodLuck: object expected");
                message.GoodLuck = $root.chat.ContestLuck.fromObject(object.GoodLuck);
            }
            return message;
        };

        GroupChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.Type = 0;
                object.Content = "";
                object.GoodLuck = null;
            }
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                object.GoodLuck = $root.chat.ContestLuck.toObject(message.GoodLuck, options);
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

        GroupChatResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChatResp.prototype.Type = 0;
        GroupChatResp.prototype.Content = "";
        GroupChatResp.prototype.GoodLuck = null;
        GroupChatResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GroupChatResp.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupChatResp.create = function create(properties) {
            return new GroupChatResp(properties);
        };

        GroupChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                writer.uint32(8).uint64(message.GroupId);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(16).uint32(message.Type);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(26).string(message.Content);
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                $root.chat.ContestLuck.encode(message.GoodLuck, writer.uint32(34).fork()).ldelim();
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(40).int64(message.Timestamp);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                writer.uint32(48).uint64(message.SenderID);
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
                    message.GroupId = reader.uint64();
                    break;
                case 2:
                    message.Type = reader.uint32();
                    break;
                case 3:
                    message.Content = reader.string();
                    break;
                case 4:
                    message.GoodLuck = $root.chat.ContestLuck.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.Timestamp = reader.int64();
                    break;
                case 6:
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
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck")) {
                var error = $root.chat.ContestLuck.verify(message.GoodLuck);
                if (error)
                    return "GoodLuck." + error;
            }
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
            if (object.GroupId != null)
                if ($util.Long)
                    (message.GroupId = $util.Long.fromValue(object.GroupId)).unsigned = true;
                else if (typeof object.GroupId === "string")
                    message.GroupId = parseInt(object.GroupId, 10);
                else if (typeof object.GroupId === "number")
                    message.GroupId = object.GroupId;
                else if (typeof object.GroupId === "object")
                    message.GroupId = new $util.LongBits(object.GroupId.low >>> 0, object.GroupId.high >>> 0).toNumber(true);
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.GoodLuck != null) {
                if (typeof object.GoodLuck !== "object")
                    throw TypeError(".chat.GroupChatResp.GoodLuck: object expected");
                message.GoodLuck = $root.chat.ContestLuck.fromObject(object.GoodLuck);
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                object.Type = 0;
                object.Content = "";
                object.GoodLuck = null;
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
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                object.GoodLuck = $root.chat.ContestLuck.toObject(message.GoodLuck, options);
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

    chat.PrivateChat = (function() {

        function PrivateChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PrivateChat.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateChat.prototype.Type = 0;
        PrivateChat.prototype.Content = "";
        PrivateChat.prototype.GoodLuck = null;

        PrivateChat.create = function create(properties) {
            return new PrivateChat(properties);
        };

        PrivateChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                writer.uint32(8).uint64(message.TargetId);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(16).uint32(message.Type);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(26).string(message.Content);
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                $root.chat.ContestLuck.encode(message.GoodLuck, writer.uint32(34).fork()).ldelim();
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
                    message.TargetId = reader.uint64();
                    break;
                case 2:
                    message.Type = reader.uint32();
                    break;
                case 3:
                    message.Content = reader.string();
                    break;
                case 4:
                    message.GoodLuck = $root.chat.ContestLuck.decode(reader, reader.uint32());
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
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck")) {
                var error = $root.chat.ContestLuck.verify(message.GoodLuck);
                if (error)
                    return "GoodLuck." + error;
            }
            return null;
        };

        PrivateChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateChat)
                return object;
            var message = new $root.chat.PrivateChat();
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.GoodLuck != null) {
                if (typeof object.GoodLuck !== "object")
                    throw TypeError(".chat.PrivateChat.GoodLuck: object expected");
                message.GoodLuck = $root.chat.ContestLuck.fromObject(object.GoodLuck);
            }
            return message;
        };

        PrivateChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                object.Type = 0;
                object.Content = "";
                object.GoodLuck = null;
            }
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                object.GoodLuck = $root.chat.ContestLuck.toObject(message.GoodLuck, options);
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
        PrivateChatResp.prototype.Content = "";
        PrivateChatResp.prototype.GoodLuck = null;
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
                writer.uint32(18).string(message.Content);
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                $root.chat.ContestLuck.encode(message.GoodLuck, writer.uint32(26).fork()).ldelim();
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(32).int64(message.Timestamp);
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                writer.uint32(40).uint64(message.SenderID);
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
                    message.Content = reader.string();
                    break;
                case 3:
                    message.GoodLuck = $root.chat.ContestLuck.decode(reader, reader.uint32());
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
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck")) {
                var error = $root.chat.ContestLuck.verify(message.GoodLuck);
                if (error)
                    return "GoodLuck." + error;
            }
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
                message.Content = String(object.Content);
            if (object.GoodLuck != null) {
                if (typeof object.GoodLuck !== "object")
                    throw TypeError(".chat.PrivateChatResp.GoodLuck: object expected");
                message.GoodLuck = $root.chat.ContestLuck.fromObject(object.GoodLuck);
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
                object.Content = "";
                object.GoodLuck = null;
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
                object.Content = message.Content;
            if (message.GoodLuck != null && message.hasOwnProperty("GoodLuck"))
                object.GoodLuck = $root.chat.ContestLuck.toObject(message.GoodLuck, options);
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

    chat.ContestLuck = (function() {

        function ContestLuck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ContestLuck.prototype.Code = 0;
        ContestLuck.prototype.Number = 0;
        ContestLuck.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ContestLuck.create = function create(properties) {
            return new ContestLuck(properties);
        };

        ContestLuck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && message.hasOwnProperty("Code"))
                writer.uint32(8).uint32(message.Code);
            if (message.Number != null && message.hasOwnProperty("Number"))
                writer.uint32(16).uint32(message.Number);
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                writer.uint32(24).int64(message.Gold);
            return writer;
        };

        ContestLuck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ContestLuck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.ContestLuck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.uint32();
                    break;
                case 2:
                    message.Number = reader.uint32();
                    break;
                case 3:
                    message.Gold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ContestLuck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ContestLuck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Number != null && message.hasOwnProperty("Number"))
                if (!$util.isInteger(message.Number))
                    return "Number: integer expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            return null;
        };

        ContestLuck.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ContestLuck)
                return object;
            var message = new $root.chat.ContestLuck();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Number != null)
                message.Number = object.Number >>> 0;
            if (object.Gold != null)
                if ($util.Long)
                    (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
                else if (typeof object.Gold === "string")
                    message.Gold = parseInt(object.Gold, 10);
                else if (typeof object.Gold === "number")
                    message.Gold = object.Gold;
                else if (typeof object.Gold === "object")
                    message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
            return message;
        };

        ContestLuck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Number = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Number != null && message.hasOwnProperty("Number"))
                object.Number = message.Number;
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
            return object;
        };

        ContestLuck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContestLuck;
    })();

    return chat;
})();

module.exports = $root;
