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

        PacketData.prototype.MainID = 0;
        PacketData.prototype.SubID = 0;
        PacketData.prototype.TransData = $util.newBuffer([]);

        PacketData.create = function create(properties) {
            return new PacketData(properties);
        };

        PacketData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MainID != null && message.hasOwnProperty("MainID"))
                writer.uint32(8).uint32(message.MainID);
            if (message.SubID != null && message.hasOwnProperty("SubID"))
                writer.uint32(16).uint32(message.SubID);
            if (message.TransData != null && message.hasOwnProperty("TransData"))
                writer.uint32(26).bytes(message.TransData);
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
                    message.MainID = reader.uint32();
                    break;
                case 2:
                    message.SubID = reader.uint32();
                    break;
                case 3:
                    message.TransData = reader.bytes();
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
            if (message.MainID != null && message.hasOwnProperty("MainID"))
                if (!$util.isInteger(message.MainID))
                    return "MainID: integer expected";
            if (message.SubID != null && message.hasOwnProperty("SubID"))
                if (!$util.isInteger(message.SubID))
                    return "SubID: integer expected";
            if (message.TransData != null && message.hasOwnProperty("TransData"))
                if (!(message.TransData && typeof message.TransData.length === "number" || $util.isString(message.TransData)))
                    return "TransData: buffer expected";
            return null;
        };

        PacketData.fromObject = function fromObject(object) {
            if (object instanceof $root.comand.PacketData)
                return object;
            var message = new $root.comand.PacketData();
            if (object.MainID != null)
                message.MainID = object.MainID >>> 0;
            if (object.SubID != null)
                message.SubID = object.SubID >>> 0;
            if (object.TransData != null)
                if (typeof object.TransData === "string")
                    $util.base64.decode(object.TransData, message.TransData = $util.newBuffer($util.base64.length(object.TransData)), 0);
                else if (object.TransData.length)
                    message.TransData = object.TransData;
            return message;
        };

        PacketData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MainID = 0;
                object.SubID = 0;
                if (options.bytes === String)
                    object.TransData = "";
                else {
                    object.TransData = [];
                    if (options.bytes !== Array)
                        object.TransData = $util.newBuffer(object.TransData);
                }
            }
            if (message.MainID != null && message.hasOwnProperty("MainID"))
                object.MainID = message.MainID;
            if (message.SubID != null && message.hasOwnProperty("SubID"))
                object.SubID = message.SubID;
            if (message.TransData != null && message.hasOwnProperty("TransData"))
                object.TransData = options.bytes === String ? $util.base64.encode(message.TransData, 0, message.TransData.length) : options.bytes === Array ? Array.prototype.slice.call(message.TransData) : message.TransData;
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
