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
        SimplePlayerInfo.prototype.Name = "";
        SimplePlayerInfo.prototype.HeadImg = "";

        SimplePlayerInfo.create = function create(properties) {
            return new SimplePlayerInfo(properties);
        };

        SimplePlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(18).string(message.Name);
            if (message.HeadImg != null && Object.hasOwnProperty.call(message, "HeadImg"))
                writer.uint32(26).string(message.HeadImg);
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
                    message.Name = reader.string();
                    break;
                case 3:
                    message.HeadImg = reader.string();
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
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.HeadImg != null && message.hasOwnProperty("HeadImg"))
                if (!$util.isString(message.HeadImg))
                    return "HeadImg: string expected";
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
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.HeadImg != null)
                message.HeadImg = String(object.HeadImg);
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
                object.Name = "";
                object.HeadImg = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.HeadImg != null && message.hasOwnProperty("HeadImg"))
                object.HeadImg = message.HeadImg;
            return object;
        };

        SimplePlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SimplePlayerInfo;
    })();

    chat.WorldChat = (function() {

        function WorldChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WorldChat.prototype.Content = "";

        WorldChat.create = function create(properties) {
            return new WorldChat(properties);
        };

        WorldChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            return writer;
        };

        WorldChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WorldChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.WorldChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WorldChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WorldChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        WorldChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.WorldChat)
                return object;
            var message = new $root.chat.WorldChat();
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        WorldChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Content = "";
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        WorldChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorldChat;
    })();

    chat.WorldChatResp = (function() {

        function WorldChatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WorldChatResp.prototype.Content = "";
        WorldChatResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        WorldChatResp.prototype.Sender = null;

        WorldChatResp.create = function create(properties) {
            return new WorldChatResp(properties);
        };

        WorldChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(16).uint64(message.Timestamp);
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                $root.chat.SimplePlayerInfo.encode(message.Sender, writer.uint32(26).fork()).ldelim();
            return writer;
        };

        WorldChatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WorldChatResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.WorldChatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                case 2:
                    message.Timestamp = reader.uint64();
                    break;
                case 3:
                    message.Sender = $root.chat.SimplePlayerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WorldChatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WorldChatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Sender != null && message.hasOwnProperty("Sender")) {
                var error = $root.chat.SimplePlayerInfo.verify(message.Sender);
                if (error)
                    return "Sender." + error;
            }
            return null;
        };

        WorldChatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.WorldChatResp)
                return object;
            var message = new $root.chat.WorldChatResp();
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Sender != null) {
                if (typeof object.Sender !== "object")
                    throw TypeError(".chat.WorldChatResp.Sender: object expected");
                message.Sender = $root.chat.SimplePlayerInfo.fromObject(object.Sender);
            }
            return message;
        };

        WorldChatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Sender = null;
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = $root.chat.SimplePlayerInfo.toObject(message.Sender, options);
            return object;
        };

        WorldChatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorldChatResp;
    })();

    chat.GroupChat = (function() {

        function GroupChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupChat.prototype.Content = "";
        GroupChat.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GroupChat.create = function create(properties) {
            return new GroupChat(properties);
        };

        GroupChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            if (message.GroupId != null && Object.hasOwnProperty.call(message, "GroupId"))
                writer.uint32(16).uint64(message.GroupId);
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
                    message.Content = reader.string();
                    break;
                case 2:
                    message.GroupId = reader.uint64();
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
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            return null;
        };

        GroupChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupChat)
                return object;
            var message = new $root.chat.GroupChat();
            if (object.Content != null)
                message.Content = String(object.Content);
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

        GroupChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
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

        GroupChatResp.prototype.Content = "";
        GroupChatResp.prototype.GroupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChatResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupChatResp.prototype.Sender = null;

        GroupChatResp.create = function create(properties) {
            return new GroupChatResp(properties);
        };

        GroupChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            if (message.GroupId != null && Object.hasOwnProperty.call(message, "GroupId"))
                writer.uint32(16).uint64(message.GroupId);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(24).uint64(message.Timestamp);
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                $root.chat.SimplePlayerInfo.encode(message.Sender, writer.uint32(34).fork()).ldelim();
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
                    message.Content = reader.string();
                    break;
                case 2:
                    message.GroupId = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.uint64();
                    break;
                case 4:
                    message.Sender = $root.chat.SimplePlayerInfo.decode(reader, reader.uint32());
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
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (!$util.isInteger(message.GroupId) && !(message.GroupId && $util.isInteger(message.GroupId.low) && $util.isInteger(message.GroupId.high)))
                    return "GroupId: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Sender != null && message.hasOwnProperty("Sender")) {
                var error = $root.chat.SimplePlayerInfo.verify(message.Sender);
                if (error)
                    return "Sender." + error;
            }
            return null;
        };

        GroupChatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GroupChatResp)
                return object;
            var message = new $root.chat.GroupChatResp();
            if (object.Content != null)
                message.Content = String(object.Content);
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
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Sender != null) {
                if (typeof object.Sender !== "object")
                    throw TypeError(".chat.GroupChatResp.Sender: object expected");
                message.Sender = $root.chat.SimplePlayerInfo.fromObject(object.Sender);
            }
            return message;
        };

        GroupChatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GroupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GroupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Sender = null;
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.GroupId != null && message.hasOwnProperty("GroupId"))
                if (typeof message.GroupId === "number")
                    object.GroupId = options.longs === String ? String(message.GroupId) : message.GroupId;
                else
                    object.GroupId = options.longs === String ? $util.Long.prototype.toString.call(message.GroupId) : options.longs === Number ? new $util.LongBits(message.GroupId.low >>> 0, message.GroupId.high >>> 0).toNumber(true) : message.GroupId;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = $root.chat.SimplePlayerInfo.toObject(message.Sender, options);
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

        PrivateChat.prototype.Content = "";
        PrivateChat.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        PrivateChat.create = function create(properties) {
            return new PrivateChat(properties);
        };

        PrivateChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            if (message.TargetId != null && Object.hasOwnProperty.call(message, "TargetId"))
                writer.uint32(16).uint64(message.TargetId);
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
                    message.Content = reader.string();
                    break;
                case 2:
                    message.TargetId = reader.uint64();
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
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            return null;
        };

        PrivateChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateChat)
                return object;
            var message = new $root.chat.PrivateChat();
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            return message;
        };

        PrivateChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
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

        PrivateChatResp.prototype.Content = "";
        PrivateChatResp.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateChatResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PrivateChatResp.prototype.Sender = null;

        PrivateChatResp.create = function create(properties) {
            return new PrivateChatResp(properties);
        };

        PrivateChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            if (message.TargetId != null && Object.hasOwnProperty.call(message, "TargetId"))
                writer.uint32(16).uint64(message.TargetId);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(24).uint64(message.Timestamp);
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                $root.chat.SimplePlayerInfo.encode(message.Sender, writer.uint32(34).fork()).ldelim();
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
                    message.Content = reader.string();
                    break;
                case 2:
                    message.TargetId = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.uint64();
                    break;
                case 4:
                    message.Sender = $root.chat.SimplePlayerInfo.decode(reader, reader.uint32());
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
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                    return "TargetId: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Sender != null && message.hasOwnProperty("Sender")) {
                var error = $root.chat.SimplePlayerInfo.verify(message.Sender);
                if (error)
                    return "Sender." + error;
            }
            return null;
        };

        PrivateChatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.PrivateChatResp)
                return object;
            var message = new $root.chat.PrivateChatResp();
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.TargetId != null)
                if ($util.Long)
                    (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = true;
                else if (typeof object.TargetId === "string")
                    message.TargetId = parseInt(object.TargetId, 10);
                else if (typeof object.TargetId === "number")
                    message.TargetId = object.TargetId;
                else if (typeof object.TargetId === "object")
                    message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Sender != null) {
                if (typeof object.Sender !== "object")
                    throw TypeError(".chat.PrivateChatResp.Sender: object expected");
                message.Sender = $root.chat.SimplePlayerInfo.fromObject(object.Sender);
            }
            return message;
        };

        PrivateChatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Sender = null;
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                if (typeof message.TargetId === "number")
                    object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                else
                    object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber(true) : message.TargetId;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = $root.chat.SimplePlayerInfo.toObject(message.Sender, options);
            return object;
        };

        PrivateChatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateChatResp;
    })();

    chat.GameChat = (function() {

        function GameChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameChat.prototype.Content = "";
        GameChat.prototype.GameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GameChat.create = function create(properties) {
            return new GameChat(properties);
        };

        GameChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            if (message.GameId != null && Object.hasOwnProperty.call(message, "GameId"))
                writer.uint32(16).uint64(message.GameId);
            return writer;
        };

        GameChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GameChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                case 2:
                    message.GameId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId) && !(message.GameId && $util.isInteger(message.GameId.low) && $util.isInteger(message.GameId.high)))
                    return "GameId: integer|Long expected";
            return null;
        };

        GameChat.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GameChat)
                return object;
            var message = new $root.chat.GameChat();
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.GameId != null)
                if ($util.Long)
                    (message.GameId = $util.Long.fromValue(object.GameId)).unsigned = true;
                else if (typeof object.GameId === "string")
                    message.GameId = parseInt(object.GameId, 10);
                else if (typeof object.GameId === "number")
                    message.GameId = object.GameId;
                else if (typeof object.GameId === "object")
                    message.GameId = new $util.LongBits(object.GameId.low >>> 0, object.GameId.high >>> 0).toNumber(true);
            return message;
        };

        GameChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameId = options.longs === String ? "0" : 0;
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (typeof message.GameId === "number")
                    object.GameId = options.longs === String ? String(message.GameId) : message.GameId;
                else
                    object.GameId = options.longs === String ? $util.Long.prototype.toString.call(message.GameId) : options.longs === Number ? new $util.LongBits(message.GameId.low >>> 0, message.GameId.high >>> 0).toNumber(true) : message.GameId;
            return object;
        };

        GameChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameChat;
    })();

    chat.GameChatResp = (function() {

        function GameChatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameChatResp.prototype.Content = "";
        GameChatResp.prototype.GameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameChatResp.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameChatResp.prototype.Sender = null;

        GameChatResp.create = function create(properties) {
            return new GameChatResp(properties);
        };

        GameChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(10).string(message.Content);
            if (message.GameId != null && Object.hasOwnProperty.call(message, "GameId"))
                writer.uint32(16).uint64(message.GameId);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(24).uint64(message.Timestamp);
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                $root.chat.SimplePlayerInfo.encode(message.Sender, writer.uint32(34).fork()).ldelim();
            return writer;
        };

        GameChatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameChatResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.GameChatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                case 2:
                    message.GameId = reader.uint64();
                    break;
                case 3:
                    message.Timestamp = reader.uint64();
                    break;
                case 4:
                    message.Sender = $root.chat.SimplePlayerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameChatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameChatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId) && !(message.GameId && $util.isInteger(message.GameId.low) && $util.isInteger(message.GameId.high)))
                    return "GameId: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Sender != null && message.hasOwnProperty("Sender")) {
                var error = $root.chat.SimplePlayerInfo.verify(message.Sender);
                if (error)
                    return "Sender." + error;
            }
            return null;
        };

        GameChatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.GameChatResp)
                return object;
            var message = new $root.chat.GameChatResp();
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.GameId != null)
                if ($util.Long)
                    (message.GameId = $util.Long.fromValue(object.GameId)).unsigned = true;
                else if (typeof object.GameId === "string")
                    message.GameId = parseInt(object.GameId, 10);
                else if (typeof object.GameId === "number")
                    message.GameId = object.GameId;
                else if (typeof object.GameId === "object")
                    message.GameId = new $util.LongBits(object.GameId.low >>> 0, object.GameId.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Sender != null) {
                if (typeof object.Sender !== "object")
                    throw TypeError(".chat.GameChatResp.Sender: object expected");
                message.Sender = $root.chat.SimplePlayerInfo.fromObject(object.Sender);
            }
            return message;
        };

        GameChatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Sender = null;
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (typeof message.GameId === "number")
                    object.GameId = options.longs === String ? String(message.GameId) : message.GameId;
                else
                    object.GameId = options.longs === String ? $util.Long.prototype.toString.call(message.GameId) : options.longs === Number ? new $util.LongBits(message.GameId.low >>> 0, message.GameId.high >>> 0).toNumber(true) : message.GameId;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = $root.chat.SimplePlayerInfo.toObject(message.Sender, options);
            return object;
        };

        GameChatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameChatResp;
    })();

    return chat;
})();

module.exports = $root;
