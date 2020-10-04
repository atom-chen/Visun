/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.comand = (function() {

    var comand = {};

    comand.PacketData = (function() {

        function PacketData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PacketData.prototype.MsgID = 0;
        PacketData.prototype.TransData = $util.newBuffer([]);
        PacketData.prototype.PageNum = 0;

        PacketData.create = function create(properties) {
            return new PacketData(properties);
        };

        PacketData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MsgID != null && Object.hasOwnProperty.call(message, "MsgID"))
                writer.uint32(8).uint32(message.MsgID);
            if (message.TransData != null && Object.hasOwnProperty.call(message, "TransData"))
                writer.uint32(18).bytes(message.TransData);
            if (message.PageNum != null && Object.hasOwnProperty.call(message, "PageNum"))
                writer.uint32(24).int32(message.PageNum);
            return writer;
        };

        PacketData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PacketData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.comand.PacketData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.uint32();
                    break;
                case 2:
                    message.TransData = reader.bytes();
                    break;
                case 3:
                    message.PageNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PacketData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PacketData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                if (!$util.isInteger(message.MsgID))
                    return "MsgID: integer expected";
            if (message.TransData != null && message.hasOwnProperty("TransData"))
                if (!(message.TransData && typeof message.TransData.length === "number" || $util.isString(message.TransData)))
                    return "TransData: buffer expected";
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                if (!$util.isInteger(message.PageNum))
                    return "PageNum: integer expected";
            return null;
        };

        PacketData.fromObject = function fromObject(object) {
            if (object instanceof $root.comand.PacketData)
                return object;
            var message = new $root.comand.PacketData();
            if (object.MsgID != null)
                message.MsgID = object.MsgID >>> 0;
            if (object.TransData != null)
                if (typeof object.TransData === "string")
                    $util.base64.decode(object.TransData, message.TransData = $util.newBuffer($util.base64.length(object.TransData)), 0);
                else if (object.TransData.length)
                    message.TransData = object.TransData;
            if (object.PageNum != null)
                message.PageNum = object.PageNum | 0;
            return message;
        };

        PacketData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 0;
                if (options.bytes === String)
                    object.TransData = "";
                else {
                    object.TransData = [];
                    if (options.bytes !== Array)
                        object.TransData = $util.newBuffer(object.TransData);
                }
                object.PageNum = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TransData != null && message.hasOwnProperty("TransData"))
                object.TransData = options.bytes === String ? $util.base64.encode(message.TransData, 0, message.TransData.length) : options.bytes === Array ? Array.prototype.slice.call(message.TransData) : message.TransData;
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                object.PageNum = message.PageNum;
            return object;
        };

        PacketData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketData;
    })();

    return comand;
})();

module.exports = $root;
