/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.Login = (function() {

        /**
         * Properties of a Login.
         * @memberof proto
         * @interface ILogin
         * @property {string|null} [name] Login name
         * @property {string|null} [pwd] Login pwd
         */

        /**
         * Constructs a new Login.
         * @memberof proto
         * @classdesc Represents a Login.
         * @implements ILogin
         * @constructor
         * @param {proto.ILogin=} [properties] Properties to set
         */
        function Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Login name.
         * @member {string} name
         * @memberof proto.Login
         * @instance
         */
        Login.prototype.name = "";

        /**
         * Login pwd.
         * @member {string} pwd
         * @memberof proto.Login
         * @instance
         */
        Login.prototype.pwd = "";

        /**
         * Creates a new Login instance using the specified properties.
         * @function create
         * @memberof proto.Login
         * @static
         * @param {proto.ILogin=} [properties] Properties to set
         * @returns {proto.Login} Login instance
         */
        Login.create = function create(properties) {
            return new Login(properties);
        };

        /**
         * Encodes the specified Login message. Does not implicitly {@link proto.Login.verify|verify} messages.
         * @function encode
         * @memberof proto.Login
         * @static
         * @param {proto.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            return writer;
        };

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link proto.Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Login
         * @static
         * @param {proto.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Login message.
         * @function verify
         * @memberof proto.Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            return null;
        };

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Login} Login
         */
        Login.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Login)
                return object;
            var message = new $root.proto.Login();
            if (object.name != null)
                message.name = String(object.name);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            return message;
        };

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Login
         * @static
         * @param {proto.Login} message Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.pwd = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            return object;
        };

        /**
         * Converts this Login to JSON.
         * @function toJSON
         * @memberof proto.Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Login;
    })();

    return proto;
})();

module.exports = $root;
