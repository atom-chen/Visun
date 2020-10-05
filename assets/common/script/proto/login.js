/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.login = (function() {

    var login = {};

    login.TableState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Init"] = 0;
        values[valuesById[1] = "Open"] = 1;
        values[valuesById[2] = "Maintain"] = 2;
        values[valuesById[3] = "Clear"] = 3;
        values[valuesById[4] = "Stop"] = 4;
        values[valuesById[5] = "Close"] = 5;
        return values;
    })();

    login.GameType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "General"] = 0;
        values[valuesById[1] = "Fight"] = 1;
        values[valuesById[2] = "Multiplayer"] = 2;
        values[valuesById[3] = "TableCard"] = 3;
        values[valuesById[4] = "Guess"] = 4;
        values[valuesById[5] = "GamesCity"] = 5;
        values[valuesById[6] = "DualMeet"] = 6;
        values[valuesById[7] = "Sport"] = 7;
        values[valuesById[8] = "Smart"] = 8;
        values[valuesById[9] = "RPG"] = 9;
        return values;
    })();

    login.GameScene = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Free"] = 0;
        values[valuesById[1] = "Start"] = 1;
        values[valuesById[2] = "Call"] = 2;
        values[valuesById[3] = "Decide"] = 3;
        values[valuesById[4] = "Playing"] = 4;
        values[valuesById[5] = "Opening"] = 5;
        values[valuesById[6] = "Over"] = 6;
        values[valuesById[7] = "Closing"] = 7;
        return values;
    })();

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

    login.TableInfo = (function() {

        function TableInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TableInfo.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TableInfo.prototype.Name = "";
        TableInfo.prototype.Password = "";
        TableInfo.prototype.State = 0;
        TableInfo.prototype.EnterScore = 0;
        TableInfo.prototype.LessScore = 0;
        TableInfo.prototype.PlayScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TableInfo.prototype.Commission = 0;
        TableInfo.prototype.MaxChair = 0;
        TableInfo.prototype.Amount = 0;
        TableInfo.prototype.MaxOnline = 0;

        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        TableInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HostID != null && Object.hasOwnProperty.call(message, "HostID"))
                writer.uint32(8).uint64(message.HostID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(18).string(message.Name);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(26).string(message.Password);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(32).int32(message.State);
            if (message.EnterScore != null && Object.hasOwnProperty.call(message, "EnterScore"))
                writer.uint32(40).uint32(message.EnterScore);
            if (message.LessScore != null && Object.hasOwnProperty.call(message, "LessScore"))
                writer.uint32(48).uint32(message.LessScore);
            if (message.PlayScore != null && Object.hasOwnProperty.call(message, "PlayScore"))
                writer.uint32(56).int64(message.PlayScore);
            if (message.Commission != null && Object.hasOwnProperty.call(message, "Commission"))
                writer.uint32(64).uint32(message.Commission);
            if (message.MaxChair != null && Object.hasOwnProperty.call(message, "MaxChair"))
                writer.uint32(72).uint32(message.MaxChair);
            if (message.Amount != null && Object.hasOwnProperty.call(message, "Amount"))
                writer.uint32(80).uint32(message.Amount);
            if (message.MaxOnline != null && Object.hasOwnProperty.call(message, "MaxOnline"))
                writer.uint32(88).uint32(message.MaxOnline);
            return writer;
        };

        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.TableInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HostID = reader.uint64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                case 4:
                    message.State = reader.int32();
                    break;
                case 5:
                    message.EnterScore = reader.uint32();
                    break;
                case 6:
                    message.LessScore = reader.uint32();
                    break;
                case 7:
                    message.PlayScore = reader.int64();
                    break;
                case 8:
                    message.Commission = reader.uint32();
                    break;
                case 9:
                    message.MaxChair = reader.uint32();
                    break;
                case 10:
                    message.Amount = reader.uint32();
                    break;
                case 11:
                    message.MaxOnline = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TableInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.EnterScore != null && message.hasOwnProperty("EnterScore"))
                if (!$util.isInteger(message.EnterScore))
                    return "EnterScore: integer expected";
            if (message.LessScore != null && message.hasOwnProperty("LessScore"))
                if (!$util.isInteger(message.LessScore))
                    return "LessScore: integer expected";
            if (message.PlayScore != null && message.hasOwnProperty("PlayScore"))
                if (!$util.isInteger(message.PlayScore) && !(message.PlayScore && $util.isInteger(message.PlayScore.low) && $util.isInteger(message.PlayScore.high)))
                    return "PlayScore: integer|Long expected";
            if (message.Commission != null && message.hasOwnProperty("Commission"))
                if (!$util.isInteger(message.Commission))
                    return "Commission: integer expected";
            if (message.MaxChair != null && message.hasOwnProperty("MaxChair"))
                if (!$util.isInteger(message.MaxChair))
                    return "MaxChair: integer expected";
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (!$util.isInteger(message.Amount))
                    return "Amount: integer expected";
            if (message.MaxOnline != null && message.hasOwnProperty("MaxOnline"))
                if (!$util.isInteger(message.MaxOnline))
                    return "MaxOnline: integer expected";
            return null;
        };

        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.TableInfo)
                return object;
            var message = new $root.login.TableInfo();
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Password != null)
                message.Password = String(object.Password);
            switch (object.State) {
            case "Init":
            case 0:
                message.State = 0;
                break;
            case "Open":
            case 1:
                message.State = 1;
                break;
            case "Maintain":
            case 2:
                message.State = 2;
                break;
            case "Clear":
            case 3:
                message.State = 3;
                break;
            case "Stop":
            case 4:
                message.State = 4;
                break;
            case "Close":
            case 5:
                message.State = 5;
                break;
            }
            if (object.EnterScore != null)
                message.EnterScore = object.EnterScore >>> 0;
            if (object.LessScore != null)
                message.LessScore = object.LessScore >>> 0;
            if (object.PlayScore != null)
                if ($util.Long)
                    (message.PlayScore = $util.Long.fromValue(object.PlayScore)).unsigned = false;
                else if (typeof object.PlayScore === "string")
                    message.PlayScore = parseInt(object.PlayScore, 10);
                else if (typeof object.PlayScore === "number")
                    message.PlayScore = object.PlayScore;
                else if (typeof object.PlayScore === "object")
                    message.PlayScore = new $util.LongBits(object.PlayScore.low >>> 0, object.PlayScore.high >>> 0).toNumber();
            if (object.Commission != null)
                message.Commission = object.Commission >>> 0;
            if (object.MaxChair != null)
                message.MaxChair = object.MaxChair >>> 0;
            if (object.Amount != null)
                message.Amount = object.Amount >>> 0;
            if (object.MaxOnline != null)
                message.MaxOnline = object.MaxOnline >>> 0;
            return message;
        };

        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
                object.Name = "";
                object.Password = "";
                object.State = options.enums === String ? "Init" : 0;
                object.EnterScore = 0;
                object.LessScore = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PlayScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlayScore = options.longs === String ? "0" : 0;
                object.Commission = 0;
                object.MaxChair = 0;
                object.Amount = 0;
                object.MaxOnline = 0;
            }
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.login.TableState[message.State] : message.State;
            if (message.EnterScore != null && message.hasOwnProperty("EnterScore"))
                object.EnterScore = message.EnterScore;
            if (message.LessScore != null && message.hasOwnProperty("LessScore"))
                object.LessScore = message.LessScore;
            if (message.PlayScore != null && message.hasOwnProperty("PlayScore"))
                if (typeof message.PlayScore === "number")
                    object.PlayScore = options.longs === String ? String(message.PlayScore) : message.PlayScore;
                else
                    object.PlayScore = options.longs === String ? $util.Long.prototype.toString.call(message.PlayScore) : options.longs === Number ? new $util.LongBits(message.PlayScore.low >>> 0, message.PlayScore.high >>> 0).toNumber() : message.PlayScore;
            if (message.Commission != null && message.hasOwnProperty("Commission"))
                object.Commission = message.Commission;
            if (message.MaxChair != null && message.hasOwnProperty("MaxChair"))
                object.MaxChair = message.MaxChair;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                object.Amount = message.Amount;
            if (message.MaxOnline != null && message.hasOwnProperty("MaxOnline"))
                object.MaxOnline = message.MaxOnline;
            return object;
        };

        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    login.GameInfo = (function() {

        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameInfo.prototype.Type = 0;
        GameInfo.prototype.KindID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameInfo.prototype.Level = 0;
        GameInfo.prototype.Scene = 0;
        GameInfo.prototype.Name = "";

        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(8).int32(message.Type);
            if (message.KindID != null && Object.hasOwnProperty.call(message, "KindID"))
                writer.uint32(16).uint64(message.KindID);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(24).uint32(message.Level);
            if (message.Scene != null && Object.hasOwnProperty.call(message, "Scene"))
                writer.uint32(32).int32(message.Scene);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(42).string(message.Name);
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
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.KindID = reader.uint64();
                    break;
                case 3:
                    message.Level = reader.uint32();
                    break;
                case 4:
                    message.Scene = reader.int32();
                    break;
                case 5:
                    message.Name = reader.string();
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
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                if (!$util.isInteger(message.KindID) && !(message.KindID && $util.isInteger(message.KindID.low) && $util.isInteger(message.KindID.high)))
                    return "KindID: integer|Long expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.Scene != null && message.hasOwnProperty("Scene"))
                switch (message.Scene) {
                default:
                    return "Scene: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GameInfo)
                return object;
            var message = new $root.login.GameInfo();
            switch (object.Type) {
            case "General":
            case 0:
                message.Type = 0;
                break;
            case "Fight":
            case 1:
                message.Type = 1;
                break;
            case "Multiplayer":
            case 2:
                message.Type = 2;
                break;
            case "TableCard":
            case 3:
                message.Type = 3;
                break;
            case "Guess":
            case 4:
                message.Type = 4;
                break;
            case "GamesCity":
            case 5:
                message.Type = 5;
                break;
            case "DualMeet":
            case 6:
                message.Type = 6;
                break;
            case "Sport":
            case 7:
                message.Type = 7;
                break;
            case "Smart":
            case 8:
                message.Type = 8;
                break;
            case "RPG":
            case 9:
                message.Type = 9;
                break;
            }
            if (object.KindID != null)
                if ($util.Long)
                    (message.KindID = $util.Long.fromValue(object.KindID)).unsigned = true;
                else if (typeof object.KindID === "string")
                    message.KindID = parseInt(object.KindID, 10);
                else if (typeof object.KindID === "number")
                    message.KindID = object.KindID;
                else if (typeof object.KindID === "object")
                    message.KindID = new $util.LongBits(object.KindID.low >>> 0, object.KindID.high >>> 0).toNumber(true);
            if (object.Level != null)
                message.Level = object.Level >>> 0;
            switch (object.Scene) {
            case "Free":
            case 0:
                message.Scene = 0;
                break;
            case "Start":
            case 1:
                message.Scene = 1;
                break;
            case "Call":
            case 2:
                message.Scene = 2;
                break;
            case "Decide":
            case 3:
                message.Scene = 3;
                break;
            case "Playing":
            case 4:
                message.Scene = 4;
                break;
            case "Opening":
            case 5:
                message.Scene = 5;
                break;
            case "Over":
            case 6:
                message.Scene = 6;
                break;
            case "Closing":
            case 7:
                message.Scene = 7;
                break;
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = options.enums === String ? "General" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.KindID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.KindID = options.longs === String ? "0" : 0;
                object.Level = 0;
                object.Scene = options.enums === String ? "Free" : 0;
                object.Name = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.login.GameType[message.Type] : message.Type;
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                if (typeof message.KindID === "number")
                    object.KindID = options.longs === String ? String(message.KindID) : message.KindID;
                else
                    object.KindID = options.longs === String ? $util.Long.prototype.toString.call(message.KindID) : options.longs === Number ? new $util.LongBits(message.KindID.low >>> 0, message.KindID.high >>> 0).toNumber(true) : message.KindID;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.Scene != null && message.hasOwnProperty("Scene"))
                object.Scene = options.enums === String ? $root.login.GameScene[message.Scene] : message.Scene;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    login.MasterInfo = (function() {

        function MasterInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        MasterInfo.prototype.UserInfo = null;
        MasterInfo.prototype.Classes = null;
        MasterInfo.prototype.Tasks = null;

        MasterInfo.create = function create(properties) {
            return new MasterInfo(properties);
        };

        MasterInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && Object.hasOwnProperty.call(message, "UserInfo"))
                $root.login.UserInfo.encode(message.UserInfo, writer.uint32(10).fork()).ldelim();
            if (message.Classes != null && Object.hasOwnProperty.call(message, "Classes"))
                $root.login.ClassList.encode(message.Classes, writer.uint32(18).fork()).ldelim();
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
                    message.Classes = $root.login.ClassList.decode(reader, reader.uint32());
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
            if (message.Classes != null && message.hasOwnProperty("Classes")) {
                var error = $root.login.ClassList.verify(message.Classes);
                if (error)
                    return "Classes." + error;
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
            if (object.Classes != null) {
                if (typeof object.Classes !== "object")
                    throw TypeError(".login.MasterInfo.Classes: object expected");
                message.Classes = $root.login.ClassList.fromObject(object.Classes);
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
            if (options.defaults) {
                object.UserInfo = null;
                object.Classes = null;
                object.Tasks = null;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.login.UserInfo.toObject(message.UserInfo, options);
            if (message.Classes != null && message.hasOwnProperty("Classes"))
                object.Classes = $root.login.ClassList.toObject(message.Classes, options);
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

    login.ClassItem = (function() {

        function ClassItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClassItem.prototype.Num = 0;
        ClassItem.prototype.Name = "";
        ClassItem.prototype.Key = "";

        ClassItem.create = function create(properties) {
            return new ClassItem(properties);
        };

        ClassItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Num != null && Object.hasOwnProperty.call(message, "Num"))
                writer.uint32(8).uint32(message.Num);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(18).string(message.Name);
            if (message.Key != null && Object.hasOwnProperty.call(message, "Key"))
                writer.uint32(26).string(message.Key);
            return writer;
        };

        ClassItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ClassItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ClassItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Num = reader.uint32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClassItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ClassItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Num != null && message.hasOwnProperty("Num"))
                if (!$util.isInteger(message.Num))
                    return "Num: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isString(message.Key))
                    return "Key: string expected";
            return null;
        };

        ClassItem.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ClassItem)
                return object;
            var message = new $root.login.ClassItem();
            if (object.Num != null)
                message.Num = object.Num >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Key != null)
                message.Key = String(object.Key);
            return message;
        };

        ClassItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Num = 0;
                object.Name = "";
                object.Key = "";
            }
            if (message.Num != null && message.hasOwnProperty("Num"))
                object.Num = message.Num;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Key != null && message.hasOwnProperty("Key"))
                object.Key = message.Key;
            return object;
        };

        ClassItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClassItem;
    })();

    login.GameItem = (function() {

        function GameItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameItem.prototype.Num = 0;
        GameItem.prototype.Info = null;

        GameItem.create = function create(properties) {
            return new GameItem(properties);
        };

        GameItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Num != null && Object.hasOwnProperty.call(message, "Num"))
                writer.uint32(8).uint32(message.Num);
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
                    message.Num = reader.uint32();
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
            if (message.Num != null && message.hasOwnProperty("Num"))
                if (!$util.isInteger(message.Num))
                    return "Num: integer expected";
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
            if (object.Num != null)
                message.Num = object.Num >>> 0;
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
                object.Num = 0;
                object.Info = null;
            }
            if (message.Num != null && message.hasOwnProperty("Num"))
                object.Num = message.Num;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.login.GameInfo.toObject(message.Info, options);
            return object;
        };

        GameItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameItem;
    })();

    login.TableItem = (function() {

        function TableItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TableItem.prototype.Num = 0;
        TableItem.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TableItem.prototype.Info = null;

        TableItem.create = function create(properties) {
            return new TableItem(properties);
        };

        TableItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Num != null && Object.hasOwnProperty.call(message, "Num"))
                writer.uint32(8).uint32(message.Num);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(16).uint64(message.GameID);
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.login.TableInfo.encode(message.Info, writer.uint32(26).fork()).ldelim();
            return writer;
        };

        TableItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TableItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.TableItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Num = reader.uint32();
                    break;
                case 2:
                    message.GameID = reader.uint64();
                    break;
                case 3:
                    message.Info = $root.login.TableInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TableItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TableItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Num != null && message.hasOwnProperty("Num"))
                if (!$util.isInteger(message.Num))
                    return "Num: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.login.TableInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        TableItem.fromObject = function fromObject(object) {
            if (object instanceof $root.login.TableItem)
                return object;
            var message = new $root.login.TableItem();
            if (object.Num != null)
                message.Num = object.Num >>> 0;
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".login.TableItem.Info: object expected");
                message.Info = $root.login.TableInfo.fromObject(object.Info);
            }
            return message;
        };

        TableItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Num = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
                object.Info = null;
            }
            if (message.Num != null && message.hasOwnProperty("Num"))
                object.Num = message.Num;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.login.TableInfo.toObject(message.Info, options);
            return object;
        };

        TableItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableItem;
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

    login.ClassList = (function() {

        function ClassList(properties) {
            this.classify = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClassList.prototype.classify = $util.emptyArray;

        ClassList.create = function create(properties) {
            return new ClassList(properties);
        };

        ClassList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.classify != null && message.classify.length)
                for (var i = 0; i < message.classify.length; ++i)
                    $root.login.ClassItem.encode(message.classify[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ClassList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ClassList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ClassList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.classify && message.classify.length))
                        message.classify = [];
                    message.classify.push($root.login.ClassItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClassList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ClassList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.classify != null && message.hasOwnProperty("classify")) {
                if (!Array.isArray(message.classify))
                    return "classify: array expected";
                for (var i = 0; i < message.classify.length; ++i) {
                    var error = $root.login.ClassItem.verify(message.classify[i]);
                    if (error)
                        return "classify." + error;
                }
            }
            return null;
        };

        ClassList.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ClassList)
                return object;
            var message = new $root.login.ClassList();
            if (object.classify) {
                if (!Array.isArray(object.classify))
                    throw TypeError(".login.ClassList.classify: array expected");
                message.classify = [];
                for (var i = 0; i < object.classify.length; ++i) {
                    if (typeof object.classify[i] !== "object")
                        throw TypeError(".login.ClassList.classify: object expected");
                    message.classify[i] = $root.login.ClassItem.fromObject(object.classify[i]);
                }
            }
            return message;
        };

        ClassList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.classify = [];
            if (message.classify && message.classify.length) {
                object.classify = [];
                for (var j = 0; j < message.classify.length; ++j)
                    object.classify[j] = $root.login.ClassItem.toObject(message.classify[j], options);
            }
            return object;
        };

        ClassList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClassList;
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

    login.TableList = (function() {

        function TableList(properties) {
            this.Items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TableList.prototype.Items = $util.emptyArray;

        TableList.create = function create(properties) {
            return new TableList(properties);
        };

        TableList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Items != null && message.Items.length)
                for (var i = 0; i < message.Items.length; ++i)
                    $root.login.TableItem.encode(message.Items[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        TableList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TableList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.TableList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Items && message.Items.length))
                        message.Items = [];
                    message.Items.push($root.login.TableItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TableList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TableList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Items != null && message.hasOwnProperty("Items")) {
                if (!Array.isArray(message.Items))
                    return "Items: array expected";
                for (var i = 0; i < message.Items.length; ++i) {
                    var error = $root.login.TableItem.verify(message.Items[i]);
                    if (error)
                        return "Items." + error;
                }
            }
            return null;
        };

        TableList.fromObject = function fromObject(object) {
            if (object instanceof $root.login.TableList)
                return object;
            var message = new $root.login.TableList();
            if (object.Items) {
                if (!Array.isArray(object.Items))
                    throw TypeError(".login.TableList.Items: array expected");
                message.Items = [];
                for (var i = 0; i < object.Items.length; ++i) {
                    if (typeof object.Items[i] !== "object")
                        throw TypeError(".login.TableList.Items: object expected");
                    message.Items[i] = $root.login.TableItem.fromObject(object.Items[i]);
                }
            }
            return message;
        };

        TableList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Items = [];
            if (message.Items && message.Items.length) {
                object.Items = [];
                for (var j = 0; j < message.Items.length; ++j)
                    object.Items[j] = $root.login.TableItem.toObject(message.Items[j], options);
            }
            return object;
        };

        TableList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableList;
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
        LoginResp.prototype.InGameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LoginResp.prototype.InTableNum = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        LoginResp.create = function create(properties) {
            return new LoginResp(properties);
        };

        LoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MainInfo != null && Object.hasOwnProperty.call(message, "MainInfo"))
                $root.login.MasterInfo.encode(message.MainInfo, writer.uint32(10).fork()).ldelim();
            if (message.InGameID != null && Object.hasOwnProperty.call(message, "InGameID"))
                writer.uint32(16).uint64(message.InGameID);
            if (message.InTableNum != null && Object.hasOwnProperty.call(message, "InTableNum"))
                writer.uint32(24).uint64(message.InTableNum);
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
                case 2:
                    message.InGameID = reader.uint64();
                    break;
                case 3:
                    message.InTableNum = reader.uint64();
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
            if (message.InGameID != null && message.hasOwnProperty("InGameID"))
                if (!$util.isInteger(message.InGameID) && !(message.InGameID && $util.isInteger(message.InGameID.low) && $util.isInteger(message.InGameID.high)))
                    return "InGameID: integer|Long expected";
            if (message.InTableNum != null && message.hasOwnProperty("InTableNum"))
                if (!$util.isInteger(message.InTableNum) && !(message.InTableNum && $util.isInteger(message.InTableNum.low) && $util.isInteger(message.InTableNum.high)))
                    return "InTableNum: integer|Long expected";
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
            if (object.InGameID != null)
                if ($util.Long)
                    (message.InGameID = $util.Long.fromValue(object.InGameID)).unsigned = true;
                else if (typeof object.InGameID === "string")
                    message.InGameID = parseInt(object.InGameID, 10);
                else if (typeof object.InGameID === "number")
                    message.InGameID = object.InGameID;
                else if (typeof object.InGameID === "object")
                    message.InGameID = new $util.LongBits(object.InGameID.low >>> 0, object.InGameID.high >>> 0).toNumber(true);
            if (object.InTableNum != null)
                if ($util.Long)
                    (message.InTableNum = $util.Long.fromValue(object.InTableNum)).unsigned = true;
                else if (typeof object.InTableNum === "string")
                    message.InTableNum = parseInt(object.InTableNum, 10);
                else if (typeof object.InTableNum === "number")
                    message.InTableNum = object.InTableNum;
                else if (typeof object.InTableNum === "object")
                    message.InTableNum = new $util.LongBits(object.InTableNum.low >>> 0, object.InTableNum.high >>> 0).toNumber(true);
            return message;
        };

        LoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MainInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.InGameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.InGameID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.InTableNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.InTableNum = options.longs === String ? "0" : 0;
            }
            if (message.MainInfo != null && message.hasOwnProperty("MainInfo"))
                object.MainInfo = $root.login.MasterInfo.toObject(message.MainInfo, options);
            if (message.InGameID != null && message.hasOwnProperty("InGameID"))
                if (typeof message.InGameID === "number")
                    object.InGameID = options.longs === String ? String(message.InGameID) : message.InGameID;
                else
                    object.InGameID = options.longs === String ? $util.Long.prototype.toString.call(message.InGameID) : options.longs === Number ? new $util.LongBits(message.InGameID.low >>> 0, message.InGameID.high >>> 0).toNumber(true) : message.InGameID;
            if (message.InTableNum != null && message.hasOwnProperty("InTableNum"))
                if (typeof message.InTableNum === "number")
                    object.InTableNum = options.longs === String ? String(message.InTableNum) : message.InTableNum;
                else
                    object.InTableNum = options.longs === String ? $util.Long.prototype.toString.call(message.InTableNum) : options.longs === Number ? new $util.LongBits(message.InTableNum.low >>> 0, message.InTableNum.high >>> 0).toNumber(true) : message.InTableNum;
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
        ReconnectResp.prototype.InGameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ReconnectResp.prototype.InTableNum = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ReconnectResp.create = function create(properties) {
            return new ReconnectResp(properties);
        };

        ReconnectResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MainInfo != null && Object.hasOwnProperty.call(message, "MainInfo"))
                $root.login.MasterInfo.encode(message.MainInfo, writer.uint32(10).fork()).ldelim();
            if (message.InGameID != null && Object.hasOwnProperty.call(message, "InGameID"))
                writer.uint32(16).uint64(message.InGameID);
            if (message.InTableNum != null && Object.hasOwnProperty.call(message, "InTableNum"))
                writer.uint32(24).uint64(message.InTableNum);
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
                case 2:
                    message.InGameID = reader.uint64();
                    break;
                case 3:
                    message.InTableNum = reader.uint64();
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
            if (message.InGameID != null && message.hasOwnProperty("InGameID"))
                if (!$util.isInteger(message.InGameID) && !(message.InGameID && $util.isInteger(message.InGameID.low) && $util.isInteger(message.InGameID.high)))
                    return "InGameID: integer|Long expected";
            if (message.InTableNum != null && message.hasOwnProperty("InTableNum"))
                if (!$util.isInteger(message.InTableNum) && !(message.InTableNum && $util.isInteger(message.InTableNum.low) && $util.isInteger(message.InTableNum.high)))
                    return "InTableNum: integer|Long expected";
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
            if (object.InGameID != null)
                if ($util.Long)
                    (message.InGameID = $util.Long.fromValue(object.InGameID)).unsigned = true;
                else if (typeof object.InGameID === "string")
                    message.InGameID = parseInt(object.InGameID, 10);
                else if (typeof object.InGameID === "number")
                    message.InGameID = object.InGameID;
                else if (typeof object.InGameID === "object")
                    message.InGameID = new $util.LongBits(object.InGameID.low >>> 0, object.InGameID.high >>> 0).toNumber(true);
            if (object.InTableNum != null)
                if ($util.Long)
                    (message.InTableNum = $util.Long.fromValue(object.InTableNum)).unsigned = true;
                else if (typeof object.InTableNum === "string")
                    message.InTableNum = parseInt(object.InTableNum, 10);
                else if (typeof object.InTableNum === "number")
                    message.InTableNum = object.InTableNum;
                else if (typeof object.InTableNum === "object")
                    message.InTableNum = new $util.LongBits(object.InTableNum.low >>> 0, object.InTableNum.high >>> 0).toNumber(true);
            return message;
        };

        ReconnectResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MainInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.InGameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.InGameID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.InTableNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.InTableNum = options.longs === String ? "0" : 0;
            }
            if (message.MainInfo != null && message.hasOwnProperty("MainInfo"))
                object.MainInfo = $root.login.MasterInfo.toObject(message.MainInfo, options);
            if (message.InGameID != null && message.hasOwnProperty("InGameID"))
                if (typeof message.InGameID === "number")
                    object.InGameID = options.longs === String ? String(message.InGameID) : message.InGameID;
                else
                    object.InGameID = options.longs === String ? $util.Long.prototype.toString.call(message.InGameID) : options.longs === Number ? new $util.LongBits(message.InGameID.low >>> 0, message.InGameID.high >>> 0).toNumber(true) : message.InGameID;
            if (message.InTableNum != null && message.hasOwnProperty("InTableNum"))
                if (typeof message.InTableNum === "number")
                    object.InTableNum = options.longs === String ? String(message.InTableNum) : message.InTableNum;
                else
                    object.InTableNum = options.longs === String ? $util.Long.prototype.toString.call(message.InTableNum) : options.longs === Number ? new $util.LongBits(message.InTableNum.low >>> 0, message.InTableNum.high >>> 0).toNumber(true) : message.InTableNum;
            return object;
        };

        ReconnectResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnectResp;
    })();

    login.ChooseClassReq = (function() {

        function ChooseClassReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ChooseClassReq.prototype.Num = 0;
        ChooseClassReq.prototype.TableKey = "";

        ChooseClassReq.create = function create(properties) {
            return new ChooseClassReq(properties);
        };

        ChooseClassReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Num != null && Object.hasOwnProperty.call(message, "Num"))
                writer.uint32(8).uint32(message.Num);
            if (message.TableKey != null && Object.hasOwnProperty.call(message, "TableKey"))
                writer.uint32(18).string(message.TableKey);
            return writer;
        };

        ChooseClassReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ChooseClassReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ChooseClassReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Num = reader.uint32();
                    break;
                case 2:
                    message.TableKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ChooseClassReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ChooseClassReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Num != null && message.hasOwnProperty("Num"))
                if (!$util.isInteger(message.Num))
                    return "Num: integer expected";
            if (message.TableKey != null && message.hasOwnProperty("TableKey"))
                if (!$util.isString(message.TableKey))
                    return "TableKey: string expected";
            return null;
        };

        ChooseClassReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ChooseClassReq)
                return object;
            var message = new $root.login.ChooseClassReq();
            if (object.Num != null)
                message.Num = object.Num >>> 0;
            if (object.TableKey != null)
                message.TableKey = String(object.TableKey);
            return message;
        };

        ChooseClassReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Num = 0;
                object.TableKey = "";
            }
            if (message.Num != null && message.hasOwnProperty("Num"))
                object.Num = message.Num;
            if (message.TableKey != null && message.hasOwnProperty("TableKey"))
                object.TableKey = message.TableKey;
            return object;
        };

        ChooseClassReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChooseClassReq;
    })();

    login.ChooseClassResp = (function() {

        function ChooseClassResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ChooseClassResp.prototype.Games = null;

        ChooseClassResp.create = function create(properties) {
            return new ChooseClassResp(properties);
        };

        ChooseClassResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Games != null && Object.hasOwnProperty.call(message, "Games"))
                $root.login.GameList.encode(message.Games, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ChooseClassResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ChooseClassResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ChooseClassResp();
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

        ChooseClassResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ChooseClassResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Games != null && message.hasOwnProperty("Games")) {
                var error = $root.login.GameList.verify(message.Games);
                if (error)
                    return "Games." + error;
            }
            return null;
        };

        ChooseClassResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ChooseClassResp)
                return object;
            var message = new $root.login.ChooseClassResp();
            if (object.Games != null) {
                if (typeof object.Games !== "object")
                    throw TypeError(".login.ChooseClassResp.Games: object expected");
                message.Games = $root.login.GameList.fromObject(object.Games);
            }
            return message;
        };

        ChooseClassResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Games = null;
            if (message.Games != null && message.hasOwnProperty("Games"))
                object.Games = $root.login.GameList.toObject(message.Games, options);
            return object;
        };

        ChooseClassResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChooseClassResp;
    })();

    login.ChooseGameReq = (function() {

        function ChooseGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ChooseGameReq.prototype.Info = null;

        ChooseGameReq.create = function create(properties) {
            return new ChooseGameReq(properties);
        };

        ChooseGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.login.GameInfo.encode(message.Info, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ChooseGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ChooseGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ChooseGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Info = $root.login.GameInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ChooseGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ChooseGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.login.GameInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        ChooseGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ChooseGameReq)
                return object;
            var message = new $root.login.ChooseGameReq();
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".login.ChooseGameReq.Info: object expected");
                message.Info = $root.login.GameInfo.fromObject(object.Info);
            }
            return message;
        };

        ChooseGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Info = null;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.login.GameInfo.toObject(message.Info, options);
            return object;
        };

        ChooseGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChooseGameReq;
    })();

    login.ChooseGameResp = (function() {

        function ChooseGameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ChooseGameResp.prototype.Tables = null;

        ChooseGameResp.create = function create(properties) {
            return new ChooseGameResp(properties);
        };

        ChooseGameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Tables != null && Object.hasOwnProperty.call(message, "Tables"))
                $root.login.TableList.encode(message.Tables, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ChooseGameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ChooseGameResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ChooseGameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Tables = $root.login.TableList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ChooseGameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ChooseGameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Tables != null && message.hasOwnProperty("Tables")) {
                var error = $root.login.TableList.verify(message.Tables);
                if (error)
                    return "Tables." + error;
            }
            return null;
        };

        ChooseGameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.ChooseGameResp)
                return object;
            var message = new $root.login.ChooseGameResp();
            if (object.Tables != null) {
                if (typeof object.Tables !== "object")
                    throw TypeError(".login.ChooseGameResp.Tables: object expected");
                message.Tables = $root.login.TableList.fromObject(object.Tables);
            }
            return message;
        };

        ChooseGameResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Tables = null;
            if (message.Tables != null && message.hasOwnProperty("Tables"))
                object.Tables = $root.login.TableList.toObject(message.Tables, options);
            return object;
        };

        ChooseGameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChooseGameResp;
    })();

    login.SettingTableReq = (function() {

        function SettingTableReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SettingTableReq.prototype.Info = null;

        SettingTableReq.create = function create(properties) {
            return new SettingTableReq(properties);
        };

        SettingTableReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.login.TableInfo.encode(message.Info, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        SettingTableReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SettingTableReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.SettingTableReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Info = $root.login.TableInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SettingTableReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SettingTableReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.login.TableInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        SettingTableReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.SettingTableReq)
                return object;
            var message = new $root.login.SettingTableReq();
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".login.SettingTableReq.Info: object expected");
                message.Info = $root.login.TableInfo.fromObject(object.Info);
            }
            return message;
        };

        SettingTableReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Info = null;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.login.TableInfo.toObject(message.Info, options);
            return object;
        };

        SettingTableReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettingTableReq;
    })();

    login.SettingTableResp = (function() {

        function SettingTableResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SettingTableResp.prototype.Item = null;

        SettingTableResp.create = function create(properties) {
            return new SettingTableResp(properties);
        };

        SettingTableResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Item != null && Object.hasOwnProperty.call(message, "Item"))
                $root.login.TableItem.encode(message.Item, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        SettingTableResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SettingTableResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.SettingTableResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Item = $root.login.TableItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SettingTableResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SettingTableResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Item != null && message.hasOwnProperty("Item")) {
                var error = $root.login.TableItem.verify(message.Item);
                if (error)
                    return "Item." + error;
            }
            return null;
        };

        SettingTableResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.SettingTableResp)
                return object;
            var message = new $root.login.SettingTableResp();
            if (object.Item != null) {
                if (typeof object.Item !== "object")
                    throw TypeError(".login.SettingTableResp.Item: object expected");
                message.Item = $root.login.TableItem.fromObject(object.Item);
            }
            return message;
        };

        SettingTableResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Item = null;
            if (message.Item != null && message.hasOwnProperty("Item"))
                object.Item = $root.login.TableItem.toObject(message.Item, options);
            return object;
        };

        SettingTableResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettingTableResp;
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
