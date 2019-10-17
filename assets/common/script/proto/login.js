/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.login = (function() {

    var login = {};

    login.ResResult = (function() {

        function ResResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ResResult.prototype.State = 0;
        ResResult.prototype.Hints = "";

        ResResult.create = function create(properties) {
            return new ResResult(properties);
        };

        ResResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(8).int32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        ResResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ResResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ResResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.int32();
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

        ResResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ResResult.verify = function verify(message) {
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

        ResResult.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ResResult)
                return object;
            var message = new $root.login.ResResult();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        ResResult.toObject = function toObject(message, options) {
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

        ResResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResResult;
    })();

    login.Register = (function() {

        function Register(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Register.prototype.Name = "";
        Register.prototype.Password = "";
        Register.prototype.SecurityCode = "";
        Register.prototype.MachineCode = "";
        Register.prototype.InvitationCode = "";

        Register.create = function create(properties) {
            return new Register(properties);
        };

        Register.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(10).string(message.Name);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(18).string(message.Password);
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                writer.uint32(26).string(message.SecurityCode);
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                writer.uint32(34).string(message.MachineCode);
            if (message.InvitationCode != null && message.hasOwnProperty("InvitationCode"))
                writer.uint32(42).string(message.InvitationCode);
            return writer;
        };

        Register.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Register.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.Register();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
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
                case 5:
                    message.InvitationCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Register.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Register.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                if (!$util.isString(message.SecurityCode))
                    return "SecurityCode: string expected";
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                if (!$util.isString(message.MachineCode))
                    return "MachineCode: string expected";
            if (message.InvitationCode != null && message.hasOwnProperty("InvitationCode"))
                if (!$util.isString(message.InvitationCode))
                    return "InvitationCode: string expected";
            return null;
        };

        Register.fromObject = function fromObject(object) {
            if (object instanceof $root.login.Register)
                return object;
            var message = new $root.login.Register();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.SecurityCode != null)
                message.SecurityCode = String(object.SecurityCode);
            if (object.MachineCode != null)
                message.MachineCode = String(object.MachineCode);
            if (object.InvitationCode != null)
                message.InvitationCode = String(object.InvitationCode);
            return message;
        };

        Register.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Password = "";
                object.SecurityCode = "";
                object.MachineCode = "";
                object.InvitationCode = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                object.SecurityCode = message.SecurityCode;
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                object.MachineCode = message.MachineCode;
            if (message.InvitationCode != null && message.hasOwnProperty("InvitationCode"))
                object.InvitationCode = message.InvitationCode;
            return object;
        };

        Register.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Register;
    })();

    login.RegisterResult = (function() {

        function RegisterResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RegisterResult.prototype.State = 0;
        RegisterResult.prototype.Hints = "";

        RegisterResult.create = function create(properties) {
            return new RegisterResult(properties);
        };

        RegisterResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(8).uint32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        RegisterResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RegisterResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RegisterResult();
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

        RegisterResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RegisterResult.verify = function verify(message) {
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

        RegisterResult.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RegisterResult)
                return object;
            var message = new $root.login.RegisterResult();
            if (object.State != null)
                message.State = object.State >>> 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        RegisterResult.toObject = function toObject(message, options) {
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

        RegisterResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterResult;
    })();

    login.Login = (function() {

        function Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Login.prototype.Account = "";
        Login.prototype.Password = "";
        Login.prototype.SecurityCode = "";
        Login.prototype.MachineCode = "";

        Login.create = function create(properties) {
            return new Login(properties);
        };

        Login.encode = function encode(message, writer) {
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

        Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.Login();
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

        Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Login.verify = function verify(message) {
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

        Login.fromObject = function fromObject(object) {
            if (object instanceof $root.login.Login)
                return object;
            var message = new $root.login.Login();
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

        Login.toObject = function toObject(message, options) {
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

        Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Login;
    })();

    login.LoginResult = (function() {

        function LoginResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LoginResult.prototype.State = 0;
        LoginResult.prototype.Hints = "";

        LoginResult.create = function create(properties) {
            return new LoginResult(properties);
        };

        LoginResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(8).uint32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        LoginResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LoginResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.LoginResult();
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

        LoginResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LoginResult.verify = function verify(message) {
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

        LoginResult.fromObject = function fromObject(object) {
            if (object instanceof $root.login.LoginResult)
                return object;
            var message = new $root.login.LoginResult();
            if (object.State != null)
                message.State = object.State >>> 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        LoginResult.toObject = function toObject(message, options) {
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

        LoginResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResult;
    })();

    login.UserInfo = (function() {

        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserInfo.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        UserInfo.prototype.Name = "";
        UserInfo.prototype.Accounts = "";
        UserInfo.prototype.Password = "";
        UserInfo.prototype.FaceID = 0;
        UserInfo.prototype.Gender = 0;
        UserInfo.prototype.Age = 0;
        UserInfo.prototype.Level = 0;
        UserInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UserInfo.prototype.PassPortID = "";
        UserInfo.prototype.Compellation = "";
        UserInfo.prototype.AgentID = 0;
        UserInfo.prototype.SpreaderGameID = 0;
        UserInfo.prototype.ClientAddr = 0;
        UserInfo.prototype.MachineCode = "";

        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(18).string(message.Name);
            if (message.Accounts != null && message.hasOwnProperty("Accounts"))
                writer.uint32(26).string(message.Accounts);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(34).string(message.Password);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(40).uint32(message.FaceID);
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                writer.uint32(48).uint32(message.Gender);
            if (message.Age != null && message.hasOwnProperty("Age"))
                writer.uint32(56).uint32(message.Age);
            if (message.Level != null && message.hasOwnProperty("Level"))
                writer.uint32(64).uint32(message.Level);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(72).int64(message.Money);
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                writer.uint32(82).string(message.PassPortID);
            if (message.Compellation != null && message.hasOwnProperty("Compellation"))
                writer.uint32(90).string(message.Compellation);
            if (message.AgentID != null && message.hasOwnProperty("AgentID"))
                writer.uint32(96).uint32(message.AgentID);
            if (message.SpreaderGameID != null && message.hasOwnProperty("SpreaderGameID"))
                writer.uint32(104).uint32(message.SpreaderGameID);
            if (message.ClientAddr != null && message.hasOwnProperty("ClientAddr"))
                writer.uint32(112).uint32(message.ClientAddr);
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                writer.uint32(122).string(message.MachineCode);
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
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Accounts = reader.string();
                    break;
                case 4:
                    message.Password = reader.string();
                    break;
                case 5:
                    message.FaceID = reader.uint32();
                    break;
                case 6:
                    message.Gender = reader.uint32();
                    break;
                case 7:
                    message.Age = reader.uint32();
                    break;
                case 8:
                    message.Level = reader.uint32();
                    break;
                case 9:
                    message.Money = reader.int64();
                    break;
                case 10:
                    message.PassPortID = reader.string();
                    break;
                case 11:
                    message.Compellation = reader.string();
                    break;
                case 12:
                    message.AgentID = reader.uint32();
                    break;
                case 13:
                    message.SpreaderGameID = reader.uint32();
                    break;
                case 14:
                    message.ClientAddr = reader.uint32();
                    break;
                case 15:
                    message.MachineCode = reader.string();
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
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Accounts != null && message.hasOwnProperty("Accounts"))
                if (!$util.isString(message.Accounts))
                    return "Accounts: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                if (!$util.isInteger(message.Gender))
                    return "Gender: integer expected";
            if (message.Age != null && message.hasOwnProperty("Age"))
                if (!$util.isInteger(message.Age))
                    return "Age: integer expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                if (!$util.isString(message.PassPortID))
                    return "PassPortID: string expected";
            if (message.Compellation != null && message.hasOwnProperty("Compellation"))
                if (!$util.isString(message.Compellation))
                    return "Compellation: string expected";
            if (message.AgentID != null && message.hasOwnProperty("AgentID"))
                if (!$util.isInteger(message.AgentID))
                    return "AgentID: integer expected";
            if (message.SpreaderGameID != null && message.hasOwnProperty("SpreaderGameID"))
                if (!$util.isInteger(message.SpreaderGameID))
                    return "SpreaderGameID: integer expected";
            if (message.ClientAddr != null && message.hasOwnProperty("ClientAddr"))
                if (!$util.isInteger(message.ClientAddr))
                    return "ClientAddr: integer expected";
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                if (!$util.isString(message.MachineCode))
                    return "MachineCode: string expected";
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
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Accounts != null)
                message.Accounts = String(object.Accounts);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.FaceID != null)
                message.FaceID = object.FaceID >>> 0;
            if (object.Gender != null)
                message.Gender = object.Gender >>> 0;
            if (object.Age != null)
                message.Age = object.Age >>> 0;
            if (object.Level != null)
                message.Level = object.Level >>> 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.PassPortID != null)
                message.PassPortID = String(object.PassPortID);
            if (object.Compellation != null)
                message.Compellation = String(object.Compellation);
            if (object.AgentID != null)
                message.AgentID = object.AgentID >>> 0;
            if (object.SpreaderGameID != null)
                message.SpreaderGameID = object.SpreaderGameID >>> 0;
            if (object.ClientAddr != null)
                message.ClientAddr = object.ClientAddr >>> 0;
            if (object.MachineCode != null)
                message.MachineCode = String(object.MachineCode);
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
                object.Name = "";
                object.Accounts = "";
                object.Password = "";
                object.FaceID = 0;
                object.Gender = 0;
                object.Age = 0;
                object.Level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.PassPortID = "";
                object.Compellation = "";
                object.AgentID = 0;
                object.SpreaderGameID = 0;
                object.ClientAddr = 0;
                object.MachineCode = "";
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Accounts != null && message.hasOwnProperty("Accounts"))
                object.Accounts = message.Accounts;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                object.Gender = message.Gender;
            if (message.Age != null && message.hasOwnProperty("Age"))
                object.Age = message.Age;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                object.PassPortID = message.PassPortID;
            if (message.Compellation != null && message.hasOwnProperty("Compellation"))
                object.Compellation = message.Compellation;
            if (message.AgentID != null && message.hasOwnProperty("AgentID"))
                object.AgentID = message.AgentID;
            if (message.SpreaderGameID != null && message.hasOwnProperty("SpreaderGameID"))
                object.SpreaderGameID = message.SpreaderGameID;
            if (message.ClientAddr != null && message.hasOwnProperty("ClientAddr"))
                object.ClientAddr = message.ClientAddr;
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                object.MachineCode = message.MachineCode;
            return object;
        };

        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    login.GameInfo = (function() {

        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameInfo.prototype.GameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameInfo.prototype.Name = "";
        GameInfo.prototype.State = "";
        GameInfo.prototype.PlayerCount = 0;

        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                writer.uint32(8).uint64(message.GameId);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(18).string(message.Name);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(26).string(message.State);
            if (message.PlayerCount != null && message.hasOwnProperty("PlayerCount"))
                writer.uint32(32).uint32(message.PlayerCount);
            return writer;
        };

        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameId = reader.uint64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.State = reader.string();
                    break;
                case 4:
                    message.PlayerCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId) && !(message.GameId && $util.isInteger(message.GameId.low) && $util.isInteger(message.GameId.high)))
                    return "GameId: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isString(message.State))
                    return "State: string expected";
            if (message.PlayerCount != null && message.hasOwnProperty("PlayerCount"))
                if (!$util.isInteger(message.PlayerCount))
                    return "PlayerCount: integer expected";
            return null;
        };

        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameInfo)
                return object;
            var message = new $root.login.GameInfo();
            if (object.GameId != null)
                if ($util.Long)
                    (message.GameId = $util.Long.fromValue(object.GameId)).unsigned = true;
                else if (typeof object.GameId === "string")
                    message.GameId = parseInt(object.GameId, 10);
                else if (typeof object.GameId === "number")
                    message.GameId = object.GameId;
                else if (typeof object.GameId === "object")
                    message.GameId = new $util.LongBits(object.GameId.low >>> 0, object.GameId.high >>> 0).toNumber(true);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.State != null)
                message.State = String(object.State);
            if (object.PlayerCount != null)
                message.PlayerCount = object.PlayerCount >>> 0;
            return message;
        };

        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameId = options.longs === String ? "0" : 0;
                object.Name = "";
                object.State = "";
                object.PlayerCount = 0;
            }
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (typeof message.GameId === "number")
                    object.GameId = options.longs === String ? String(message.GameId) : message.GameId;
                else
                    object.GameId = options.longs === String ? $util.Long.prototype.toString.call(message.GameId) : options.longs === Number ? new $util.LongBits(message.GameId.low >>> 0, message.GameId.high >>> 0).toNumber(true) : message.GameId;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.PlayerCount != null && message.hasOwnProperty("PlayerCount"))
                object.PlayerCount = message.PlayerCount;
            return object;
        };

        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    login.RoomDesc = (function() {

        function RoomDesc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RoomDesc.prototype.GameType = 0;
        RoomDesc.prototype.GameId = 0;
        RoomDesc.prototype.Name = "";
        RoomDesc.prototype.BaseScore = 0;
        RoomDesc.prototype.RountCount = 0;
        RoomDesc.prototype.MinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RoomDesc.prototype.MaxMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RoomDesc.prototype.MaxFighter = 0;
        RoomDesc.prototype.MaxAudience = 0;

        RoomDesc.create = function create(properties) {
            return new RoomDesc(properties);
        };

        RoomDesc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                writer.uint32(16).uint32(message.GameId);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(26).string(message.Name);
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                writer.uint32(32).int32(message.BaseScore);
            if (message.RountCount != null && message.hasOwnProperty("RountCount"))
                writer.uint32(40).int32(message.RountCount);
            if (message.MinMoney != null && message.hasOwnProperty("MinMoney"))
                writer.uint32(48).int64(message.MinMoney);
            if (message.MaxMoney != null && message.hasOwnProperty("MaxMoney"))
                writer.uint32(56).int64(message.MaxMoney);
            if (message.MaxFighter != null && message.hasOwnProperty("MaxFighter"))
                writer.uint32(64).int32(message.MaxFighter);
            if (message.MaxAudience != null && message.hasOwnProperty("MaxAudience"))
                writer.uint32(72).int32(message.MaxAudience);
            return writer;
        };

        RoomDesc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RoomDesc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RoomDesc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameType = reader.uint32();
                    break;
                case 2:
                    message.GameId = reader.uint32();
                    break;
                case 3:
                    message.Name = reader.string();
                    break;
                case 4:
                    message.BaseScore = reader.int32();
                    break;
                case 5:
                    message.RountCount = reader.int32();
                    break;
                case 6:
                    message.MinMoney = reader.int64();
                    break;
                case 7:
                    message.MaxMoney = reader.int64();
                    break;
                case 8:
                    message.MaxFighter = reader.int32();
                    break;
                case 9:
                    message.MaxAudience = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RoomDesc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RoomDesc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId))
                    return "GameId: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                if (!$util.isInteger(message.BaseScore))
                    return "BaseScore: integer expected";
            if (message.RountCount != null && message.hasOwnProperty("RountCount"))
                if (!$util.isInteger(message.RountCount))
                    return "RountCount: integer expected";
            if (message.MinMoney != null && message.hasOwnProperty("MinMoney"))
                if (!$util.isInteger(message.MinMoney) && !(message.MinMoney && $util.isInteger(message.MinMoney.low) && $util.isInteger(message.MinMoney.high)))
                    return "MinMoney: integer|Long expected";
            if (message.MaxMoney != null && message.hasOwnProperty("MaxMoney"))
                if (!$util.isInteger(message.MaxMoney) && !(message.MaxMoney && $util.isInteger(message.MaxMoney.low) && $util.isInteger(message.MaxMoney.high)))
                    return "MaxMoney: integer|Long expected";
            if (message.MaxFighter != null && message.hasOwnProperty("MaxFighter"))
                if (!$util.isInteger(message.MaxFighter))
                    return "MaxFighter: integer expected";
            if (message.MaxAudience != null && message.hasOwnProperty("MaxAudience"))
                if (!$util.isInteger(message.MaxAudience))
                    return "MaxAudience: integer expected";
            return null;
        };

        RoomDesc.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RoomDesc)
                return object;
            var message = new $root.login.RoomDesc();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            if (object.GameId != null)
                message.GameId = object.GameId >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            if (object.RountCount != null)
                message.RountCount = object.RountCount | 0;
            if (object.MinMoney != null)
                if ($util.Long)
                    (message.MinMoney = $util.Long.fromValue(object.MinMoney)).unsigned = false;
                else if (typeof object.MinMoney === "string")
                    message.MinMoney = parseInt(object.MinMoney, 10);
                else if (typeof object.MinMoney === "number")
                    message.MinMoney = object.MinMoney;
                else if (typeof object.MinMoney === "object")
                    message.MinMoney = new $util.LongBits(object.MinMoney.low >>> 0, object.MinMoney.high >>> 0).toNumber();
            if (object.MaxMoney != null)
                if ($util.Long)
                    (message.MaxMoney = $util.Long.fromValue(object.MaxMoney)).unsigned = false;
                else if (typeof object.MaxMoney === "string")
                    message.MaxMoney = parseInt(object.MaxMoney, 10);
                else if (typeof object.MaxMoney === "number")
                    message.MaxMoney = object.MaxMoney;
                else if (typeof object.MaxMoney === "object")
                    message.MaxMoney = new $util.LongBits(object.MaxMoney.low >>> 0, object.MaxMoney.high >>> 0).toNumber();
            if (object.MaxFighter != null)
                message.MaxFighter = object.MaxFighter | 0;
            if (object.MaxAudience != null)
                message.MaxAudience = object.MaxAudience | 0;
            return message;
        };

        RoomDesc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameType = 0;
                object.GameId = 0;
                object.Name = "";
                object.BaseScore = 0;
                object.RountCount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MinMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MaxMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MaxMoney = options.longs === String ? "0" : 0;
                object.MaxFighter = 0;
                object.MaxAudience = 0;
            }
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                object.GameId = message.GameId;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            if (message.RountCount != null && message.hasOwnProperty("RountCount"))
                object.RountCount = message.RountCount;
            if (message.MinMoney != null && message.hasOwnProperty("MinMoney"))
                if (typeof message.MinMoney === "number")
                    object.MinMoney = options.longs === String ? String(message.MinMoney) : message.MinMoney;
                else
                    object.MinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.MinMoney) : options.longs === Number ? new $util.LongBits(message.MinMoney.low >>> 0, message.MinMoney.high >>> 0).toNumber() : message.MinMoney;
            if (message.MaxMoney != null && message.hasOwnProperty("MaxMoney"))
                if (typeof message.MaxMoney === "number")
                    object.MaxMoney = options.longs === String ? String(message.MaxMoney) : message.MaxMoney;
                else
                    object.MaxMoney = options.longs === String ? $util.Long.prototype.toString.call(message.MaxMoney) : options.longs === Number ? new $util.LongBits(message.MaxMoney.low >>> 0, message.MaxMoney.high >>> 0).toNumber() : message.MaxMoney;
            if (message.MaxFighter != null && message.hasOwnProperty("MaxFighter"))
                object.MaxFighter = message.MaxFighter;
            if (message.MaxAudience != null && message.hasOwnProperty("MaxAudience"))
                object.MaxAudience = message.MaxAudience;
            return object;
        };

        RoomDesc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomDesc;
    })();

    login.GameListReq = (function() {

        function GameListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameListReq.create = function create(properties) {
            return new GameListReq(properties);
        };

        GameListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        GameListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GameListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        GameListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameListReq)
                return object;
            return new $root.login.GameListReq();
        };

        GameListReq.toObject = function toObject() {
            return {};
        };

        GameListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameListReq;
    })();

    login.GameListResp = (function() {

        function GameListResp(properties) {
            this.Games = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameListResp.prototype.Games = $util.emptyArray;

        GameListResp.create = function create(properties) {
            return new GameListResp(properties);
        };

        GameListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Games != null && message.Games.length)
                for (var i = 0; i < message.Games.length; ++i)
                    $root.login.GameInfo.encode(message.Games[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GameListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GameListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Games && message.Games.length))
                        message.Games = [];
                    message.Games.push($root.login.GameInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Games != null && message.hasOwnProperty("Games")) {
                if (!Array.isArray(message.Games))
                    return "Games: array expected";
                for (var i = 0; i < message.Games.length; ++i) {
                    var error = $root.login.GameInfo.verify(message.Games[i]);
                    if (error)
                        return "Games." + error;
                }
            }
            return null;
        };

        GameListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameListResp)
                return object;
            var message = new $root.login.GameListResp();
            if (object.Games) {
                if (!Array.isArray(object.Games))
                    throw TypeError(".login.GameListResp.Games: array expected");
                message.Games = [];
                for (var i = 0; i < object.Games.length; ++i) {
                    if (typeof object.Games[i] !== "object")
                        throw TypeError(".login.GameListResp.Games: object expected");
                    message.Games[i] = $root.login.GameInfo.fromObject(object.Games[i]);
                }
            }
            return message;
        };

        GameListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Games = [];
            if (message.Games && message.Games.length) {
                object.Games = [];
                for (var j = 0; j < message.Games.length; ++j)
                    object.Games[j] = $root.login.GameInfo.toObject(message.Games[j], options);
            }
            return object;
        };

        GameListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameListResp;
    })();

    login.RoomListReq = (function() {

        function RoomListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RoomListReq.prototype.GameType = 0;

        RoomListReq.create = function create(properties) {
            return new RoomListReq(properties);
        };

        RoomListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            return writer;
        };

        RoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RoomListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RoomListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RoomListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RoomListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            return null;
        };

        RoomListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RoomListReq)
                return object;
            var message = new $root.login.RoomListReq();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            return message;
        };

        RoomListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameType = 0;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            return object;
        };

        RoomListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListReq;
    })();

    login.RoomListResp = (function() {

        function RoomListResp(properties) {
            this.Rooms = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RoomListResp.prototype.GameType = 0;
        RoomListResp.prototype.Rooms = $util.emptyArray;

        RoomListResp.create = function create(properties) {
            return new RoomListResp(properties);
        };

        RoomListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            if (message.Rooms != null && message.Rooms.length)
                for (var i = 0; i < message.Rooms.length; ++i)
                    $root.login.RoomDesc.encode(message.Rooms[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        RoomListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RoomListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RoomListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameType = reader.uint32();
                    break;
                case 2:
                    if (!(message.Rooms && message.Rooms.length))
                        message.Rooms = [];
                    message.Rooms.push($root.login.RoomDesc.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RoomListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RoomListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            if (message.Rooms != null && message.hasOwnProperty("Rooms")) {
                if (!Array.isArray(message.Rooms))
                    return "Rooms: array expected";
                for (var i = 0; i < message.Rooms.length; ++i) {
                    var error = $root.login.RoomDesc.verify(message.Rooms[i]);
                    if (error)
                        return "Rooms." + error;
                }
            }
            return null;
        };

        RoomListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RoomListResp)
                return object;
            var message = new $root.login.RoomListResp();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            if (object.Rooms) {
                if (!Array.isArray(object.Rooms))
                    throw TypeError(".login.RoomListResp.Rooms: array expected");
                message.Rooms = [];
                for (var i = 0; i < object.Rooms.length; ++i) {
                    if (typeof object.Rooms[i] !== "object")
                        throw TypeError(".login.RoomListResp.Rooms: object expected");
                    message.Rooms[i] = $root.login.RoomDesc.fromObject(object.Rooms[i]);
                }
            }
            return message;
        };

        RoomListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Rooms = [];
            if (options.defaults)
                object.GameType = 0;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            if (message.Rooms && message.Rooms.length) {
                object.Rooms = [];
                for (var j = 0; j < message.Rooms.length; ++j)
                    object.Rooms[j] = $root.login.RoomDesc.toObject(message.Rooms[j], options);
            }
            return object;
        };

        RoomListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListResp;
    })();

    login.RoomInfo = (function() {

        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RoomInfo.prototype.RoomNum = 0;
        RoomInfo.prototype.RoomKey = "";
        RoomInfo.prototype.RoomName = "";
        RoomInfo.prototype.Games = null;

        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                writer.uint32(8).uint32(message.RoomNum);
            if (message.RoomKey != null && message.hasOwnProperty("RoomKey"))
                writer.uint32(18).string(message.RoomKey);
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                writer.uint32(26).string(message.RoomName);
            if (message.Games != null && message.hasOwnProperty("Games"))
                $root.login.GameList.encode(message.Games, writer.uint32(34).fork()).ldelim();
            return writer;
        };

        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomNum = reader.uint32();
                    break;
                case 2:
                    message.RoomKey = reader.string();
                    break;
                case 3:
                    message.RoomName = reader.string();
                    break;
                case 4:
                    message.Games = $root.login.GameList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                if (!$util.isInteger(message.RoomNum))
                    return "RoomNum: integer expected";
            if (message.RoomKey != null && message.hasOwnProperty("RoomKey"))
                if (!$util.isString(message.RoomKey))
                    return "RoomKey: string expected";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                if (!$util.isString(message.RoomName))
                    return "RoomName: string expected";
            if (message.Games != null && message.hasOwnProperty("Games")) {
                var error = $root.login.GameList.verify(message.Games);
                if (error)
                    return "Games." + error;
            }
            return null;
        };

        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RoomInfo)
                return object;
            var message = new $root.login.RoomInfo();
            if (object.RoomNum != null)
                message.RoomNum = object.RoomNum >>> 0;
            if (object.RoomKey != null)
                message.RoomKey = String(object.RoomKey);
            if (object.RoomName != null)
                message.RoomName = String(object.RoomName);
            if (object.Games != null) {
                if (typeof object.Games !== "object")
                    throw TypeError(".login.RoomInfo.Games: object expected");
                message.Games = $root.login.GameList.fromObject(object.Games);
            }
            return message;
        };

        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomNum = 0;
                object.RoomKey = "";
                object.RoomName = "";
                object.Games = null;
            }
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                object.RoomNum = message.RoomNum;
            if (message.RoomKey != null && message.hasOwnProperty("RoomKey"))
                object.RoomKey = message.RoomKey;
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                object.RoomName = message.RoomName;
            if (message.Games != null && message.hasOwnProperty("Games"))
                object.Games = $root.login.GameList.toObject(message.Games, options);
            return object;
        };

        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    login.TaskItem = (function() {

        function TaskItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TaskItem.prototype.TaskID = 0;
        TaskItem.prototype.Twice = 0;
        TaskItem.prototype.Hints = "";

        TaskItem.create = function create(properties) {
            return new TaskItem(properties);
        };

        TaskItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TaskID != null && message.hasOwnProperty("TaskID"))
                writer.uint32(8).uint32(message.TaskID);
            if (message.Twice != null && message.hasOwnProperty("Twice"))
                writer.uint32(16).uint32(message.Twice);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(26).string(message.Hints);
            return writer;
        };

        TaskItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TaskItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.TaskItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TaskID = reader.uint32();
                    break;
                case 2:
                    message.Twice = reader.uint32();
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

        TaskItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TaskItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TaskID != null && message.hasOwnProperty("TaskID"))
                if (!$util.isInteger(message.TaskID))
                    return "TaskID: integer expected";
            if (message.Twice != null && message.hasOwnProperty("Twice"))
                if (!$util.isInteger(message.Twice))
                    return "Twice: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        TaskItem.fromObject = function fromObject(object) {
            if (object instanceof $root.login.TaskItem)
                return object;
            var message = new $root.login.TaskItem();
            if (object.TaskID != null)
                message.TaskID = object.TaskID >>> 0;
            if (object.Twice != null)
                message.Twice = object.Twice >>> 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        TaskItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TaskID = 0;
                object.Twice = 0;
                object.Hints = "";
            }
            if (message.TaskID != null && message.hasOwnProperty("TaskID"))
                object.TaskID = message.TaskID;
            if (message.Twice != null && message.hasOwnProperty("Twice"))
                object.Twice = message.Twice;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        TaskItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskItem;
    })();

    login.TaskList = (function() {

        function TaskList(properties) {
            this.Task = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TaskList.prototype.Task = $util.emptyArray;

        TaskList.create = function create(properties) {
            return new TaskList(properties);
        };

        TaskList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Task != null && message.Task.length)
                for (var i = 0; i < message.Task.length; ++i)
                    $root.login.TaskItem.encode(message.Task[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        TaskList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TaskList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.TaskList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Task && message.Task.length))
                        message.Task = [];
                    message.Task.push($root.login.TaskItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TaskList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TaskList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Task != null && message.hasOwnProperty("Task")) {
                if (!Array.isArray(message.Task))
                    return "Task: array expected";
                for (var i = 0; i < message.Task.length; ++i) {
                    var error = $root.login.TaskItem.verify(message.Task[i]);
                    if (error)
                        return "Task." + error;
                }
            }
            return null;
        };

        TaskList.fromObject = function fromObject(object) {
            if (object instanceof $root.login.TaskList)
                return object;
            var message = new $root.login.TaskList();
            if (object.Task) {
                if (!Array.isArray(object.Task))
                    throw TypeError(".login.TaskList.Task: array expected");
                message.Task = [];
                for (var i = 0; i < object.Task.length; ++i) {
                    if (typeof object.Task[i] !== "object")
                        throw TypeError(".login.TaskList.Task: object expected");
                    message.Task[i] = $root.login.TaskItem.fromObject(object.Task[i]);
                }
            }
            return message;
        };

        TaskList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Task = [];
            if (message.Task && message.Task.length) {
                object.Task = [];
                for (var j = 0; j < message.Task.length; ++j)
                    object.Task[j] = $root.login.TaskItem.toObject(message.Task[j], options);
            }
            return object;
        };

        TaskList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskList;
    })();

    login.GameList = (function() {

        function GameList(properties) {
            this.Items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameList.prototype.Items = $util.emptyArray;

        GameList.create = function create(properties) {
            return new GameList(properties);
        };

        GameList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Items != null && message.Items.length)
                for (var i = 0; i < message.Items.length; ++i)
                    $root.login.GameItem.encode(message.Items[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GameList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GameList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Items && message.Items.length))
                        message.Items = [];
                    message.Items.push($root.login.GameItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Items != null && message.hasOwnProperty("Items")) {
                if (!Array.isArray(message.Items))
                    return "Items: array expected";
                for (var i = 0; i < message.Items.length; ++i) {
                    var error = $root.login.GameItem.verify(message.Items[i]);
                    if (error)
                        return "Items." + error;
                }
            }
            return null;
        };

        GameList.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameList)
                return object;
            var message = new $root.login.GameList();
            if (object.Items) {
                if (!Array.isArray(object.Items))
                    throw TypeError(".login.GameList.Items: array expected");
                message.Items = [];
                for (var i = 0; i < object.Items.length; ++i) {
                    if (typeof object.Items[i] !== "object")
                        throw TypeError(".login.GameList.Items: object expected");
                    message.Items[i] = $root.login.GameItem.fromObject(object.Items[i]);
                }
            }
            return message;
        };

        GameList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Items = [];
            if (message.Items && message.Items.length) {
                object.Items = [];
                for (var j = 0; j < message.Items.length; ++j)
                    object.Items[j] = $root.login.GameItem.toObject(message.Items[j], options);
            }
            return object;
        };

        GameList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameList;
    })();

    login.GameBaseInfo = (function() {

        function GameBaseInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaseInfo.prototype.Type = 0;
        GameBaseInfo.prototype.KindID = 0;
        GameBaseInfo.prototype.Level = 0;
        GameBaseInfo.prototype.Name = "";
        GameBaseInfo.prototype.EnterScore = 0;
        GameBaseInfo.prototype.LessScore = 0;

        GameBaseInfo.create = function create(properties) {
            return new GameBaseInfo(properties);
        };

        GameBaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(8).uint32(message.Type);
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                writer.uint32(16).uint32(message.KindID);
            if (message.Level != null && message.hasOwnProperty("Level"))
                writer.uint32(24).uint32(message.Level);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(34).string(message.Name);
            if (message.EnterScore != null && message.hasOwnProperty("EnterScore"))
                writer.uint32(40).uint32(message.EnterScore);
            if (message.LessScore != null && message.hasOwnProperty("LessScore"))
                writer.uint32(48).uint32(message.LessScore);
            return writer;
        };

        GameBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GameBaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.KindID = reader.uint32();
                    break;
                case 3:
                    message.Level = reader.uint32();
                    break;
                case 4:
                    message.Name = reader.string();
                    break;
                case 5:
                    message.EnterScore = reader.uint32();
                    break;
                case 6:
                    message.LessScore = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBaseInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaseInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                if (!$util.isInteger(message.KindID))
                    return "KindID: integer expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.EnterScore != null && message.hasOwnProperty("EnterScore"))
                if (!$util.isInteger(message.EnterScore))
                    return "EnterScore: integer expected";
            if (message.LessScore != null && message.hasOwnProperty("LessScore"))
                if (!$util.isInteger(message.LessScore))
                    return "LessScore: integer expected";
            return null;
        };

        GameBaseInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameBaseInfo)
                return object;
            var message = new $root.login.GameBaseInfo();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.KindID != null)
                message.KindID = object.KindID >>> 0;
            if (object.Level != null)
                message.Level = object.Level >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.EnterScore != null)
                message.EnterScore = object.EnterScore >>> 0;
            if (object.LessScore != null)
                message.LessScore = object.LessScore >>> 0;
            return message;
        };

        GameBaseInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.KindID = 0;
                object.Level = 0;
                object.Name = "";
                object.EnterScore = 0;
                object.LessScore = 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                object.KindID = message.KindID;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.EnterScore != null && message.hasOwnProperty("EnterScore"))
                object.EnterScore = message.EnterScore;
            if (message.LessScore != null && message.hasOwnProperty("LessScore"))
                object.LessScore = message.LessScore;
            return object;
        };

        GameBaseInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaseInfo;
    })();

    login.GameItem = (function() {

        function GameItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameItem.prototype.ID = 0;
        GameItem.prototype.Info = null;

        GameItem.create = function create(properties) {
            return new GameItem(properties);
        };

        GameItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(8).uint32(message.ID);
            if (message.Info != null && message.hasOwnProperty("Info"))
                $root.login.GameBaseInfo.encode(message.Info, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        GameItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GameItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.Info = $root.login.GameBaseInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.login.GameBaseInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        GameItem.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameItem)
                return object;
            var message = new $root.login.GameItem();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".login.GameItem.Info: object expected");
                message.Info = $root.login.GameBaseInfo.fromObject(object.Info);
            }
            return message;
        };

        GameItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.Info = null;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.login.GameBaseInfo.toObject(message.Info, options);
            return object;
        };

        GameItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameItem;
    })();

    return login;
})();

module.exports = $root;
