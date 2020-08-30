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

        UserInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        UserInfo.prototype.Name = "";
        UserInfo.prototype.Account = "";
        UserInfo.prototype.Password = "";
        UserInfo.prototype.FaceID = 0;
        UserInfo.prototype.Gender = 0;
        UserInfo.prototype.Age = 0;
        UserInfo.prototype.VIP = 0;
        UserInfo.prototype.Level = 0;
        UserInfo.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        UserInfo.prototype.PassPortID = "";
        UserInfo.prototype.RealName = "";
        UserInfo.prototype.PhoneNum = "";
        UserInfo.prototype.Email = "";
        UserInfo.prototype.Address = "";
        UserInfo.prototype.Identity = "";
        UserInfo.prototype.AgentID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        UserInfo.prototype.ReferralCode = "";
        UserInfo.prototype.ClientAddr = "";
        UserInfo.prototype.ServerAddr = "";
        UserInfo.prototype.MachineCode = "";

        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(18).string(message.Name);
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(26).string(message.Account);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(34).string(message.Password);
            if (message.FaceID != null && Object.hasOwnProperty.call(message, "FaceID"))
                writer.uint32(40).uint32(message.FaceID);
            if (message.Gender != null && Object.hasOwnProperty.call(message, "Gender"))
                writer.uint32(48).uint32(message.Gender);
            if (message.Age != null && Object.hasOwnProperty.call(message, "Age"))
                writer.uint32(56).uint32(message.Age);
            if (message.VIP != null && Object.hasOwnProperty.call(message, "VIP"))
                writer.uint32(64).uint32(message.VIP);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(72).uint32(message.Level);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(80).int64(message.Gold);
            if (message.PassPortID != null && Object.hasOwnProperty.call(message, "PassPortID"))
                writer.uint32(90).string(message.PassPortID);
            if (message.RealName != null && Object.hasOwnProperty.call(message, "RealName"))
                writer.uint32(98).string(message.RealName);
            if (message.PhoneNum != null && Object.hasOwnProperty.call(message, "PhoneNum"))
                writer.uint32(106).string(message.PhoneNum);
            if (message.Email != null && Object.hasOwnProperty.call(message, "Email"))
                writer.uint32(114).string(message.Email);
            if (message.Address != null && Object.hasOwnProperty.call(message, "Address"))
                writer.uint32(122).string(message.Address);
            if (message.Identity != null && Object.hasOwnProperty.call(message, "Identity"))
                writer.uint32(130).string(message.Identity);
            if (message.AgentID != null && Object.hasOwnProperty.call(message, "AgentID"))
                writer.uint32(136).uint64(message.AgentID);
            if (message.ReferralCode != null && Object.hasOwnProperty.call(message, "ReferralCode"))
                writer.uint32(146).string(message.ReferralCode);
            if (message.ClientAddr != null && Object.hasOwnProperty.call(message, "ClientAddr"))
                writer.uint32(154).string(message.ClientAddr);
            if (message.ServerAddr != null && Object.hasOwnProperty.call(message, "ServerAddr"))
                writer.uint32(162).string(message.ServerAddr);
            if (message.MachineCode != null && Object.hasOwnProperty.call(message, "MachineCode"))
                writer.uint32(170).string(message.MachineCode);
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
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Account = reader.string();
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
                    message.VIP = reader.uint32();
                    break;
                case 9:
                    message.Level = reader.uint32();
                    break;
                case 10:
                    message.Gold = reader.int64();
                    break;
                case 11:
                    message.PassPortID = reader.string();
                    break;
                case 12:
                    message.RealName = reader.string();
                    break;
                case 13:
                    message.PhoneNum = reader.string();
                    break;
                case 14:
                    message.Email = reader.string();
                    break;
                case 15:
                    message.Address = reader.string();
                    break;
                case 16:
                    message.Identity = reader.string();
                    break;
                case 17:
                    message.AgentID = reader.uint64();
                    break;
                case 18:
                    message.ReferralCode = reader.string();
                    break;
                case 19:
                    message.ClientAddr = reader.string();
                    break;
                case 20:
                    message.ServerAddr = reader.string();
                    break;
                case 21:
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
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
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
            if (message.VIP != null && message.hasOwnProperty("VIP"))
                if (!$util.isInteger(message.VIP))
                    return "VIP: integer expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                if (!$util.isString(message.PassPortID))
                    return "PassPortID: string expected";
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                if (!$util.isString(message.RealName))
                    return "RealName: string expected";
            if (message.PhoneNum != null && message.hasOwnProperty("PhoneNum"))
                if (!$util.isString(message.PhoneNum))
                    return "PhoneNum: string expected";
            if (message.Email != null && message.hasOwnProperty("Email"))
                if (!$util.isString(message.Email))
                    return "Email: string expected";
            if (message.Address != null && message.hasOwnProperty("Address"))
                if (!$util.isString(message.Address))
                    return "Address: string expected";
            if (message.Identity != null && message.hasOwnProperty("Identity"))
                if (!$util.isString(message.Identity))
                    return "Identity: string expected";
            if (message.AgentID != null && message.hasOwnProperty("AgentID"))
                if (!$util.isInteger(message.AgentID) && !(message.AgentID && $util.isInteger(message.AgentID.low) && $util.isInteger(message.AgentID.high)))
                    return "AgentID: integer|Long expected";
            if (message.ReferralCode != null && message.hasOwnProperty("ReferralCode"))
                if (!$util.isString(message.ReferralCode))
                    return "ReferralCode: string expected";
            if (message.ClientAddr != null && message.hasOwnProperty("ClientAddr"))
                if (!$util.isString(message.ClientAddr))
                    return "ClientAddr: string expected";
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                if (!$util.isString(message.ServerAddr))
                    return "ServerAddr: string expected";
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                if (!$util.isString(message.MachineCode))
                    return "MachineCode: string expected";
            return null;
        };

        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.UserInfo)
                return object;
            var message = new $root.login.UserInfo();
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
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.FaceID != null)
                message.FaceID = object.FaceID >>> 0;
            if (object.Gender != null)
                message.Gender = object.Gender >>> 0;
            if (object.Age != null)
                message.Age = object.Age >>> 0;
            if (object.VIP != null)
                message.VIP = object.VIP >>> 0;
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
            if (object.RealName != null)
                message.RealName = String(object.RealName);
            if (object.PhoneNum != null)
                message.PhoneNum = String(object.PhoneNum);
            if (object.Email != null)
                message.Email = String(object.Email);
            if (object.Address != null)
                message.Address = String(object.Address);
            if (object.Identity != null)
                message.Identity = String(object.Identity);
            if (object.AgentID != null)
                if ($util.Long)
                    (message.AgentID = $util.Long.fromValue(object.AgentID)).unsigned = true;
                else if (typeof object.AgentID === "string")
                    message.AgentID = parseInt(object.AgentID, 10);
                else if (typeof object.AgentID === "number")
                    message.AgentID = object.AgentID;
                else if (typeof object.AgentID === "object")
                    message.AgentID = new $util.LongBits(object.AgentID.low >>> 0, object.AgentID.high >>> 0).toNumber(true);
            if (object.ReferralCode != null)
                message.ReferralCode = String(object.ReferralCode);
            if (object.ClientAddr != null)
                message.ClientAddr = String(object.ClientAddr);
            if (object.ServerAddr != null)
                message.ServerAddr = String(object.ServerAddr);
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
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Name = "";
                object.Account = "";
                object.Password = "";
                object.FaceID = 0;
                object.Gender = 0;
                object.Age = 0;
                object.VIP = 0;
                object.Level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
                object.PassPortID = "";
                object.RealName = "";
                object.PhoneNum = "";
                object.Email = "";
                object.Address = "";
                object.Identity = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.AgentID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AgentID = options.longs === String ? "0" : 0;
                object.ReferralCode = "";
                object.ClientAddr = "";
                object.ServerAddr = "";
                object.MachineCode = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                object.Gender = message.Gender;
            if (message.Age != null && message.hasOwnProperty("Age"))
                object.Age = message.Age;
            if (message.VIP != null && message.hasOwnProperty("VIP"))
                object.VIP = message.VIP;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                object.PassPortID = message.PassPortID;
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                object.RealName = message.RealName;
            if (message.PhoneNum != null && message.hasOwnProperty("PhoneNum"))
                object.PhoneNum = message.PhoneNum;
            if (message.Email != null && message.hasOwnProperty("Email"))
                object.Email = message.Email;
            if (message.Address != null && message.hasOwnProperty("Address"))
                object.Address = message.Address;
            if (message.Identity != null && message.hasOwnProperty("Identity"))
                object.Identity = message.Identity;
            if (message.AgentID != null && message.hasOwnProperty("AgentID"))
                if (typeof message.AgentID === "number")
                    object.AgentID = options.longs === String ? String(message.AgentID) : message.AgentID;
                else
                    object.AgentID = options.longs === String ? $util.Long.prototype.toString.call(message.AgentID) : options.longs === Number ? new $util.LongBits(message.AgentID.low >>> 0, message.AgentID.high >>> 0).toNumber(true) : message.AgentID;
            if (message.ReferralCode != null && message.hasOwnProperty("ReferralCode"))
                object.ReferralCode = message.ReferralCode;
            if (message.ClientAddr != null && message.hasOwnProperty("ClientAddr"))
                object.ClientAddr = message.ClientAddr;
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                object.ServerAddr = message.ServerAddr;
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                object.MachineCode = message.MachineCode;
            return object;
        };

        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
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
            if (message.RoomNum != null && Object.hasOwnProperty.call(message, "RoomNum"))
                writer.uint32(8).uint32(message.RoomNum);
            if (message.RoomKey != null && Object.hasOwnProperty.call(message, "RoomKey"))
                writer.uint32(18).string(message.RoomKey);
            if (message.RoomName != null && Object.hasOwnProperty.call(message, "RoomName"))
                writer.uint32(26).string(message.RoomName);
            if (message.Games != null && Object.hasOwnProperty.call(message, "Games"))
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

    login.GameInfo = (function() {

        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameInfo.prototype.Type = 0;
        GameInfo.prototype.KindID = 0;
        GameInfo.prototype.Level = 0;
        GameInfo.prototype.Name = "";
        GameInfo.prototype.EnterScore = 0;
        GameInfo.prototype.LessScore = 0;
        GameInfo.prototype.MaxOnline = 0;
        GameInfo.prototype.State = 0;
        GameInfo.prototype.Commission = 0;

        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(8).uint32(message.Type);
            if (message.KindID != null && Object.hasOwnProperty.call(message, "KindID"))
                writer.uint32(16).uint32(message.KindID);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(24).uint32(message.Level);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(34).string(message.Name);
            if (message.EnterScore != null && Object.hasOwnProperty.call(message, "EnterScore"))
                writer.uint32(40).uint32(message.EnterScore);
            if (message.LessScore != null && Object.hasOwnProperty.call(message, "LessScore"))
                writer.uint32(48).uint32(message.LessScore);
            if (message.MaxOnline != null && Object.hasOwnProperty.call(message, "MaxOnline"))
                writer.uint32(56).uint32(message.MaxOnline);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(64).uint32(message.State);
            if (message.Commission != null && Object.hasOwnProperty.call(message, "Commission"))
                writer.uint32(72).uint32(message.Commission);
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

        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameInfo.verify = function verify(message) {
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

        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameInfo)
                return object;
            var message = new $root.login.GameInfo();
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

        GameInfo.toObject = function toObject(message, options) {
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

        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
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
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(8).uint32(message.ID);
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.login.GameInfo.encode(message.Info, writer.uint32(18).fork()).ldelim();
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
                    message.Info = $root.login.GameInfo.decode(reader, reader.uint32());
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
                var error = $root.login.GameInfo.verify(message.Info);
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
                message.Info = $root.login.GameInfo.fromObject(object.Info);
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
                object.Info = $root.login.GameInfo.toObject(message.Info, options);
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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MasterInfo.prototype.UserInfo = null;
        MasterInfo.prototype.RoomsInfo = $util.emptyArray;
        MasterInfo.prototype.Tasks = null;

        MasterInfo.create = function create(properties) {
            return new MasterInfo(properties);
        };

        MasterInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && Object.hasOwnProperty.call(message, "UserInfo"))
                $root.login.UserInfo.encode(message.UserInfo, writer.uint32(10).fork()).ldelim();
            if (message.RoomsInfo != null && message.RoomsInfo.length)
                for (var i = 0; i < message.RoomsInfo.length; ++i)
                    $root.login.RoomInfo.encode(message.RoomsInfo[i], writer.uint32(18).fork()).ldelim();
            if (message.Tasks != null && Object.hasOwnProperty.call(message, "Tasks"))
                $root.login.TaskList.encode(message.Tasks, writer.uint32(26).fork()).ldelim();
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
                    message.UserInfo = $root.login.UserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.RoomsInfo && message.RoomsInfo.length))
                        message.RoomsInfo = [];
                    message.RoomsInfo.push($root.login.RoomInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            if (options.arrays || options.defaults)
                object.RoomsInfo = [];
            if (options.defaults) {
                object.UserInfo = null;
                object.Tasks = null;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.login.UserInfo.toObject(message.UserInfo, options);
            if (message.RoomsInfo && message.RoomsInfo.length) {
                object.RoomsInfo = [];
                for (var j = 0; j < message.RoomsInfo.length; ++j)
                    object.RoomsInfo[j] = $root.login.RoomInfo.toObject(message.RoomsInfo[j], options);
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
            if (message.TaskID != null && Object.hasOwnProperty.call(message, "TaskID"))
                writer.uint32(8).uint32(message.TaskID);
            if (message.Twice != null && Object.hasOwnProperty.call(message, "Twice"))
                writer.uint32(16).uint32(message.Twice);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
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

    login.RegisterReq = (function() {

        function RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RegisterReq.prototype.Name = "";
        RegisterReq.prototype.Password = "";
        RegisterReq.prototype.SecurityCode = "";
        RegisterReq.prototype.MachineCode = "";
        RegisterReq.prototype.InvitationCode = "";
        RegisterReq.prototype.PlatformID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        RegisterReq.prototype.Gender = 0;
        RegisterReq.prototype.Age = 0;
        RegisterReq.prototype.FaceID = 0;
        RegisterReq.prototype.PassPortID = "";
        RegisterReq.prototype.RealName = "";
        RegisterReq.prototype.PhoneNum = "";
        RegisterReq.prototype.Email = "";
        RegisterReq.prototype.Address = "";

        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(10).string(message.Name);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(18).string(message.Password);
            if (message.SecurityCode != null && Object.hasOwnProperty.call(message, "SecurityCode"))
                writer.uint32(26).string(message.SecurityCode);
            if (message.MachineCode != null && Object.hasOwnProperty.call(message, "MachineCode"))
                writer.uint32(34).string(message.MachineCode);
            if (message.InvitationCode != null && Object.hasOwnProperty.call(message, "InvitationCode"))
                writer.uint32(42).string(message.InvitationCode);
            if (message.PlatformID != null && Object.hasOwnProperty.call(message, "PlatformID"))
                writer.uint32(48).uint64(message.PlatformID);
            if (message.Gender != null && Object.hasOwnProperty.call(message, "Gender"))
                writer.uint32(56).uint32(message.Gender);
            if (message.Age != null && Object.hasOwnProperty.call(message, "Age"))
                writer.uint32(64).uint32(message.Age);
            if (message.FaceID != null && Object.hasOwnProperty.call(message, "FaceID"))
                writer.uint32(72).uint32(message.FaceID);
            if (message.PassPortID != null && Object.hasOwnProperty.call(message, "PassPortID"))
                writer.uint32(82).string(message.PassPortID);
            if (message.RealName != null && Object.hasOwnProperty.call(message, "RealName"))
                writer.uint32(90).string(message.RealName);
            if (message.PhoneNum != null && Object.hasOwnProperty.call(message, "PhoneNum"))
                writer.uint32(98).string(message.PhoneNum);
            if (message.Email != null && Object.hasOwnProperty.call(message, "Email"))
                writer.uint32(106).string(message.Email);
            if (message.Address != null && Object.hasOwnProperty.call(message, "Address"))
                writer.uint32(114).string(message.Address);
            return writer;
        };

        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RegisterReq();
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
                case 6:
                    message.PlatformID = reader.uint64();
                    break;
                case 7:
                    message.Gender = reader.uint32();
                    break;
                case 8:
                    message.Age = reader.uint32();
                    break;
                case 9:
                    message.FaceID = reader.uint32();
                    break;
                case 10:
                    message.PassPortID = reader.string();
                    break;
                case 11:
                    message.RealName = reader.string();
                    break;
                case 12:
                    message.PhoneNum = reader.string();
                    break;
                case 13:
                    message.Email = reader.string();
                    break;
                case 14:
                    message.Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RegisterReq.verify = function verify(message) {
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
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (!$util.isInteger(message.PlatformID) && !(message.PlatformID && $util.isInteger(message.PlatformID.low) && $util.isInteger(message.PlatformID.high)))
                    return "PlatformID: integer|Long expected";
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                if (!$util.isInteger(message.Gender))
                    return "Gender: integer expected";
            if (message.Age != null && message.hasOwnProperty("Age"))
                if (!$util.isInteger(message.Age))
                    return "Age: integer expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                if (!$util.isString(message.PassPortID))
                    return "PassPortID: string expected";
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                if (!$util.isString(message.RealName))
                    return "RealName: string expected";
            if (message.PhoneNum != null && message.hasOwnProperty("PhoneNum"))
                if (!$util.isString(message.PhoneNum))
                    return "PhoneNum: string expected";
            if (message.Email != null && message.hasOwnProperty("Email"))
                if (!$util.isString(message.Email))
                    return "Email: string expected";
            if (message.Address != null && message.hasOwnProperty("Address"))
                if (!$util.isString(message.Address))
                    return "Address: string expected";
            return null;
        };

        RegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RegisterReq)
                return object;
            var message = new $root.login.RegisterReq();
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
            if (object.PlatformID != null)
                if ($util.Long)
                    (message.PlatformID = $util.Long.fromValue(object.PlatformID)).unsigned = true;
                else if (typeof object.PlatformID === "string")
                    message.PlatformID = parseInt(object.PlatformID, 10);
                else if (typeof object.PlatformID === "number")
                    message.PlatformID = object.PlatformID;
                else if (typeof object.PlatformID === "object")
                    message.PlatformID = new $util.LongBits(object.PlatformID.low >>> 0, object.PlatformID.high >>> 0).toNumber(true);
            if (object.Gender != null)
                message.Gender = object.Gender >>> 0;
            if (object.Age != null)
                message.Age = object.Age >>> 0;
            if (object.FaceID != null)
                message.FaceID = object.FaceID >>> 0;
            if (object.PassPortID != null)
                message.PassPortID = String(object.PassPortID);
            if (object.RealName != null)
                message.RealName = String(object.RealName);
            if (object.PhoneNum != null)
                message.PhoneNum = String(object.PhoneNum);
            if (object.Email != null)
                message.Email = String(object.Email);
            if (object.Address != null)
                message.Address = String(object.Address);
            return message;
        };

        RegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Password = "";
                object.SecurityCode = "";
                object.MachineCode = "";
                object.InvitationCode = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.PlatformID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformID = options.longs === String ? "0" : 0;
                object.Gender = 0;
                object.Age = 0;
                object.FaceID = 0;
                object.PassPortID = "";
                object.RealName = "";
                object.PhoneNum = "";
                object.Email = "";
                object.Address = "";
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
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (typeof message.PlatformID === "number")
                    object.PlatformID = options.longs === String ? String(message.PlatformID) : message.PlatformID;
                else
                    object.PlatformID = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformID) : options.longs === Number ? new $util.LongBits(message.PlatformID.low >>> 0, message.PlatformID.high >>> 0).toNumber(true) : message.PlatformID;
            if (message.Gender != null && message.hasOwnProperty("Gender"))
                object.Gender = message.Gender;
            if (message.Age != null && message.hasOwnProperty("Age"))
                object.Age = message.Age;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.PassPortID != null && message.hasOwnProperty("PassPortID"))
                object.PassPortID = message.PassPortID;
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                object.RealName = message.RealName;
            if (message.PhoneNum != null && message.hasOwnProperty("PhoneNum"))
                object.PhoneNum = message.PhoneNum;
            if (message.Email != null && message.hasOwnProperty("Email"))
                object.Email = message.Email;
            if (message.Address != null && message.hasOwnProperty("Address"))
                object.Address = message.Address;
            return object;
        };

        RegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterReq;
    })();

    login.RegisterResp = (function() {

        function RegisterResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RegisterResp.prototype.Info = null;

        RegisterResp.create = function create(properties) {
            return new RegisterResp(properties);
        };

        RegisterResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.login.UserInfo.encode(message.Info, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        RegisterResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RegisterResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RegisterResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Info = $root.login.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RegisterResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RegisterResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.login.UserInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        RegisterResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.RegisterResp)
                return object;
            var message = new $root.login.RegisterResp();
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".login.RegisterResp.Info: object expected");
                message.Info = $root.login.UserInfo.fromObject(object.Info);
            }
            return message;
        };

        RegisterResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Info = null;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.login.UserInfo.toObject(message.Info, options);
            return object;
        };

        RegisterResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterResp;
    })();

    login.LoginReq = (function() {

        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LoginReq.prototype.Account = "";
        LoginReq.prototype.Password = "";
        LoginReq.prototype.SecurityCode = "";
        LoginReq.prototype.MachineCode = "";
        LoginReq.prototype.PlatformID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(10).string(message.Account);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(18).string(message.Password);
            if (message.SecurityCode != null && Object.hasOwnProperty.call(message, "SecurityCode"))
                writer.uint32(26).string(message.SecurityCode);
            if (message.MachineCode != null && Object.hasOwnProperty.call(message, "MachineCode"))
                writer.uint32(34).string(message.MachineCode);
            if (message.PlatformID != null && Object.hasOwnProperty.call(message, "PlatformID"))
                writer.uint32(40).uint64(message.PlatformID);
            return writer;
        };

        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.LoginReq();
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
                case 5:
                    message.PlatformID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LoginReq.verify = function verify(message) {
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
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (!$util.isInteger(message.PlatformID) && !(message.PlatformID && $util.isInteger(message.PlatformID.low) && $util.isInteger(message.PlatformID.high)))
                    return "PlatformID: integer|Long expected";
            return null;
        };

        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.LoginReq)
                return object;
            var message = new $root.login.LoginReq();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.SecurityCode != null)
                message.SecurityCode = String(object.SecurityCode);
            if (object.MachineCode != null)
                message.MachineCode = String(object.MachineCode);
            if (object.PlatformID != null)
                if ($util.Long)
                    (message.PlatformID = $util.Long.fromValue(object.PlatformID)).unsigned = true;
                else if (typeof object.PlatformID === "string")
                    message.PlatformID = parseInt(object.PlatformID, 10);
                else if (typeof object.PlatformID === "number")
                    message.PlatformID = object.PlatformID;
                else if (typeof object.PlatformID === "object")
                    message.PlatformID = new $util.LongBits(object.PlatformID.low >>> 0, object.PlatformID.high >>> 0).toNumber(true);
            return message;
        };

        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.SecurityCode = "";
                object.MachineCode = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.PlatformID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformID = options.longs === String ? "0" : 0;
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.SecurityCode != null && message.hasOwnProperty("SecurityCode"))
                object.SecurityCode = message.SecurityCode;
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                object.MachineCode = message.MachineCode;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (typeof message.PlatformID === "number")
                    object.PlatformID = options.longs === String ? String(message.PlatformID) : message.PlatformID;
                else
                    object.PlatformID = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformID) : options.longs === Number ? new $util.LongBits(message.PlatformID.low >>> 0, message.PlatformID.high >>> 0).toNumber(true) : message.PlatformID;
            return object;
        };

        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    login.LoginResp = (function() {

        function LoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LoginResp.prototype.MainInfo = null;

        LoginResp.create = function create(properties) {
            return new LoginResp(properties);
        };

        LoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MainInfo != null && Object.hasOwnProperty.call(message, "MainInfo"))
                $root.login.MasterInfo.encode(message.MainInfo, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        LoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        LoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.LoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MainInfo = $root.login.MasterInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MainInfo != null && message.hasOwnProperty("MainInfo")) {
                var error = $root.login.MasterInfo.verify(message.MainInfo);
                if (error)
                    return "MainInfo." + error;
            }
            return null;
        };

        LoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.LoginResp)
                return object;
            var message = new $root.login.LoginResp();
            if (object.MainInfo != null) {
                if (typeof object.MainInfo !== "object")
                    throw TypeError(".login.LoginResp.MainInfo: object expected");
                message.MainInfo = $root.login.MasterInfo.fromObject(object.MainInfo);
            }
            return message;
        };

        LoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.MainInfo = null;
            if (message.MainInfo != null && message.hasOwnProperty("MainInfo"))
                object.MainInfo = $root.login.MasterInfo.toObject(message.MainInfo, options);
            return object;
        };

        LoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResp;
    })();

    login.AllopatricResp = (function() {

        function AllopatricResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        AllopatricResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        AllopatricResp.create = function create(properties) {
            return new AllopatricResp(properties);
        };

        AllopatricResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            return writer;
        };

        AllopatricResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        AllopatricResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.AllopatricResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AllopatricResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AllopatricResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            return null;
        };

        AllopatricResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.AllopatricResp)
                return object;
            var message = new $root.login.AllopatricResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
            return message;
        };

        AllopatricResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            return object;
        };

        AllopatricResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllopatricResp;
    })();

    login.ReconnectReq = (function() {

        function ReconnectReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReconnectReq.prototype.Account = "";
        ReconnectReq.prototype.Password = "";
        ReconnectReq.prototype.MachineCode = "";
        ReconnectReq.prototype.PlatformID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ReconnectReq.create = function create(properties) {
            return new ReconnectReq(properties);
        };

        ReconnectReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(10).string(message.Account);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(18).string(message.Password);
            if (message.MachineCode != null && Object.hasOwnProperty.call(message, "MachineCode"))
                writer.uint32(26).string(message.MachineCode);
            if (message.PlatformID != null && Object.hasOwnProperty.call(message, "PlatformID"))
                writer.uint32(32).uint64(message.PlatformID);
            return writer;
        };

        ReconnectReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReconnectReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ReconnectReq();
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
                    message.MachineCode = reader.string();
                    break;
                case 4:
                    message.PlatformID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReconnectReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReconnectReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                if (!$util.isString(message.MachineCode))
                    return "MachineCode: string expected";
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (!$util.isInteger(message.PlatformID) && !(message.PlatformID && $util.isInteger(message.PlatformID.low) && $util.isInteger(message.PlatformID.high)))
                    return "PlatformID: integer|Long expected";
            return null;
        };

        ReconnectReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ReconnectReq)
                return object;
            var message = new $root.login.ReconnectReq();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.MachineCode != null)
                message.MachineCode = String(object.MachineCode);
            if (object.PlatformID != null)
                if ($util.Long)
                    (message.PlatformID = $util.Long.fromValue(object.PlatformID)).unsigned = true;
                else if (typeof object.PlatformID === "string")
                    message.PlatformID = parseInt(object.PlatformID, 10);
                else if (typeof object.PlatformID === "number")
                    message.PlatformID = object.PlatformID;
                else if (typeof object.PlatformID === "object")
                    message.PlatformID = new $util.LongBits(object.PlatformID.low >>> 0, object.PlatformID.high >>> 0).toNumber(true);
            return message;
        };

        ReconnectReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.MachineCode = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.PlatformID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformID = options.longs === String ? "0" : 0;
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.MachineCode != null && message.hasOwnProperty("MachineCode"))
                object.MachineCode = message.MachineCode;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (typeof message.PlatformID === "number")
                    object.PlatformID = options.longs === String ? String(message.PlatformID) : message.PlatformID;
                else
                    object.PlatformID = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformID) : options.longs === Number ? new $util.LongBits(message.PlatformID.low >>> 0, message.PlatformID.high >>> 0).toNumber(true) : message.PlatformID;
            return object;
        };

        ReconnectReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnectReq;
    })();

    login.ReconnectResp = (function() {

        function ReconnectResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReconnectResp.prototype.MainInfo = null;

        ReconnectResp.create = function create(properties) {
            return new ReconnectResp(properties);
        };

        ReconnectResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MainInfo != null && Object.hasOwnProperty.call(message, "MainInfo"))
                $root.login.MasterInfo.encode(message.MainInfo, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ReconnectResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReconnectResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ReconnectResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MainInfo = $root.login.MasterInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReconnectResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReconnectResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MainInfo != null && message.hasOwnProperty("MainInfo")) {
                var error = $root.login.MasterInfo.verify(message.MainInfo);
                if (error)
                    return "MainInfo." + error;
            }
            return null;
        };

        ReconnectResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ReconnectResp)
                return object;
            var message = new $root.login.ReconnectResp();
            if (object.MainInfo != null) {
                if (typeof object.MainInfo !== "object")
                    throw TypeError(".login.ReconnectResp.MainInfo: object expected");
                message.MainInfo = $root.login.MasterInfo.fromObject(object.MainInfo);
            }
            return message;
        };

        ReconnectResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.MainInfo = null;
            if (message.MainInfo != null && message.hasOwnProperty("MainInfo"))
                object.MainInfo = $root.login.MasterInfo.toObject(message.MainInfo, options);
            return object;
        };

        ReconnectResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnectResp;
    })();

    login.EnterRoomReq = (function() {

        function EnterRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterRoomReq.prototype.RoomNum = 0;
        EnterRoomReq.prototype.RoomKey = "";

        EnterRoomReq.create = function create(properties) {
            return new EnterRoomReq(properties);
        };

        EnterRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomNum != null && Object.hasOwnProperty.call(message, "RoomNum"))
                writer.uint32(8).uint32(message.RoomNum);
            if (message.RoomKey != null && Object.hasOwnProperty.call(message, "RoomKey"))
                writer.uint32(18).string(message.RoomKey);
            return writer;
        };

        EnterRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EnterRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.EnterRoomReq();
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

        EnterRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EnterRoomReq.verify = function verify(message) {
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

        EnterRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.EnterRoomReq)
                return object;
            var message = new $root.login.EnterRoomReq();
            if (object.RoomNum != null)
                message.RoomNum = object.RoomNum >>> 0;
            if (object.RoomKey != null)
                message.RoomKey = String(object.RoomKey);
            return message;
        };

        EnterRoomReq.toObject = function toObject(message, options) {
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

        EnterRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomReq;
    })();

    login.EnterRoomResp = (function() {

        function EnterRoomResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterRoomResp.prototype.Games = null;

        EnterRoomResp.create = function create(properties) {
            return new EnterRoomResp(properties);
        };

        EnterRoomResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Games != null && Object.hasOwnProperty.call(message, "Games"))
                $root.login.GameList.encode(message.Games, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        EnterRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EnterRoomResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.EnterRoomResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Games = $root.login.GameList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        EnterRoomResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EnterRoomResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Games != null && message.hasOwnProperty("Games")) {
                var error = $root.login.GameList.verify(message.Games);
                if (error)
                    return "Games." + error;
            }
            return null;
        };

        EnterRoomResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.EnterRoomResp)
                return object;
            var message = new $root.login.EnterRoomResp();
            if (object.Games != null) {
                if (typeof object.Games !== "object")
                    throw TypeError(".login.EnterRoomResp.Games: object expected");
                message.Games = $root.login.GameList.fromObject(object.Games);
            }
            return message;
        };

        EnterRoomResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Games = null;
            if (message.Games != null && message.hasOwnProperty("Games"))
                object.Games = $root.login.GameList.toObject(message.Games, options);
            return object;
        };

        EnterRoomResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomResp;
    })();

    login.ResultResp = (function() {

        function ResultResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ResultResp.prototype.State = 0;
        ResultResp.prototype.Hints = "";

        ResultResp.create = function create(properties) {
            return new ResultResp(properties);
        };

        ResultResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(8).int32(message.State);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        ResultResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ResultResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ResultResp();
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

        ResultResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ResultResp.verify = function verify(message) {
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

        ResultResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ResultResp)
                return object;
            var message = new $root.login.ResultResp();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        ResultResp.toObject = function toObject(message, options) {
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

        ResultResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResultResp;
    })();

    login.ResultPopResp = (function() {

        function ResultPopResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ResultPopResp.prototype.Flag = 0;
        ResultPopResp.prototype.Title = "";
        ResultPopResp.prototype.Hints = "";

        ResultPopResp.create = function create(properties) {
            return new ResultPopResp(properties);
        };

        ResultPopResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Flag != null && Object.hasOwnProperty.call(message, "Flag"))
                writer.uint32(8).int32(message.Flag);
            if (message.Title != null && Object.hasOwnProperty.call(message, "Title"))
                writer.uint32(18).string(message.Title);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
                writer.uint32(26).string(message.Hints);
            return writer;
        };

        ResultPopResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ResultPopResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ResultPopResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Flag = reader.int32();
                    break;
                case 2:
                    message.Title = reader.string();
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

        ResultPopResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ResultPopResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                if (!$util.isInteger(message.Flag))
                    return "Flag: integer expected";
            if (message.Title != null && message.hasOwnProperty("Title"))
                if (!$util.isString(message.Title))
                    return "Title: string expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        ResultPopResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ResultPopResp)
                return object;
            var message = new $root.login.ResultPopResp();
            if (object.Flag != null)
                message.Flag = object.Flag | 0;
            if (object.Title != null)
                message.Title = String(object.Title);
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        ResultPopResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Flag = 0;
                object.Title = "";
                object.Hints = "";
            }
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.Title != null && message.hasOwnProperty("Title"))
                object.Title = message.Title;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        ResultPopResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResultPopResp;
    })();

    return login;
})();

module.exports = $root;
