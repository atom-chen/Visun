/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.login = (function() {

    var login = {};

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

    login.Exit = (function() {

        function Exit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Exit.create = function create(properties) {
            return new Exit(properties);
        };

        Exit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        Exit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Exit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.Exit();
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

        Exit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Exit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        Exit.fromObject = function fromObject(object) {
            if (object instanceof $root.login.Exit)
                return object;
            return new $root.login.Exit();
        };

        Exit.toObject = function toObject() {
            return {};
        };

        Exit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Exit;
    })();

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
                writer.uint32(8).uint32(message.State);
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
                message.State = object.State >>> 0;
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

    login.UserInfo = (function() {

        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        UserInfo.prototype.Name = "";
        UserInfo.prototype.Accounts = "";
        UserInfo.prototype.Password = "";
        UserInfo.prototype.FaceID = 0;
        UserInfo.prototype.Gender = 0;
        UserInfo.prototype.Age = 0;
        UserInfo.prototype.Level = 0;
        UserInfo.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
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
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(10).string(message.Name);
            if (message.Accounts != null && message.hasOwnProperty("Accounts"))
                writer.uint32(18).string(message.Accounts);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(26).string(message.Password);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(32).uint32(message.FaceID);
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                writer.uint32(40).uint32(message.Gender);
            if (message.Age != null && message.hasOwnProperty("Age"))
                writer.uint32(48).uint32(message.Age);
            if (message.Level != null && message.hasOwnProperty("Level"))
                writer.uint32(56).uint32(message.Level);
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                writer.uint32(64).int64(message.Gold);
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                writer.uint32(74).string(message.PassPortID);
            if (message.Compellation != null && message.hasOwnProperty("Compellation"))
                writer.uint32(82).string(message.Compellation);
            if (message.AgentID != null && message.hasOwnProperty("AgentID"))
                writer.uint32(88).uint32(message.AgentID);
            if (message.SpreaderGameID != null && message.hasOwnProperty("SpreaderGameID"))
                writer.uint32(96).uint32(message.SpreaderGameID);
            if (message.ClientAddr != null && message.hasOwnProperty("ClientAddr"))
                writer.uint32(104).uint32(message.ClientAddr);
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                writer.uint32(114).string(message.MachineCode);
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
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Accounts = reader.string();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                case 4:
                    message.FaceID = reader.uint32();
                    break;
                case 5:
                    message.Gender = reader.uint32();
                    break;
                case 6:
                    message.Age = reader.uint32();
                    break;
                case 7:
                    message.Level = reader.uint32();
                    break;
                case 8:
                    message.Gold = reader.int64();
                    break;
                case 9:
                    message.PassPortID = reader.string();
                    break;
                case 10:
                    message.Compellation = reader.string();
                    break;
                case 11:
                    message.AgentID = reader.uint32();
                    break;
                case 12:
                    message.SpreaderGameID = reader.uint32();
                    break;
                case 13:
                    message.ClientAddr = reader.uint32();
                    break;
                case 14:
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
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
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
            if (object.Gold != null)
                if ($util.Long)
                    (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
                else if (typeof object.Gold === "string")
                    message.Gold = parseInt(object.Gold, 10);
                else if (typeof object.Gold === "number")
                    message.Gold = object.Gold;
                else if (typeof object.Gold === "object")
                    message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
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
                object.Name = "";
                object.Accounts = "";
                object.Password = "";
                object.FaceID = 0;
                object.Gender = 0;
                object.Age = 0;
                object.Level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
                object.PassPortID = "";
                object.Compellation = "";
                object.AgentID = 0;
                object.SpreaderGameID = 0;
                object.ClientAddr = 0;
                object.MachineCode = "";
            }
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
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
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

    login.SimplePlayerInfo = (function() {

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
                writer.uint32(16).int32(message.Sex);
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.SimplePlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Sex = reader.int32();
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
            if (object instanceof $root.login.SimplePlayerInfo)
                return object;
            var message = new $root.login.SimplePlayerInfo();
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
                message.Sex = object.Sex | 0;
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

    login.GroupInfo = (function() {

        function GroupInfo(properties) {
            this.AdminList = [];
            this.BannedList = [];
            this.MemberList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GroupInfo.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupInfo.prototype.Name = "";
        GroupInfo.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GroupInfo.prototype.SetUpTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GroupInfo.prototype.AdminList = $util.emptyArray;
        GroupInfo.prototype.BannedList = $util.emptyArray;
        GroupInfo.prototype.MemberList = $util.emptyArray;

        GroupInfo.create = function create(properties) {
            return new GroupInfo(properties);
        };

        GroupInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(8).uint64(message.ID);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(18).string(message.Name);
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                writer.uint32(24).uint64(message.HostID);
            if (message.SetUpTime != null && message.hasOwnProperty("SetUpTime"))
                writer.uint32(32).int64(message.SetUpTime);
            if (message.AdminList != null && message.AdminList.length) {
                writer.uint32(42).fork();
                for (var i = 0; i < message.AdminList.length; ++i)
                    writer.uint64(message.AdminList[i]);
                writer.ldelim();
            }
            if (message.BannedList != null && message.BannedList.length) {
                writer.uint32(50).fork();
                for (var i = 0; i < message.BannedList.length; ++i)
                    writer.uint64(message.BannedList[i]);
                writer.ldelim();
            }
            if (message.MemberList != null && message.MemberList.length)
                for (var i = 0; i < message.MemberList.length; ++i)
                    $root.login.SimplePlayerInfo.encode(message.MemberList[i], writer.uint32(58).fork()).ldelim();
            return writer;
        };

        GroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GroupInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GroupInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.HostID = reader.uint64();
                    break;
                case 4:
                    message.SetUpTime = reader.int64();
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
                    if (!(message.BannedList && message.BannedList.length))
                        message.BannedList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BannedList.push(reader.uint64());
                    } else
                        message.BannedList.push(reader.uint64());
                    break;
                case 7:
                    if (!(message.MemberList && message.MemberList.length))
                        message.MemberList = [];
                    message.MemberList.push($root.login.SimplePlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GroupInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GroupInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            if (message.SetUpTime != null && message.hasOwnProperty("SetUpTime"))
                if (!$util.isInteger(message.SetUpTime) && !(message.SetUpTime && $util.isInteger(message.SetUpTime.low) && $util.isInteger(message.SetUpTime.high)))
                    return "SetUpTime: integer|Long expected";
            if (message.AdminList != null && message.hasOwnProperty("AdminList")) {
                if (!Array.isArray(message.AdminList))
                    return "AdminList: array expected";
                for (var i = 0; i < message.AdminList.length; ++i)
                    if (!$util.isInteger(message.AdminList[i]) && !(message.AdminList[i] && $util.isInteger(message.AdminList[i].low) && $util.isInteger(message.AdminList[i].high)))
                        return "AdminList: integer|Long[] expected";
            }
            if (message.BannedList != null && message.hasOwnProperty("BannedList")) {
                if (!Array.isArray(message.BannedList))
                    return "BannedList: array expected";
                for (var i = 0; i < message.BannedList.length; ++i)
                    if (!$util.isInteger(message.BannedList[i]) && !(message.BannedList[i] && $util.isInteger(message.BannedList[i].low) && $util.isInteger(message.BannedList[i].high)))
                        return "BannedList: integer|Long[] expected";
            }
            if (message.MemberList != null && message.hasOwnProperty("MemberList")) {
                if (!Array.isArray(message.MemberList))
                    return "MemberList: array expected";
                for (var i = 0; i < message.MemberList.length; ++i) {
                    var error = $root.login.SimplePlayerInfo.verify(message.MemberList[i]);
                    if (error)
                        return "MemberList." + error;
                }
            }
            return null;
        };

        GroupInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GroupInfo)
                return object;
            var message = new $root.login.GroupInfo();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = true;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber(true);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            if (object.SetUpTime != null)
                if ($util.Long)
                    (message.SetUpTime = $util.Long.fromValue(object.SetUpTime)).unsigned = false;
                else if (typeof object.SetUpTime === "string")
                    message.SetUpTime = parseInt(object.SetUpTime, 10);
                else if (typeof object.SetUpTime === "number")
                    message.SetUpTime = object.SetUpTime;
                else if (typeof object.SetUpTime === "object")
                    message.SetUpTime = new $util.LongBits(object.SetUpTime.low >>> 0, object.SetUpTime.high >>> 0).toNumber();
            if (object.AdminList) {
                if (!Array.isArray(object.AdminList))
                    throw TypeError(".login.GroupInfo.AdminList: array expected");
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
            if (object.BannedList) {
                if (!Array.isArray(object.BannedList))
                    throw TypeError(".login.GroupInfo.BannedList: array expected");
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
            if (object.MemberList) {
                if (!Array.isArray(object.MemberList))
                    throw TypeError(".login.GroupInfo.MemberList: array expected");
                message.MemberList = [];
                for (var i = 0; i < object.MemberList.length; ++i) {
                    if (typeof object.MemberList[i] !== "object")
                        throw TypeError(".login.GroupInfo.MemberList: object expected");
                    message.MemberList[i] = $root.login.SimplePlayerInfo.fromObject(object.MemberList[i]);
                }
            }
            return message;
        };

        GroupInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AdminList = [];
                object.BannedList = [];
                object.MemberList = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                object.Name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SetUpTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SetUpTime = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber(true) : message.ID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            if (message.SetUpTime != null && message.hasOwnProperty("SetUpTime"))
                if (typeof message.SetUpTime === "number")
                    object.SetUpTime = options.longs === String ? String(message.SetUpTime) : message.SetUpTime;
                else
                    object.SetUpTime = options.longs === String ? $util.Long.prototype.toString.call(message.SetUpTime) : options.longs === Number ? new $util.LongBits(message.SetUpTime.low >>> 0, message.SetUpTime.high >>> 0).toNumber() : message.SetUpTime;
            if (message.AdminList && message.AdminList.length) {
                object.AdminList = [];
                for (var j = 0; j < message.AdminList.length; ++j)
                    if (typeof message.AdminList[j] === "number")
                        object.AdminList[j] = options.longs === String ? String(message.AdminList[j]) : message.AdminList[j];
                    else
                        object.AdminList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AdminList[j]) : options.longs === Number ? new $util.LongBits(message.AdminList[j].low >>> 0, message.AdminList[j].high >>> 0).toNumber(true) : message.AdminList[j];
            }
            if (message.BannedList && message.BannedList.length) {
                object.BannedList = [];
                for (var j = 0; j < message.BannedList.length; ++j)
                    if (typeof message.BannedList[j] === "number")
                        object.BannedList[j] = options.longs === String ? String(message.BannedList[j]) : message.BannedList[j];
                    else
                        object.BannedList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BannedList[j]) : options.longs === Number ? new $util.LongBits(message.BannedList[j].low >>> 0, message.BannedList[j].high >>> 0).toNumber(true) : message.BannedList[j];
            }
            if (message.MemberList && message.MemberList.length) {
                object.MemberList = [];
                for (var j = 0; j < message.MemberList.length; ++j)
                    object.MemberList[j] = $root.login.SimplePlayerInfo.toObject(message.MemberList[j], options);
            }
            return object;
        };

        GroupInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupInfo;
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
        GameBaseInfo.prototype.MaxOnline = 0;
        GameBaseInfo.prototype.State = 0;
        GameBaseInfo.prototype.Commission = 0;

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
            if (message.MaxOnline != null && message.hasOwnProperty("MaxOnline"))
                writer.uint32(56).uint32(message.MaxOnline);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(64).uint32(message.State);
            if (message.Commission != null && message.hasOwnProperty("Commission"))
                writer.uint32(72).uint32(message.Commission);
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
                case 7:
                    message.MaxOnline = reader.uint32();
                    break;
                case 8:
                    message.State = reader.uint32();
                    break;
                case 9:
                    message.Commission = reader.uint32();
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
            if (message.MaxOnline != null && message.hasOwnProperty("MaxOnline"))
                if (!$util.isInteger(message.MaxOnline))
                    return "MaxOnline: integer expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Commission != null && message.hasOwnProperty("Commission"))
                if (!$util.isInteger(message.Commission))
                    return "Commission: integer expected";
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
            if (object.MaxOnline != null)
                message.MaxOnline = object.MaxOnline >>> 0;
            if (object.State != null)
                message.State = object.State >>> 0;
            if (object.Commission != null)
                message.Commission = object.Commission >>> 0;
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
                object.MaxOnline = 0;
                object.State = 0;
                object.Commission = 0;
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
            if (message.MaxOnline != null && message.hasOwnProperty("MaxOnline"))
                object.MaxOnline = message.MaxOnline;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Commission != null && message.hasOwnProperty("Commission"))
                object.Commission = message.Commission;
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

    login.MasterInfo = (function() {

        function MasterInfo(properties) {
            this.RoomsInfo = [];
            this.Groups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MasterInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        MasterInfo.prototype.UserInfo = null;
        MasterInfo.prototype.RoomsInfo = $util.emptyArray;
        MasterInfo.prototype.Groups = $util.emptyArray;
        MasterInfo.prototype.Tasks = null;

        MasterInfo.create = function create(properties) {
            return new MasterInfo(properties);
        };

        MasterInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                $root.login.UserInfo.encode(message.UserInfo, writer.uint32(18).fork()).ldelim();
            if (message.RoomsInfo != null && message.RoomsInfo.length)
                for (var i = 0; i < message.RoomsInfo.length; ++i)
                    $root.login.RoomInfo.encode(message.RoomsInfo[i], writer.uint32(26).fork()).ldelim();
            if (message.Groups != null && message.Groups.length)
                for (var i = 0; i < message.Groups.length; ++i)
                    $root.login.GroupInfo.encode(message.Groups[i], writer.uint32(34).fork()).ldelim();
            if (message.Tasks != null && message.hasOwnProperty("Tasks"))
                $root.login.TaskList.encode(message.Tasks, writer.uint32(42).fork()).ldelim();
            return writer;
        };

        MasterInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        MasterInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.MasterInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.UserInfo = $root.login.UserInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.RoomsInfo && message.RoomsInfo.length))
                        message.RoomsInfo = [];
                    message.RoomsInfo.push($root.login.RoomInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.Groups && message.Groups.length))
                        message.Groups = [];
                    message.Groups.push($root.login.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.Tasks = $root.login.TaskList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        MasterInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        MasterInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                var error = $root.login.UserInfo.verify(message.UserInfo);
                if (error)
                    return "UserInfo." + error;
            }
            if (message.RoomsInfo != null && message.hasOwnProperty("RoomsInfo")) {
                if (!Array.isArray(message.RoomsInfo))
                    return "RoomsInfo: array expected";
                for (var i = 0; i < message.RoomsInfo.length; ++i) {
                    var error = $root.login.RoomInfo.verify(message.RoomsInfo[i]);
                    if (error)
                        return "RoomsInfo." + error;
                }
            }
            if (message.Groups != null && message.hasOwnProperty("Groups")) {
                if (!Array.isArray(message.Groups))
                    return "Groups: array expected";
                for (var i = 0; i < message.Groups.length; ++i) {
                    var error = $root.login.GroupInfo.verify(message.Groups[i]);
                    if (error)
                        return "Groups." + error;
                }
            }
            if (message.Tasks != null && message.hasOwnProperty("Tasks")) {
                var error = $root.login.TaskList.verify(message.Tasks);
                if (error)
                    return "Tasks." + error;
            }
            return null;
        };

        MasterInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.MasterInfo)
                return object;
            var message = new $root.login.MasterInfo();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.UserInfo != null) {
                if (typeof object.UserInfo !== "object")
                    throw TypeError(".login.MasterInfo.UserInfo: object expected");
                message.UserInfo = $root.login.UserInfo.fromObject(object.UserInfo);
            }
            if (object.RoomsInfo) {
                if (!Array.isArray(object.RoomsInfo))
                    throw TypeError(".login.MasterInfo.RoomsInfo: array expected");
                message.RoomsInfo = [];
                for (var i = 0; i < object.RoomsInfo.length; ++i) {
                    if (typeof object.RoomsInfo[i] !== "object")
                        throw TypeError(".login.MasterInfo.RoomsInfo: object expected");
                    message.RoomsInfo[i] = $root.login.RoomInfo.fromObject(object.RoomsInfo[i]);
                }
            }
            if (object.Groups) {
                if (!Array.isArray(object.Groups))
                    throw TypeError(".login.MasterInfo.Groups: array expected");
                message.Groups = [];
                for (var i = 0; i < object.Groups.length; ++i) {
                    if (typeof object.Groups[i] !== "object")
                        throw TypeError(".login.MasterInfo.Groups: object expected");
                    message.Groups[i] = $root.login.GroupInfo.fromObject(object.Groups[i]);
                }
            }
            if (object.Tasks != null) {
                if (typeof object.Tasks !== "object")
                    throw TypeError(".login.MasterInfo.Tasks: object expected");
                message.Tasks = $root.login.TaskList.fromObject(object.Tasks);
            }
            return message;
        };

        MasterInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.RoomsInfo = [];
                object.Groups = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.UserInfo = null;
                object.Tasks = null;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.login.UserInfo.toObject(message.UserInfo, options);
            if (message.RoomsInfo && message.RoomsInfo.length) {
                object.RoomsInfo = [];
                for (var j = 0; j < message.RoomsInfo.length; ++j)
                    object.RoomsInfo[j] = $root.login.RoomInfo.toObject(message.RoomsInfo[j], options);
            }
            if (message.Groups && message.Groups.length) {
                object.Groups = [];
                for (var j = 0; j < message.Groups.length; ++j)
                    object.Groups[j] = $root.login.GroupInfo.toObject(message.Groups[j], options);
            }
            if (message.Tasks != null && message.hasOwnProperty("Tasks"))
                object.Tasks = $root.login.TaskList.toObject(message.Tasks, options);
            return object;
        };

        MasterInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MasterInfo;
    })();

    login.ReqEnterRoom = (function() {

        function ReqEnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqEnterRoom.prototype.RoomNum = 0;
        ReqEnterRoom.prototype.RoomKey = "";

        ReqEnterRoom.create = function create(properties) {
            return new ReqEnterRoom(properties);
        };

        ReqEnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                writer.uint32(8).uint32(message.RoomNum);
            if (message.RoomKey != null && message.hasOwnProperty("RoomKey"))
                writer.uint32(18).string(message.RoomKey);
            return writer;
        };

        ReqEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqEnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ReqEnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomNum = reader.uint32();
                    break;
                case 2:
                    message.RoomKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqEnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqEnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                if (!$util.isInteger(message.RoomNum))
                    return "RoomNum: integer expected";
            if (message.RoomKey != null && message.hasOwnProperty("RoomKey"))
                if (!$util.isString(message.RoomKey))
                    return "RoomKey: string expected";
            return null;
        };

        ReqEnterRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ReqEnterRoom)
                return object;
            var message = new $root.login.ReqEnterRoom();
            if (object.RoomNum != null)
                message.RoomNum = object.RoomNum >>> 0;
            if (object.RoomKey != null)
                message.RoomKey = String(object.RoomKey);
            return message;
        };

        ReqEnterRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomNum = 0;
                object.RoomKey = "";
            }
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                object.RoomNum = message.RoomNum;
            if (message.RoomKey != null && message.hasOwnProperty("RoomKey"))
                object.RoomKey = message.RoomKey;
            return object;
        };

        ReqEnterRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqEnterRoom;
    })();

    login.GetOnlinePlayers = (function() {

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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GetOnlinePlayers();
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
            if (object instanceof $root.login.GetOnlinePlayers)
                return object;
            var message = new $root.login.GetOnlinePlayers();
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

    login.GetOnlinePlayersResp = (function() {

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
                    $root.login.SimplePlayerInfo.encode(message.Infos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GetOnlinePlayersResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetOnlinePlayersResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GetOnlinePlayersResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.login.SimplePlayerInfo.decode(reader, reader.uint32()));
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
                    var error = $root.login.SimplePlayerInfo.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        GetOnlinePlayersResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GetOnlinePlayersResp)
                return object;
            var message = new $root.login.GetOnlinePlayersResp();
            if (object.Infos) {
                if (!Array.isArray(object.Infos))
                    throw TypeError(".login.GetOnlinePlayersResp.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".login.GetOnlinePlayersResp.Infos: object expected");
                    message.Infos[i] = $root.login.SimplePlayerInfo.fromObject(object.Infos[i]);
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
                    object.Infos[j] = $root.login.SimplePlayerInfo.toObject(message.Infos[j], options);
            }
            return object;
        };

        GetOnlinePlayersResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetOnlinePlayersResp;
    })();

    login.FindPlayer = (function() {

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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.FindPlayer();
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
            if (object instanceof $root.login.FindPlayer)
                return object;
            var message = new $root.login.FindPlayer();
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

    login.FindPlayerResp = (function() {

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
                    $root.login.SimplePlayerInfo.encode(message.Infos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        FindPlayerResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        FindPlayerResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.FindPlayerResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.login.SimplePlayerInfo.decode(reader, reader.uint32()));
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
                    var error = $root.login.SimplePlayerInfo.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        FindPlayerResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.FindPlayerResp)
                return object;
            var message = new $root.login.FindPlayerResp();
            if (object.Infos) {
                if (!Array.isArray(object.Infos))
                    throw TypeError(".login.FindPlayerResp.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".login.FindPlayerResp.Infos: object expected");
                    message.Infos[i] = $root.login.SimplePlayerInfo.fromObject(object.Infos[i]);
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
                    object.Infos[j] = $root.login.SimplePlayerInfo.toObject(message.Infos[j], options);
            }
            return object;
        };

        FindPlayerResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindPlayerResp;
    })();

    return login;
})();

module.exports = $root;
