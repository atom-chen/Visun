/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ttz = (function() {

    /**
     * Namespace ttz.
     * @exports ttz
     * @namespace
     */
    var ttz = {};

    ttz.UserCards = (function() {

        /**
         * Properties of a UserCards.
         * @memberof ttz
         * @interface IUserCards
         * @property {Array.<number>|null} [remainCards] UserCards remainCards
         */

        /**
         * Constructs a new UserCards.
         * @memberof ttz
         * @classdesc Represents a UserCards.
         * @implements IUserCards
         * @constructor
         * @param {ttz.IUserCards=} [properties] Properties to set
         */
        function UserCards(properties) {
            this.remainCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserCards remainCards.
         * @member {Array.<number>} remainCards
         * @memberof ttz.UserCards
         * @instance
         */
        UserCards.prototype.remainCards = $util.emptyArray;

        /**
         * Creates a new UserCards instance using the specified properties.
         * @function create
         * @memberof ttz.UserCards
         * @static
         * @param {ttz.IUserCards=} [properties] Properties to set
         * @returns {ttz.UserCards} UserCards instance
         */
        UserCards.create = function create(properties) {
            return new UserCards(properties);
        };

        /**
         * Encodes the specified UserCards message. Does not implicitly {@link ttz.UserCards.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserCards
         * @static
         * @param {ttz.IUserCards} message UserCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.remainCards != null && message.remainCards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.remainCards.length; ++i)
                    writer.int32(message.remainCards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified UserCards message, length delimited. Does not implicitly {@link ttz.UserCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserCards
         * @static
         * @param {ttz.IUserCards} message UserCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserCards message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserCards} UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.remainCards && message.remainCards.length))
                        message.remainCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.remainCards.push(reader.int32());
                    } else
                        message.remainCards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserCards} UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserCards message.
         * @function verify
         * @memberof ttz.UserCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.remainCards != null && message.hasOwnProperty("remainCards")) {
                if (!Array.isArray(message.remainCards))
                    return "remainCards: array expected";
                for (var i = 0; i < message.remainCards.length; ++i)
                    if (!$util.isInteger(message.remainCards[i]))
                        return "remainCards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a UserCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserCards} UserCards
         */
        UserCards.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserCards)
                return object;
            var message = new $root.ttz.UserCards();
            if (object.remainCards) {
                if (!Array.isArray(object.remainCards))
                    throw TypeError(".ttz.UserCards.remainCards: array expected");
                message.remainCards = [];
                for (var i = 0; i < object.remainCards.length; ++i)
                    message.remainCards[i] = object.remainCards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserCards
         * @static
         * @param {ttz.UserCards} message UserCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.remainCards = [];
            if (message.remainCards && message.remainCards.length) {
                object.remainCards = [];
                for (var j = 0; j < message.remainCards.length; ++j)
                    object.remainCards[j] = message.remainCards[j];
            }
            return object;
        };

        /**
         * Converts this UserCards to JSON.
         * @function toJSON
         * @memberof ttz.UserCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCards;
    })();

    ttz.User = (function() {

        /**
         * Properties of a User.
         * @memberof ttz
         * @interface IUser
         * @property {number|null} [userId] User userId
         * @property {number|null} [state] User state
         * @property {string|null} [nickname] User nickname
         * @property {string|null} [headImg] User headImg
         * @property {number|null} [sex] User sex
         * @property {string|null} [ip] User ip
         * @property {number|null} [position] User position
         * @property {number|null} [agree] User agree
         * @property {number|null} [onLine] User onLine
         * @property {number|Long|null} [coin] User coin
         * @property {boolean|null} [tongsha] User tongsha
         * @property {boolean|null} [tongpei] User tongpei
         * @property {boolean|null} [noCoin] User noCoin
         * @property {number|null} [betCoin] User betCoin
         * @property {number|null} [qiang] User qiang
         * @property {Array.<number>|null} [remainCards] User remainCards
         * @property {Array.<number>|null} [bestOutCardDto] User bestOutCardDto
         * @property {Array.<number>|null} [allowQiang] User allowQiang
         * @property {Array.<number>|null} [allowBet] User allowBet
         * @property {number|null} [currentScore] User currentScore
         * @property {Array.<number>|null} [outCardDto] User outCardDto
         * @property {ttz.IUserCards|null} [cards] User cards
         * @property {number|null} [totalScore] User totalScore
         * @property {number|null} [revenue] User revenue
         * @property {number|null} [startScore] User startScore
         * @property {number|null} [endScore] User endScore
         * @property {boolean|null} [hasShowCard] User hasShowCard
         */

        /**
         * Constructs a new User.
         * @memberof ttz
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {ttz.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.remainCards = [];
            this.bestOutCardDto = [];
            this.allowQiang = [];
            this.allowBet = [];
            this.outCardDto = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number} userId
         * @memberof ttz.User
         * @instance
         */
        User.prototype.userId = 0;

        /**
         * User state.
         * @member {number} state
         * @memberof ttz.User
         * @instance
         */
        User.prototype.state = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof ttz.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User headImg.
         * @member {string} headImg
         * @memberof ttz.User
         * @instance
         */
        User.prototype.headImg = "";

        /**
         * User sex.
         * @member {number} sex
         * @memberof ttz.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * User ip.
         * @member {string} ip
         * @memberof ttz.User
         * @instance
         */
        User.prototype.ip = "";

        /**
         * User position.
         * @member {number} position
         * @memberof ttz.User
         * @instance
         */
        User.prototype.position = 0;

        /**
         * User agree.
         * @member {number} agree
         * @memberof ttz.User
         * @instance
         */
        User.prototype.agree = 0;

        /**
         * User onLine.
         * @member {number} onLine
         * @memberof ttz.User
         * @instance
         */
        User.prototype.onLine = 0;

        /**
         * User coin.
         * @member {number|Long} coin
         * @memberof ttz.User
         * @instance
         */
        User.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User tongsha.
         * @member {boolean} tongsha
         * @memberof ttz.User
         * @instance
         */
        User.prototype.tongsha = false;

        /**
         * User tongpei.
         * @member {boolean} tongpei
         * @memberof ttz.User
         * @instance
         */
        User.prototype.tongpei = false;

        /**
         * User noCoin.
         * @member {boolean} noCoin
         * @memberof ttz.User
         * @instance
         */
        User.prototype.noCoin = false;

        /**
         * User betCoin.
         * @member {number} betCoin
         * @memberof ttz.User
         * @instance
         */
        User.prototype.betCoin = 0;

        /**
         * User qiang.
         * @member {number} qiang
         * @memberof ttz.User
         * @instance
         */
        User.prototype.qiang = 0;

        /**
         * User remainCards.
         * @member {Array.<number>} remainCards
         * @memberof ttz.User
         * @instance
         */
        User.prototype.remainCards = $util.emptyArray;

        /**
         * User bestOutCardDto.
         * @member {Array.<number>} bestOutCardDto
         * @memberof ttz.User
         * @instance
         */
        User.prototype.bestOutCardDto = $util.emptyArray;

        /**
         * User allowQiang.
         * @member {Array.<number>} allowQiang
         * @memberof ttz.User
         * @instance
         */
        User.prototype.allowQiang = $util.emptyArray;

        /**
         * User allowBet.
         * @member {Array.<number>} allowBet
         * @memberof ttz.User
         * @instance
         */
        User.prototype.allowBet = $util.emptyArray;

        /**
         * User currentScore.
         * @member {number} currentScore
         * @memberof ttz.User
         * @instance
         */
        User.prototype.currentScore = 0;

        /**
         * User outCardDto.
         * @member {Array.<number>} outCardDto
         * @memberof ttz.User
         * @instance
         */
        User.prototype.outCardDto = $util.emptyArray;

        /**
         * User cards.
         * @member {ttz.IUserCards|null|undefined} cards
         * @memberof ttz.User
         * @instance
         */
        User.prototype.cards = null;

        /**
         * User totalScore.
         * @member {number} totalScore
         * @memberof ttz.User
         * @instance
         */
        User.prototype.totalScore = 0;

        /**
         * User revenue.
         * @member {number} revenue
         * @memberof ttz.User
         * @instance
         */
        User.prototype.revenue = 0;

        /**
         * User startScore.
         * @member {number} startScore
         * @memberof ttz.User
         * @instance
         */
        User.prototype.startScore = 0;

        /**
         * User endScore.
         * @member {number} endScore
         * @memberof ttz.User
         * @instance
         */
        User.prototype.endScore = 0;

        /**
         * User hasShowCard.
         * @member {boolean} hasShowCard
         * @memberof ttz.User
         * @instance
         */
        User.prototype.hasShowCard = false;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof ttz.User
         * @static
         * @param {ttz.IUser=} [properties] Properties to set
         * @returns {ttz.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link ttz.User.verify|verify} messages.
         * @function encode
         * @memberof ttz.User
         * @static
         * @param {ttz.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickname);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.headImg);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sex);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ip);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.position);
            if (message.agree != null && message.hasOwnProperty("agree"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.agree);
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.onLine);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.coin);
            if (message.tongsha != null && message.hasOwnProperty("tongsha"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.tongsha);
            if (message.tongpei != null && message.hasOwnProperty("tongpei"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.tongpei);
            if (message.noCoin != null && message.hasOwnProperty("noCoin"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.noCoin);
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.betCoin);
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.qiang);
            if (message.remainCards != null && message.remainCards.length) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork();
                for (var i = 0; i < message.remainCards.length; ++i)
                    writer.int32(message.remainCards[i]);
                writer.ldelim();
            }
            if (message.bestOutCardDto != null && message.bestOutCardDto.length) {
                writer.uint32(/* id 18, wireType 2 =*/146).fork();
                for (var i = 0; i < message.bestOutCardDto.length; ++i)
                    writer.int32(message.bestOutCardDto[i]);
                writer.ldelim();
            }
            if (message.allowQiang != null && message.allowQiang.length) {
                writer.uint32(/* id 19, wireType 2 =*/154).fork();
                for (var i = 0; i < message.allowQiang.length; ++i)
                    writer.int32(message.allowQiang[i]);
                writer.ldelim();
            }
            if (message.allowBet != null && message.allowBet.length) {
                writer.uint32(/* id 20, wireType 2 =*/162).fork();
                for (var i = 0; i < message.allowBet.length; ++i)
                    writer.int32(message.allowBet[i]);
                writer.ldelim();
            }
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                writer.uint32(/* id 21, wireType 1 =*/169).double(message.currentScore);
            if (message.outCardDto != null && message.outCardDto.length) {
                writer.uint32(/* id 22, wireType 2 =*/178).fork();
                for (var i = 0; i < message.outCardDto.length; ++i)
                    writer.int32(message.outCardDto[i]);
                writer.ldelim();
            }
            if (message.cards != null && message.hasOwnProperty("cards"))
                $root.ttz.UserCards.encode(message.cards, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                writer.uint32(/* id 24, wireType 1 =*/193).double(message.totalScore);
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                writer.uint32(/* id 25, wireType 1 =*/201).double(message.revenue);
            if (message.startScore != null && message.hasOwnProperty("startScore"))
                writer.uint32(/* id 26, wireType 1 =*/209).double(message.startScore);
            if (message.endScore != null && message.hasOwnProperty("endScore"))
                writer.uint32(/* id 27, wireType 1 =*/217).double(message.endScore);
            if (message.hasShowCard != null && message.hasOwnProperty("hasShowCard"))
                writer.uint32(/* id 28, wireType 0 =*/224).bool(message.hasShowCard);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link ttz.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.User
         * @static
         * @param {ttz.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.nickname = reader.string();
                    break;
                case 5:
                    message.headImg = reader.string();
                    break;
                case 6:
                    message.sex = reader.int32();
                    break;
                case 7:
                    message.ip = reader.string();
                    break;
                case 8:
                    message.position = reader.int32();
                    break;
                case 9:
                    message.agree = reader.int32();
                    break;
                case 10:
                    message.onLine = reader.int32();
                    break;
                case 11:
                    message.coin = reader.int64();
                    break;
                case 12:
                    message.tongsha = reader.bool();
                    break;
                case 13:
                    message.tongpei = reader.bool();
                    break;
                case 14:
                    message.noCoin = reader.bool();
                    break;
                case 15:
                    message.betCoin = reader.int32();
                    break;
                case 16:
                    message.qiang = reader.int32();
                    break;
                case 17:
                    if (!(message.remainCards && message.remainCards.length))
                        message.remainCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.remainCards.push(reader.int32());
                    } else
                        message.remainCards.push(reader.int32());
                    break;
                case 18:
                    if (!(message.bestOutCardDto && message.bestOutCardDto.length))
                        message.bestOutCardDto = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.bestOutCardDto.push(reader.int32());
                    } else
                        message.bestOutCardDto.push(reader.int32());
                    break;
                case 19:
                    if (!(message.allowQiang && message.allowQiang.length))
                        message.allowQiang = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.allowQiang.push(reader.int32());
                    } else
                        message.allowQiang.push(reader.int32());
                    break;
                case 20:
                    if (!(message.allowBet && message.allowBet.length))
                        message.allowBet = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.allowBet.push(reader.int32());
                    } else
                        message.allowBet.push(reader.int32());
                    break;
                case 21:
                    message.currentScore = reader.double();
                    break;
                case 22:
                    if (!(message.outCardDto && message.outCardDto.length))
                        message.outCardDto = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.outCardDto.push(reader.int32());
                    } else
                        message.outCardDto.push(reader.int32());
                    break;
                case 23:
                    message.cards = $root.ttz.UserCards.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.totalScore = reader.double();
                    break;
                case 25:
                    message.revenue = reader.double();
                    break;
                case 26:
                    message.startScore = reader.double();
                    break;
                case 27:
                    message.endScore = reader.double();
                    break;
                case 28:
                    message.hasShowCard = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof ttz.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.agree != null && message.hasOwnProperty("agree"))
                if (!$util.isInteger(message.agree))
                    return "agree: integer expected";
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                if (!$util.isInteger(message.onLine))
                    return "onLine: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin) && !(message.coin && $util.isInteger(message.coin.low) && $util.isInteger(message.coin.high)))
                    return "coin: integer|Long expected";
            if (message.tongsha != null && message.hasOwnProperty("tongsha"))
                if (typeof message.tongsha !== "boolean")
                    return "tongsha: boolean expected";
            if (message.tongpei != null && message.hasOwnProperty("tongpei"))
                if (typeof message.tongpei !== "boolean")
                    return "tongpei: boolean expected";
            if (message.noCoin != null && message.hasOwnProperty("noCoin"))
                if (typeof message.noCoin !== "boolean")
                    return "noCoin: boolean expected";
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                if (!$util.isInteger(message.betCoin))
                    return "betCoin: integer expected";
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                if (!$util.isInteger(message.qiang))
                    return "qiang: integer expected";
            if (message.remainCards != null && message.hasOwnProperty("remainCards")) {
                if (!Array.isArray(message.remainCards))
                    return "remainCards: array expected";
                for (var i = 0; i < message.remainCards.length; ++i)
                    if (!$util.isInteger(message.remainCards[i]))
                        return "remainCards: integer[] expected";
            }
            if (message.bestOutCardDto != null && message.hasOwnProperty("bestOutCardDto")) {
                if (!Array.isArray(message.bestOutCardDto))
                    return "bestOutCardDto: array expected";
                for (var i = 0; i < message.bestOutCardDto.length; ++i)
                    if (!$util.isInteger(message.bestOutCardDto[i]))
                        return "bestOutCardDto: integer[] expected";
            }
            if (message.allowQiang != null && message.hasOwnProperty("allowQiang")) {
                if (!Array.isArray(message.allowQiang))
                    return "allowQiang: array expected";
                for (var i = 0; i < message.allowQiang.length; ++i)
                    if (!$util.isInteger(message.allowQiang[i]))
                        return "allowQiang: integer[] expected";
            }
            if (message.allowBet != null && message.hasOwnProperty("allowBet")) {
                if (!Array.isArray(message.allowBet))
                    return "allowBet: array expected";
                for (var i = 0; i < message.allowBet.length; ++i)
                    if (!$util.isInteger(message.allowBet[i]))
                        return "allowBet: integer[] expected";
            }
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                if (typeof message.currentScore !== "number")
                    return "currentScore: number expected";
            if (message.outCardDto != null && message.hasOwnProperty("outCardDto")) {
                if (!Array.isArray(message.outCardDto))
                    return "outCardDto: array expected";
                for (var i = 0; i < message.outCardDto.length; ++i)
                    if (!$util.isInteger(message.outCardDto[i]))
                        return "outCardDto: integer[] expected";
            }
            if (message.cards != null && message.hasOwnProperty("cards")) {
                var error = $root.ttz.UserCards.verify(message.cards);
                if (error)
                    return "cards." + error;
            }
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (typeof message.totalScore !== "number")
                    return "totalScore: number expected";
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                if (typeof message.revenue !== "number")
                    return "revenue: number expected";
            if (message.startScore != null && message.hasOwnProperty("startScore"))
                if (typeof message.startScore !== "number")
                    return "startScore: number expected";
            if (message.endScore != null && message.hasOwnProperty("endScore"))
                if (typeof message.endScore !== "number")
                    return "endScore: number expected";
            if (message.hasShowCard != null && message.hasOwnProperty("hasShowCard"))
                if (typeof message.hasShowCard !== "boolean")
                    return "hasShowCard: boolean expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.User)
                return object;
            var message = new $root.ttz.User();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.agree != null)
                message.agree = object.agree | 0;
            if (object.onLine != null)
                message.onLine = object.onLine | 0;
            if (object.coin != null)
                if ($util.Long)
                    (message.coin = $util.Long.fromValue(object.coin)).unsigned = false;
                else if (typeof object.coin === "string")
                    message.coin = parseInt(object.coin, 10);
                else if (typeof object.coin === "number")
                    message.coin = object.coin;
                else if (typeof object.coin === "object")
                    message.coin = new $util.LongBits(object.coin.low >>> 0, object.coin.high >>> 0).toNumber();
            if (object.tongsha != null)
                message.tongsha = Boolean(object.tongsha);
            if (object.tongpei != null)
                message.tongpei = Boolean(object.tongpei);
            if (object.noCoin != null)
                message.noCoin = Boolean(object.noCoin);
            if (object.betCoin != null)
                message.betCoin = object.betCoin | 0;
            if (object.qiang != null)
                message.qiang = object.qiang | 0;
            if (object.remainCards) {
                if (!Array.isArray(object.remainCards))
                    throw TypeError(".ttz.User.remainCards: array expected");
                message.remainCards = [];
                for (var i = 0; i < object.remainCards.length; ++i)
                    message.remainCards[i] = object.remainCards[i] | 0;
            }
            if (object.bestOutCardDto) {
                if (!Array.isArray(object.bestOutCardDto))
                    throw TypeError(".ttz.User.bestOutCardDto: array expected");
                message.bestOutCardDto = [];
                for (var i = 0; i < object.bestOutCardDto.length; ++i)
                    message.bestOutCardDto[i] = object.bestOutCardDto[i] | 0;
            }
            if (object.allowQiang) {
                if (!Array.isArray(object.allowQiang))
                    throw TypeError(".ttz.User.allowQiang: array expected");
                message.allowQiang = [];
                for (var i = 0; i < object.allowQiang.length; ++i)
                    message.allowQiang[i] = object.allowQiang[i] | 0;
            }
            if (object.allowBet) {
                if (!Array.isArray(object.allowBet))
                    throw TypeError(".ttz.User.allowBet: array expected");
                message.allowBet = [];
                for (var i = 0; i < object.allowBet.length; ++i)
                    message.allowBet[i] = object.allowBet[i] | 0;
            }
            if (object.currentScore != null)
                message.currentScore = Number(object.currentScore);
            if (object.outCardDto) {
                if (!Array.isArray(object.outCardDto))
                    throw TypeError(".ttz.User.outCardDto: array expected");
                message.outCardDto = [];
                for (var i = 0; i < object.outCardDto.length; ++i)
                    message.outCardDto[i] = object.outCardDto[i] | 0;
            }
            if (object.cards != null) {
                if (typeof object.cards !== "object")
                    throw TypeError(".ttz.User.cards: object expected");
                message.cards = $root.ttz.UserCards.fromObject(object.cards);
            }
            if (object.totalScore != null)
                message.totalScore = Number(object.totalScore);
            if (object.revenue != null)
                message.revenue = Number(object.revenue);
            if (object.startScore != null)
                message.startScore = Number(object.startScore);
            if (object.endScore != null)
                message.endScore = Number(object.endScore);
            if (object.hasShowCard != null)
                message.hasShowCard = Boolean(object.hasShowCard);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.User
         * @static
         * @param {ttz.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.remainCards = [];
                object.bestOutCardDto = [];
                object.allowQiang = [];
                object.allowBet = [];
                object.outCardDto = [];
            }
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
                object.nickname = "";
                object.headImg = "";
                object.sex = 0;
                object.ip = "";
                object.position = 0;
                object.agree = 0;
                object.onLine = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.coin = options.longs === String ? "0" : 0;
                object.tongsha = false;
                object.tongpei = false;
                object.noCoin = false;
                object.betCoin = 0;
                object.qiang = 0;
                object.currentScore = 0;
                object.cards = null;
                object.totalScore = 0;
                object.revenue = 0;
                object.startScore = 0;
                object.endScore = 0;
                object.hasShowCard = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.agree != null && message.hasOwnProperty("agree"))
                object.agree = message.agree;
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                object.onLine = message.onLine;
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin === "number")
                    object.coin = options.longs === String ? String(message.coin) : message.coin;
                else
                    object.coin = options.longs === String ? $util.Long.prototype.toString.call(message.coin) : options.longs === Number ? new $util.LongBits(message.coin.low >>> 0, message.coin.high >>> 0).toNumber() : message.coin;
            if (message.tongsha != null && message.hasOwnProperty("tongsha"))
                object.tongsha = message.tongsha;
            if (message.tongpei != null && message.hasOwnProperty("tongpei"))
                object.tongpei = message.tongpei;
            if (message.noCoin != null && message.hasOwnProperty("noCoin"))
                object.noCoin = message.noCoin;
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                object.betCoin = message.betCoin;
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                object.qiang = message.qiang;
            if (message.remainCards && message.remainCards.length) {
                object.remainCards = [];
                for (var j = 0; j < message.remainCards.length; ++j)
                    object.remainCards[j] = message.remainCards[j];
            }
            if (message.bestOutCardDto && message.bestOutCardDto.length) {
                object.bestOutCardDto = [];
                for (var j = 0; j < message.bestOutCardDto.length; ++j)
                    object.bestOutCardDto[j] = message.bestOutCardDto[j];
            }
            if (message.allowQiang && message.allowQiang.length) {
                object.allowQiang = [];
                for (var j = 0; j < message.allowQiang.length; ++j)
                    object.allowQiang[j] = message.allowQiang[j];
            }
            if (message.allowBet && message.allowBet.length) {
                object.allowBet = [];
                for (var j = 0; j < message.allowBet.length; ++j)
                    object.allowBet[j] = message.allowBet[j];
            }
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                object.currentScore = options.json && !isFinite(message.currentScore) ? String(message.currentScore) : message.currentScore;
            if (message.outCardDto && message.outCardDto.length) {
                object.outCardDto = [];
                for (var j = 0; j < message.outCardDto.length; ++j)
                    object.outCardDto[j] = message.outCardDto[j];
            }
            if (message.cards != null && message.hasOwnProperty("cards"))
                object.cards = $root.ttz.UserCards.toObject(message.cards, options);
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                object.totalScore = options.json && !isFinite(message.totalScore) ? String(message.totalScore) : message.totalScore;
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                object.revenue = options.json && !isFinite(message.revenue) ? String(message.revenue) : message.revenue;
            if (message.startScore != null && message.hasOwnProperty("startScore"))
                object.startScore = options.json && !isFinite(message.startScore) ? String(message.startScore) : message.startScore;
            if (message.endScore != null && message.hasOwnProperty("endScore"))
                object.endScore = options.json && !isFinite(message.endScore) ? String(message.endScore) : message.endScore;
            if (message.hasShowCard != null && message.hasOwnProperty("hasShowCard"))
                object.hasShowCard = message.hasShowCard;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof ttz.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    ttz.UserReady = (function() {

        /**
         * Properties of a UserReady.
         * @memberof ttz
         * @interface IUserReady
         * @property {number|null} [userId] UserReady userId
         * @property {number|null} [state] UserReady state
         */

        /**
         * Constructs a new UserReady.
         * @memberof ttz
         * @classdesc Represents a UserReady.
         * @implements IUserReady
         * @constructor
         * @param {ttz.IUserReady=} [properties] Properties to set
         */
        function UserReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReady userId.
         * @member {number} userId
         * @memberof ttz.UserReady
         * @instance
         */
        UserReady.prototype.userId = 0;

        /**
         * UserReady state.
         * @member {number} state
         * @memberof ttz.UserReady
         * @instance
         */
        UserReady.prototype.state = 0;

        /**
         * Creates a new UserReady instance using the specified properties.
         * @function create
         * @memberof ttz.UserReady
         * @static
         * @param {ttz.IUserReady=} [properties] Properties to set
         * @returns {ttz.UserReady} UserReady instance
         */
        UserReady.create = function create(properties) {
            return new UserReady(properties);
        };

        /**
         * Encodes the specified UserReady message. Does not implicitly {@link ttz.UserReady.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserReady
         * @static
         * @param {ttz.IUserReady} message UserReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified UserReady message, length delimited. Does not implicitly {@link ttz.UserReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserReady
         * @static
         * @param {ttz.IUserReady} message UserReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReady message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserReady} UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserReady} UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReady message.
         * @function verify
         * @memberof ttz.UserReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        /**
         * Creates a UserReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserReady} UserReady
         */
        UserReady.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserReady)
                return object;
            var message = new $root.ttz.UserReady();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserReady
         * @static
         * @param {ttz.UserReady} message UserReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this UserReady to JSON.
         * @function toJSON
         * @memberof ttz.UserReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReady;
    })();

    ttz.JoinTableRequest = (function() {

        /**
         * Properties of a JoinTableRequest.
         * @memberof ttz
         * @interface IJoinTableRequest
         * @property {string|null} [sid] JoinTableRequest sid
         * @property {string|null} [tableId] JoinTableRequest tableId
         * @property {string|null} [gps] JoinTableRequest gps
         */

        /**
         * Constructs a new JoinTableRequest.
         * @memberof ttz
         * @classdesc Represents a JoinTableRequest.
         * @implements IJoinTableRequest
         * @constructor
         * @param {ttz.IJoinTableRequest=} [properties] Properties to set
         */
        function JoinTableRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableRequest sid.
         * @member {string} sid
         * @memberof ttz.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.sid = "";

        /**
         * JoinTableRequest tableId.
         * @member {string} tableId
         * @memberof ttz.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.tableId = "";

        /**
         * JoinTableRequest gps.
         * @member {string} gps
         * @memberof ttz.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.gps = "";

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @function create
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {ttz.IJoinTableRequest=} [properties] Properties to set
         * @returns {ttz.JoinTableRequest} JoinTableRequest instance
         */
        JoinTableRequest.create = function create(properties) {
            return new JoinTableRequest(properties);
        };

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link ttz.JoinTableRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {ttz.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            if (message.gps != null && message.hasOwnProperty("gps"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gps);
            return writer;
        };

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link ttz.JoinTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {ttz.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.JoinTableRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.gps = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinTableRequest message.
         * @function verify
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gps != null && message.hasOwnProperty("gps"))
                if (!$util.isString(message.gps))
                    return "gps: string expected";
            return null;
        };

        /**
         * Creates a JoinTableRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.JoinTableRequest} JoinTableRequest
         */
        JoinTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.JoinTableRequest)
                return object;
            var message = new $root.ttz.JoinTableRequest();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gps != null)
                message.gps = String(object.gps);
            return message;
        };

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.JoinTableRequest
         * @static
         * @param {ttz.JoinTableRequest} message JoinTableRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sid = "";
                object.tableId = "";
                object.gps = "";
            }
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gps != null && message.hasOwnProperty("gps"))
                object.gps = message.gps;
            return object;
        };

        /**
         * Converts this JoinTableRequest to JSON.
         * @function toJSON
         * @memberof ttz.JoinTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableRequest;
    })();

    ttz.JoinTableResponse = (function() {

        /**
         * Properties of a JoinTableResponse.
         * @memberof ttz
         * @interface IJoinTableResponse
         * @property {string|null} [tableId] JoinTableResponse tableId
         * @property {string|null} [seq] JoinTableResponse seq
         * @property {number|null} [gameId] JoinTableResponse gameId
         * @property {number|null} [state] JoinTableResponse state
         * @property {number|null} [channelId] JoinTableResponse channelId
         * @property {number|null} [currentRound] JoinTableResponse currentRound
         * @property {number|null} [totalRound] JoinTableResponse totalRound
         * @property {string|null} [gameInfo] JoinTableResponse gameInfo
         * @property {Array.<number>|null} [cardCount] JoinTableResponse cardCount
         * @property {Array.<ttz.IUser>|null} [users] JoinTableResponse users
         */

        /**
         * Constructs a new JoinTableResponse.
         * @memberof ttz
         * @classdesc Represents a JoinTableResponse.
         * @implements IJoinTableResponse
         * @constructor
         * @param {ttz.IJoinTableResponse=} [properties] Properties to set
         */
        function JoinTableResponse(properties) {
            this.cardCount = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableResponse tableId.
         * @member {string} tableId
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.tableId = "";

        /**
         * JoinTableResponse seq.
         * @member {string} seq
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.seq = "";

        /**
         * JoinTableResponse gameId.
         * @member {number} gameId
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameId = 0;

        /**
         * JoinTableResponse state.
         * @member {number} state
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.state = 0;

        /**
         * JoinTableResponse channelId.
         * @member {number} channelId
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.channelId = 0;

        /**
         * JoinTableResponse currentRound.
         * @member {number} currentRound
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.currentRound = 0;

        /**
         * JoinTableResponse totalRound.
         * @member {number} totalRound
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.totalRound = 0;

        /**
         * JoinTableResponse gameInfo.
         * @member {string} gameInfo
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameInfo = "";

        /**
         * JoinTableResponse cardCount.
         * @member {Array.<number>} cardCount
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.cardCount = $util.emptyArray;

        /**
         * JoinTableResponse users.
         * @member {Array.<ttz.IUser>} users
         * @memberof ttz.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @function create
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {ttz.IJoinTableResponse=} [properties] Properties to set
         * @returns {ttz.JoinTableResponse} JoinTableResponse instance
         */
        JoinTableResponse.create = function create(properties) {
            return new JoinTableResponse(properties);
        };

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link ttz.JoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {ttz.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.seq);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.channelId);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.currentRound);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.totalRound);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.gameInfo);
            if (message.cardCount != null && message.cardCount.length) {
                writer.uint32(/* id 20, wireType 2 =*/162).fork();
                for (var i = 0; i < message.cardCount.length; ++i)
                    writer.int32(message.cardCount[i]);
                writer.ldelim();
            }
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.User.encode(message.users[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link ttz.JoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {ttz.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.JoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.seq = reader.string();
                    break;
                case 3:
                    message.gameId = reader.int32();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.channelId = reader.int32();
                    break;
                case 6:
                    message.currentRound = reader.int32();
                    break;
                case 7:
                    message.totalRound = reader.int32();
                    break;
                case 8:
                    message.gameInfo = reader.string();
                    break;
                case 20:
                    if (!(message.cardCount && message.cardCount.length))
                        message.cardCount = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardCount.push(reader.int32());
                    } else
                        message.cardCount.push(reader.int32());
                    break;
                case 21:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinTableResponse message.
         * @function verify
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isInteger(message.channelId))
                    return "channelId: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.cardCount != null && message.hasOwnProperty("cardCount")) {
                if (!Array.isArray(message.cardCount))
                    return "cardCount: array expected";
                for (var i = 0; i < message.cardCount.length; ++i)
                    if (!$util.isInteger(message.cardCount[i]))
                        return "cardCount: integer[] expected";
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.JoinTableResponse} JoinTableResponse
         */
        JoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.JoinTableResponse)
                return object;
            var message = new $root.ttz.JoinTableResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.seq != null)
                message.seq = String(object.seq);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.channelId != null)
                message.channelId = object.channelId | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.cardCount) {
                if (!Array.isArray(object.cardCount))
                    throw TypeError(".ttz.JoinTableResponse.cardCount: array expected");
                message.cardCount = [];
                for (var i = 0; i < object.cardCount.length; ++i)
                    message.cardCount[i] = object.cardCount[i] | 0;
            }
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.JoinTableResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.JoinTableResponse.users: object expected");
                    message.users[i] = $root.ttz.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.JoinTableResponse
         * @static
         * @param {ttz.JoinTableResponse} message JoinTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cardCount = [];
                object.users = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.gameId = 0;
                object.state = 0;
                object.channelId = 0;
                object.currentRound = 0;
                object.totalRound = 0;
                object.gameInfo = "";
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.cardCount && message.cardCount.length) {
                object.cardCount = [];
                for (var j = 0; j < message.cardCount.length; ++j)
                    object.cardCount[j] = message.cardCount[j];
            }
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinTableResponse to JSON.
         * @function toJSON
         * @memberof ttz.JoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableResponse;
    })();

    ttz.UserReadyRequest = (function() {

        /**
         * Properties of a UserReadyRequest.
         * @memberof ttz
         * @interface IUserReadyRequest
         */

        /**
         * Constructs a new UserReadyRequest.
         * @memberof ttz
         * @classdesc Represents a UserReadyRequest.
         * @implements IUserReadyRequest
         * @constructor
         * @param {ttz.IUserReadyRequest=} [properties] Properties to set
         */
        function UserReadyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserReadyRequest instance using the specified properties.
         * @function create
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {ttz.IUserReadyRequest=} [properties] Properties to set
         * @returns {ttz.UserReadyRequest} UserReadyRequest instance
         */
        UserReadyRequest.create = function create(properties) {
            return new UserReadyRequest(properties);
        };

        /**
         * Encodes the specified UserReadyRequest message. Does not implicitly {@link ttz.UserReadyRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {ttz.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserReadyRequest message, length delimited. Does not implicitly {@link ttz.UserReadyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {ttz.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserReadyRequest} UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserReadyRequest();
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

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserReadyRequest} UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReadyRequest message.
         * @function verify
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReadyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserReadyRequest} UserReadyRequest
         */
        UserReadyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserReadyRequest)
                return object;
            return new $root.ttz.UserReadyRequest();
        };

        /**
         * Creates a plain object from a UserReadyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserReadyRequest
         * @static
         * @param {ttz.UserReadyRequest} message UserReadyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReadyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserReadyRequest to JSON.
         * @function toJSON
         * @memberof ttz.UserReadyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReadyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReadyRequest;
    })();

    ttz.KickedOutRequest = (function() {

        /**
         * Properties of a KickedOutRequest.
         * @memberof ttz
         * @interface IKickedOutRequest
         * @property {number|null} [userId] KickedOutRequest userId
         */

        /**
         * Constructs a new KickedOutRequest.
         * @memberof ttz
         * @classdesc Represents a KickedOutRequest.
         * @implements IKickedOutRequest
         * @constructor
         * @param {ttz.IKickedOutRequest=} [properties] Properties to set
         */
        function KickedOutRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickedOutRequest userId.
         * @member {number} userId
         * @memberof ttz.KickedOutRequest
         * @instance
         */
        KickedOutRequest.prototype.userId = 0;

        /**
         * Creates a new KickedOutRequest instance using the specified properties.
         * @function create
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {ttz.IKickedOutRequest=} [properties] Properties to set
         * @returns {ttz.KickedOutRequest} KickedOutRequest instance
         */
        KickedOutRequest.create = function create(properties) {
            return new KickedOutRequest(properties);
        };

        /**
         * Encodes the specified KickedOutRequest message. Does not implicitly {@link ttz.KickedOutRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {ttz.IKickedOutRequest} message KickedOutRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickedOutRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified KickedOutRequest message, length delimited. Does not implicitly {@link ttz.KickedOutRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {ttz.IKickedOutRequest} message KickedOutRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickedOutRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickedOutRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.KickedOutRequest} KickedOutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickedOutRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.KickedOutRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickedOutRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.KickedOutRequest} KickedOutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickedOutRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickedOutRequest message.
         * @function verify
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickedOutRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a KickedOutRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.KickedOutRequest} KickedOutRequest
         */
        KickedOutRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.KickedOutRequest)
                return object;
            var message = new $root.ttz.KickedOutRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a KickedOutRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.KickedOutRequest
         * @static
         * @param {ttz.KickedOutRequest} message KickedOutRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickedOutRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this KickedOutRequest to JSON.
         * @function toJSON
         * @memberof ttz.KickedOutRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickedOutRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickedOutRequest;
    })();

    ttz.KickedOutResponse = (function() {

        /**
         * Properties of a KickedOutResponse.
         * @memberof ttz
         * @interface IKickedOutResponse
         * @property {string|null} [desc] KickedOutResponse desc
         */

        /**
         * Constructs a new KickedOutResponse.
         * @memberof ttz
         * @classdesc Represents a KickedOutResponse.
         * @implements IKickedOutResponse
         * @constructor
         * @param {ttz.IKickedOutResponse=} [properties] Properties to set
         */
        function KickedOutResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickedOutResponse desc.
         * @member {string} desc
         * @memberof ttz.KickedOutResponse
         * @instance
         */
        KickedOutResponse.prototype.desc = "";

        /**
         * Creates a new KickedOutResponse instance using the specified properties.
         * @function create
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {ttz.IKickedOutResponse=} [properties] Properties to set
         * @returns {ttz.KickedOutResponse} KickedOutResponse instance
         */
        KickedOutResponse.create = function create(properties) {
            return new KickedOutResponse(properties);
        };

        /**
         * Encodes the specified KickedOutResponse message. Does not implicitly {@link ttz.KickedOutResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {ttz.IKickedOutResponse} message KickedOutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickedOutResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desc != null && message.hasOwnProperty("desc"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.desc);
            return writer;
        };

        /**
         * Encodes the specified KickedOutResponse message, length delimited. Does not implicitly {@link ttz.KickedOutResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {ttz.IKickedOutResponse} message KickedOutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickedOutResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickedOutResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.KickedOutResponse} KickedOutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickedOutResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.KickedOutResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.desc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickedOutResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.KickedOutResponse} KickedOutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickedOutResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickedOutResponse message.
         * @function verify
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickedOutResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            return null;
        };

        /**
         * Creates a KickedOutResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.KickedOutResponse} KickedOutResponse
         */
        KickedOutResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.KickedOutResponse)
                return object;
            var message = new $root.ttz.KickedOutResponse();
            if (object.desc != null)
                message.desc = String(object.desc);
            return message;
        };

        /**
         * Creates a plain object from a KickedOutResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.KickedOutResponse
         * @static
         * @param {ttz.KickedOutResponse} message KickedOutResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickedOutResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.desc = "";
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            return object;
        };

        /**
         * Converts this KickedOutResponse to JSON.
         * @function toJSON
         * @memberof ttz.KickedOutResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickedOutResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickedOutResponse;
    })();

    ttz.QiangZhuangRequest = (function() {

        /**
         * Properties of a QiangZhuangRequest.
         * @memberof ttz
         * @interface IQiangZhuangRequest
         * @property {number|null} [qiang] QiangZhuangRequest qiang
         */

        /**
         * Constructs a new QiangZhuangRequest.
         * @memberof ttz
         * @classdesc Represents a QiangZhuangRequest.
         * @implements IQiangZhuangRequest
         * @constructor
         * @param {ttz.IQiangZhuangRequest=} [properties] Properties to set
         */
        function QiangZhuangRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QiangZhuangRequest qiang.
         * @member {number} qiang
         * @memberof ttz.QiangZhuangRequest
         * @instance
         */
        QiangZhuangRequest.prototype.qiang = 0;

        /**
         * Creates a new QiangZhuangRequest instance using the specified properties.
         * @function create
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {ttz.IQiangZhuangRequest=} [properties] Properties to set
         * @returns {ttz.QiangZhuangRequest} QiangZhuangRequest instance
         */
        QiangZhuangRequest.create = function create(properties) {
            return new QiangZhuangRequest(properties);
        };

        /**
         * Encodes the specified QiangZhuangRequest message. Does not implicitly {@link ttz.QiangZhuangRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {ttz.IQiangZhuangRequest} message QiangZhuangRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QiangZhuangRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.qiang);
            return writer;
        };

        /**
         * Encodes the specified QiangZhuangRequest message, length delimited. Does not implicitly {@link ttz.QiangZhuangRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {ttz.IQiangZhuangRequest} message QiangZhuangRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QiangZhuangRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QiangZhuangRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.QiangZhuangRequest} QiangZhuangRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QiangZhuangRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.QiangZhuangRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.qiang = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QiangZhuangRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.QiangZhuangRequest} QiangZhuangRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QiangZhuangRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QiangZhuangRequest message.
         * @function verify
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QiangZhuangRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                if (!$util.isInteger(message.qiang))
                    return "qiang: integer expected";
            return null;
        };

        /**
         * Creates a QiangZhuangRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.QiangZhuangRequest} QiangZhuangRequest
         */
        QiangZhuangRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.QiangZhuangRequest)
                return object;
            var message = new $root.ttz.QiangZhuangRequest();
            if (object.qiang != null)
                message.qiang = object.qiang | 0;
            return message;
        };

        /**
         * Creates a plain object from a QiangZhuangRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.QiangZhuangRequest
         * @static
         * @param {ttz.QiangZhuangRequest} message QiangZhuangRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QiangZhuangRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.qiang = 0;
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                object.qiang = message.qiang;
            return object;
        };

        /**
         * Converts this QiangZhuangRequest to JSON.
         * @function toJSON
         * @memberof ttz.QiangZhuangRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QiangZhuangRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QiangZhuangRequest;
    })();

    ttz.BetRequest = (function() {

        /**
         * Properties of a BetRequest.
         * @memberof ttz
         * @interface IBetRequest
         * @property {number|null} [betCoin] BetRequest betCoin
         */

        /**
         * Constructs a new BetRequest.
         * @memberof ttz
         * @classdesc Represents a BetRequest.
         * @implements IBetRequest
         * @constructor
         * @param {ttz.IBetRequest=} [properties] Properties to set
         */
        function BetRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRequest betCoin.
         * @member {number} betCoin
         * @memberof ttz.BetRequest
         * @instance
         */
        BetRequest.prototype.betCoin = 0;

        /**
         * Creates a new BetRequest instance using the specified properties.
         * @function create
         * @memberof ttz.BetRequest
         * @static
         * @param {ttz.IBetRequest=} [properties] Properties to set
         * @returns {ttz.BetRequest} BetRequest instance
         */
        BetRequest.create = function create(properties) {
            return new BetRequest(properties);
        };

        /**
         * Encodes the specified BetRequest message. Does not implicitly {@link ttz.BetRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.BetRequest
         * @static
         * @param {ttz.IBetRequest} message BetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betCoin);
            return writer;
        };

        /**
         * Encodes the specified BetRequest message, length delimited. Does not implicitly {@link ttz.BetRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.BetRequest
         * @static
         * @param {ttz.IBetRequest} message BetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.BetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.BetRequest} BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.BetRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.betCoin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.BetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.BetRequest} BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRequest message.
         * @function verify
         * @memberof ttz.BetRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                if (!$util.isInteger(message.betCoin))
                    return "betCoin: integer expected";
            return null;
        };

        /**
         * Creates a BetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.BetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.BetRequest} BetRequest
         */
        BetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.BetRequest)
                return object;
            var message = new $root.ttz.BetRequest();
            if (object.betCoin != null)
                message.betCoin = object.betCoin | 0;
            return message;
        };

        /**
         * Creates a plain object from a BetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.BetRequest
         * @static
         * @param {ttz.BetRequest} message BetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.betCoin = 0;
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                object.betCoin = message.betCoin;
            return object;
        };

        /**
         * Converts this BetRequest to JSON.
         * @function toJSON
         * @memberof ttz.BetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRequest;
    })();

    ttz.BetUser = (function() {

        /**
         * Properties of a BetUser.
         * @memberof ttz
         * @interface IBetUser
         * @property {number|null} [userId] BetUser userId
         * @property {number|null} [state] BetUser state
         * @property {number|null} [betCoin] BetUser betCoin
         */

        /**
         * Constructs a new BetUser.
         * @memberof ttz
         * @classdesc Represents a BetUser.
         * @implements IBetUser
         * @constructor
         * @param {ttz.IBetUser=} [properties] Properties to set
         */
        function BetUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetUser userId.
         * @member {number} userId
         * @memberof ttz.BetUser
         * @instance
         */
        BetUser.prototype.userId = 0;

        /**
         * BetUser state.
         * @member {number} state
         * @memberof ttz.BetUser
         * @instance
         */
        BetUser.prototype.state = 0;

        /**
         * BetUser betCoin.
         * @member {number} betCoin
         * @memberof ttz.BetUser
         * @instance
         */
        BetUser.prototype.betCoin = 0;

        /**
         * Creates a new BetUser instance using the specified properties.
         * @function create
         * @memberof ttz.BetUser
         * @static
         * @param {ttz.IBetUser=} [properties] Properties to set
         * @returns {ttz.BetUser} BetUser instance
         */
        BetUser.create = function create(properties) {
            return new BetUser(properties);
        };

        /**
         * Encodes the specified BetUser message. Does not implicitly {@link ttz.BetUser.verify|verify} messages.
         * @function encode
         * @memberof ttz.BetUser
         * @static
         * @param {ttz.IBetUser} message BetUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.betCoin);
            return writer;
        };

        /**
         * Encodes the specified BetUser message, length delimited. Does not implicitly {@link ttz.BetUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.BetUser
         * @static
         * @param {ttz.IBetUser} message BetUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetUser message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.BetUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.BetUser} BetUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.BetUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.betCoin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.BetUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.BetUser} BetUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetUser message.
         * @function verify
         * @memberof ttz.BetUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                if (!$util.isInteger(message.betCoin))
                    return "betCoin: integer expected";
            return null;
        };

        /**
         * Creates a BetUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.BetUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.BetUser} BetUser
         */
        BetUser.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.BetUser)
                return object;
            var message = new $root.ttz.BetUser();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.betCoin != null)
                message.betCoin = object.betCoin | 0;
            return message;
        };

        /**
         * Creates a plain object from a BetUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.BetUser
         * @static
         * @param {ttz.BetUser} message BetUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
                object.betCoin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                object.betCoin = message.betCoin;
            return object;
        };

        /**
         * Converts this BetUser to JSON.
         * @function toJSON
         * @memberof ttz.BetUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetUser;
    })();

    ttz.BetResponse = (function() {

        /**
         * Properties of a BetResponse.
         * @memberof ttz
         * @interface IBetResponse
         * @property {number|null} [userId] BetResponse userId
         * @property {number|null} [state] BetResponse state
         * @property {Array.<ttz.IBetUser>|null} [users] BetResponse users
         */

        /**
         * Constructs a new BetResponse.
         * @memberof ttz
         * @classdesc Represents a BetResponse.
         * @implements IBetResponse
         * @constructor
         * @param {ttz.IBetResponse=} [properties] Properties to set
         */
        function BetResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetResponse userId.
         * @member {number} userId
         * @memberof ttz.BetResponse
         * @instance
         */
        BetResponse.prototype.userId = 0;

        /**
         * BetResponse state.
         * @member {number} state
         * @memberof ttz.BetResponse
         * @instance
         */
        BetResponse.prototype.state = 0;

        /**
         * BetResponse users.
         * @member {Array.<ttz.IBetUser>} users
         * @memberof ttz.BetResponse
         * @instance
         */
        BetResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new BetResponse instance using the specified properties.
         * @function create
         * @memberof ttz.BetResponse
         * @static
         * @param {ttz.IBetResponse=} [properties] Properties to set
         * @returns {ttz.BetResponse} BetResponse instance
         */
        BetResponse.create = function create(properties) {
            return new BetResponse(properties);
        };

        /**
         * Encodes the specified BetResponse message. Does not implicitly {@link ttz.BetResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.BetResponse
         * @static
         * @param {ttz.IBetResponse} message BetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.BetUser.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetResponse message, length delimited. Does not implicitly {@link ttz.BetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.BetResponse
         * @static
         * @param {ttz.IBetResponse} message BetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.BetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.BetResponse} BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.BetResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.BetUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.BetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.BetResponse} BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetResponse message.
         * @function verify
         * @memberof ttz.BetResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.BetUser.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.BetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.BetResponse} BetResponse
         */
        BetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.BetResponse)
                return object;
            var message = new $root.ttz.BetResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.BetResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.BetResponse.users: object expected");
                    message.users[i] = $root.ttz.BetUser.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.BetResponse
         * @static
         * @param {ttz.BetResponse} message BetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.BetUser.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this BetResponse to JSON.
         * @function toJSON
         * @memberof ttz.BetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResponse;
    })();

    ttz.UserReconnectRequest = (function() {

        /**
         * Properties of a UserReconnectRequest.
         * @memberof ttz
         * @interface IUserReconnectRequest
         * @property {number|null} [userId] UserReconnectRequest userId
         */

        /**
         * Constructs a new UserReconnectRequest.
         * @memberof ttz
         * @classdesc Represents a UserReconnectRequest.
         * @implements IUserReconnectRequest
         * @constructor
         * @param {ttz.IUserReconnectRequest=} [properties] Properties to set
         */
        function UserReconnectRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReconnectRequest userId.
         * @member {number} userId
         * @memberof ttz.UserReconnectRequest
         * @instance
         */
        UserReconnectRequest.prototype.userId = 0;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @function create
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {ttz.IUserReconnectRequest=} [properties] Properties to set
         * @returns {ttz.UserReconnectRequest} UserReconnectRequest instance
         */
        UserReconnectRequest.create = function create(properties) {
            return new UserReconnectRequest(properties);
        };

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link ttz.UserReconnectRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {ttz.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link ttz.UserReconnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {ttz.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserReconnectRequest} UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserReconnectRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserReconnectRequest} UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReconnectRequest message.
         * @function verify
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReconnectRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a UserReconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserReconnectRequest} UserReconnectRequest
         */
        UserReconnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserReconnectRequest)
                return object;
            var message = new $root.ttz.UserReconnectRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserReconnectRequest
         * @static
         * @param {ttz.UserReconnectRequest} message UserReconnectRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReconnectRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this UserReconnectRequest to JSON.
         * @function toJSON
         * @memberof ttz.UserReconnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectRequest;
    })();

    ttz.UserQuitRequest = (function() {

        /**
         * Properties of a UserQuitRequest.
         * @memberof ttz
         * @interface IUserQuitRequest
         */

        /**
         * Constructs a new UserQuitRequest.
         * @memberof ttz
         * @classdesc Represents a UserQuitRequest.
         * @implements IUserQuitRequest
         * @constructor
         * @param {ttz.IUserQuitRequest=} [properties] Properties to set
         */
        function UserQuitRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserQuitRequest instance using the specified properties.
         * @function create
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {ttz.IUserQuitRequest=} [properties] Properties to set
         * @returns {ttz.UserQuitRequest} UserQuitRequest instance
         */
        UserQuitRequest.create = function create(properties) {
            return new UserQuitRequest(properties);
        };

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link ttz.UserQuitRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {ttz.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link ttz.UserQuitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {ttz.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserQuitRequest} UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserQuitRequest();
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

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserQuitRequest} UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserQuitRequest message.
         * @function verify
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserQuitRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserQuitRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserQuitRequest} UserQuitRequest
         */
        UserQuitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserQuitRequest)
                return object;
            return new $root.ttz.UserQuitRequest();
        };

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserQuitRequest
         * @static
         * @param {ttz.UserQuitRequest} message UserQuitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserQuitRequest to JSON.
         * @function toJSON
         * @memberof ttz.UserQuitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitRequest;
    })();

    ttz.UserQuitResponse = (function() {

        /**
         * Properties of a UserQuitResponse.
         * @memberof ttz
         * @interface IUserQuitResponse
         * @property {number|null} [userId] UserQuitResponse userId
         * @property {string|null} [nickname] UserQuitResponse nickname
         * @property {number|null} [position] UserQuitResponse position
         * @property {string|null} [tableId] UserQuitResponse tableId
         */

        /**
         * Constructs a new UserQuitResponse.
         * @memberof ttz
         * @classdesc Represents a UserQuitResponse.
         * @implements IUserQuitResponse
         * @constructor
         * @param {ttz.IUserQuitResponse=} [properties] Properties to set
         */
        function UserQuitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserQuitResponse userId.
         * @member {number} userId
         * @memberof ttz.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.userId = 0;

        /**
         * UserQuitResponse nickname.
         * @member {string} nickname
         * @memberof ttz.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.nickname = "";

        /**
         * UserQuitResponse position.
         * @member {number} position
         * @memberof ttz.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.position = 0;

        /**
         * UserQuitResponse tableId.
         * @member {string} tableId
         * @memberof ttz.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.tableId = "";

        /**
         * Creates a new UserQuitResponse instance using the specified properties.
         * @function create
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {ttz.IUserQuitResponse=} [properties] Properties to set
         * @returns {ttz.UserQuitResponse} UserQuitResponse instance
         */
        UserQuitResponse.create = function create(properties) {
            return new UserQuitResponse(properties);
        };

        /**
         * Encodes the specified UserQuitResponse message. Does not implicitly {@link ttz.UserQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {ttz.IUserQuitResponse} message UserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.position);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified UserQuitResponse message, length delimited. Does not implicitly {@link ttz.UserQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {ttz.IUserQuitResponse} message UserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserQuitResponse} UserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserQuitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.position = reader.int32();
                    break;
                case 5:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserQuitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserQuitResponse} UserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserQuitResponse message.
         * @function verify
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserQuitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a UserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserQuitResponse} UserQuitResponse
         */
        UserQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserQuitResponse)
                return object;
            var message = new $root.ttz.UserQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from a UserQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserQuitResponse
         * @static
         * @param {ttz.UserQuitResponse} message UserQuitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.nickname = "";
                object.position = 0;
                object.tableId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this UserQuitResponse to JSON.
         * @function toJSON
         * @memberof ttz.UserQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitResponse;
    })();

    ttz.MessageRequest = (function() {

        /**
         * Properties of a MessageRequest.
         * @memberof ttz
         * @interface IMessageRequest
         * @property {string|null} [content] MessageRequest content
         * @property {number|null} [toUserId] MessageRequest toUserId
         */

        /**
         * Constructs a new MessageRequest.
         * @memberof ttz
         * @classdesc Represents a MessageRequest.
         * @implements IMessageRequest
         * @constructor
         * @param {ttz.IMessageRequest=} [properties] Properties to set
         */
        function MessageRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageRequest content.
         * @member {string} content
         * @memberof ttz.MessageRequest
         * @instance
         */
        MessageRequest.prototype.content = "";

        /**
         * MessageRequest toUserId.
         * @member {number} toUserId
         * @memberof ttz.MessageRequest
         * @instance
         */
        MessageRequest.prototype.toUserId = 0;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @function create
         * @memberof ttz.MessageRequest
         * @static
         * @param {ttz.IMessageRequest=} [properties] Properties to set
         * @returns {ttz.MessageRequest} MessageRequest instance
         */
        MessageRequest.create = function create(properties) {
            return new MessageRequest(properties);
        };

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link ttz.MessageRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.MessageRequest
         * @static
         * @param {ttz.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toUserId);
            return writer;
        };

        /**
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link ttz.MessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.MessageRequest
         * @static
         * @param {ttz.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.MessageRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    message.toUserId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageRequest message.
         * @function verify
         * @memberof ttz.MessageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                if (!$util.isInteger(message.toUserId))
                    return "toUserId: integer expected";
            return null;
        };

        /**
         * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.MessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.MessageRequest} MessageRequest
         */
        MessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.MessageRequest)
                return object;
            var message = new $root.ttz.MessageRequest();
            if (object.content != null)
                message.content = String(object.content);
            if (object.toUserId != null)
                message.toUserId = object.toUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.MessageRequest
         * @static
         * @param {ttz.MessageRequest} message MessageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content = "";
                object.toUserId = 0;
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                object.toUserId = message.toUserId;
            return object;
        };

        /**
         * Converts this MessageRequest to JSON.
         * @function toJSON
         * @memberof ttz.MessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageRequest;
    })();

    ttz.UserOnBackRequest = (function() {

        /**
         * Properties of a UserOnBackRequest.
         * @memberof ttz
         * @interface IUserOnBackRequest
         * @property {number|null} [leaveState] UserOnBackRequest leaveState
         */

        /**
         * Constructs a new UserOnBackRequest.
         * @memberof ttz
         * @classdesc Represents a UserOnBackRequest.
         * @implements IUserOnBackRequest
         * @constructor
         * @param {ttz.IUserOnBackRequest=} [properties] Properties to set
         */
        function UserOnBackRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserOnBackRequest leaveState.
         * @member {number} leaveState
         * @memberof ttz.UserOnBackRequest
         * @instance
         */
        UserOnBackRequest.prototype.leaveState = 0;

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @function create
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {ttz.IUserOnBackRequest=} [properties] Properties to set
         * @returns {ttz.UserOnBackRequest} UserOnBackRequest instance
         */
        UserOnBackRequest.create = function create(properties) {
            return new UserOnBackRequest(properties);
        };

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link ttz.UserOnBackRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {ttz.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.leaveState);
            return writer;
        };

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link ttz.UserOnBackRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {ttz.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserOnBackRequest} UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOnBackRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserOnBackRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.leaveState = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserOnBackRequest} UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOnBackRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserOnBackRequest message.
         * @function verify
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOnBackRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                if (!$util.isInteger(message.leaveState))
                    return "leaveState: integer expected";
            return null;
        };

        /**
         * Creates a UserOnBackRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserOnBackRequest} UserOnBackRequest
         */
        UserOnBackRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserOnBackRequest)
                return object;
            var message = new $root.ttz.UserOnBackRequest();
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserOnBackRequest
         * @static
         * @param {ttz.UserOnBackRequest} message UserOnBackRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOnBackRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.leaveState = 0;
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                object.leaveState = message.leaveState;
            return object;
        };

        /**
         * Converts this UserOnBackRequest to JSON.
         * @function toJSON
         * @memberof ttz.UserOnBackRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOnBackRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserOnBackRequest;
    })();

    ttz.DelayCheckRequest = (function() {

        /**
         * Properties of a DelayCheckRequest.
         * @memberof ttz
         * @interface IDelayCheckRequest
         * @property {string|null} [content] DelayCheckRequest content
         */

        /**
         * Constructs a new DelayCheckRequest.
         * @memberof ttz
         * @classdesc Represents a DelayCheckRequest.
         * @implements IDelayCheckRequest
         * @constructor
         * @param {ttz.IDelayCheckRequest=} [properties] Properties to set
         */
        function DelayCheckRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelayCheckRequest content.
         * @member {string} content
         * @memberof ttz.DelayCheckRequest
         * @instance
         */
        DelayCheckRequest.prototype.content = "";

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @function create
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {ttz.IDelayCheckRequest=} [properties] Properties to set
         * @returns {ttz.DelayCheckRequest} DelayCheckRequest instance
         */
        DelayCheckRequest.create = function create(properties) {
            return new DelayCheckRequest(properties);
        };

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link ttz.DelayCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {ttz.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link ttz.DelayCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {ttz.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.DelayCheckRequest} DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.DelayCheckRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.DelayCheckRequest} DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelayCheckRequest message.
         * @function verify
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelayCheckRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a DelayCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.DelayCheckRequest} DelayCheckRequest
         */
        DelayCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.DelayCheckRequest)
                return object;
            var message = new $root.ttz.DelayCheckRequest();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.DelayCheckRequest
         * @static
         * @param {ttz.DelayCheckRequest} message DelayCheckRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelayCheckRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this DelayCheckRequest to JSON.
         * @function toJSON
         * @memberof ttz.DelayCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckRequest;
    })();

    ttz.NoticePushFrCenterRequest = (function() {

        /**
         * Properties of a NoticePushFrCenterRequest.
         * @memberof ttz
         * @interface INoticePushFrCenterRequest
         */

        /**
         * Constructs a new NoticePushFrCenterRequest.
         * @memberof ttz
         * @classdesc Represents a NoticePushFrCenterRequest.
         * @implements INoticePushFrCenterRequest
         * @constructor
         * @param {ttz.INoticePushFrCenterRequest=} [properties] Properties to set
         */
        function NoticePushFrCenterRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new NoticePushFrCenterRequest instance using the specified properties.
         * @function create
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {ttz.INoticePushFrCenterRequest=} [properties] Properties to set
         * @returns {ttz.NoticePushFrCenterRequest} NoticePushFrCenterRequest instance
         */
        NoticePushFrCenterRequest.create = function create(properties) {
            return new NoticePushFrCenterRequest(properties);
        };

        /**
         * Encodes the specified NoticePushFrCenterRequest message. Does not implicitly {@link ttz.NoticePushFrCenterRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {ttz.INoticePushFrCenterRequest} message NoticePushFrCenterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticePushFrCenterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified NoticePushFrCenterRequest message, length delimited. Does not implicitly {@link ttz.NoticePushFrCenterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {ttz.INoticePushFrCenterRequest} message NoticePushFrCenterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticePushFrCenterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoticePushFrCenterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.NoticePushFrCenterRequest} NoticePushFrCenterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticePushFrCenterRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.NoticePushFrCenterRequest();
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

        /**
         * Decodes a NoticePushFrCenterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.NoticePushFrCenterRequest} NoticePushFrCenterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticePushFrCenterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoticePushFrCenterRequest message.
         * @function verify
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoticePushFrCenterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a NoticePushFrCenterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.NoticePushFrCenterRequest} NoticePushFrCenterRequest
         */
        NoticePushFrCenterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.NoticePushFrCenterRequest)
                return object;
            return new $root.ttz.NoticePushFrCenterRequest();
        };

        /**
         * Creates a plain object from a NoticePushFrCenterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.NoticePushFrCenterRequest
         * @static
         * @param {ttz.NoticePushFrCenterRequest} message NoticePushFrCenterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoticePushFrCenterRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this NoticePushFrCenterRequest to JSON.
         * @function toJSON
         * @memberof ttz.NoticePushFrCenterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoticePushFrCenterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NoticePushFrCenterRequest;
    })();

    ttz.NoticePushFrCenterResponse = (function() {

        /**
         * Properties of a NoticePushFrCenterResponse.
         * @memberof ttz
         * @interface INoticePushFrCenterResponse
         * @property {string|null} [content] NoticePushFrCenterResponse content
         */

        /**
         * Constructs a new NoticePushFrCenterResponse.
         * @memberof ttz
         * @classdesc Represents a NoticePushFrCenterResponse.
         * @implements INoticePushFrCenterResponse
         * @constructor
         * @param {ttz.INoticePushFrCenterResponse=} [properties] Properties to set
         */
        function NoticePushFrCenterResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoticePushFrCenterResponse content.
         * @member {string} content
         * @memberof ttz.NoticePushFrCenterResponse
         * @instance
         */
        NoticePushFrCenterResponse.prototype.content = "";

        /**
         * Creates a new NoticePushFrCenterResponse instance using the specified properties.
         * @function create
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {ttz.INoticePushFrCenterResponse=} [properties] Properties to set
         * @returns {ttz.NoticePushFrCenterResponse} NoticePushFrCenterResponse instance
         */
        NoticePushFrCenterResponse.create = function create(properties) {
            return new NoticePushFrCenterResponse(properties);
        };

        /**
         * Encodes the specified NoticePushFrCenterResponse message. Does not implicitly {@link ttz.NoticePushFrCenterResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {ttz.INoticePushFrCenterResponse} message NoticePushFrCenterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticePushFrCenterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified NoticePushFrCenterResponse message, length delimited. Does not implicitly {@link ttz.NoticePushFrCenterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {ttz.INoticePushFrCenterResponse} message NoticePushFrCenterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticePushFrCenterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoticePushFrCenterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.NoticePushFrCenterResponse} NoticePushFrCenterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticePushFrCenterResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.NoticePushFrCenterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NoticePushFrCenterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.NoticePushFrCenterResponse} NoticePushFrCenterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticePushFrCenterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoticePushFrCenterResponse message.
         * @function verify
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoticePushFrCenterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a NoticePushFrCenterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.NoticePushFrCenterResponse} NoticePushFrCenterResponse
         */
        NoticePushFrCenterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.NoticePushFrCenterResponse)
                return object;
            var message = new $root.ttz.NoticePushFrCenterResponse();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a NoticePushFrCenterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.NoticePushFrCenterResponse
         * @static
         * @param {ttz.NoticePushFrCenterResponse} message NoticePushFrCenterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoticePushFrCenterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this NoticePushFrCenterResponse to JSON.
         * @function toJSON
         * @memberof ttz.NoticePushFrCenterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoticePushFrCenterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NoticePushFrCenterResponse;
    })();

    ttz.HallRefreshCoinRequest = (function() {

        /**
         * Properties of a HallRefreshCoinRequest.
         * @memberof ttz
         * @interface IHallRefreshCoinRequest
         * @property {number|null} [userId] HallRefreshCoinRequest userId
         * @property {number|null} [type] HallRefreshCoinRequest type
         */

        /**
         * Constructs a new HallRefreshCoinRequest.
         * @memberof ttz
         * @classdesc Represents a HallRefreshCoinRequest.
         * @implements IHallRefreshCoinRequest
         * @constructor
         * @param {ttz.IHallRefreshCoinRequest=} [properties] Properties to set
         */
        function HallRefreshCoinRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HallRefreshCoinRequest userId.
         * @member {number} userId
         * @memberof ttz.HallRefreshCoinRequest
         * @instance
         */
        HallRefreshCoinRequest.prototype.userId = 0;

        /**
         * HallRefreshCoinRequest type.
         * @member {number} type
         * @memberof ttz.HallRefreshCoinRequest
         * @instance
         */
        HallRefreshCoinRequest.prototype.type = 0;

        /**
         * Creates a new HallRefreshCoinRequest instance using the specified properties.
         * @function create
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {ttz.IHallRefreshCoinRequest=} [properties] Properties to set
         * @returns {ttz.HallRefreshCoinRequest} HallRefreshCoinRequest instance
         */
        HallRefreshCoinRequest.create = function create(properties) {
            return new HallRefreshCoinRequest(properties);
        };

        /**
         * Encodes the specified HallRefreshCoinRequest message. Does not implicitly {@link ttz.HallRefreshCoinRequest.verify|verify} messages.
         * @function encode
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {ttz.IHallRefreshCoinRequest} message HallRefreshCoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallRefreshCoinRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified HallRefreshCoinRequest message, length delimited. Does not implicitly {@link ttz.HallRefreshCoinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {ttz.IHallRefreshCoinRequest} message HallRefreshCoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallRefreshCoinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HallRefreshCoinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.HallRefreshCoinRequest} HallRefreshCoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallRefreshCoinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.HallRefreshCoinRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HallRefreshCoinRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.HallRefreshCoinRequest} HallRefreshCoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallRefreshCoinRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HallRefreshCoinRequest message.
         * @function verify
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HallRefreshCoinRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a HallRefreshCoinRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.HallRefreshCoinRequest} HallRefreshCoinRequest
         */
        HallRefreshCoinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.HallRefreshCoinRequest)
                return object;
            var message = new $root.ttz.HallRefreshCoinRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a HallRefreshCoinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.HallRefreshCoinRequest
         * @static
         * @param {ttz.HallRefreshCoinRequest} message HallRefreshCoinRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HallRefreshCoinRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.type = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this HallRefreshCoinRequest to JSON.
         * @function toJSON
         * @memberof ttz.HallRefreshCoinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HallRefreshCoinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HallRefreshCoinRequest;
    })();

    ttz.HallRefreshCoinResponse = (function() {

        /**
         * Properties of a HallRefreshCoinResponse.
         * @memberof ttz
         * @interface IHallRefreshCoinResponse
         * @property {number|null} [userId] HallRefreshCoinResponse userId
         * @property {number|null} [coin] HallRefreshCoinResponse coin
         * @property {boolean|null} [isInTable] HallRefreshCoinResponse isInTable
         */

        /**
         * Constructs a new HallRefreshCoinResponse.
         * @memberof ttz
         * @classdesc Represents a HallRefreshCoinResponse.
         * @implements IHallRefreshCoinResponse
         * @constructor
         * @param {ttz.IHallRefreshCoinResponse=} [properties] Properties to set
         */
        function HallRefreshCoinResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HallRefreshCoinResponse userId.
         * @member {number} userId
         * @memberof ttz.HallRefreshCoinResponse
         * @instance
         */
        HallRefreshCoinResponse.prototype.userId = 0;

        /**
         * HallRefreshCoinResponse coin.
         * @member {number} coin
         * @memberof ttz.HallRefreshCoinResponse
         * @instance
         */
        HallRefreshCoinResponse.prototype.coin = 0;

        /**
         * HallRefreshCoinResponse isInTable.
         * @member {boolean} isInTable
         * @memberof ttz.HallRefreshCoinResponse
         * @instance
         */
        HallRefreshCoinResponse.prototype.isInTable = false;

        /**
         * Creates a new HallRefreshCoinResponse instance using the specified properties.
         * @function create
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {ttz.IHallRefreshCoinResponse=} [properties] Properties to set
         * @returns {ttz.HallRefreshCoinResponse} HallRefreshCoinResponse instance
         */
        HallRefreshCoinResponse.create = function create(properties) {
            return new HallRefreshCoinResponse(properties);
        };

        /**
         * Encodes the specified HallRefreshCoinResponse message. Does not implicitly {@link ttz.HallRefreshCoinResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {ttz.IHallRefreshCoinResponse} message HallRefreshCoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallRefreshCoinResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.coin);
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isInTable);
            return writer;
        };

        /**
         * Encodes the specified HallRefreshCoinResponse message, length delimited. Does not implicitly {@link ttz.HallRefreshCoinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {ttz.IHallRefreshCoinResponse} message HallRefreshCoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallRefreshCoinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HallRefreshCoinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.HallRefreshCoinResponse} HallRefreshCoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallRefreshCoinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.HallRefreshCoinResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.coin = reader.double();
                    break;
                case 3:
                    message.isInTable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HallRefreshCoinResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.HallRefreshCoinResponse} HallRefreshCoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallRefreshCoinResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HallRefreshCoinResponse message.
         * @function verify
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HallRefreshCoinResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                if (typeof message.isInTable !== "boolean")
                    return "isInTable: boolean expected";
            return null;
        };

        /**
         * Creates a HallRefreshCoinResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.HallRefreshCoinResponse} HallRefreshCoinResponse
         */
        HallRefreshCoinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.HallRefreshCoinResponse)
                return object;
            var message = new $root.ttz.HallRefreshCoinResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.coin != null)
                message.coin = Number(object.coin);
            if (object.isInTable != null)
                message.isInTable = Boolean(object.isInTable);
            return message;
        };

        /**
         * Creates a plain object from a HallRefreshCoinResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.HallRefreshCoinResponse
         * @static
         * @param {ttz.HallRefreshCoinResponse} message HallRefreshCoinResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HallRefreshCoinResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.coin = 0;
                object.isInTable = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                object.isInTable = message.isInTable;
            return object;
        };

        /**
         * Converts this HallRefreshCoinResponse to JSON.
         * @function toJSON
         * @memberof ttz.HallRefreshCoinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HallRefreshCoinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HallRefreshCoinResponse;
    })();

    ttz.TableInfoResponse = (function() {

        /**
         * Properties of a TableInfoResponse.
         * @memberof ttz
         * @interface ITableInfoResponse
         * @property {string|null} [tableId] TableInfoResponse tableId
         * @property {string|null} [seq] TableInfoResponse seq
         * @property {number|null} [gameId] TableInfoResponse gameId
         * @property {number|null} [zhuangPos] TableInfoResponse zhuangPos
         * @property {number|null} [state] TableInfoResponse state
         * @property {string|null} [gameInfo] TableInfoResponse gameInfo
         * @property {number|null} [currentRound] TableInfoResponse currentRound
         * @property {number|null} [totalRound] TableInfoResponse totalRound
         * @property {Array.<number>|null} [cardCount] TableInfoResponse cardCount
         * @property {Array.<ttz.IUser>|null} [users] TableInfoResponse users
         */

        /**
         * Constructs a new TableInfoResponse.
         * @memberof ttz
         * @classdesc Represents a TableInfoResponse.
         * @implements ITableInfoResponse
         * @constructor
         * @param {ttz.ITableInfoResponse=} [properties] Properties to set
         */
        function TableInfoResponse(properties) {
            this.cardCount = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfoResponse tableId.
         * @member {string} tableId
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.tableId = "";

        /**
         * TableInfoResponse seq.
         * @member {string} seq
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.seq = "";

        /**
         * TableInfoResponse gameId.
         * @member {number} gameId
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.gameId = 0;

        /**
         * TableInfoResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.zhuangPos = 0;

        /**
         * TableInfoResponse state.
         * @member {number} state
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.state = 0;

        /**
         * TableInfoResponse gameInfo.
         * @member {string} gameInfo
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.gameInfo = "";

        /**
         * TableInfoResponse currentRound.
         * @member {number} currentRound
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.currentRound = 0;

        /**
         * TableInfoResponse totalRound.
         * @member {number} totalRound
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.totalRound = 0;

        /**
         * TableInfoResponse cardCount.
         * @member {Array.<number>} cardCount
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.cardCount = $util.emptyArray;

        /**
         * TableInfoResponse users.
         * @member {Array.<ttz.IUser>} users
         * @memberof ttz.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new TableInfoResponse instance using the specified properties.
         * @function create
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {ttz.ITableInfoResponse=} [properties] Properties to set
         * @returns {ttz.TableInfoResponse} TableInfoResponse instance
         */
        TableInfoResponse.create = function create(properties) {
            return new TableInfoResponse(properties);
        };

        /**
         * Encodes the specified TableInfoResponse message. Does not implicitly {@link ttz.TableInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {ttz.ITableInfoResponse} message TableInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.seq);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameId);
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.zhuangPos);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.gameInfo);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.currentRound);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.totalRound);
            if (message.cardCount != null && message.cardCount.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (var i = 0; i < message.cardCount.length; ++i)
                    writer.int32(message.cardCount[i]);
                writer.ldelim();
            }
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.User.encode(message.users[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableInfoResponse message, length delimited. Does not implicitly {@link ttz.TableInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {ttz.ITableInfoResponse} message TableInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.TableInfoResponse} TableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.TableInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.seq = reader.string();
                    break;
                case 3:
                    message.gameId = reader.int32();
                    break;
                case 4:
                    message.zhuangPos = reader.int32();
                    break;
                case 5:
                    message.state = reader.int32();
                    break;
                case 6:
                    message.gameInfo = reader.string();
                    break;
                case 7:
                    message.currentRound = reader.int32();
                    break;
                case 8:
                    message.totalRound = reader.int32();
                    break;
                case 9:
                    if (!(message.cardCount && message.cardCount.length))
                        message.cardCount = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardCount.push(reader.int32());
                    } else
                        message.cardCount.push(reader.int32());
                    break;
                case 10:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.TableInfoResponse} TableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableInfoResponse message.
         * @function verify
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.cardCount != null && message.hasOwnProperty("cardCount")) {
                if (!Array.isArray(message.cardCount))
                    return "cardCount: array expected";
                for (var i = 0; i < message.cardCount.length; ++i)
                    if (!$util.isInteger(message.cardCount[i]))
                        return "cardCount: integer[] expected";
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TableInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.TableInfoResponse} TableInfoResponse
         */
        TableInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.TableInfoResponse)
                return object;
            var message = new $root.ttz.TableInfoResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.seq != null)
                message.seq = String(object.seq);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.cardCount) {
                if (!Array.isArray(object.cardCount))
                    throw TypeError(".ttz.TableInfoResponse.cardCount: array expected");
                message.cardCount = [];
                for (var i = 0; i < object.cardCount.length; ++i)
                    message.cardCount[i] = object.cardCount[i] | 0;
            }
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.TableInfoResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.TableInfoResponse.users: object expected");
                    message.users[i] = $root.ttz.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TableInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.TableInfoResponse
         * @static
         * @param {ttz.TableInfoResponse} message TableInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cardCount = [];
                object.users = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.gameId = 0;
                object.zhuangPos = 0;
                object.state = 0;
                object.gameInfo = "";
                object.currentRound = 0;
                object.totalRound = 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.cardCount && message.cardCount.length) {
                object.cardCount = [];
                for (var j = 0; j < message.cardCount.length; ++j)
                    object.cardCount[j] = message.cardCount[j];
            }
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this TableInfoResponse to JSON.
         * @function toJSON
         * @memberof ttz.TableInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfoResponse;
    })();

    ttz.SendBetResponse = (function() {

        /**
         * Properties of a SendBetResponse.
         * @memberof ttz
         * @interface ISendBetResponse
         * @property {number|null} [userId] SendBetResponse userId
         * @property {number|null} [state] SendBetResponse state
         * @property {Array.<ttz.IUser>|null} [users] SendBetResponse users
         */

        /**
         * Constructs a new SendBetResponse.
         * @memberof ttz
         * @classdesc Represents a SendBetResponse.
         * @implements ISendBetResponse
         * @constructor
         * @param {ttz.ISendBetResponse=} [properties] Properties to set
         */
        function SendBetResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendBetResponse userId.
         * @member {number} userId
         * @memberof ttz.SendBetResponse
         * @instance
         */
        SendBetResponse.prototype.userId = 0;

        /**
         * SendBetResponse state.
         * @member {number} state
         * @memberof ttz.SendBetResponse
         * @instance
         */
        SendBetResponse.prototype.state = 0;

        /**
         * SendBetResponse users.
         * @member {Array.<ttz.IUser>} users
         * @memberof ttz.SendBetResponse
         * @instance
         */
        SendBetResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendBetResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendBetResponse
         * @static
         * @param {ttz.ISendBetResponse=} [properties] Properties to set
         * @returns {ttz.SendBetResponse} SendBetResponse instance
         */
        SendBetResponse.create = function create(properties) {
            return new SendBetResponse(properties);
        };

        /**
         * Encodes the specified SendBetResponse message. Does not implicitly {@link ttz.SendBetResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendBetResponse
         * @static
         * @param {ttz.ISendBetResponse} message SendBetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendBetResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.User.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendBetResponse message, length delimited. Does not implicitly {@link ttz.SendBetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendBetResponse
         * @static
         * @param {ttz.ISendBetResponse} message SendBetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendBetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendBetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendBetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendBetResponse} SendBetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendBetResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendBetResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendBetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendBetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendBetResponse} SendBetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendBetResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendBetResponse message.
         * @function verify
         * @memberof ttz.SendBetResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendBetResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendBetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendBetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendBetResponse} SendBetResponse
         */
        SendBetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendBetResponse)
                return object;
            var message = new $root.ttz.SendBetResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.SendBetResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.SendBetResponse.users: object expected");
                    message.users[i] = $root.ttz.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendBetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendBetResponse
         * @static
         * @param {ttz.SendBetResponse} message SendBetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendBetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendBetResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendBetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendBetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendBetResponse;
    })();

    ttz.SendJoinTableResponse = (function() {

        /**
         * Properties of a SendJoinTableResponse.
         * @memberof ttz
         * @interface ISendJoinTableResponse
         * @property {ttz.IUser|null} [user] SendJoinTableResponse user
         */

        /**
         * Constructs a new SendJoinTableResponse.
         * @memberof ttz
         * @classdesc Represents a SendJoinTableResponse.
         * @implements ISendJoinTableResponse
         * @constructor
         * @param {ttz.ISendJoinTableResponse=} [properties] Properties to set
         */
        function SendJoinTableResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendJoinTableResponse user.
         * @member {ttz.IUser|null|undefined} user
         * @memberof ttz.SendJoinTableResponse
         * @instance
         */
        SendJoinTableResponse.prototype.user = null;

        /**
         * Creates a new SendJoinTableResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {ttz.ISendJoinTableResponse=} [properties] Properties to set
         * @returns {ttz.SendJoinTableResponse} SendJoinTableResponse instance
         */
        SendJoinTableResponse.create = function create(properties) {
            return new SendJoinTableResponse(properties);
        };

        /**
         * Encodes the specified SendJoinTableResponse message. Does not implicitly {@link ttz.SendJoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {ttz.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.ttz.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendJoinTableResponse message, length delimited. Does not implicitly {@link ttz.SendJoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {ttz.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendJoinTableResponse} SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendJoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendJoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.ttz.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendJoinTableResponse} SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendJoinTableResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendJoinTableResponse message.
         * @function verify
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendJoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.ttz.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a SendJoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendJoinTableResponse} SendJoinTableResponse
         */
        SendJoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendJoinTableResponse)
                return object;
            var message = new $root.ttz.SendJoinTableResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".ttz.SendJoinTableResponse.user: object expected");
                message.user = $root.ttz.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a SendJoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendJoinTableResponse
         * @static
         * @param {ttz.SendJoinTableResponse} message SendJoinTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendJoinTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.ttz.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this SendJoinTableResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendJoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendJoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendJoinTableResponse;
    })();

    ttz.SendUserReadyResponse = (function() {

        /**
         * Properties of a SendUserReadyResponse.
         * @memberof ttz
         * @interface ISendUserReadyResponse
         * @property {number|null} [userId] SendUserReadyResponse userId
         * @property {number|null} [state] SendUserReadyResponse state
         * @property {Array.<ttz.IUserReady>|null} [users] SendUserReadyResponse users
         */

        /**
         * Constructs a new SendUserReadyResponse.
         * @memberof ttz
         * @classdesc Represents a SendUserReadyResponse.
         * @implements ISendUserReadyResponse
         * @constructor
         * @param {ttz.ISendUserReadyResponse=} [properties] Properties to set
         */
        function SendUserReadyResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserReadyResponse userId.
         * @member {number} userId
         * @memberof ttz.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.userId = 0;

        /**
         * SendUserReadyResponse state.
         * @member {number} state
         * @memberof ttz.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.state = 0;

        /**
         * SendUserReadyResponse users.
         * @member {Array.<ttz.IUserReady>} users
         * @memberof ttz.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendUserReadyResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {ttz.ISendUserReadyResponse=} [properties] Properties to set
         * @returns {ttz.SendUserReadyResponse} SendUserReadyResponse instance
         */
        SendUserReadyResponse.create = function create(properties) {
            return new SendUserReadyResponse(properties);
        };

        /**
         * Encodes the specified SendUserReadyResponse message. Does not implicitly {@link ttz.SendUserReadyResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {ttz.ISendUserReadyResponse} message SendUserReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReadyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.UserReady.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendUserReadyResponse message, length delimited. Does not implicitly {@link ttz.SendUserReadyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {ttz.ISendUserReadyResponse} message SendUserReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendUserReadyResponse} SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReadyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendUserReadyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.UserReady.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendUserReadyResponse} SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReadyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserReadyResponse message.
         * @function verify
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserReadyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.UserReady.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendUserReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendUserReadyResponse} SendUserReadyResponse
         */
        SendUserReadyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendUserReadyResponse)
                return object;
            var message = new $root.ttz.SendUserReadyResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.SendUserReadyResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.SendUserReadyResponse.users: object expected");
                    message.users[i] = $root.ttz.UserReady.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendUserReadyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendUserReadyResponse
         * @static
         * @param {ttz.SendUserReadyResponse} message SendUserReadyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserReadyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.UserReady.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendUserReadyResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendUserReadyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReadyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReadyResponse;
    })();

    ttz.SendRoundResultResponse = (function() {

        /**
         * Properties of a SendRoundResultResponse.
         * @memberof ttz
         * @interface ISendRoundResultResponse
         * @property {string|null} [tableId] SendRoundResultResponse tableId
         * @property {number|null} [zhuangPos] SendRoundResultResponse zhuangPos
         * @property {number|null} [state] SendRoundResultResponse state
         * @property {string|null} [gameInfo] SendRoundResultResponse gameInfo
         * @property {string|null} [time] SendRoundResultResponse time
         * @property {number|null} [currentRound] SendRoundResultResponse currentRound
         * @property {Array.<number>|null} [cardCount] SendRoundResultResponse cardCount
         * @property {Array.<ttz.IUser>|null} [users] SendRoundResultResponse users
         */

        /**
         * Constructs a new SendRoundResultResponse.
         * @memberof ttz
         * @classdesc Represents a SendRoundResultResponse.
         * @implements ISendRoundResultResponse
         * @constructor
         * @param {ttz.ISendRoundResultResponse=} [properties] Properties to set
         */
        function SendRoundResultResponse(properties) {
            this.cardCount = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendRoundResultResponse tableId.
         * @member {string} tableId
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.tableId = "";

        /**
         * SendRoundResultResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.zhuangPos = 0;

        /**
         * SendRoundResultResponse state.
         * @member {number} state
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.state = 0;

        /**
         * SendRoundResultResponse gameInfo.
         * @member {string} gameInfo
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.gameInfo = "";

        /**
         * SendRoundResultResponse time.
         * @member {string} time
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.time = "";

        /**
         * SendRoundResultResponse currentRound.
         * @member {number} currentRound
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.currentRound = 0;

        /**
         * SendRoundResultResponse cardCount.
         * @member {Array.<number>} cardCount
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.cardCount = $util.emptyArray;

        /**
         * SendRoundResultResponse users.
         * @member {Array.<ttz.IUser>} users
         * @memberof ttz.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendRoundResultResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {ttz.ISendRoundResultResponse=} [properties] Properties to set
         * @returns {ttz.SendRoundResultResponse} SendRoundResultResponse instance
         */
        SendRoundResultResponse.create = function create(properties) {
            return new SendRoundResultResponse(properties);
        };

        /**
         * Encodes the specified SendRoundResultResponse message. Does not implicitly {@link ttz.SendRoundResultResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {ttz.ISendRoundResultResponse} message SendRoundResultResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRoundResultResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.zhuangPos);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameInfo);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.time);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.currentRound);
            if (message.cardCount != null && message.cardCount.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.cardCount.length; ++i)
                    writer.int32(message.cardCount[i]);
                writer.ldelim();
            }
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.User.encode(message.users[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendRoundResultResponse message, length delimited. Does not implicitly {@link ttz.SendRoundResultResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {ttz.ISendRoundResultResponse} message SendRoundResultResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRoundResultResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRoundResultResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendRoundResultResponse} SendRoundResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRoundResultResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendRoundResultResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.zhuangPos = reader.int32();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.gameInfo = reader.string();
                    break;
                case 5:
                    message.time = reader.string();
                    break;
                case 6:
                    message.currentRound = reader.int32();
                    break;
                case 7:
                    if (!(message.cardCount && message.cardCount.length))
                        message.cardCount = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardCount.push(reader.int32());
                    } else
                        message.cardCount.push(reader.int32());
                    break;
                case 8:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendRoundResultResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendRoundResultResponse} SendRoundResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRoundResultResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendRoundResultResponse message.
         * @function verify
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendRoundResultResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.cardCount != null && message.hasOwnProperty("cardCount")) {
                if (!Array.isArray(message.cardCount))
                    return "cardCount: array expected";
                for (var i = 0; i < message.cardCount.length; ++i)
                    if (!$util.isInteger(message.cardCount[i]))
                        return "cardCount: integer[] expected";
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendRoundResultResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendRoundResultResponse} SendRoundResultResponse
         */
        SendRoundResultResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendRoundResultResponse)
                return object;
            var message = new $root.ttz.SendRoundResultResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.time != null)
                message.time = String(object.time);
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.cardCount) {
                if (!Array.isArray(object.cardCount))
                    throw TypeError(".ttz.SendRoundResultResponse.cardCount: array expected");
                message.cardCount = [];
                for (var i = 0; i < object.cardCount.length; ++i)
                    message.cardCount[i] = object.cardCount[i] | 0;
            }
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.SendRoundResultResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.SendRoundResultResponse.users: object expected");
                    message.users[i] = $root.ttz.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendRoundResultResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendRoundResultResponse
         * @static
         * @param {ttz.SendRoundResultResponse} message SendRoundResultResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendRoundResultResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cardCount = [];
                object.users = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.zhuangPos = 0;
                object.state = 0;
                object.gameInfo = "";
                object.time = "";
                object.currentRound = 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.cardCount && message.cardCount.length) {
                object.cardCount = [];
                for (var j = 0; j < message.cardCount.length; ++j)
                    object.cardCount[j] = message.cardCount[j];
            }
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendRoundResultResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendRoundResultResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRoundResultResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRoundResultResponse;
    })();

    ttz.SendCardsResponse = (function() {

        /**
         * Properties of a SendCardsResponse.
         * @memberof ttz
         * @interface ISendCardsResponse
         * @property {ttz.ITableInfoResponse|null} [table] SendCardsResponse table
         */

        /**
         * Constructs a new SendCardsResponse.
         * @memberof ttz
         * @classdesc Represents a SendCardsResponse.
         * @implements ISendCardsResponse
         * @constructor
         * @param {ttz.ISendCardsResponse=} [properties] Properties to set
         */
        function SendCardsResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendCardsResponse table.
         * @member {ttz.ITableInfoResponse|null|undefined} table
         * @memberof ttz.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.table = null;

        /**
         * Creates a new SendCardsResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {ttz.ISendCardsResponse=} [properties] Properties to set
         * @returns {ttz.SendCardsResponse} SendCardsResponse instance
         */
        SendCardsResponse.create = function create(properties) {
            return new SendCardsResponse(properties);
        };

        /**
         * Encodes the specified SendCardsResponse message. Does not implicitly {@link ttz.SendCardsResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {ttz.ISendCardsResponse} message SendCardsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCardsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.table != null && message.hasOwnProperty("table"))
                $root.ttz.TableInfoResponse.encode(message.table, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendCardsResponse message, length delimited. Does not implicitly {@link ttz.SendCardsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {ttz.ISendCardsResponse} message SendCardsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCardsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendCardsResponse} SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCardsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendCardsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.table = $root.ttz.TableInfoResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendCardsResponse} SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCardsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendCardsResponse message.
         * @function verify
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendCardsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.table != null && message.hasOwnProperty("table")) {
                var error = $root.ttz.TableInfoResponse.verify(message.table);
                if (error)
                    return "table." + error;
            }
            return null;
        };

        /**
         * Creates a SendCardsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendCardsResponse} SendCardsResponse
         */
        SendCardsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendCardsResponse)
                return object;
            var message = new $root.ttz.SendCardsResponse();
            if (object.table != null) {
                if (typeof object.table !== "object")
                    throw TypeError(".ttz.SendCardsResponse.table: object expected");
                message.table = $root.ttz.TableInfoResponse.fromObject(object.table);
            }
            return message;
        };

        /**
         * Creates a plain object from a SendCardsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendCardsResponse
         * @static
         * @param {ttz.SendCardsResponse} message SendCardsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendCardsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.table = null;
            if (message.table != null && message.hasOwnProperty("table"))
                object.table = $root.ttz.TableInfoResponse.toObject(message.table, options);
            return object;
        };

        /**
         * Converts this SendCardsResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendCardsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCardsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCardsResponse;
    })();

    ttz.SendReconnectQuitResponse = (function() {

        /**
         * Properties of a SendReconnectQuitResponse.
         * @memberof ttz
         * @interface ISendReconnectQuitResponse
         * @property {number|null} [userId] SendReconnectQuitResponse userId
         */

        /**
         * Constructs a new SendReconnectQuitResponse.
         * @memberof ttz
         * @classdesc Represents a SendReconnectQuitResponse.
         * @implements ISendReconnectQuitResponse
         * @constructor
         * @param {ttz.ISendReconnectQuitResponse=} [properties] Properties to set
         */
        function SendReconnectQuitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendReconnectQuitResponse userId.
         * @member {number} userId
         * @memberof ttz.SendReconnectQuitResponse
         * @instance
         */
        SendReconnectQuitResponse.prototype.userId = 0;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {ttz.ISendReconnectQuitResponse=} [properties] Properties to set
         * @returns {ttz.SendReconnectQuitResponse} SendReconnectQuitResponse instance
         */
        SendReconnectQuitResponse.create = function create(properties) {
            return new SendReconnectQuitResponse(properties);
        };

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link ttz.SendReconnectQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {ttz.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReconnectQuitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link ttz.SendReconnectQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {ttz.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReconnectQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendReconnectQuitResponse} SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReconnectQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendReconnectQuitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendReconnectQuitResponse} SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReconnectQuitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendReconnectQuitResponse message.
         * @function verify
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendReconnectQuitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendReconnectQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendReconnectQuitResponse} SendReconnectQuitResponse
         */
        SendReconnectQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendReconnectQuitResponse)
                return object;
            var message = new $root.ttz.SendReconnectQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendReconnectQuitResponse
         * @static
         * @param {ttz.SendReconnectQuitResponse} message SendReconnectQuitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendReconnectQuitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendReconnectQuitResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendReconnectQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendReconnectQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendReconnectQuitResponse;
    })();

    ttz.UserReconnectResponse = (function() {

        /**
         * Properties of a UserReconnectResponse.
         * @memberof ttz
         * @interface IUserReconnectResponse
         * @property {string|null} [tableId] UserReconnectResponse tableId
         * @property {string|null} [seq] UserReconnectResponse seq
         * @property {number|null} [gameId] UserReconnectResponse gameId
         * @property {number|null} [zhuangPos] UserReconnectResponse zhuangPos
         * @property {string|null} [gameInfo] UserReconnectResponse gameInfo
         * @property {number|null} [state] UserReconnectResponse state
         * @property {number|null} [currentRound] UserReconnectResponse currentRound
         * @property {number|null} [totalRound] UserReconnectResponse totalRound
         * @property {Array.<number>|null} [cardCount] UserReconnectResponse cardCount
         * @property {Array.<number>|null} [dice] UserReconnectResponse dice
         * @property {number|null} [sendCardPos] UserReconnectResponse sendCardPos
         * @property {Array.<ttz.IUser>|null} [users] UserReconnectResponse users
         */

        /**
         * Constructs a new UserReconnectResponse.
         * @memberof ttz
         * @classdesc Represents a UserReconnectResponse.
         * @implements IUserReconnectResponse
         * @constructor
         * @param {ttz.IUserReconnectResponse=} [properties] Properties to set
         */
        function UserReconnectResponse(properties) {
            this.cardCount = [];
            this.dice = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReconnectResponse tableId.
         * @member {string} tableId
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.tableId = "";

        /**
         * UserReconnectResponse seq.
         * @member {string} seq
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.seq = "";

        /**
         * UserReconnectResponse gameId.
         * @member {number} gameId
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameId = 0;

        /**
         * UserReconnectResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.zhuangPos = 0;

        /**
         * UserReconnectResponse gameInfo.
         * @member {string} gameInfo
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameInfo = "";

        /**
         * UserReconnectResponse state.
         * @member {number} state
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.state = 0;

        /**
         * UserReconnectResponse currentRound.
         * @member {number} currentRound
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.currentRound = 0;

        /**
         * UserReconnectResponse totalRound.
         * @member {number} totalRound
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.totalRound = 0;

        /**
         * UserReconnectResponse cardCount.
         * @member {Array.<number>} cardCount
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.cardCount = $util.emptyArray;

        /**
         * UserReconnectResponse dice.
         * @member {Array.<number>} dice
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.dice = $util.emptyArray;

        /**
         * UserReconnectResponse sendCardPos.
         * @member {number} sendCardPos
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.sendCardPos = 0;

        /**
         * UserReconnectResponse users.
         * @member {Array.<ttz.IUser>} users
         * @memberof ttz.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {ttz.IUserReconnectResponse=} [properties] Properties to set
         * @returns {ttz.UserReconnectResponse} UserReconnectResponse instance
         */
        UserReconnectResponse.create = function create(properties) {
            return new UserReconnectResponse(properties);
        };

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link ttz.UserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {ttz.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.seq);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameId);
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.zhuangPos);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.gameInfo);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.state);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.currentRound);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.totalRound);
            if (message.cardCount != null && message.cardCount.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (var i = 0; i < message.cardCount.length; ++i)
                    writer.int32(message.cardCount[i]);
                writer.ldelim();
            }
            if (message.dice != null && message.dice.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (var i = 0; i < message.dice.length; ++i)
                    writer.int32(message.dice[i]);
                writer.ldelim();
            }
            if (message.sendCardPos != null && message.hasOwnProperty("sendCardPos"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.sendCardPos);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.User.encode(message.users[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link ttz.UserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {ttz.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.UserReconnectResponse} UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.UserReconnectResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.seq = reader.string();
                    break;
                case 3:
                    message.gameId = reader.int32();
                    break;
                case 4:
                    message.zhuangPos = reader.int32();
                    break;
                case 5:
                    message.gameInfo = reader.string();
                    break;
                case 6:
                    message.state = reader.int32();
                    break;
                case 7:
                    message.currentRound = reader.int32();
                    break;
                case 8:
                    message.totalRound = reader.int32();
                    break;
                case 9:
                    if (!(message.cardCount && message.cardCount.length))
                        message.cardCount = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardCount.push(reader.int32());
                    } else
                        message.cardCount.push(reader.int32());
                    break;
                case 10:
                    if (!(message.dice && message.dice.length))
                        message.dice = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dice.push(reader.int32());
                    } else
                        message.dice.push(reader.int32());
                    break;
                case 11:
                    message.sendCardPos = reader.int32();
                    break;
                case 12:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.UserReconnectResponse} UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReconnectResponse message.
         * @function verify
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReconnectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.cardCount != null && message.hasOwnProperty("cardCount")) {
                if (!Array.isArray(message.cardCount))
                    return "cardCount: array expected";
                for (var i = 0; i < message.cardCount.length; ++i)
                    if (!$util.isInteger(message.cardCount[i]))
                        return "cardCount: integer[] expected";
            }
            if (message.dice != null && message.hasOwnProperty("dice")) {
                if (!Array.isArray(message.dice))
                    return "dice: array expected";
                for (var i = 0; i < message.dice.length; ++i)
                    if (!$util.isInteger(message.dice[i]))
                        return "dice: integer[] expected";
            }
            if (message.sendCardPos != null && message.hasOwnProperty("sendCardPos"))
                if (!$util.isInteger(message.sendCardPos))
                    return "sendCardPos: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.UserReconnectResponse} UserReconnectResponse
         */
        UserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.UserReconnectResponse)
                return object;
            var message = new $root.ttz.UserReconnectResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.seq != null)
                message.seq = String(object.seq);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.state != null)
                message.state = object.state | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.cardCount) {
                if (!Array.isArray(object.cardCount))
                    throw TypeError(".ttz.UserReconnectResponse.cardCount: array expected");
                message.cardCount = [];
                for (var i = 0; i < object.cardCount.length; ++i)
                    message.cardCount[i] = object.cardCount[i] | 0;
            }
            if (object.dice) {
                if (!Array.isArray(object.dice))
                    throw TypeError(".ttz.UserReconnectResponse.dice: array expected");
                message.dice = [];
                for (var i = 0; i < object.dice.length; ++i)
                    message.dice[i] = object.dice[i] | 0;
            }
            if (object.sendCardPos != null)
                message.sendCardPos = object.sendCardPos | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.UserReconnectResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.UserReconnectResponse.users: object expected");
                    message.users[i] = $root.ttz.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.UserReconnectResponse
         * @static
         * @param {ttz.UserReconnectResponse} message UserReconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cardCount = [];
                object.dice = [];
                object.users = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.gameId = 0;
                object.zhuangPos = 0;
                object.gameInfo = "";
                object.state = 0;
                object.currentRound = 0;
                object.totalRound = 0;
                object.sendCardPos = 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.cardCount && message.cardCount.length) {
                object.cardCount = [];
                for (var j = 0; j < message.cardCount.length; ++j)
                    object.cardCount[j] = message.cardCount[j];
            }
            if (message.dice && message.dice.length) {
                object.dice = [];
                for (var j = 0; j < message.dice.length; ++j)
                    object.dice[j] = message.dice[j];
            }
            if (message.sendCardPos != null && message.hasOwnProperty("sendCardPos"))
                object.sendCardPos = message.sendCardPos;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this UserReconnectResponse to JSON.
         * @function toJSON
         * @memberof ttz.UserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectResponse;
    })();

    ttz.SendUserReconnectResponse = (function() {

        /**
         * Properties of a SendUserReconnectResponse.
         * @memberof ttz
         * @interface ISendUserReconnectResponse
         * @property {number|null} [userId] SendUserReconnectResponse userId
         * @property {number|null} [onLine] SendUserReconnectResponse onLine
         */

        /**
         * Constructs a new SendUserReconnectResponse.
         * @memberof ttz
         * @classdesc Represents a SendUserReconnectResponse.
         * @implements ISendUserReconnectResponse
         * @constructor
         * @param {ttz.ISendUserReconnectResponse=} [properties] Properties to set
         */
        function SendUserReconnectResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserReconnectResponse userId.
         * @member {number} userId
         * @memberof ttz.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.userId = 0;

        /**
         * SendUserReconnectResponse onLine.
         * @member {number} onLine
         * @memberof ttz.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.onLine = 0;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {ttz.ISendUserReconnectResponse=} [properties] Properties to set
         * @returns {ttz.SendUserReconnectResponse} SendUserReconnectResponse instance
         */
        SendUserReconnectResponse.create = function create(properties) {
            return new SendUserReconnectResponse(properties);
        };

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link ttz.SendUserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {ttz.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReconnectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onLine);
            return writer;
        };

        /**
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link ttz.SendUserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {ttz.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendUserReconnectResponse} SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendUserReconnectResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.onLine = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendUserReconnectResponse} SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReconnectResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserReconnectResponse message.
         * @function verify
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserReconnectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                if (!$util.isInteger(message.onLine))
                    return "onLine: integer expected";
            return null;
        };

        /**
         * Creates a SendUserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendUserReconnectResponse} SendUserReconnectResponse
         */
        SendUserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendUserReconnectResponse)
                return object;
            var message = new $root.ttz.SendUserReconnectResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.onLine != null)
                message.onLine = object.onLine | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendUserReconnectResponse
         * @static
         * @param {ttz.SendUserReconnectResponse} message SendUserReconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserReconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.onLine = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                object.onLine = message.onLine;
            return object;
        };

        /**
         * Converts this SendUserReconnectResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendUserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReconnectResponse;
    })();

    ttz.SendUserQuitResponse = (function() {

        /**
         * Properties of a SendUserQuitResponse.
         * @memberof ttz
         * @interface ISendUserQuitResponse
         * @property {number|null} [userId] SendUserQuitResponse userId
         * @property {boolean|null} [isOwnerQuit] SendUserQuitResponse isOwnerQuit
         * @property {string|null} [nickname] SendUserQuitResponse nickname
         * @property {number|null} [position] SendUserQuitResponse position
         * @property {string|null} [message] SendUserQuitResponse message
         * @property {string|null} [tableId] SendUserQuitResponse tableId
         */

        /**
         * Constructs a new SendUserQuitResponse.
         * @memberof ttz
         * @classdesc Represents a SendUserQuitResponse.
         * @implements ISendUserQuitResponse
         * @constructor
         * @param {ttz.ISendUserQuitResponse=} [properties] Properties to set
         */
        function SendUserQuitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserQuitResponse userId.
         * @member {number} userId
         * @memberof ttz.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.userId = 0;

        /**
         * SendUserQuitResponse isOwnerQuit.
         * @member {boolean} isOwnerQuit
         * @memberof ttz.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.isOwnerQuit = false;

        /**
         * SendUserQuitResponse nickname.
         * @member {string} nickname
         * @memberof ttz.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.nickname = "";

        /**
         * SendUserQuitResponse position.
         * @member {number} position
         * @memberof ttz.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.position = 0;

        /**
         * SendUserQuitResponse message.
         * @member {string} message
         * @memberof ttz.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.message = "";

        /**
         * SendUserQuitResponse tableId.
         * @member {string} tableId
         * @memberof ttz.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.tableId = "";

        /**
         * Creates a new SendUserQuitResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {ttz.ISendUserQuitResponse=} [properties] Properties to set
         * @returns {ttz.SendUserQuitResponse} SendUserQuitResponse instance
         */
        SendUserQuitResponse.create = function create(properties) {
            return new SendUserQuitResponse(properties);
        };

        /**
         * Encodes the specified SendUserQuitResponse message. Does not implicitly {@link ttz.SendUserQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {ttz.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.isOwnerQuit != null && message.hasOwnProperty("isOwnerQuit"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isOwnerQuit);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.position);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified SendUserQuitResponse message, length delimited. Does not implicitly {@link ttz.SendUserQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {ttz.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendUserQuitResponse} SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendUserQuitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.isOwnerQuit = reader.bool();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.position = reader.int32();
                    break;
                case 5:
                    message.message = reader.string();
                    break;
                case 6:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendUserQuitResponse} SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserQuitResponse message.
         * @function verify
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserQuitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.isOwnerQuit != null && message.hasOwnProperty("isOwnerQuit"))
                if (typeof message.isOwnerQuit !== "boolean")
                    return "isOwnerQuit: boolean expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a SendUserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendUserQuitResponse} SendUserQuitResponse
         */
        SendUserQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendUserQuitResponse)
                return object;
            var message = new $root.ttz.SendUserQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.isOwnerQuit != null)
                message.isOwnerQuit = Boolean(object.isOwnerQuit);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from a SendUserQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendUserQuitResponse
         * @static
         * @param {ttz.SendUserQuitResponse} message SendUserQuitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserQuitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.isOwnerQuit = false;
                object.nickname = "";
                object.position = 0;
                object.message = "";
                object.tableId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.isOwnerQuit != null && message.hasOwnProperty("isOwnerQuit"))
                object.isOwnerQuit = message.isOwnerQuit;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this SendUserQuitResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendUserQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQuitResponse;
    })();

    ttz.SendMessageResponse = (function() {

        /**
         * Properties of a SendMessageResponse.
         * @memberof ttz
         * @interface ISendMessageResponse
         * @property {number|null} [userId] SendMessageResponse userId
         * @property {string|null} [content] SendMessageResponse content
         * @property {number|null} [toUserId] SendMessageResponse toUserId
         */

        /**
         * Constructs a new SendMessageResponse.
         * @memberof ttz
         * @classdesc Represents a SendMessageResponse.
         * @implements ISendMessageResponse
         * @constructor
         * @param {ttz.ISendMessageResponse=} [properties] Properties to set
         */
        function SendMessageResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessageResponse userId.
         * @member {number} userId
         * @memberof ttz.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.userId = 0;

        /**
         * SendMessageResponse content.
         * @member {string} content
         * @memberof ttz.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.content = "";

        /**
         * SendMessageResponse toUserId.
         * @member {number} toUserId
         * @memberof ttz.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.toUserId = 0;

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {ttz.ISendMessageResponse=} [properties] Properties to set
         * @returns {ttz.SendMessageResponse} SendMessageResponse instance
         */
        SendMessageResponse.create = function create(properties) {
            return new SendMessageResponse(properties);
        };

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link ttz.SendMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {ttz.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toUserId);
            return writer;
        };

        /**
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link ttz.SendMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {ttz.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendMessageResponse} SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendMessageResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.toUserId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendMessageResponse} SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessageResponse message.
         * @function verify
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessageResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                if (!$util.isInteger(message.toUserId))
                    return "toUserId: integer expected";
            return null;
        };

        /**
         * Creates a SendMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendMessageResponse} SendMessageResponse
         */
        SendMessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendMessageResponse)
                return object;
            var message = new $root.ttz.SendMessageResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.toUserId != null)
                message.toUserId = object.toUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendMessageResponse
         * @static
         * @param {ttz.SendMessageResponse} message SendMessageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessageResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.content = "";
                object.toUserId = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                object.toUserId = message.toUserId;
            return object;
        };

        /**
         * Converts this SendMessageResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMessageResponse;
    })();

    ttz.SendCoinRefreshResponse = (function() {

        /**
         * Properties of a SendCoinRefreshResponse.
         * @memberof ttz
         * @interface ISendCoinRefreshResponse
         * @property {number|null} [userId] SendCoinRefreshResponse userId
         * @property {number|null} [coin] SendCoinRefreshResponse coin
         * @property {boolean|null} [isInTable] SendCoinRefreshResponse isInTable
         * @property {boolean|null} [type] SendCoinRefreshResponse type
         * @property {number|null} [addCoin] SendCoinRefreshResponse addCoin
         */

        /**
         * Constructs a new SendCoinRefreshResponse.
         * @memberof ttz
         * @classdesc Represents a SendCoinRefreshResponse.
         * @implements ISendCoinRefreshResponse
         * @constructor
         * @param {ttz.ISendCoinRefreshResponse=} [properties] Properties to set
         */
        function SendCoinRefreshResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendCoinRefreshResponse userId.
         * @member {number} userId
         * @memberof ttz.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.userId = 0;

        /**
         * SendCoinRefreshResponse coin.
         * @member {number} coin
         * @memberof ttz.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.coin = 0;

        /**
         * SendCoinRefreshResponse isInTable.
         * @member {boolean} isInTable
         * @memberof ttz.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.isInTable = false;

        /**
         * SendCoinRefreshResponse type.
         * @member {boolean} type
         * @memberof ttz.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.type = false;

        /**
         * SendCoinRefreshResponse addCoin.
         * @member {number} addCoin
         * @memberof ttz.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.addCoin = 0;

        /**
         * Creates a new SendCoinRefreshResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {ttz.ISendCoinRefreshResponse=} [properties] Properties to set
         * @returns {ttz.SendCoinRefreshResponse} SendCoinRefreshResponse instance
         */
        SendCoinRefreshResponse.create = function create(properties) {
            return new SendCoinRefreshResponse(properties);
        };

        /**
         * Encodes the specified SendCoinRefreshResponse message. Does not implicitly {@link ttz.SendCoinRefreshResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {ttz.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinRefreshResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.coin);
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isInTable);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.type);
            if (message.addCoin != null && message.hasOwnProperty("addCoin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.addCoin);
            return writer;
        };

        /**
         * Encodes the specified SendCoinRefreshResponse message, length delimited. Does not implicitly {@link ttz.SendCoinRefreshResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {ttz.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinRefreshResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendCoinRefreshResponse} SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinRefreshResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendCoinRefreshResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.coin = reader.double();
                    break;
                case 3:
                    message.isInTable = reader.bool();
                    break;
                case 4:
                    message.type = reader.bool();
                    break;
                case 5:
                    message.addCoin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendCoinRefreshResponse} SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinRefreshResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendCoinRefreshResponse message.
         * @function verify
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendCoinRefreshResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                if (typeof message.isInTable !== "boolean")
                    return "isInTable: boolean expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (typeof message.type !== "boolean")
                    return "type: boolean expected";
            if (message.addCoin != null && message.hasOwnProperty("addCoin"))
                if (!$util.isInteger(message.addCoin))
                    return "addCoin: integer expected";
            return null;
        };

        /**
         * Creates a SendCoinRefreshResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendCoinRefreshResponse} SendCoinRefreshResponse
         */
        SendCoinRefreshResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendCoinRefreshResponse)
                return object;
            var message = new $root.ttz.SendCoinRefreshResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.coin != null)
                message.coin = Number(object.coin);
            if (object.isInTable != null)
                message.isInTable = Boolean(object.isInTable);
            if (object.type != null)
                message.type = Boolean(object.type);
            if (object.addCoin != null)
                message.addCoin = object.addCoin | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendCoinRefreshResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendCoinRefreshResponse
         * @static
         * @param {ttz.SendCoinRefreshResponse} message SendCoinRefreshResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendCoinRefreshResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.coin = 0;
                object.isInTable = false;
                object.type = false;
                object.addCoin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                object.isInTable = message.isInTable;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.addCoin != null && message.hasOwnProperty("addCoin"))
                object.addCoin = message.addCoin;
            return object;
        };

        /**
         * Converts this SendCoinRefreshResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendCoinRefreshResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCoinRefreshResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCoinRefreshResponse;
    })();

    ttz.SendUserOnBackResponse = (function() {

        /**
         * Properties of a SendUserOnBackResponse.
         * @memberof ttz
         * @interface ISendUserOnBackResponse
         * @property {number|null} [userId] SendUserOnBackResponse userId
         * @property {number|null} [leaveState] SendUserOnBackResponse leaveState
         */

        /**
         * Constructs a new SendUserOnBackResponse.
         * @memberof ttz
         * @classdesc Represents a SendUserOnBackResponse.
         * @implements ISendUserOnBackResponse
         * @constructor
         * @param {ttz.ISendUserOnBackResponse=} [properties] Properties to set
         */
        function SendUserOnBackResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserOnBackResponse userId.
         * @member {number} userId
         * @memberof ttz.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.userId = 0;

        /**
         * SendUserOnBackResponse leaveState.
         * @member {number} leaveState
         * @memberof ttz.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.leaveState = 0;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {ttz.ISendUserOnBackResponse=} [properties] Properties to set
         * @returns {ttz.SendUserOnBackResponse} SendUserOnBackResponse instance
         */
        SendUserOnBackResponse.create = function create(properties) {
            return new SendUserOnBackResponse(properties);
        };

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link ttz.SendUserOnBackResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {ttz.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.leaveState);
            return writer;
        };

        /**
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link ttz.SendUserOnBackResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {ttz.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendUserOnBackResponse} SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserOnBackResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendUserOnBackResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.leaveState = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendUserOnBackResponse} SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserOnBackResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserOnBackResponse message.
         * @function verify
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserOnBackResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                if (!$util.isInteger(message.leaveState))
                    return "leaveState: integer expected";
            return null;
        };

        /**
         * Creates a SendUserOnBackResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendUserOnBackResponse} SendUserOnBackResponse
         */
        SendUserOnBackResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendUserOnBackResponse)
                return object;
            var message = new $root.ttz.SendUserOnBackResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendUserOnBackResponse
         * @static
         * @param {ttz.SendUserOnBackResponse} message SendUserOnBackResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserOnBackResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.leaveState = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                object.leaveState = message.leaveState;
            return object;
        };

        /**
         * Converts this SendUserOnBackResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendUserOnBackResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserOnBackResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserOnBackResponse;
    })();

    ttz.QiangZhuangResponse = (function() {

        /**
         * Properties of a QiangZhuangResponse.
         * @memberof ttz
         * @interface IQiangZhuangResponse
         * @property {number|null} [userId] QiangZhuangResponse userId
         * @property {number|null} [state] QiangZhuangResponse state
         * @property {Array.<ttz.IUser>|null} [users] QiangZhuangResponse users
         */

        /**
         * Constructs a new QiangZhuangResponse.
         * @memberof ttz
         * @classdesc Represents a QiangZhuangResponse.
         * @implements IQiangZhuangResponse
         * @constructor
         * @param {ttz.IQiangZhuangResponse=} [properties] Properties to set
         */
        function QiangZhuangResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QiangZhuangResponse userId.
         * @member {number} userId
         * @memberof ttz.QiangZhuangResponse
         * @instance
         */
        QiangZhuangResponse.prototype.userId = 0;

        /**
         * QiangZhuangResponse state.
         * @member {number} state
         * @memberof ttz.QiangZhuangResponse
         * @instance
         */
        QiangZhuangResponse.prototype.state = 0;

        /**
         * QiangZhuangResponse users.
         * @member {Array.<ttz.IUser>} users
         * @memberof ttz.QiangZhuangResponse
         * @instance
         */
        QiangZhuangResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new QiangZhuangResponse instance using the specified properties.
         * @function create
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {ttz.IQiangZhuangResponse=} [properties] Properties to set
         * @returns {ttz.QiangZhuangResponse} QiangZhuangResponse instance
         */
        QiangZhuangResponse.create = function create(properties) {
            return new QiangZhuangResponse(properties);
        };

        /**
         * Encodes the specified QiangZhuangResponse message. Does not implicitly {@link ttz.QiangZhuangResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {ttz.IQiangZhuangResponse} message QiangZhuangResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QiangZhuangResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.ttz.User.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QiangZhuangResponse message, length delimited. Does not implicitly {@link ttz.QiangZhuangResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {ttz.IQiangZhuangResponse} message QiangZhuangResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QiangZhuangResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QiangZhuangResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.QiangZhuangResponse} QiangZhuangResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QiangZhuangResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.QiangZhuangResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.ttz.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QiangZhuangResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.QiangZhuangResponse} QiangZhuangResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QiangZhuangResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QiangZhuangResponse message.
         * @function verify
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QiangZhuangResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.ttz.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QiangZhuangResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.QiangZhuangResponse} QiangZhuangResponse
         */
        QiangZhuangResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.QiangZhuangResponse)
                return object;
            var message = new $root.ttz.QiangZhuangResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ttz.QiangZhuangResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ttz.QiangZhuangResponse.users: object expected");
                    message.users[i] = $root.ttz.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QiangZhuangResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.QiangZhuangResponse
         * @static
         * @param {ttz.QiangZhuangResponse} message QiangZhuangResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QiangZhuangResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.ttz.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this QiangZhuangResponse to JSON.
         * @function toJSON
         * @memberof ttz.QiangZhuangResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QiangZhuangResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QiangZhuangResponse;
    })();

    ttz.DelayQuitOfflineResponse = (function() {

        /**
         * Properties of a DelayQuitOfflineResponse.
         * @memberof ttz
         * @interface IDelayQuitOfflineResponse
         * @property {number|null} [userId] DelayQuitOfflineResponse userId
         */

        /**
         * Constructs a new DelayQuitOfflineResponse.
         * @memberof ttz
         * @classdesc Represents a DelayQuitOfflineResponse.
         * @implements IDelayQuitOfflineResponse
         * @constructor
         * @param {ttz.IDelayQuitOfflineResponse=} [properties] Properties to set
         */
        function DelayQuitOfflineResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelayQuitOfflineResponse userId.
         * @member {number} userId
         * @memberof ttz.DelayQuitOfflineResponse
         * @instance
         */
        DelayQuitOfflineResponse.prototype.userId = 0;

        /**
         * Creates a new DelayQuitOfflineResponse instance using the specified properties.
         * @function create
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {ttz.IDelayQuitOfflineResponse=} [properties] Properties to set
         * @returns {ttz.DelayQuitOfflineResponse} DelayQuitOfflineResponse instance
         */
        DelayQuitOfflineResponse.create = function create(properties) {
            return new DelayQuitOfflineResponse(properties);
        };

        /**
         * Encodes the specified DelayQuitOfflineResponse message. Does not implicitly {@link ttz.DelayQuitOfflineResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {ttz.IDelayQuitOfflineResponse} message DelayQuitOfflineResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayQuitOfflineResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified DelayQuitOfflineResponse message, length delimited. Does not implicitly {@link ttz.DelayQuitOfflineResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {ttz.IDelayQuitOfflineResponse} message DelayQuitOfflineResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayQuitOfflineResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayQuitOfflineResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.DelayQuitOfflineResponse} DelayQuitOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayQuitOfflineResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.DelayQuitOfflineResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelayQuitOfflineResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.DelayQuitOfflineResponse} DelayQuitOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayQuitOfflineResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelayQuitOfflineResponse message.
         * @function verify
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelayQuitOfflineResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a DelayQuitOfflineResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.DelayQuitOfflineResponse} DelayQuitOfflineResponse
         */
        DelayQuitOfflineResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.DelayQuitOfflineResponse)
                return object;
            var message = new $root.ttz.DelayQuitOfflineResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a DelayQuitOfflineResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.DelayQuitOfflineResponse
         * @static
         * @param {ttz.DelayQuitOfflineResponse} message DelayQuitOfflineResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelayQuitOfflineResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this DelayQuitOfflineResponse to JSON.
         * @function toJSON
         * @memberof ttz.DelayQuitOfflineResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayQuitOfflineResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayQuitOfflineResponse;
    })();

    ttz.SendDiamondChangeResponse = (function() {

        /**
         * Properties of a SendDiamondChangeResponse.
         * @memberof ttz
         * @interface ISendDiamondChangeResponse
         * @property {number|null} [userId] SendDiamondChangeResponse userId
         * @property {number|null} [diamond] SendDiamondChangeResponse diamond
         */

        /**
         * Constructs a new SendDiamondChangeResponse.
         * @memberof ttz
         * @classdesc Represents a SendDiamondChangeResponse.
         * @implements ISendDiamondChangeResponse
         * @constructor
         * @param {ttz.ISendDiamondChangeResponse=} [properties] Properties to set
         */
        function SendDiamondChangeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDiamondChangeResponse userId.
         * @member {number} userId
         * @memberof ttz.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.userId = 0;

        /**
         * SendDiamondChangeResponse diamond.
         * @member {number} diamond
         * @memberof ttz.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.diamond = 0;

        /**
         * Creates a new SendDiamondChangeResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {ttz.ISendDiamondChangeResponse=} [properties] Properties to set
         * @returns {ttz.SendDiamondChangeResponse} SendDiamondChangeResponse instance
         */
        SendDiamondChangeResponse.create = function create(properties) {
            return new SendDiamondChangeResponse(properties);
        };

        /**
         * Encodes the specified SendDiamondChangeResponse message. Does not implicitly {@link ttz.SendDiamondChangeResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {ttz.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDiamondChangeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.diamond);
            return writer;
        };

        /**
         * Encodes the specified SendDiamondChangeResponse message, length delimited. Does not implicitly {@link ttz.SendDiamondChangeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {ttz.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDiamondChangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendDiamondChangeResponse} SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDiamondChangeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendDiamondChangeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.diamond = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendDiamondChangeResponse} SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDiamondChangeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDiamondChangeResponse message.
         * @function verify
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDiamondChangeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            return null;
        };

        /**
         * Creates a SendDiamondChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendDiamondChangeResponse} SendDiamondChangeResponse
         */
        SendDiamondChangeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendDiamondChangeResponse)
                return object;
            var message = new $root.ttz.SendDiamondChangeResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDiamondChangeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendDiamondChangeResponse
         * @static
         * @param {ttz.SendDiamondChangeResponse} message SendDiamondChangeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDiamondChangeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.diamond = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = message.diamond;
            return object;
        };

        /**
         * Converts this SendDiamondChangeResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendDiamondChangeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDiamondChangeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDiamondChangeResponse;
    })();

    ttz.DelayCheckResponse = (function() {

        /**
         * Properties of a DelayCheckResponse.
         * @memberof ttz
         * @interface IDelayCheckResponse
         * @property {string|null} [content] DelayCheckResponse content
         */

        /**
         * Constructs a new DelayCheckResponse.
         * @memberof ttz
         * @classdesc Represents a DelayCheckResponse.
         * @implements IDelayCheckResponse
         * @constructor
         * @param {ttz.IDelayCheckResponse=} [properties] Properties to set
         */
        function DelayCheckResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelayCheckResponse content.
         * @member {string} content
         * @memberof ttz.DelayCheckResponse
         * @instance
         */
        DelayCheckResponse.prototype.content = "";

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @function create
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {ttz.IDelayCheckResponse=} [properties] Properties to set
         * @returns {ttz.DelayCheckResponse} DelayCheckResponse instance
         */
        DelayCheckResponse.create = function create(properties) {
            return new DelayCheckResponse(properties);
        };

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link ttz.DelayCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {ttz.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link ttz.DelayCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {ttz.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.DelayCheckResponse} DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.DelayCheckResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.DelayCheckResponse} DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelayCheckResponse message.
         * @function verify
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelayCheckResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a DelayCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.DelayCheckResponse} DelayCheckResponse
         */
        DelayCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.DelayCheckResponse)
                return object;
            var message = new $root.ttz.DelayCheckResponse();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.DelayCheckResponse
         * @static
         * @param {ttz.DelayCheckResponse} message DelayCheckResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelayCheckResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this DelayCheckResponse to JSON.
         * @function toJSON
         * @memberof ttz.DelayCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckResponse;
    })();

    ttz.SendNoticeClientDismissResponse = (function() {

        /**
         * Properties of a SendNoticeClientDismissResponse.
         * @memberof ttz
         * @interface ISendNoticeClientDismissResponse
         * @property {number|null} [userId] SendNoticeClientDismissResponse userId
         */

        /**
         * Constructs a new SendNoticeClientDismissResponse.
         * @memberof ttz
         * @classdesc Represents a SendNoticeClientDismissResponse.
         * @implements ISendNoticeClientDismissResponse
         * @constructor
         * @param {ttz.ISendNoticeClientDismissResponse=} [properties] Properties to set
         */
        function SendNoticeClientDismissResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendNoticeClientDismissResponse userId.
         * @member {number} userId
         * @memberof ttz.SendNoticeClientDismissResponse
         * @instance
         */
        SendNoticeClientDismissResponse.prototype.userId = 0;

        /**
         * Creates a new SendNoticeClientDismissResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {ttz.ISendNoticeClientDismissResponse=} [properties] Properties to set
         * @returns {ttz.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse instance
         */
        SendNoticeClientDismissResponse.create = function create(properties) {
            return new SendNoticeClientDismissResponse(properties);
        };

        /**
         * Encodes the specified SendNoticeClientDismissResponse message. Does not implicitly {@link ttz.SendNoticeClientDismissResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {ttz.ISendNoticeClientDismissResponse} message SendNoticeClientDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendNoticeClientDismissResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendNoticeClientDismissResponse message, length delimited. Does not implicitly {@link ttz.SendNoticeClientDismissResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {ttz.ISendNoticeClientDismissResponse} message SendNoticeClientDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendNoticeClientDismissResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendNoticeClientDismissResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendNoticeClientDismissResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendNoticeClientDismissResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendNoticeClientDismissResponse message.
         * @function verify
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendNoticeClientDismissResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendNoticeClientDismissResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         */
        SendNoticeClientDismissResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendNoticeClientDismissResponse)
                return object;
            var message = new $root.ttz.SendNoticeClientDismissResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendNoticeClientDismissResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendNoticeClientDismissResponse
         * @static
         * @param {ttz.SendNoticeClientDismissResponse} message SendNoticeClientDismissResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendNoticeClientDismissResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendNoticeClientDismissResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendNoticeClientDismissResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendNoticeClientDismissResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendNoticeClientDismissResponse;
    })();

    ttz.SendRemainTimeResponse = (function() {

        /**
         * Properties of a SendRemainTimeResponse.
         * @memberof ttz
         * @interface ISendRemainTimeResponse
         * @property {number|null} [time] SendRemainTimeResponse time
         * @property {number|null} [type] SendRemainTimeResponse type
         * @property {number|null} [userId] SendRemainTimeResponse userId
         */

        /**
         * Constructs a new SendRemainTimeResponse.
         * @memberof ttz
         * @classdesc Represents a SendRemainTimeResponse.
         * @implements ISendRemainTimeResponse
         * @constructor
         * @param {ttz.ISendRemainTimeResponse=} [properties] Properties to set
         */
        function SendRemainTimeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendRemainTimeResponse time.
         * @member {number} time
         * @memberof ttz.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.time = 0;

        /**
         * SendRemainTimeResponse type.
         * @member {number} type
         * @memberof ttz.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.type = 0;

        /**
         * SendRemainTimeResponse userId.
         * @member {number} userId
         * @memberof ttz.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.userId = 0;

        /**
         * Creates a new SendRemainTimeResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {ttz.ISendRemainTimeResponse=} [properties] Properties to set
         * @returns {ttz.SendRemainTimeResponse} SendRemainTimeResponse instance
         */
        SendRemainTimeResponse.create = function create(properties) {
            return new SendRemainTimeResponse(properties);
        };

        /**
         * Encodes the specified SendRemainTimeResponse message. Does not implicitly {@link ttz.SendRemainTimeResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {ttz.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRemainTimeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendRemainTimeResponse message, length delimited. Does not implicitly {@link ttz.SendRemainTimeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {ttz.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRemainTimeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendRemainTimeResponse} SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRemainTimeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendRemainTimeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendRemainTimeResponse} SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRemainTimeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendRemainTimeResponse message.
         * @function verify
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendRemainTimeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendRemainTimeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendRemainTimeResponse} SendRemainTimeResponse
         */
        SendRemainTimeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendRemainTimeResponse)
                return object;
            var message = new $root.ttz.SendRemainTimeResponse();
            if (object.time != null)
                message.time = object.time | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendRemainTimeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendRemainTimeResponse
         * @static
         * @param {ttz.SendRemainTimeResponse} message SendRemainTimeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendRemainTimeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.time = 0;
                object.type = 0;
                object.userId = 0;
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendRemainTimeResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendRemainTimeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRemainTimeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRemainTimeResponse;
    })();

    ttz.SendUserQuitByAdminResponse = (function() {

        /**
         * Properties of a SendUserQuitByAdminResponse.
         * @memberof ttz
         * @interface ISendUserQuitByAdminResponse
         * @property {number|null} [userId] SendUserQuitByAdminResponse userId
         */

        /**
         * Constructs a new SendUserQuitByAdminResponse.
         * @memberof ttz
         * @classdesc Represents a SendUserQuitByAdminResponse.
         * @implements ISendUserQuitByAdminResponse
         * @constructor
         * @param {ttz.ISendUserQuitByAdminResponse=} [properties] Properties to set
         */
        function SendUserQuitByAdminResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserQuitByAdminResponse userId.
         * @member {number} userId
         * @memberof ttz.SendUserQuitByAdminResponse
         * @instance
         */
        SendUserQuitByAdminResponse.prototype.userId = 0;

        /**
         * Creates a new SendUserQuitByAdminResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {ttz.ISendUserQuitByAdminResponse=} [properties] Properties to set
         * @returns {ttz.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse instance
         */
        SendUserQuitByAdminResponse.create = function create(properties) {
            return new SendUserQuitByAdminResponse(properties);
        };

        /**
         * Encodes the specified SendUserQuitByAdminResponse message. Does not implicitly {@link ttz.SendUserQuitByAdminResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {ttz.ISendUserQuitByAdminResponse} message SendUserQuitByAdminResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitByAdminResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendUserQuitByAdminResponse message, length delimited. Does not implicitly {@link ttz.SendUserQuitByAdminResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {ttz.ISendUserQuitByAdminResponse} message SendUserQuitByAdminResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitByAdminResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitByAdminResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendUserQuitByAdminResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitByAdminResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserQuitByAdminResponse message.
         * @function verify
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserQuitByAdminResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendUserQuitByAdminResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         */
        SendUserQuitByAdminResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendUserQuitByAdminResponse)
                return object;
            var message = new $root.ttz.SendUserQuitByAdminResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserQuitByAdminResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendUserQuitByAdminResponse
         * @static
         * @param {ttz.SendUserQuitByAdminResponse} message SendUserQuitByAdminResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserQuitByAdminResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendUserQuitByAdminResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendUserQuitByAdminResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQuitByAdminResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQuitByAdminResponse;
    })();

    ttz.SendHeartBeatResponse = (function() {

        /**
         * Properties of a SendHeartBeatResponse.
         * @memberof ttz
         * @interface ISendHeartBeatResponse
         * @property {number|Long|null} [currentTime] SendHeartBeatResponse currentTime
         */

        /**
         * Constructs a new SendHeartBeatResponse.
         * @memberof ttz
         * @classdesc Represents a SendHeartBeatResponse.
         * @implements ISendHeartBeatResponse
         * @constructor
         * @param {ttz.ISendHeartBeatResponse=} [properties] Properties to set
         */
        function SendHeartBeatResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendHeartBeatResponse currentTime.
         * @member {number|Long} currentTime
         * @memberof ttz.SendHeartBeatResponse
         * @instance
         */
        SendHeartBeatResponse.prototype.currentTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {ttz.ISendHeartBeatResponse=} [properties] Properties to set
         * @returns {ttz.SendHeartBeatResponse} SendHeartBeatResponse instance
         */
        SendHeartBeatResponse.create = function create(properties) {
            return new SendHeartBeatResponse(properties);
        };

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link ttz.SendHeartBeatResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {ttz.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHeartBeatResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.currentTime);
            return writer;
        };

        /**
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link ttz.SendHeartBeatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {ttz.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHeartBeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendHeartBeatResponse} SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHeartBeatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendHeartBeatResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currentTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendHeartBeatResponse} SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHeartBeatResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendHeartBeatResponse message.
         * @function verify
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendHeartBeatResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                if (!$util.isInteger(message.currentTime) && !(message.currentTime && $util.isInteger(message.currentTime.low) && $util.isInteger(message.currentTime.high)))
                    return "currentTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a SendHeartBeatResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendHeartBeatResponse} SendHeartBeatResponse
         */
        SendHeartBeatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendHeartBeatResponse)
                return object;
            var message = new $root.ttz.SendHeartBeatResponse();
            if (object.currentTime != null)
                if ($util.Long)
                    (message.currentTime = $util.Long.fromValue(object.currentTime)).unsigned = false;
                else if (typeof object.currentTime === "string")
                    message.currentTime = parseInt(object.currentTime, 10);
                else if (typeof object.currentTime === "number")
                    message.currentTime = object.currentTime;
                else if (typeof object.currentTime === "object")
                    message.currentTime = new $util.LongBits(object.currentTime.low >>> 0, object.currentTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SendHeartBeatResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendHeartBeatResponse
         * @static
         * @param {ttz.SendHeartBeatResponse} message SendHeartBeatResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendHeartBeatResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.currentTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.currentTime = options.longs === String ? "0" : 0;
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                if (typeof message.currentTime === "number")
                    object.currentTime = options.longs === String ? String(message.currentTime) : message.currentTime;
                else
                    object.currentTime = options.longs === String ? $util.Long.prototype.toString.call(message.currentTime) : options.longs === Number ? new $util.LongBits(message.currentTime.low >>> 0, message.currentTime.high >>> 0).toNumber() : message.currentTime;
            return object;
        };

        /**
         * Converts this SendHeartBeatResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendHeartBeatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendHeartBeatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendHeartBeatResponse;
    })();

    ttz.ForcedOfflineResponse = (function() {

        /**
         * Properties of a ForcedOfflineResponse.
         * @memberof ttz
         * @interface IForcedOfflineResponse
         */

        /**
         * Constructs a new ForcedOfflineResponse.
         * @memberof ttz
         * @classdesc Represents a ForcedOfflineResponse.
         * @implements IForcedOfflineResponse
         * @constructor
         * @param {ttz.IForcedOfflineResponse=} [properties] Properties to set
         */
        function ForcedOfflineResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ForcedOfflineResponse instance using the specified properties.
         * @function create
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {ttz.IForcedOfflineResponse=} [properties] Properties to set
         * @returns {ttz.ForcedOfflineResponse} ForcedOfflineResponse instance
         */
        ForcedOfflineResponse.create = function create(properties) {
            return new ForcedOfflineResponse(properties);
        };

        /**
         * Encodes the specified ForcedOfflineResponse message. Does not implicitly {@link ttz.ForcedOfflineResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {ttz.IForcedOfflineResponse} message ForcedOfflineResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForcedOfflineResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ForcedOfflineResponse message, length delimited. Does not implicitly {@link ttz.ForcedOfflineResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {ttz.IForcedOfflineResponse} message ForcedOfflineResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForcedOfflineResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForcedOfflineResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.ForcedOfflineResponse} ForcedOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForcedOfflineResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.ForcedOfflineResponse();
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

        /**
         * Decodes a ForcedOfflineResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.ForcedOfflineResponse} ForcedOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForcedOfflineResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForcedOfflineResponse message.
         * @function verify
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForcedOfflineResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ForcedOfflineResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.ForcedOfflineResponse} ForcedOfflineResponse
         */
        ForcedOfflineResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.ForcedOfflineResponse)
                return object;
            return new $root.ttz.ForcedOfflineResponse();
        };

        /**
         * Creates a plain object from a ForcedOfflineResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.ForcedOfflineResponse
         * @static
         * @param {ttz.ForcedOfflineResponse} message ForcedOfflineResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForcedOfflineResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ForcedOfflineResponse to JSON.
         * @function toJSON
         * @memberof ttz.ForcedOfflineResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForcedOfflineResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ForcedOfflineResponse;
    })();

    ttz.SendUserCardResponse = (function() {

        /**
         * Properties of a SendUserCardResponse.
         * @memberof ttz
         * @interface ISendUserCardResponse
         * @property {Array.<number>|null} [disc] SendUserCardResponse disc
         */

        /**
         * Constructs a new SendUserCardResponse.
         * @memberof ttz
         * @classdesc Represents a SendUserCardResponse.
         * @implements ISendUserCardResponse
         * @constructor
         * @param {ttz.ISendUserCardResponse=} [properties] Properties to set
         */
        function SendUserCardResponse(properties) {
            this.disc = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserCardResponse disc.
         * @member {Array.<number>} disc
         * @memberof ttz.SendUserCardResponse
         * @instance
         */
        SendUserCardResponse.prototype.disc = $util.emptyArray;

        /**
         * Creates a new SendUserCardResponse instance using the specified properties.
         * @function create
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {ttz.ISendUserCardResponse=} [properties] Properties to set
         * @returns {ttz.SendUserCardResponse} SendUserCardResponse instance
         */
        SendUserCardResponse.create = function create(properties) {
            return new SendUserCardResponse(properties);
        };

        /**
         * Encodes the specified SendUserCardResponse message. Does not implicitly {@link ttz.SendUserCardResponse.verify|verify} messages.
         * @function encode
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {ttz.ISendUserCardResponse} message SendUserCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.disc != null && message.disc.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.disc.length; ++i)
                    writer.int32(message.disc[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SendUserCardResponse message, length delimited. Does not implicitly {@link ttz.SendUserCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {ttz.ISendUserCardResponse} message SendUserCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.SendUserCardResponse} SendUserCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.SendUserCardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.disc && message.disc.length))
                        message.disc = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.disc.push(reader.int32());
                    } else
                        message.disc.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserCardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.SendUserCardResponse} SendUserCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserCardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserCardResponse message.
         * @function verify
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserCardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.disc != null && message.hasOwnProperty("disc")) {
                if (!Array.isArray(message.disc))
                    return "disc: array expected";
                for (var i = 0; i < message.disc.length; ++i)
                    if (!$util.isInteger(message.disc[i]))
                        return "disc: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a SendUserCardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.SendUserCardResponse} SendUserCardResponse
         */
        SendUserCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.SendUserCardResponse)
                return object;
            var message = new $root.ttz.SendUserCardResponse();
            if (object.disc) {
                if (!Array.isArray(object.disc))
                    throw TypeError(".ttz.SendUserCardResponse.disc: array expected");
                message.disc = [];
                for (var i = 0; i < object.disc.length; ++i)
                    message.disc[i] = object.disc[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a SendUserCardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.SendUserCardResponse
         * @static
         * @param {ttz.SendUserCardResponse} message SendUserCardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserCardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.disc = [];
            if (message.disc && message.disc.length) {
                object.disc = [];
                for (var j = 0; j < message.disc.length; ++j)
                    object.disc[j] = message.disc[j];
            }
            return object;
        };

        /**
         * Converts this SendUserCardResponse to JSON.
         * @function toJSON
         * @memberof ttz.SendUserCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserCardResponse;
    })();

    ttz.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof ttz
         * @interface IRequest
         * @property {ttz.Request.CMD|null} [cmd] Request cmd
         * @property {ttz.IJoinTableRequest|null} [joinTableRequest] Request joinTableRequest
         * @property {ttz.IUserReadyRequest|null} [userReadyRequest] Request userReadyRequest
         * @property {ttz.IUserReconnectRequest|null} [userReconnectRequest] Request userReconnectRequest
         * @property {ttz.IUserQuitRequest|null} [userQuitRequest] Request userQuitRequest
         * @property {ttz.IMessageRequest|null} [messageRequest] Request messageRequest
         * @property {ttz.IUserOnBackRequest|null} [userOnBackRequest] Request userOnBackRequest
         * @property {ttz.IDelayCheckRequest|null} [delayCheckRequest] Request delayCheckRequest
         * @property {ttz.IKickedOutRequest|null} [kickedOutRequest] Request kickedOutRequest
         * @property {ttz.IQiangZhuangRequest|null} [qiangZhuangRequest] Request qiangZhuangRequest
         * @property {ttz.IBetRequest|null} [betRequest] Request betRequest
         * @property {ttz.INoticePushFrCenterRequest|null} [noticePushFrCenterRequest] Request noticePushFrCenterRequest
         * @property {ttz.IHallRefreshCoinRequest|null} [hallRefreshCoinRequest] Request hallRefreshCoinRequest
         */

        /**
         * Constructs a new Request.
         * @memberof ttz
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {ttz.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {ttz.Request.CMD} cmd
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request joinTableRequest.
         * @member {ttz.IJoinTableRequest|null|undefined} joinTableRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.joinTableRequest = null;

        /**
         * Request userReadyRequest.
         * @member {ttz.IUserReadyRequest|null|undefined} userReadyRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.userReadyRequest = null;

        /**
         * Request userReconnectRequest.
         * @member {ttz.IUserReconnectRequest|null|undefined} userReconnectRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.userReconnectRequest = null;

        /**
         * Request userQuitRequest.
         * @member {ttz.IUserQuitRequest|null|undefined} userQuitRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.userQuitRequest = null;

        /**
         * Request messageRequest.
         * @member {ttz.IMessageRequest|null|undefined} messageRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.messageRequest = null;

        /**
         * Request userOnBackRequest.
         * @member {ttz.IUserOnBackRequest|null|undefined} userOnBackRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.userOnBackRequest = null;

        /**
         * Request delayCheckRequest.
         * @member {ttz.IDelayCheckRequest|null|undefined} delayCheckRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.delayCheckRequest = null;

        /**
         * Request kickedOutRequest.
         * @member {ttz.IKickedOutRequest|null|undefined} kickedOutRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.kickedOutRequest = null;

        /**
         * Request qiangZhuangRequest.
         * @member {ttz.IQiangZhuangRequest|null|undefined} qiangZhuangRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.qiangZhuangRequest = null;

        /**
         * Request betRequest.
         * @member {ttz.IBetRequest|null|undefined} betRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.betRequest = null;

        /**
         * Request noticePushFrCenterRequest.
         * @member {ttz.INoticePushFrCenterRequest|null|undefined} noticePushFrCenterRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.noticePushFrCenterRequest = null;

        /**
         * Request hallRefreshCoinRequest.
         * @member {ttz.IHallRefreshCoinRequest|null|undefined} hallRefreshCoinRequest
         * @memberof ttz.Request
         * @instance
         */
        Request.prototype.hallRefreshCoinRequest = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof ttz.Request
         * @static
         * @param {ttz.IRequest=} [properties] Properties to set
         * @returns {ttz.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link ttz.Request.verify|verify} messages.
         * @function encode
         * @memberof ttz.Request
         * @static
         * @param {ttz.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.joinTableRequest != null && message.hasOwnProperty("joinTableRequest"))
                $root.ttz.JoinTableRequest.encode(message.joinTableRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.userReadyRequest != null && message.hasOwnProperty("userReadyRequest"))
                $root.ttz.UserReadyRequest.encode(message.userReadyRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                $root.ttz.UserReconnectRequest.encode(message.userReconnectRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                $root.ttz.UserQuitRequest.encode(message.userQuitRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                $root.ttz.MessageRequest.encode(message.messageRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                $root.ttz.UserOnBackRequest.encode(message.userOnBackRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                $root.ttz.DelayCheckRequest.encode(message.delayCheckRequest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.kickedOutRequest != null && message.hasOwnProperty("kickedOutRequest"))
                $root.ttz.KickedOutRequest.encode(message.kickedOutRequest, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.qiangZhuangRequest != null && message.hasOwnProperty("qiangZhuangRequest"))
                $root.ttz.QiangZhuangRequest.encode(message.qiangZhuangRequest, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.betRequest != null && message.hasOwnProperty("betRequest"))
                $root.ttz.BetRequest.encode(message.betRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.noticePushFrCenterRequest != null && message.hasOwnProperty("noticePushFrCenterRequest"))
                $root.ttz.NoticePushFrCenterRequest.encode(message.noticePushFrCenterRequest, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.hallRefreshCoinRequest != null && message.hasOwnProperty("hallRefreshCoinRequest"))
                $root.ttz.HallRefreshCoinRequest.encode(message.hallRefreshCoinRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link ttz.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.Request
         * @static
         * @param {ttz.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 2:
                    message.joinTableRequest = $root.ttz.JoinTableRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.userReadyRequest = $root.ttz.UserReadyRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.userReconnectRequest = $root.ttz.UserReconnectRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.userQuitRequest = $root.ttz.UserQuitRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.messageRequest = $root.ttz.MessageRequest.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.userOnBackRequest = $root.ttz.UserOnBackRequest.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.delayCheckRequest = $root.ttz.DelayCheckRequest.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.kickedOutRequest = $root.ttz.KickedOutRequest.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.qiangZhuangRequest = $root.ttz.QiangZhuangRequest.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.betRequest = $root.ttz.BetRequest.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.noticePushFrCenterRequest = $root.ttz.NoticePushFrCenterRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.hallRefreshCoinRequest = $root.ttz.HallRefreshCoinRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof ttz.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                case 100:
                case 2024:
                case 2023:
                case 2012:
                case 2002:
                case 2003:
                case 2006:
                case 2007:
                case 2058:
                case 2059:
                case 2009:
                case 2030:
                case 2035:
                case 2031:
                case 2044:
                case 2045:
                case 2060:
                case 2061:
                case 2062:
                case 2080:
                case 2081:
                case 2071:
                case 20010:
                case 2046:
                case 2015:
                case 3000:
                case 3003:
                case 4001:
                case 21002:
                case 20015:
                case 21003:
                case 10000:
                case 30002:
                    break;
                }
            if (message.joinTableRequest != null && message.hasOwnProperty("joinTableRequest")) {
                var error = $root.ttz.JoinTableRequest.verify(message.joinTableRequest);
                if (error)
                    return "joinTableRequest." + error;
            }
            if (message.userReadyRequest != null && message.hasOwnProperty("userReadyRequest")) {
                var error = $root.ttz.UserReadyRequest.verify(message.userReadyRequest);
                if (error)
                    return "userReadyRequest." + error;
            }
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest")) {
                var error = $root.ttz.UserReconnectRequest.verify(message.userReconnectRequest);
                if (error)
                    return "userReconnectRequest." + error;
            }
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest")) {
                var error = $root.ttz.UserQuitRequest.verify(message.userQuitRequest);
                if (error)
                    return "userQuitRequest." + error;
            }
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest")) {
                var error = $root.ttz.MessageRequest.verify(message.messageRequest);
                if (error)
                    return "messageRequest." + error;
            }
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest")) {
                var error = $root.ttz.UserOnBackRequest.verify(message.userOnBackRequest);
                if (error)
                    return "userOnBackRequest." + error;
            }
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest")) {
                var error = $root.ttz.DelayCheckRequest.verify(message.delayCheckRequest);
                if (error)
                    return "delayCheckRequest." + error;
            }
            if (message.kickedOutRequest != null && message.hasOwnProperty("kickedOutRequest")) {
                var error = $root.ttz.KickedOutRequest.verify(message.kickedOutRequest);
                if (error)
                    return "kickedOutRequest." + error;
            }
            if (message.qiangZhuangRequest != null && message.hasOwnProperty("qiangZhuangRequest")) {
                var error = $root.ttz.QiangZhuangRequest.verify(message.qiangZhuangRequest);
                if (error)
                    return "qiangZhuangRequest." + error;
            }
            if (message.betRequest != null && message.hasOwnProperty("betRequest")) {
                var error = $root.ttz.BetRequest.verify(message.betRequest);
                if (error)
                    return "betRequest." + error;
            }
            if (message.noticePushFrCenterRequest != null && message.hasOwnProperty("noticePushFrCenterRequest")) {
                var error = $root.ttz.NoticePushFrCenterRequest.verify(message.noticePushFrCenterRequest);
                if (error)
                    return "noticePushFrCenterRequest." + error;
            }
            if (message.hallRefreshCoinRequest != null && message.hasOwnProperty("hallRefreshCoinRequest")) {
                var error = $root.ttz.HallRefreshCoinRequest.verify(message.hallRefreshCoinRequest);
                if (error)
                    return "hallRefreshCoinRequest." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.Request)
                return object;
            var message = new $root.ttz.Request();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "HALL_REFRESH_COIN":
            case 100:
                message.cmd = 100;
                break;
            case "QIANG_ZHUANG":
            case 2024:
                message.cmd = 2024;
                break;
            case "SEND_ZHUANG":
            case 2023:
                message.cmd = 2023;
                break;
            case "BET":
            case 2012:
                message.cmd = 2012;
                break;
            case "JOIN_TABLE":
            case 2002:
                message.cmd = 2002;
                break;
            case "SEND_JOIN_TABLE":
            case 2003:
                message.cmd = 2003;
                break;
            case "USER_READY":
            case 2006:
                message.cmd = 2006;
                break;
            case "SEND_USER_READY":
            case 2007:
                message.cmd = 2007;
                break;
            case "SEND_USER_INFO":
            case 2058:
                message.cmd = 2058;
                break;
            case "SEND_USER_CARD":
            case 2059:
                message.cmd = 2059;
                break;
            case "SEND_CARDS":
            case 2009:
                message.cmd = 2009;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "SEND_USER_QUIT":
            case 2045:
                message.cmd = 2045;
                break;
            case "MESSAGE":
            case 2060:
                message.cmd = 2060;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "SEND_COIN_REFRESH":
            case 2062:
                message.cmd = 2062;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_DIAMOND_CHANGE":
            case 2071:
                message.cmd = 2071;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "Get_User_Info":
            case 2046:
                message.cmd = 2046;
                break;
            case "SEND_ROUND_RESULT":
            case 2015:
                message.cmd = 2015;
                break;
            case "FORCE_OFFLINE":
            case 3000:
                message.cmd = 3000;
                break;
            case "DELAYQUIT_OFFLINE_RESP":
            case 3003:
                message.cmd = 3003;
                break;
            case "KICKEDOUT":
            case 4001:
                message.cmd = 4001;
                break;
            case "SEND_NOTICE_CLIENT_DISMISS":
            case 21002:
                message.cmd = 21002;
                break;
            case "SEND_REMAIN_TIME":
            case 20015:
                message.cmd = 20015;
                break;
            case "SEND_USERQUIT_BY_ADMIN":
            case 21003:
                message.cmd = 21003;
                break;
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            case "NOTICE_PUSH_RESP":
            case 30002:
                message.cmd = 30002;
                break;
            }
            if (object.joinTableRequest != null) {
                if (typeof object.joinTableRequest !== "object")
                    throw TypeError(".ttz.Request.joinTableRequest: object expected");
                message.joinTableRequest = $root.ttz.JoinTableRequest.fromObject(object.joinTableRequest);
            }
            if (object.userReadyRequest != null) {
                if (typeof object.userReadyRequest !== "object")
                    throw TypeError(".ttz.Request.userReadyRequest: object expected");
                message.userReadyRequest = $root.ttz.UserReadyRequest.fromObject(object.userReadyRequest);
            }
            if (object.userReconnectRequest != null) {
                if (typeof object.userReconnectRequest !== "object")
                    throw TypeError(".ttz.Request.userReconnectRequest: object expected");
                message.userReconnectRequest = $root.ttz.UserReconnectRequest.fromObject(object.userReconnectRequest);
            }
            if (object.userQuitRequest != null) {
                if (typeof object.userQuitRequest !== "object")
                    throw TypeError(".ttz.Request.userQuitRequest: object expected");
                message.userQuitRequest = $root.ttz.UserQuitRequest.fromObject(object.userQuitRequest);
            }
            if (object.messageRequest != null) {
                if (typeof object.messageRequest !== "object")
                    throw TypeError(".ttz.Request.messageRequest: object expected");
                message.messageRequest = $root.ttz.MessageRequest.fromObject(object.messageRequest);
            }
            if (object.userOnBackRequest != null) {
                if (typeof object.userOnBackRequest !== "object")
                    throw TypeError(".ttz.Request.userOnBackRequest: object expected");
                message.userOnBackRequest = $root.ttz.UserOnBackRequest.fromObject(object.userOnBackRequest);
            }
            if (object.delayCheckRequest != null) {
                if (typeof object.delayCheckRequest !== "object")
                    throw TypeError(".ttz.Request.delayCheckRequest: object expected");
                message.delayCheckRequest = $root.ttz.DelayCheckRequest.fromObject(object.delayCheckRequest);
            }
            if (object.kickedOutRequest != null) {
                if (typeof object.kickedOutRequest !== "object")
                    throw TypeError(".ttz.Request.kickedOutRequest: object expected");
                message.kickedOutRequest = $root.ttz.KickedOutRequest.fromObject(object.kickedOutRequest);
            }
            if (object.qiangZhuangRequest != null) {
                if (typeof object.qiangZhuangRequest !== "object")
                    throw TypeError(".ttz.Request.qiangZhuangRequest: object expected");
                message.qiangZhuangRequest = $root.ttz.QiangZhuangRequest.fromObject(object.qiangZhuangRequest);
            }
            if (object.betRequest != null) {
                if (typeof object.betRequest !== "object")
                    throw TypeError(".ttz.Request.betRequest: object expected");
                message.betRequest = $root.ttz.BetRequest.fromObject(object.betRequest);
            }
            if (object.noticePushFrCenterRequest != null) {
                if (typeof object.noticePushFrCenterRequest !== "object")
                    throw TypeError(".ttz.Request.noticePushFrCenterRequest: object expected");
                message.noticePushFrCenterRequest = $root.ttz.NoticePushFrCenterRequest.fromObject(object.noticePushFrCenterRequest);
            }
            if (object.hallRefreshCoinRequest != null) {
                if (typeof object.hallRefreshCoinRequest !== "object")
                    throw TypeError(".ttz.Request.hallRefreshCoinRequest: object expected");
                message.hallRefreshCoinRequest = $root.ttz.HallRefreshCoinRequest.fromObject(object.hallRefreshCoinRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.Request
         * @static
         * @param {ttz.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.joinTableRequest = null;
                object.userReadyRequest = null;
                object.userReconnectRequest = null;
                object.userQuitRequest = null;
                object.messageRequest = null;
                object.userOnBackRequest = null;
                object.delayCheckRequest = null;
                object.kickedOutRequest = null;
                object.qiangZhuangRequest = null;
                object.betRequest = null;
                object.noticePushFrCenterRequest = null;
                object.hallRefreshCoinRequest = null;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.ttz.Request.CMD[message.cmd] : message.cmd;
            if (message.joinTableRequest != null && message.hasOwnProperty("joinTableRequest"))
                object.joinTableRequest = $root.ttz.JoinTableRequest.toObject(message.joinTableRequest, options);
            if (message.userReadyRequest != null && message.hasOwnProperty("userReadyRequest"))
                object.userReadyRequest = $root.ttz.UserReadyRequest.toObject(message.userReadyRequest, options);
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                object.userReconnectRequest = $root.ttz.UserReconnectRequest.toObject(message.userReconnectRequest, options);
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                object.userQuitRequest = $root.ttz.UserQuitRequest.toObject(message.userQuitRequest, options);
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                object.messageRequest = $root.ttz.MessageRequest.toObject(message.messageRequest, options);
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                object.userOnBackRequest = $root.ttz.UserOnBackRequest.toObject(message.userOnBackRequest, options);
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                object.delayCheckRequest = $root.ttz.DelayCheckRequest.toObject(message.delayCheckRequest, options);
            if (message.kickedOutRequest != null && message.hasOwnProperty("kickedOutRequest"))
                object.kickedOutRequest = $root.ttz.KickedOutRequest.toObject(message.kickedOutRequest, options);
            if (message.qiangZhuangRequest != null && message.hasOwnProperty("qiangZhuangRequest"))
                object.qiangZhuangRequest = $root.ttz.QiangZhuangRequest.toObject(message.qiangZhuangRequest, options);
            if (message.betRequest != null && message.hasOwnProperty("betRequest"))
                object.betRequest = $root.ttz.BetRequest.toObject(message.betRequest, options);
            if (message.noticePushFrCenterRequest != null && message.hasOwnProperty("noticePushFrCenterRequest"))
                object.noticePushFrCenterRequest = $root.ttz.NoticePushFrCenterRequest.toObject(message.noticePushFrCenterRequest, options);
            if (message.hallRefreshCoinRequest != null && message.hasOwnProperty("hallRefreshCoinRequest"))
                object.hallRefreshCoinRequest = $root.ttz.HallRefreshCoinRequest.toObject(message.hallRefreshCoinRequest, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof ttz.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CMD enum.
         * @name ttz.Request.CMD
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} HALL_REFRESH_COIN=100 HALL_REFRESH_COIN value
         * @property {number} QIANG_ZHUANG=2024 QIANG_ZHUANG value
         * @property {number} SEND_ZHUANG=2023 SEND_ZHUANG value
         * @property {number} BET=2012 BET value
         * @property {number} JOIN_TABLE=2002 JOIN_TABLE value
         * @property {number} SEND_JOIN_TABLE=2003 SEND_JOIN_TABLE value
         * @property {number} USER_READY=2006 USER_READY value
         * @property {number} SEND_USER_READY=2007 SEND_USER_READY value
         * @property {number} SEND_USER_INFO=2058 SEND_USER_INFO value
         * @property {number} SEND_USER_CARD=2059 SEND_USER_CARD value
         * @property {number} SEND_CARDS=2009 SEND_CARDS value
         * @property {number} USER_RECONNECT=2030 USER_RECONNECT value
         * @property {number} SEND_RECONNECT_QUIT=2035 SEND_RECONNECT_QUIT value
         * @property {number} SEND_USER_RECONNECT=2031 SEND_USER_RECONNECT value
         * @property {number} USER_QUIT=2044 USER_QUIT value
         * @property {number} SEND_USER_QUIT=2045 SEND_USER_QUIT value
         * @property {number} MESSAGE=2060 MESSAGE value
         * @property {number} SEND_MESSAGE=2061 SEND_MESSAGE value
         * @property {number} SEND_COIN_REFRESH=2062 SEND_COIN_REFRESH value
         * @property {number} USER_ONBACK=2080 USER_ONBACK value
         * @property {number} SEND_USER_ONBACK=2081 SEND_USER_ONBACK value
         * @property {number} SEND_DIAMOND_CHANGE=2071 SEND_DIAMOND_CHANGE value
         * @property {number} DELAY_CHECK=20010 DELAY_CHECK value
         * @property {number} Get_User_Info=2046 Get_User_Info value
         * @property {number} SEND_ROUND_RESULT=2015 SEND_ROUND_RESULT value
         * @property {number} FORCE_OFFLINE=3000 FORCE_OFFLINE value
         * @property {number} DELAYQUIT_OFFLINE_RESP=3003 DELAYQUIT_OFFLINE_RESP value
         * @property {number} KICKEDOUT=4001 KICKEDOUT value
         * @property {number} SEND_NOTICE_CLIENT_DISMISS=21002 SEND_NOTICE_CLIENT_DISMISS value
         * @property {number} SEND_REMAIN_TIME=20015 SEND_REMAIN_TIME value
         * @property {number} SEND_USERQUIT_BY_ADMIN=21003 SEND_USERQUIT_BY_ADMIN value
         * @property {number} SEND_HEART_BEAT=10000 SEND_HEART_BEAT value
         * @property {number} NOTICE_PUSH_RESP=30002 NOTICE_PUSH_RESP value
         */
        Request.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[100] = "HALL_REFRESH_COIN"] = 100;
            values[valuesById[2024] = "QIANG_ZHUANG"] = 2024;
            values[valuesById[2023] = "SEND_ZHUANG"] = 2023;
            values[valuesById[2012] = "BET"] = 2012;
            values[valuesById[2002] = "JOIN_TABLE"] = 2002;
            values[valuesById[2003] = "SEND_JOIN_TABLE"] = 2003;
            values[valuesById[2006] = "USER_READY"] = 2006;
            values[valuesById[2007] = "SEND_USER_READY"] = 2007;
            values[valuesById[2058] = "SEND_USER_INFO"] = 2058;
            values[valuesById[2059] = "SEND_USER_CARD"] = 2059;
            values[valuesById[2009] = "SEND_CARDS"] = 2009;
            values[valuesById[2030] = "USER_RECONNECT"] = 2030;
            values[valuesById[2035] = "SEND_RECONNECT_QUIT"] = 2035;
            values[valuesById[2031] = "SEND_USER_RECONNECT"] = 2031;
            values[valuesById[2044] = "USER_QUIT"] = 2044;
            values[valuesById[2045] = "SEND_USER_QUIT"] = 2045;
            values[valuesById[2060] = "MESSAGE"] = 2060;
            values[valuesById[2061] = "SEND_MESSAGE"] = 2061;
            values[valuesById[2062] = "SEND_COIN_REFRESH"] = 2062;
            values[valuesById[2080] = "USER_ONBACK"] = 2080;
            values[valuesById[2081] = "SEND_USER_ONBACK"] = 2081;
            values[valuesById[2071] = "SEND_DIAMOND_CHANGE"] = 2071;
            values[valuesById[20010] = "DELAY_CHECK"] = 20010;
            values[valuesById[2046] = "Get_User_Info"] = 2046;
            values[valuesById[2015] = "SEND_ROUND_RESULT"] = 2015;
            values[valuesById[3000] = "FORCE_OFFLINE"] = 3000;
            values[valuesById[3003] = "DELAYQUIT_OFFLINE_RESP"] = 3003;
            values[valuesById[4001] = "KICKEDOUT"] = 4001;
            values[valuesById[21002] = "SEND_NOTICE_CLIENT_DISMISS"] = 21002;
            values[valuesById[20015] = "SEND_REMAIN_TIME"] = 20015;
            values[valuesById[21003] = "SEND_USERQUIT_BY_ADMIN"] = 21003;
            values[valuesById[10000] = "SEND_HEART_BEAT"] = 10000;
            values[valuesById[30002] = "NOTICE_PUSH_RESP"] = 30002;
            return values;
        })();

        return Request;
    })();

    ttz.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof ttz
         * @interface IResponse
         * @property {ttz.Response.ErrorCode|null} [error] Response error
         * @property {number|Long|null} [serverTime] Response serverTime
         * @property {ttz.Request.CMD|null} [cmd] Response cmd
         * @property {ttz.IJoinTableResponse|null} [joinTableResponse] Response joinTableResponse
         * @property {ttz.ITableInfoResponse|null} [tableInfoResponse] Response tableInfoResponse
         * @property {ttz.IQiangZhuangResponse|null} [qiangZhuangResponse] Response qiangZhuangResponse
         * @property {ttz.IBetResponse|null} [betResponse] Response betResponse
         * @property {ttz.IUserReconnectResponse|null} [userReconnectResponse] Response userReconnectResponse
         * @property {ttz.IDelayCheckResponse|null} [delayCheckResponse] Response delayCheckResponse
         * @property {ttz.IKickedOutResponse|null} [kickedOutResponse] Response kickedOutResponse
         * @property {ttz.IUserQuitResponse|null} [userQuitResponse] Response userQuitResponse
         * @property {ttz.ISendJoinTableResponse|null} [sendJoinTableResponse] Response sendJoinTableResponse
         * @property {ttz.ISendUserReadyResponse|null} [sendUserReadyResponse] Response sendUserReadyResponse
         * @property {ttz.ISendCardsResponse|null} [sendCardsResponse] Response sendCardsResponse
         * @property {ttz.ISendReconnectQuitResponse|null} [sendReconnectQuitResponse] Response sendReconnectQuitResponse
         * @property {ttz.ISendUserReconnectResponse|null} [sendUserReconnectResponse] Response sendUserReconnectResponse
         * @property {ttz.ISendUserQuitResponse|null} [sendUserQuitResponse] Response sendUserQuitResponse
         * @property {ttz.ISendMessageResponse|null} [sendMessageResponse] Response sendMessageResponse
         * @property {ttz.ISendUserOnBackResponse|null} [sendUserOnBackResponse] Response sendUserOnBackResponse
         * @property {ttz.ISendDiamondChangeResponse|null} [sendDiamondChangeResponse] Response sendDiamondChangeResponse
         * @property {ttz.ISendRemainTimeResponse|null} [sendRemainTimeResponse] Response sendRemainTimeResponse
         * @property {ttz.ISendNoticeClientDismissResponse|null} [sendNoticeClientDismissResponse] Response sendNoticeClientDismissResponse
         * @property {ttz.ISendRoundResultResponse|null} [sendRoundResultResponse] Response sendRoundResultResponse
         * @property {ttz.ISendUserQuitByAdminResponse|null} [sendUserQuitByAdminResponse] Response sendUserQuitByAdminResponse
         * @property {ttz.ISendCoinRefreshResponse|null} [sendCoinRefreshResponse] Response sendCoinRefreshResponse
         * @property {ttz.ISendBetResponse|null} [sendBetResponse] Response sendBetResponse
         * @property {ttz.ISendHeartBeatResponse|null} [sendHeartBeatResponse] Response sendHeartBeatResponse
         * @property {ttz.IDelayQuitOfflineResponse|null} [delayQuitOfflineResponse] Response delayQuitOfflineResponse
         * @property {ttz.ISendUserCardResponse|null} [sendUserCardResponse] Response sendUserCardResponse
         * @property {ttz.INoticePushFrCenterResponse|null} [noticePushFrCenterResponse] Response noticePushFrCenterResponse
         * @property {ttz.IHallRefreshCoinResponse|null} [hallRefreshCoinResponse] Response hallRefreshCoinResponse
         */

        /**
         * Constructs a new Response.
         * @memberof ttz
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {ttz.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response error.
         * @member {ttz.Response.ErrorCode} error
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.error = 0;

        /**
         * Response serverTime.
         * @member {number|Long} serverTime
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response cmd.
         * @member {ttz.Request.CMD} cmd
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response joinTableResponse.
         * @member {ttz.IJoinTableResponse|null|undefined} joinTableResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.joinTableResponse = null;

        /**
         * Response tableInfoResponse.
         * @member {ttz.ITableInfoResponse|null|undefined} tableInfoResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.tableInfoResponse = null;

        /**
         * Response qiangZhuangResponse.
         * @member {ttz.IQiangZhuangResponse|null|undefined} qiangZhuangResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.qiangZhuangResponse = null;

        /**
         * Response betResponse.
         * @member {ttz.IBetResponse|null|undefined} betResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.betResponse = null;

        /**
         * Response userReconnectResponse.
         * @member {ttz.IUserReconnectResponse|null|undefined} userReconnectResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.userReconnectResponse = null;

        /**
         * Response delayCheckResponse.
         * @member {ttz.IDelayCheckResponse|null|undefined} delayCheckResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.delayCheckResponse = null;

        /**
         * Response kickedOutResponse.
         * @member {ttz.IKickedOutResponse|null|undefined} kickedOutResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.kickedOutResponse = null;

        /**
         * Response userQuitResponse.
         * @member {ttz.IUserQuitResponse|null|undefined} userQuitResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.userQuitResponse = null;

        /**
         * Response sendJoinTableResponse.
         * @member {ttz.ISendJoinTableResponse|null|undefined} sendJoinTableResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendJoinTableResponse = null;

        /**
         * Response sendUserReadyResponse.
         * @member {ttz.ISendUserReadyResponse|null|undefined} sendUserReadyResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendUserReadyResponse = null;

        /**
         * Response sendCardsResponse.
         * @member {ttz.ISendCardsResponse|null|undefined} sendCardsResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendCardsResponse = null;

        /**
         * Response sendReconnectQuitResponse.
         * @member {ttz.ISendReconnectQuitResponse|null|undefined} sendReconnectQuitResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendReconnectQuitResponse = null;

        /**
         * Response sendUserReconnectResponse.
         * @member {ttz.ISendUserReconnectResponse|null|undefined} sendUserReconnectResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendUserReconnectResponse = null;

        /**
         * Response sendUserQuitResponse.
         * @member {ttz.ISendUserQuitResponse|null|undefined} sendUserQuitResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendUserQuitResponse = null;

        /**
         * Response sendMessageResponse.
         * @member {ttz.ISendMessageResponse|null|undefined} sendMessageResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendMessageResponse = null;

        /**
         * Response sendUserOnBackResponse.
         * @member {ttz.ISendUserOnBackResponse|null|undefined} sendUserOnBackResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendUserOnBackResponse = null;

        /**
         * Response sendDiamondChangeResponse.
         * @member {ttz.ISendDiamondChangeResponse|null|undefined} sendDiamondChangeResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendDiamondChangeResponse = null;

        /**
         * Response sendRemainTimeResponse.
         * @member {ttz.ISendRemainTimeResponse|null|undefined} sendRemainTimeResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendRemainTimeResponse = null;

        /**
         * Response sendNoticeClientDismissResponse.
         * @member {ttz.ISendNoticeClientDismissResponse|null|undefined} sendNoticeClientDismissResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendNoticeClientDismissResponse = null;

        /**
         * Response sendRoundResultResponse.
         * @member {ttz.ISendRoundResultResponse|null|undefined} sendRoundResultResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendRoundResultResponse = null;

        /**
         * Response sendUserQuitByAdminResponse.
         * @member {ttz.ISendUserQuitByAdminResponse|null|undefined} sendUserQuitByAdminResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendUserQuitByAdminResponse = null;

        /**
         * Response sendCoinRefreshResponse.
         * @member {ttz.ISendCoinRefreshResponse|null|undefined} sendCoinRefreshResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendCoinRefreshResponse = null;

        /**
         * Response sendBetResponse.
         * @member {ttz.ISendBetResponse|null|undefined} sendBetResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendBetResponse = null;

        /**
         * Response sendHeartBeatResponse.
         * @member {ttz.ISendHeartBeatResponse|null|undefined} sendHeartBeatResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendHeartBeatResponse = null;

        /**
         * Response delayQuitOfflineResponse.
         * @member {ttz.IDelayQuitOfflineResponse|null|undefined} delayQuitOfflineResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.delayQuitOfflineResponse = null;

        /**
         * Response sendUserCardResponse.
         * @member {ttz.ISendUserCardResponse|null|undefined} sendUserCardResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.sendUserCardResponse = null;

        /**
         * Response noticePushFrCenterResponse.
         * @member {ttz.INoticePushFrCenterResponse|null|undefined} noticePushFrCenterResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.noticePushFrCenterResponse = null;

        /**
         * Response hallRefreshCoinResponse.
         * @member {ttz.IHallRefreshCoinResponse|null|undefined} hallRefreshCoinResponse
         * @memberof ttz.Response
         * @instance
         */
        Response.prototype.hallRefreshCoinResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof ttz.Response
         * @static
         * @param {ttz.IResponse=} [properties] Properties to set
         * @returns {ttz.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link ttz.Response.verify|verify} messages.
         * @function encode
         * @memberof ttz.Response
         * @static
         * @param {ttz.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.serverTime);
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cmd);
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse"))
                $root.ttz.JoinTableResponse.encode(message.joinTableResponse, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.tableInfoResponse != null && message.hasOwnProperty("tableInfoResponse"))
                $root.ttz.TableInfoResponse.encode(message.tableInfoResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.qiangZhuangResponse != null && message.hasOwnProperty("qiangZhuangResponse"))
                $root.ttz.QiangZhuangResponse.encode(message.qiangZhuangResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.betResponse != null && message.hasOwnProperty("betResponse"))
                $root.ttz.BetResponse.encode(message.betResponse, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                $root.ttz.UserReconnectResponse.encode(message.userReconnectResponse, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                $root.ttz.DelayCheckResponse.encode(message.delayCheckResponse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.kickedOutResponse != null && message.hasOwnProperty("kickedOutResponse"))
                $root.ttz.KickedOutResponse.encode(message.kickedOutResponse, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.userQuitResponse != null && message.hasOwnProperty("userQuitResponse"))
                $root.ttz.UserQuitResponse.encode(message.userQuitResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.sendJoinTableResponse != null && message.hasOwnProperty("sendJoinTableResponse"))
                $root.ttz.SendJoinTableResponse.encode(message.sendJoinTableResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.sendUserReadyResponse != null && message.hasOwnProperty("sendUserReadyResponse"))
                $root.ttz.SendUserReadyResponse.encode(message.sendUserReadyResponse, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.sendCardsResponse != null && message.hasOwnProperty("sendCardsResponse"))
                $root.ttz.SendCardsResponse.encode(message.sendCardsResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                $root.ttz.SendReconnectQuitResponse.encode(message.sendReconnectQuitResponse, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                $root.ttz.SendUserReconnectResponse.encode(message.sendUserReconnectResponse, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                $root.ttz.SendUserQuitResponse.encode(message.sendUserQuitResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                $root.ttz.SendMessageResponse.encode(message.sendMessageResponse, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                $root.ttz.SendUserOnBackResponse.encode(message.sendUserOnBackResponse, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                $root.ttz.SendDiamondChangeResponse.encode(message.sendDiamondChangeResponse, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                $root.ttz.SendRemainTimeResponse.encode(message.sendRemainTimeResponse, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse"))
                $root.ttz.SendNoticeClientDismissResponse.encode(message.sendNoticeClientDismissResponse, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.sendRoundResultResponse != null && message.hasOwnProperty("sendRoundResultResponse"))
                $root.ttz.SendRoundResultResponse.encode(message.sendRoundResultResponse, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse"))
                $root.ttz.SendUserQuitByAdminResponse.encode(message.sendUserQuitByAdminResponse, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                $root.ttz.SendCoinRefreshResponse.encode(message.sendCoinRefreshResponse, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.sendBetResponse != null && message.hasOwnProperty("sendBetResponse"))
                $root.ttz.SendBetResponse.encode(message.sendBetResponse, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                $root.ttz.SendHeartBeatResponse.encode(message.sendHeartBeatResponse, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.delayQuitOfflineResponse != null && message.hasOwnProperty("delayQuitOfflineResponse"))
                $root.ttz.DelayQuitOfflineResponse.encode(message.delayQuitOfflineResponse, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message.sendUserCardResponse != null && message.hasOwnProperty("sendUserCardResponse"))
                $root.ttz.SendUserCardResponse.encode(message.sendUserCardResponse, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.noticePushFrCenterResponse != null && message.hasOwnProperty("noticePushFrCenterResponse"))
                $root.ttz.NoticePushFrCenterResponse.encode(message.noticePushFrCenterResponse, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.hallRefreshCoinResponse != null && message.hasOwnProperty("hallRefreshCoinResponse"))
                $root.ttz.HallRefreshCoinResponse.encode(message.hallRefreshCoinResponse, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link ttz.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ttz.Response
         * @static
         * @param {ttz.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof ttz.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ttz.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ttz.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.serverTime = reader.int64();
                    break;
                case 3:
                    message.cmd = reader.int32();
                    break;
                case 4:
                    message.joinTableResponse = $root.ttz.JoinTableResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.tableInfoResponse = $root.ttz.TableInfoResponse.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.qiangZhuangResponse = $root.ttz.QiangZhuangResponse.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.betResponse = $root.ttz.BetResponse.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.userReconnectResponse = $root.ttz.UserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.delayCheckResponse = $root.ttz.DelayCheckResponse.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.kickedOutResponse = $root.ttz.KickedOutResponse.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.userQuitResponse = $root.ttz.UserQuitResponse.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.sendJoinTableResponse = $root.ttz.SendJoinTableResponse.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.sendUserReadyResponse = $root.ttz.SendUserReadyResponse.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.sendCardsResponse = $root.ttz.SendCardsResponse.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.sendReconnectQuitResponse = $root.ttz.SendReconnectQuitResponse.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.sendUserReconnectResponse = $root.ttz.SendUserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.sendUserQuitResponse = $root.ttz.SendUserQuitResponse.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.sendMessageResponse = $root.ttz.SendMessageResponse.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.sendUserOnBackResponse = $root.ttz.SendUserOnBackResponse.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.sendDiamondChangeResponse = $root.ttz.SendDiamondChangeResponse.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.sendRemainTimeResponse = $root.ttz.SendRemainTimeResponse.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.sendNoticeClientDismissResponse = $root.ttz.SendNoticeClientDismissResponse.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.sendRoundResultResponse = $root.ttz.SendRoundResultResponse.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.sendUserQuitByAdminResponse = $root.ttz.SendUserQuitByAdminResponse.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.sendCoinRefreshResponse = $root.ttz.SendCoinRefreshResponse.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.sendBetResponse = $root.ttz.SendBetResponse.decode(reader, reader.uint32());
                    break;
                case 28:
                    message.sendHeartBeatResponse = $root.ttz.SendHeartBeatResponse.decode(reader, reader.uint32());
                    break;
                case 29:
                    message.delayQuitOfflineResponse = $root.ttz.DelayQuitOfflineResponse.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.sendUserCardResponse = $root.ttz.SendUserCardResponse.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.noticePushFrCenterResponse = $root.ttz.NoticePushFrCenterResponse.decode(reader, reader.uint32());
                    break;
                case 32:
                    message.hallRefreshCoinResponse = $root.ttz.HallRefreshCoinResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ttz.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ttz.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof ttz.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 400:
                case 3003:
                case 3006:
                case 3008:
                case 3061:
                case 3075:
                case 3077:
                case 3009:
                case 3011:
                case 3010:
                case 3012:
                case 3058:
                case 3059:
                case 3019:
                case 3014:
                case 3043:
                case 3026:
                case 3091:
                case 3007:
                case 3306:
                case 3013:
                case 3025:
                case 3040:
                case 3056:
                case 3201:
                case 3005:
                case 3092:
                case 30001:
                case 30002:
                case 30923:
                    break;
                }
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                case 100:
                case 2024:
                case 2023:
                case 2012:
                case 2002:
                case 2003:
                case 2006:
                case 2007:
                case 2058:
                case 2059:
                case 2009:
                case 2030:
                case 2035:
                case 2031:
                case 2044:
                case 2045:
                case 2060:
                case 2061:
                case 2062:
                case 2080:
                case 2081:
                case 2071:
                case 20010:
                case 2046:
                case 2015:
                case 3000:
                case 3003:
                case 4001:
                case 21002:
                case 20015:
                case 21003:
                case 10000:
                case 30002:
                    break;
                }
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse")) {
                var error = $root.ttz.JoinTableResponse.verify(message.joinTableResponse);
                if (error)
                    return "joinTableResponse." + error;
            }
            if (message.tableInfoResponse != null && message.hasOwnProperty("tableInfoResponse")) {
                var error = $root.ttz.TableInfoResponse.verify(message.tableInfoResponse);
                if (error)
                    return "tableInfoResponse." + error;
            }
            if (message.qiangZhuangResponse != null && message.hasOwnProperty("qiangZhuangResponse")) {
                var error = $root.ttz.QiangZhuangResponse.verify(message.qiangZhuangResponse);
                if (error)
                    return "qiangZhuangResponse." + error;
            }
            if (message.betResponse != null && message.hasOwnProperty("betResponse")) {
                var error = $root.ttz.BetResponse.verify(message.betResponse);
                if (error)
                    return "betResponse." + error;
            }
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse")) {
                var error = $root.ttz.UserReconnectResponse.verify(message.userReconnectResponse);
                if (error)
                    return "userReconnectResponse." + error;
            }
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse")) {
                var error = $root.ttz.DelayCheckResponse.verify(message.delayCheckResponse);
                if (error)
                    return "delayCheckResponse." + error;
            }
            if (message.kickedOutResponse != null && message.hasOwnProperty("kickedOutResponse")) {
                var error = $root.ttz.KickedOutResponse.verify(message.kickedOutResponse);
                if (error)
                    return "kickedOutResponse." + error;
            }
            if (message.userQuitResponse != null && message.hasOwnProperty("userQuitResponse")) {
                var error = $root.ttz.UserQuitResponse.verify(message.userQuitResponse);
                if (error)
                    return "userQuitResponse." + error;
            }
            if (message.sendJoinTableResponse != null && message.hasOwnProperty("sendJoinTableResponse")) {
                var error = $root.ttz.SendJoinTableResponse.verify(message.sendJoinTableResponse);
                if (error)
                    return "sendJoinTableResponse." + error;
            }
            if (message.sendUserReadyResponse != null && message.hasOwnProperty("sendUserReadyResponse")) {
                var error = $root.ttz.SendUserReadyResponse.verify(message.sendUserReadyResponse);
                if (error)
                    return "sendUserReadyResponse." + error;
            }
            if (message.sendCardsResponse != null && message.hasOwnProperty("sendCardsResponse")) {
                var error = $root.ttz.SendCardsResponse.verify(message.sendCardsResponse);
                if (error)
                    return "sendCardsResponse." + error;
            }
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse")) {
                var error = $root.ttz.SendReconnectQuitResponse.verify(message.sendReconnectQuitResponse);
                if (error)
                    return "sendReconnectQuitResponse." + error;
            }
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse")) {
                var error = $root.ttz.SendUserReconnectResponse.verify(message.sendUserReconnectResponse);
                if (error)
                    return "sendUserReconnectResponse." + error;
            }
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse")) {
                var error = $root.ttz.SendUserQuitResponse.verify(message.sendUserQuitResponse);
                if (error)
                    return "sendUserQuitResponse." + error;
            }
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse")) {
                var error = $root.ttz.SendMessageResponse.verify(message.sendMessageResponse);
                if (error)
                    return "sendMessageResponse." + error;
            }
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse")) {
                var error = $root.ttz.SendUserOnBackResponse.verify(message.sendUserOnBackResponse);
                if (error)
                    return "sendUserOnBackResponse." + error;
            }
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse")) {
                var error = $root.ttz.SendDiamondChangeResponse.verify(message.sendDiamondChangeResponse);
                if (error)
                    return "sendDiamondChangeResponse." + error;
            }
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse")) {
                var error = $root.ttz.SendRemainTimeResponse.verify(message.sendRemainTimeResponse);
                if (error)
                    return "sendRemainTimeResponse." + error;
            }
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse")) {
                var error = $root.ttz.SendNoticeClientDismissResponse.verify(message.sendNoticeClientDismissResponse);
                if (error)
                    return "sendNoticeClientDismissResponse." + error;
            }
            if (message.sendRoundResultResponse != null && message.hasOwnProperty("sendRoundResultResponse")) {
                var error = $root.ttz.SendRoundResultResponse.verify(message.sendRoundResultResponse);
                if (error)
                    return "sendRoundResultResponse." + error;
            }
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse")) {
                var error = $root.ttz.SendUserQuitByAdminResponse.verify(message.sendUserQuitByAdminResponse);
                if (error)
                    return "sendUserQuitByAdminResponse." + error;
            }
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse")) {
                var error = $root.ttz.SendCoinRefreshResponse.verify(message.sendCoinRefreshResponse);
                if (error)
                    return "sendCoinRefreshResponse." + error;
            }
            if (message.sendBetResponse != null && message.hasOwnProperty("sendBetResponse")) {
                var error = $root.ttz.SendBetResponse.verify(message.sendBetResponse);
                if (error)
                    return "sendBetResponse." + error;
            }
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse")) {
                var error = $root.ttz.SendHeartBeatResponse.verify(message.sendHeartBeatResponse);
                if (error)
                    return "sendHeartBeatResponse." + error;
            }
            if (message.delayQuitOfflineResponse != null && message.hasOwnProperty("delayQuitOfflineResponse")) {
                var error = $root.ttz.DelayQuitOfflineResponse.verify(message.delayQuitOfflineResponse);
                if (error)
                    return "delayQuitOfflineResponse." + error;
            }
            if (message.sendUserCardResponse != null && message.hasOwnProperty("sendUserCardResponse")) {
                var error = $root.ttz.SendUserCardResponse.verify(message.sendUserCardResponse);
                if (error)
                    return "sendUserCardResponse." + error;
            }
            if (message.noticePushFrCenterResponse != null && message.hasOwnProperty("noticePushFrCenterResponse")) {
                var error = $root.ttz.NoticePushFrCenterResponse.verify(message.noticePushFrCenterResponse);
                if (error)
                    return "noticePushFrCenterResponse." + error;
            }
            if (message.hallRefreshCoinResponse != null && message.hasOwnProperty("hallRefreshCoinResponse")) {
                var error = $root.ttz.HallRefreshCoinResponse.verify(message.hallRefreshCoinResponse);
                if (error)
                    return "hallRefreshCoinResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ttz.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ttz.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.ttz.Response)
                return object;
            var message = new $root.ttz.Response();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "ERROR":
            case 400:
                message.error = 400;
                break;
            case "CREAT_TABLE_ERROR":
            case 3003:
                message.error = 3003;
                break;
            case "ACCOUNT_NOT_ENOUGH":
            case 3006:
                message.error = 3006;
                break;
            case "TABLE_NOT_FIND_ERROR":
            case 3008:
                message.error = 3008;
                break;
            case "GAME_START_ERROR":
            case 3061:
                message.error = 3061;
                break;
            case "QIANG_ZHUANG_ERROR":
            case 3075:
                message.error = 3075;
                break;
            case "USER_BET_ERROR":
            case 3077:
                message.error = 3077;
                break;
            case "TABLE_NO_POSITION":
            case 3009:
                message.error = 3009;
                break;
            case "NOT_IN_TABLE":
            case 3011:
                message.error = 3011;
                break;
            case "USER_READYNUM_ERROR":
            case 3010:
                message.error = 3010;
                break;
            case "USER_READY_ERROR":
            case 3012:
                message.error = 3012;
                break;
            case "DINGQUE_TABLESTATE_ERROR":
            case 3058:
                message.error = 3058;
                break;
            case "DINGQUE_USERSTATE_ERROR":
            case 3059:
                message.error = 3059;
                break;
            case "USER_NOT_HAVE_CARD":
            case 3019:
                message.error = 3019;
                break;
            case "NOT_ALLOW_QUIT":
            case 3014:
                message.error = 3014;
                break;
            case "WAITING_RESPONSE":
            case 3043:
                message.error = 3043;
                break;
            case "RE_JOIN_TABLE_ERROR":
            case 3026:
                message.error = 3026;
                break;
            case "ROOM_LIST_ERROR":
            case 3091:
                message.error = 3091;
                break;
            case "JOIN_TABLE_ERROR":
            case 3007:
                message.error = 3007;
                break;
            case "USER_AUTO_ERROR":
            case 3306:
                message.error = 3306;
                break;
            case "USER_QUIT_ERROR":
            case 3013:
                message.error = 3013;
                break;
            case "RECONNET_ERROR":
            case 3025:
                message.error = 3025;
                break;
            case "SEND_MESSAGE_ERROR":
            case 3040:
                message.error = 3040;
                break;
            case "USER_ONBACK_ERROR":
            case 3056:
                message.error = 3056;
                break;
            case "DELAY_CHECK_ERROR":
            case 3201:
                message.error = 3201;
                break;
            case "USER_NOT_FOUND_ERROR":
            case 3005:
                message.error = 3005;
                break;
            case "CHANNELID_GAMENO_ERROR":
            case 3092:
                message.error = 3092;
                break;
            case "FORCED_OFFLINE":
            case 30001:
                message.error = 30001;
                break;
            case "USER_BAN":
            case 30002:
                message.error = 30002;
                break;
            case "NO_RECHARGE_ERROR":
            case 30923:
                message.error = 30923;
                break;
            }
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "HALL_REFRESH_COIN":
            case 100:
                message.cmd = 100;
                break;
            case "QIANG_ZHUANG":
            case 2024:
                message.cmd = 2024;
                break;
            case "SEND_ZHUANG":
            case 2023:
                message.cmd = 2023;
                break;
            case "BET":
            case 2012:
                message.cmd = 2012;
                break;
            case "JOIN_TABLE":
            case 2002:
                message.cmd = 2002;
                break;
            case "SEND_JOIN_TABLE":
            case 2003:
                message.cmd = 2003;
                break;
            case "USER_READY":
            case 2006:
                message.cmd = 2006;
                break;
            case "SEND_USER_READY":
            case 2007:
                message.cmd = 2007;
                break;
            case "SEND_USER_INFO":
            case 2058:
                message.cmd = 2058;
                break;
            case "SEND_USER_CARD":
            case 2059:
                message.cmd = 2059;
                break;
            case "SEND_CARDS":
            case 2009:
                message.cmd = 2009;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "SEND_USER_QUIT":
            case 2045:
                message.cmd = 2045;
                break;
            case "MESSAGE":
            case 2060:
                message.cmd = 2060;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "SEND_COIN_REFRESH":
            case 2062:
                message.cmd = 2062;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_DIAMOND_CHANGE":
            case 2071:
                message.cmd = 2071;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "Get_User_Info":
            case 2046:
                message.cmd = 2046;
                break;
            case "SEND_ROUND_RESULT":
            case 2015:
                message.cmd = 2015;
                break;
            case "FORCE_OFFLINE":
            case 3000:
                message.cmd = 3000;
                break;
            case "DELAYQUIT_OFFLINE_RESP":
            case 3003:
                message.cmd = 3003;
                break;
            case "KICKEDOUT":
            case 4001:
                message.cmd = 4001;
                break;
            case "SEND_NOTICE_CLIENT_DISMISS":
            case 21002:
                message.cmd = 21002;
                break;
            case "SEND_REMAIN_TIME":
            case 20015:
                message.cmd = 20015;
                break;
            case "SEND_USERQUIT_BY_ADMIN":
            case 21003:
                message.cmd = 21003;
                break;
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            case "NOTICE_PUSH_RESP":
            case 30002:
                message.cmd = 30002;
                break;
            }
            if (object.joinTableResponse != null) {
                if (typeof object.joinTableResponse !== "object")
                    throw TypeError(".ttz.Response.joinTableResponse: object expected");
                message.joinTableResponse = $root.ttz.JoinTableResponse.fromObject(object.joinTableResponse);
            }
            if (object.tableInfoResponse != null) {
                if (typeof object.tableInfoResponse !== "object")
                    throw TypeError(".ttz.Response.tableInfoResponse: object expected");
                message.tableInfoResponse = $root.ttz.TableInfoResponse.fromObject(object.tableInfoResponse);
            }
            if (object.qiangZhuangResponse != null) {
                if (typeof object.qiangZhuangResponse !== "object")
                    throw TypeError(".ttz.Response.qiangZhuangResponse: object expected");
                message.qiangZhuangResponse = $root.ttz.QiangZhuangResponse.fromObject(object.qiangZhuangResponse);
            }
            if (object.betResponse != null) {
                if (typeof object.betResponse !== "object")
                    throw TypeError(".ttz.Response.betResponse: object expected");
                message.betResponse = $root.ttz.BetResponse.fromObject(object.betResponse);
            }
            if (object.userReconnectResponse != null) {
                if (typeof object.userReconnectResponse !== "object")
                    throw TypeError(".ttz.Response.userReconnectResponse: object expected");
                message.userReconnectResponse = $root.ttz.UserReconnectResponse.fromObject(object.userReconnectResponse);
            }
            if (object.delayCheckResponse != null) {
                if (typeof object.delayCheckResponse !== "object")
                    throw TypeError(".ttz.Response.delayCheckResponse: object expected");
                message.delayCheckResponse = $root.ttz.DelayCheckResponse.fromObject(object.delayCheckResponse);
            }
            if (object.kickedOutResponse != null) {
                if (typeof object.kickedOutResponse !== "object")
                    throw TypeError(".ttz.Response.kickedOutResponse: object expected");
                message.kickedOutResponse = $root.ttz.KickedOutResponse.fromObject(object.kickedOutResponse);
            }
            if (object.userQuitResponse != null) {
                if (typeof object.userQuitResponse !== "object")
                    throw TypeError(".ttz.Response.userQuitResponse: object expected");
                message.userQuitResponse = $root.ttz.UserQuitResponse.fromObject(object.userQuitResponse);
            }
            if (object.sendJoinTableResponse != null) {
                if (typeof object.sendJoinTableResponse !== "object")
                    throw TypeError(".ttz.Response.sendJoinTableResponse: object expected");
                message.sendJoinTableResponse = $root.ttz.SendJoinTableResponse.fromObject(object.sendJoinTableResponse);
            }
            if (object.sendUserReadyResponse != null) {
                if (typeof object.sendUserReadyResponse !== "object")
                    throw TypeError(".ttz.Response.sendUserReadyResponse: object expected");
                message.sendUserReadyResponse = $root.ttz.SendUserReadyResponse.fromObject(object.sendUserReadyResponse);
            }
            if (object.sendCardsResponse != null) {
                if (typeof object.sendCardsResponse !== "object")
                    throw TypeError(".ttz.Response.sendCardsResponse: object expected");
                message.sendCardsResponse = $root.ttz.SendCardsResponse.fromObject(object.sendCardsResponse);
            }
            if (object.sendReconnectQuitResponse != null) {
                if (typeof object.sendReconnectQuitResponse !== "object")
                    throw TypeError(".ttz.Response.sendReconnectQuitResponse: object expected");
                message.sendReconnectQuitResponse = $root.ttz.SendReconnectQuitResponse.fromObject(object.sendReconnectQuitResponse);
            }
            if (object.sendUserReconnectResponse != null) {
                if (typeof object.sendUserReconnectResponse !== "object")
                    throw TypeError(".ttz.Response.sendUserReconnectResponse: object expected");
                message.sendUserReconnectResponse = $root.ttz.SendUserReconnectResponse.fromObject(object.sendUserReconnectResponse);
            }
            if (object.sendUserQuitResponse != null) {
                if (typeof object.sendUserQuitResponse !== "object")
                    throw TypeError(".ttz.Response.sendUserQuitResponse: object expected");
                message.sendUserQuitResponse = $root.ttz.SendUserQuitResponse.fromObject(object.sendUserQuitResponse);
            }
            if (object.sendMessageResponse != null) {
                if (typeof object.sendMessageResponse !== "object")
                    throw TypeError(".ttz.Response.sendMessageResponse: object expected");
                message.sendMessageResponse = $root.ttz.SendMessageResponse.fromObject(object.sendMessageResponse);
            }
            if (object.sendUserOnBackResponse != null) {
                if (typeof object.sendUserOnBackResponse !== "object")
                    throw TypeError(".ttz.Response.sendUserOnBackResponse: object expected");
                message.sendUserOnBackResponse = $root.ttz.SendUserOnBackResponse.fromObject(object.sendUserOnBackResponse);
            }
            if (object.sendDiamondChangeResponse != null) {
                if (typeof object.sendDiamondChangeResponse !== "object")
                    throw TypeError(".ttz.Response.sendDiamondChangeResponse: object expected");
                message.sendDiamondChangeResponse = $root.ttz.SendDiamondChangeResponse.fromObject(object.sendDiamondChangeResponse);
            }
            if (object.sendRemainTimeResponse != null) {
                if (typeof object.sendRemainTimeResponse !== "object")
                    throw TypeError(".ttz.Response.sendRemainTimeResponse: object expected");
                message.sendRemainTimeResponse = $root.ttz.SendRemainTimeResponse.fromObject(object.sendRemainTimeResponse);
            }
            if (object.sendNoticeClientDismissResponse != null) {
                if (typeof object.sendNoticeClientDismissResponse !== "object")
                    throw TypeError(".ttz.Response.sendNoticeClientDismissResponse: object expected");
                message.sendNoticeClientDismissResponse = $root.ttz.SendNoticeClientDismissResponse.fromObject(object.sendNoticeClientDismissResponse);
            }
            if (object.sendRoundResultResponse != null) {
                if (typeof object.sendRoundResultResponse !== "object")
                    throw TypeError(".ttz.Response.sendRoundResultResponse: object expected");
                message.sendRoundResultResponse = $root.ttz.SendRoundResultResponse.fromObject(object.sendRoundResultResponse);
            }
            if (object.sendUserQuitByAdminResponse != null) {
                if (typeof object.sendUserQuitByAdminResponse !== "object")
                    throw TypeError(".ttz.Response.sendUserQuitByAdminResponse: object expected");
                message.sendUserQuitByAdminResponse = $root.ttz.SendUserQuitByAdminResponse.fromObject(object.sendUserQuitByAdminResponse);
            }
            if (object.sendCoinRefreshResponse != null) {
                if (typeof object.sendCoinRefreshResponse !== "object")
                    throw TypeError(".ttz.Response.sendCoinRefreshResponse: object expected");
                message.sendCoinRefreshResponse = $root.ttz.SendCoinRefreshResponse.fromObject(object.sendCoinRefreshResponse);
            }
            if (object.sendBetResponse != null) {
                if (typeof object.sendBetResponse !== "object")
                    throw TypeError(".ttz.Response.sendBetResponse: object expected");
                message.sendBetResponse = $root.ttz.SendBetResponse.fromObject(object.sendBetResponse);
            }
            if (object.sendHeartBeatResponse != null) {
                if (typeof object.sendHeartBeatResponse !== "object")
                    throw TypeError(".ttz.Response.sendHeartBeatResponse: object expected");
                message.sendHeartBeatResponse = $root.ttz.SendHeartBeatResponse.fromObject(object.sendHeartBeatResponse);
            }
            if (object.delayQuitOfflineResponse != null) {
                if (typeof object.delayQuitOfflineResponse !== "object")
                    throw TypeError(".ttz.Response.delayQuitOfflineResponse: object expected");
                message.delayQuitOfflineResponse = $root.ttz.DelayQuitOfflineResponse.fromObject(object.delayQuitOfflineResponse);
            }
            if (object.sendUserCardResponse != null) {
                if (typeof object.sendUserCardResponse !== "object")
                    throw TypeError(".ttz.Response.sendUserCardResponse: object expected");
                message.sendUserCardResponse = $root.ttz.SendUserCardResponse.fromObject(object.sendUserCardResponse);
            }
            if (object.noticePushFrCenterResponse != null) {
                if (typeof object.noticePushFrCenterResponse !== "object")
                    throw TypeError(".ttz.Response.noticePushFrCenterResponse: object expected");
                message.noticePushFrCenterResponse = $root.ttz.NoticePushFrCenterResponse.fromObject(object.noticePushFrCenterResponse);
            }
            if (object.hallRefreshCoinResponse != null) {
                if (typeof object.hallRefreshCoinResponse !== "object")
                    throw TypeError(".ttz.Response.hallRefreshCoinResponse: object expected");
                message.hallRefreshCoinResponse = $root.ttz.HallRefreshCoinResponse.fromObject(object.hallRefreshCoinResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ttz.Response
         * @static
         * @param {ttz.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "NO_ERROR" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.joinTableResponse = null;
                object.tableInfoResponse = null;
                object.qiangZhuangResponse = null;
                object.betResponse = null;
                object.userReconnectResponse = null;
                object.delayCheckResponse = null;
                object.kickedOutResponse = null;
                object.userQuitResponse = null;
                object.sendJoinTableResponse = null;
                object.sendUserReadyResponse = null;
                object.sendCardsResponse = null;
                object.sendReconnectQuitResponse = null;
                object.sendUserReconnectResponse = null;
                object.sendUserQuitResponse = null;
                object.sendMessageResponse = null;
                object.sendUserOnBackResponse = null;
                object.sendDiamondChangeResponse = null;
                object.sendRemainTimeResponse = null;
                object.sendNoticeClientDismissResponse = null;
                object.sendRoundResultResponse = null;
                object.sendUserQuitByAdminResponse = null;
                object.sendCoinRefreshResponse = null;
                object.sendBetResponse = null;
                object.sendHeartBeatResponse = null;
                object.delayQuitOfflineResponse = null;
                object.sendUserCardResponse = null;
                object.noticePushFrCenterResponse = null;
                object.hallRefreshCoinResponse = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.ttz.Response.ErrorCode[message.error] : message.error;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.ttz.Request.CMD[message.cmd] : message.cmd;
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse"))
                object.joinTableResponse = $root.ttz.JoinTableResponse.toObject(message.joinTableResponse, options);
            if (message.tableInfoResponse != null && message.hasOwnProperty("tableInfoResponse"))
                object.tableInfoResponse = $root.ttz.TableInfoResponse.toObject(message.tableInfoResponse, options);
            if (message.qiangZhuangResponse != null && message.hasOwnProperty("qiangZhuangResponse"))
                object.qiangZhuangResponse = $root.ttz.QiangZhuangResponse.toObject(message.qiangZhuangResponse, options);
            if (message.betResponse != null && message.hasOwnProperty("betResponse"))
                object.betResponse = $root.ttz.BetResponse.toObject(message.betResponse, options);
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                object.userReconnectResponse = $root.ttz.UserReconnectResponse.toObject(message.userReconnectResponse, options);
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                object.delayCheckResponse = $root.ttz.DelayCheckResponse.toObject(message.delayCheckResponse, options);
            if (message.kickedOutResponse != null && message.hasOwnProperty("kickedOutResponse"))
                object.kickedOutResponse = $root.ttz.KickedOutResponse.toObject(message.kickedOutResponse, options);
            if (message.userQuitResponse != null && message.hasOwnProperty("userQuitResponse"))
                object.userQuitResponse = $root.ttz.UserQuitResponse.toObject(message.userQuitResponse, options);
            if (message.sendJoinTableResponse != null && message.hasOwnProperty("sendJoinTableResponse"))
                object.sendJoinTableResponse = $root.ttz.SendJoinTableResponse.toObject(message.sendJoinTableResponse, options);
            if (message.sendUserReadyResponse != null && message.hasOwnProperty("sendUserReadyResponse"))
                object.sendUserReadyResponse = $root.ttz.SendUserReadyResponse.toObject(message.sendUserReadyResponse, options);
            if (message.sendCardsResponse != null && message.hasOwnProperty("sendCardsResponse"))
                object.sendCardsResponse = $root.ttz.SendCardsResponse.toObject(message.sendCardsResponse, options);
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                object.sendReconnectQuitResponse = $root.ttz.SendReconnectQuitResponse.toObject(message.sendReconnectQuitResponse, options);
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                object.sendUserReconnectResponse = $root.ttz.SendUserReconnectResponse.toObject(message.sendUserReconnectResponse, options);
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                object.sendUserQuitResponse = $root.ttz.SendUserQuitResponse.toObject(message.sendUserQuitResponse, options);
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                object.sendMessageResponse = $root.ttz.SendMessageResponse.toObject(message.sendMessageResponse, options);
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                object.sendUserOnBackResponse = $root.ttz.SendUserOnBackResponse.toObject(message.sendUserOnBackResponse, options);
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                object.sendDiamondChangeResponse = $root.ttz.SendDiamondChangeResponse.toObject(message.sendDiamondChangeResponse, options);
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                object.sendRemainTimeResponse = $root.ttz.SendRemainTimeResponse.toObject(message.sendRemainTimeResponse, options);
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse"))
                object.sendNoticeClientDismissResponse = $root.ttz.SendNoticeClientDismissResponse.toObject(message.sendNoticeClientDismissResponse, options);
            if (message.sendRoundResultResponse != null && message.hasOwnProperty("sendRoundResultResponse"))
                object.sendRoundResultResponse = $root.ttz.SendRoundResultResponse.toObject(message.sendRoundResultResponse, options);
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse"))
                object.sendUserQuitByAdminResponse = $root.ttz.SendUserQuitByAdminResponse.toObject(message.sendUserQuitByAdminResponse, options);
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                object.sendCoinRefreshResponse = $root.ttz.SendCoinRefreshResponse.toObject(message.sendCoinRefreshResponse, options);
            if (message.sendBetResponse != null && message.hasOwnProperty("sendBetResponse"))
                object.sendBetResponse = $root.ttz.SendBetResponse.toObject(message.sendBetResponse, options);
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                object.sendHeartBeatResponse = $root.ttz.SendHeartBeatResponse.toObject(message.sendHeartBeatResponse, options);
            if (message.delayQuitOfflineResponse != null && message.hasOwnProperty("delayQuitOfflineResponse"))
                object.delayQuitOfflineResponse = $root.ttz.DelayQuitOfflineResponse.toObject(message.delayQuitOfflineResponse, options);
            if (message.sendUserCardResponse != null && message.hasOwnProperty("sendUserCardResponse"))
                object.sendUserCardResponse = $root.ttz.SendUserCardResponse.toObject(message.sendUserCardResponse, options);
            if (message.noticePushFrCenterResponse != null && message.hasOwnProperty("noticePushFrCenterResponse"))
                object.noticePushFrCenterResponse = $root.ttz.NoticePushFrCenterResponse.toObject(message.noticePushFrCenterResponse, options);
            if (message.hallRefreshCoinResponse != null && message.hasOwnProperty("hallRefreshCoinResponse"))
                object.hallRefreshCoinResponse = $root.ttz.HallRefreshCoinResponse.toObject(message.hallRefreshCoinResponse, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof ttz.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name ttz.Response.ErrorCode
         * @enum {string}
         * @property {number} NO_ERROR=0 NO_ERROR value
         * @property {number} ERROR=400 ERROR value
         * @property {number} CREAT_TABLE_ERROR=3003 CREAT_TABLE_ERROR value
         * @property {number} ACCOUNT_NOT_ENOUGH=3006 ACCOUNT_NOT_ENOUGH value
         * @property {number} TABLE_NOT_FIND_ERROR=3008 TABLE_NOT_FIND_ERROR value
         * @property {number} GAME_START_ERROR=3061 GAME_START_ERROR value
         * @property {number} QIANG_ZHUANG_ERROR=3075 QIANG_ZHUANG_ERROR value
         * @property {number} USER_BET_ERROR=3077 USER_BET_ERROR value
         * @property {number} TABLE_NO_POSITION=3009 TABLE_NO_POSITION value
         * @property {number} NOT_IN_TABLE=3011 NOT_IN_TABLE value
         * @property {number} USER_READYNUM_ERROR=3010 USER_READYNUM_ERROR value
         * @property {number} USER_READY_ERROR=3012 USER_READY_ERROR value
         * @property {number} DINGQUE_TABLESTATE_ERROR=3058 DINGQUE_TABLESTATE_ERROR value
         * @property {number} DINGQUE_USERSTATE_ERROR=3059 DINGQUE_USERSTATE_ERROR value
         * @property {number} USER_NOT_HAVE_CARD=3019 USER_NOT_HAVE_CARD value
         * @property {number} NOT_ALLOW_QUIT=3014 NOT_ALLOW_QUIT value
         * @property {number} WAITING_RESPONSE=3043 WAITING_RESPONSE value
         * @property {number} RE_JOIN_TABLE_ERROR=3026 RE_JOIN_TABLE_ERROR value
         * @property {number} ROOM_LIST_ERROR=3091 ROOM_LIST_ERROR value
         * @property {number} JOIN_TABLE_ERROR=3007 JOIN_TABLE_ERROR value
         * @property {number} USER_AUTO_ERROR=3306 USER_AUTO_ERROR value
         * @property {number} USER_QUIT_ERROR=3013 USER_QUIT_ERROR value
         * @property {number} RECONNET_ERROR=3025 RECONNET_ERROR value
         * @property {number} SEND_MESSAGE_ERROR=3040 SEND_MESSAGE_ERROR value
         * @property {number} USER_ONBACK_ERROR=3056 USER_ONBACK_ERROR value
         * @property {number} DELAY_CHECK_ERROR=3201 DELAY_CHECK_ERROR value
         * @property {number} USER_NOT_FOUND_ERROR=3005 USER_NOT_FOUND_ERROR value
         * @property {number} CHANNELID_GAMENO_ERROR=3092 CHANNELID_GAMENO_ERROR value
         * @property {number} FORCED_OFFLINE=30001 FORCED_OFFLINE value
         * @property {number} USER_BAN=30002 USER_BAN value
         * @property {number} NO_RECHARGE_ERROR=30923 NO_RECHARGE_ERROR value
         */
        Response.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NO_ERROR"] = 0;
            values[valuesById[400] = "ERROR"] = 400;
            values[valuesById[3003] = "CREAT_TABLE_ERROR"] = 3003;
            values[valuesById[3006] = "ACCOUNT_NOT_ENOUGH"] = 3006;
            values[valuesById[3008] = "TABLE_NOT_FIND_ERROR"] = 3008;
            values[valuesById[3061] = "GAME_START_ERROR"] = 3061;
            values[valuesById[3075] = "QIANG_ZHUANG_ERROR"] = 3075;
            values[valuesById[3077] = "USER_BET_ERROR"] = 3077;
            values[valuesById[3009] = "TABLE_NO_POSITION"] = 3009;
            values[valuesById[3011] = "NOT_IN_TABLE"] = 3011;
            values[valuesById[3010] = "USER_READYNUM_ERROR"] = 3010;
            values[valuesById[3012] = "USER_READY_ERROR"] = 3012;
            values[valuesById[3058] = "DINGQUE_TABLESTATE_ERROR"] = 3058;
            values[valuesById[3059] = "DINGQUE_USERSTATE_ERROR"] = 3059;
            values[valuesById[3019] = "USER_NOT_HAVE_CARD"] = 3019;
            values[valuesById[3014] = "NOT_ALLOW_QUIT"] = 3014;
            values[valuesById[3043] = "WAITING_RESPONSE"] = 3043;
            values[valuesById[3026] = "RE_JOIN_TABLE_ERROR"] = 3026;
            values[valuesById[3091] = "ROOM_LIST_ERROR"] = 3091;
            values[valuesById[3007] = "JOIN_TABLE_ERROR"] = 3007;
            values[valuesById[3306] = "USER_AUTO_ERROR"] = 3306;
            values[valuesById[3013] = "USER_QUIT_ERROR"] = 3013;
            values[valuesById[3025] = "RECONNET_ERROR"] = 3025;
            values[valuesById[3040] = "SEND_MESSAGE_ERROR"] = 3040;
            values[valuesById[3056] = "USER_ONBACK_ERROR"] = 3056;
            values[valuesById[3201] = "DELAY_CHECK_ERROR"] = 3201;
            values[valuesById[3005] = "USER_NOT_FOUND_ERROR"] = 3005;
            values[valuesById[3092] = "CHANNELID_GAMENO_ERROR"] = 3092;
            values[valuesById[30001] = "FORCED_OFFLINE"] = 30001;
            values[valuesById[30002] = "USER_BAN"] = 30002;
            values[valuesById[30923] = "NO_RECHARGE_ERROR"] = 30923;
            return values;
        })();

        return Response;
    })();

    return ttz;
})();

module.exports = $root;
