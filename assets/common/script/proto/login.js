/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.login = (function() {

    var login = {};

    login.UserInfo = (function() {

        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserInfo.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        UserInfo.prototype.Accounts = "";
        UserInfo.prototype.Password = "";
        UserInfo.prototype.Name = "";
        UserInfo.prototype.Head = "";
        UserInfo.prototype.Sex = 0;
        UserInfo.prototype.VipLevel = 0;
        UserInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Accounts != null && message.hasOwnProperty("Accounts"))
                writer.uint32(18).string(message.Accounts);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(26).string(message.Password);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(34).string(message.Name);
            if (message.Head != null && message.hasOwnProperty("Head"))
                writer.uint32(42).string(message.Head);
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                writer.uint32(48).uint32(message.Sex);
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                writer.uint32(64).uint32(message.VipLevel);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(72).int64(message.Money);
            return writer;
        };

        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
                    break;
                case 2:
                    message.Accounts = reader.string();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                case 4:
                    message.Name = reader.string();
                    break;
                case 5:
                    message.Head = reader.string();
                    break;
                case 6:
                    message.Sex = reader.uint32();
                    break;
                case 8:
                    message.VipLevel = reader.uint32();
                    break;
                case 9:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.Accounts != null && message.hasOwnProperty("Accounts"))
                if (!$util.isString(message.Accounts))
                    return "Accounts: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Head != null && message.hasOwnProperty("Head"))
                if (!$util.isString(message.Head))
                    return "Head: string expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                if (!$util.isInteger(message.Sex))
                    return "Sex: integer expected";
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                if (!$util.isInteger(message.VipLevel))
                    return "VipLevel: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.UserInfo)
                return object;
            var message = new $root.login.UserInfo();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
            if (object.Accounts != null)
                message.Accounts = String(object.Accounts);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Head != null)
                message.Head = String(object.Head);
            if (object.Sex != null)
                message.Sex = object.Sex >>> 0;
            if (object.VipLevel != null)
                message.VipLevel = object.VipLevel >>> 0;
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

        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                object.Accounts = "";
                object.Password = "";
                object.Name = "";
                object.Head = "";
                object.Sex = 0;
                object.VipLevel = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Accounts != null && message.hasOwnProperty("Accounts"))
                object.Accounts = message.Accounts;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Head != null && message.hasOwnProperty("Head"))
                object.Head = message.Head;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                object.VipLevel = message.VipLevel;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    login.ReqRegister = (function() {

        function ReqRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqRegister.prototype.Account = "";
        ReqRegister.prototype.Password = "";
        ReqRegister.prototype.SecurityCode = "";

        ReqRegister.create = function create(properties) {
            return new ReqRegister(properties);
        };

        ReqRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(10).string(message.Account);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(18).string(message.Password);
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                writer.uint32(26).string(message.SecurityCode);
            return writer;
        };

        ReqRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ReqRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                case 3:
                    message.SecurityCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                if (!$util.isString(message.SecurityCode))
                    return "SecurityCode: string expected";
            return null;
        };

        ReqRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ReqRegister)
                return object;
            var message = new $root.login.ReqRegister();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.SecurityCode != null)
                message.SecurityCode = String(object.SecurityCode);
            return message;
        };

        ReqRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.SecurityCode = "";
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                object.SecurityCode = message.SecurityCode;
            return object;
        };

        ReqRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqRegister;
    })();

    login.RespRegister = (function() {

        function RespRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespRegister.prototype.State = 0;
        RespRegister.prototype.Hints = "";

        RespRegister.create = function create(properties) {
            return new RespRegister(properties);
        };

        RespRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(8).uint32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        RespRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RespRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.uint32();
                    break;
                case 2:
                    message.Hints = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        RespRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RespRegister)
                return object;
            var message = new $root.login.RespRegister();
            if (object.State != null)
                message.State = object.State >>> 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        RespRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.State = 0;
                object.Hints = "";
            }
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        RespRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespRegister;
    })();

    login.ReqLogin = (function() {

        function ReqLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqLogin.prototype.Account = "";
        ReqLogin.prototype.Password = "";
        ReqLogin.prototype.SecurityCode = "";
        ReqLogin.prototype.MachineCode = "";

        ReqLogin.create = function create(properties) {
            return new ReqLogin(properties);
        };

        ReqLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(10).string(message.Account);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(18).string(message.Password);
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                writer.uint32(26).string(message.SecurityCode);
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                writer.uint32(34).string(message.MachineCode);
            return writer;
        };

        ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ReqLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                case 3:
                    message.SecurityCode = reader.string();
                    break;
                case 4:
                    message.MachineCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                if (!$util.isString(message.SecurityCode))
                    return "SecurityCode: string expected";
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                if (!$util.isString(message.MachineCode))
                    return "MachineCode: string expected";
            return null;
        };

        ReqLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ReqLogin)
                return object;
            var message = new $root.login.ReqLogin();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.SecurityCode != null)
                message.SecurityCode = String(object.SecurityCode);
            if (object.MachineCode != null)
                message.MachineCode = String(object.MachineCode);
            return message;
        };

        ReqLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.SecurityCode = "";
                object.MachineCode = "";
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                object.SecurityCode = message.SecurityCode;
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                object.MachineCode = message.MachineCode;
            return object;
        };

        ReqLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqLogin;
    })();

    login.RespLogin = (function() {

        function RespLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespLogin.prototype.State = 0;
        RespLogin.prototype.Hints = "";

        RespLogin.create = function create(properties) {
            return new RespLogin(properties);
        };

        RespLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(8).uint32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        RespLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RespLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.uint32();
                    break;
                case 2:
                    message.Hints = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        RespLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RespLogin)
                return object;
            var message = new $root.login.RespLogin();
            if (object.State != null)
                message.State = object.State >>> 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        RespLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.State = 0;
                object.Hints = "";
            }
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        RespLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespLogin;
    })();

    return login;
})();

module.exports = $root;
