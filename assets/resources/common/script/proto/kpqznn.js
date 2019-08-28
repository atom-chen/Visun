/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.kpqznn = (function() {

    /**
     * Namespace kpqznn.
     * @exports kpqznn
     * @namespace
     */
    var kpqznn = {};

    kpqznn.OutCard = (function() {

        /**
         * Properties of an OutCard.
         * @memberof kpqznn
         * @interface IOutCard
         * @property {Array.<number>|null} [cardThree] OutCard cardThree
         * @property {Array.<number>|null} [cardTwo] OutCard cardTwo
         * @property {number|null} [type] OutCard type
         */

        /**
         * Constructs a new OutCard.
         * @memberof kpqznn
         * @classdesc Represents an OutCard.
         * @implements IOutCard
         * @constructor
         * @param {kpqznn.IOutCard=} [properties] Properties to set
         */
        function OutCard(properties) {
            this.cardThree = [];
            this.cardTwo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutCard cardThree.
         * @member {Array.<number>} cardThree
         * @memberof kpqznn.OutCard
         * @instance
         */
        OutCard.prototype.cardThree = $util.emptyArray;

        /**
         * OutCard cardTwo.
         * @member {Array.<number>} cardTwo
         * @memberof kpqznn.OutCard
         * @instance
         */
        OutCard.prototype.cardTwo = $util.emptyArray;

        /**
         * OutCard type.
         * @member {number} type
         * @memberof kpqznn.OutCard
         * @instance
         */
        OutCard.prototype.type = 0;

        /**
         * Creates a new OutCard instance using the specified properties.
         * @function create
         * @memberof kpqznn.OutCard
         * @static
         * @param {kpqznn.IOutCard=} [properties] Properties to set
         * @returns {kpqznn.OutCard} OutCard instance
         */
        OutCard.create = function create(properties) {
            return new OutCard(properties);
        };

        /**
         * Encodes the specified OutCard message. Does not implicitly {@link kpqznn.OutCard.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.OutCard
         * @static
         * @param {kpqznn.IOutCard} message OutCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardThree != null && message.cardThree.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cardThree.length; ++i)
                    writer.int32(message.cardThree[i]);
                writer.ldelim();
            }
            if (message.cardTwo != null && message.cardTwo.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.cardTwo.length; ++i)
                    writer.int32(message.cardTwo[i]);
                writer.ldelim();
            }
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified OutCard message, length delimited. Does not implicitly {@link kpqznn.OutCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.OutCard
         * @static
         * @param {kpqznn.IOutCard} message OutCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutCard message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.OutCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.OutCard} OutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.OutCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cardThree && message.cardThree.length))
                        message.cardThree = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardThree.push(reader.int32());
                    } else
                        message.cardThree.push(reader.int32());
                    break;
                case 2:
                    if (!(message.cardTwo && message.cardTwo.length))
                        message.cardTwo = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardTwo.push(reader.int32());
                    } else
                        message.cardTwo.push(reader.int32());
                    break;
                case 3:
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
         * Decodes an OutCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.OutCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.OutCard} OutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutCard message.
         * @function verify
         * @memberof kpqznn.OutCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardThree != null && message.hasOwnProperty("cardThree")) {
                if (!Array.isArray(message.cardThree))
                    return "cardThree: array expected";
                for (var i = 0; i < message.cardThree.length; ++i)
                    if (!$util.isInteger(message.cardThree[i]))
                        return "cardThree: integer[] expected";
            }
            if (message.cardTwo != null && message.hasOwnProperty("cardTwo")) {
                if (!Array.isArray(message.cardTwo))
                    return "cardTwo: array expected";
                for (var i = 0; i < message.cardTwo.length; ++i)
                    if (!$util.isInteger(message.cardTwo[i]))
                        return "cardTwo: integer[] expected";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates an OutCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.OutCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.OutCard} OutCard
         */
        OutCard.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.OutCard)
                return object;
            var message = new $root.kpqznn.OutCard();
            if (object.cardThree) {
                if (!Array.isArray(object.cardThree))
                    throw TypeError(".kpqznn.OutCard.cardThree: array expected");
                message.cardThree = [];
                for (var i = 0; i < object.cardThree.length; ++i)
                    message.cardThree[i] = object.cardThree[i] | 0;
            }
            if (object.cardTwo) {
                if (!Array.isArray(object.cardTwo))
                    throw TypeError(".kpqznn.OutCard.cardTwo: array expected");
                message.cardTwo = [];
                for (var i = 0; i < object.cardTwo.length; ++i)
                    message.cardTwo[i] = object.cardTwo[i] | 0;
            }
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from an OutCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.OutCard
         * @static
         * @param {kpqznn.OutCard} message OutCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cardThree = [];
                object.cardTwo = [];
            }
            if (options.defaults)
                object.type = 0;
            if (message.cardThree && message.cardThree.length) {
                object.cardThree = [];
                for (var j = 0; j < message.cardThree.length; ++j)
                    object.cardThree[j] = message.cardThree[j];
            }
            if (message.cardTwo && message.cardTwo.length) {
                object.cardTwo = [];
                for (var j = 0; j < message.cardTwo.length; ++j)
                    object.cardTwo[j] = message.cardTwo[j];
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this OutCard to JSON.
         * @function toJSON
         * @memberof kpqznn.OutCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OutCard;
    })();

    kpqznn.UserCards = (function() {

        /**
         * Properties of a UserCards.
         * @memberof kpqznn
         * @interface IUserCards
         * @property {Array.<number>|null} [remainCards] UserCards remainCards
         */

        /**
         * Constructs a new UserCards.
         * @memberof kpqznn
         * @classdesc Represents a UserCards.
         * @implements IUserCards
         * @constructor
         * @param {kpqznn.IUserCards=} [properties] Properties to set
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
         * @memberof kpqznn.UserCards
         * @instance
         */
        UserCards.prototype.remainCards = $util.emptyArray;

        /**
         * Creates a new UserCards instance using the specified properties.
         * @function create
         * @memberof kpqznn.UserCards
         * @static
         * @param {kpqznn.IUserCards=} [properties] Properties to set
         * @returns {kpqznn.UserCards} UserCards instance
         */
        UserCards.create = function create(properties) {
            return new UserCards(properties);
        };

        /**
         * Encodes the specified UserCards message. Does not implicitly {@link kpqznn.UserCards.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserCards
         * @static
         * @param {kpqznn.IUserCards} message UserCards message or plain object to encode
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
         * Encodes the specified UserCards message, length delimited. Does not implicitly {@link kpqznn.UserCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserCards
         * @static
         * @param {kpqznn.IUserCards} message UserCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserCards message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserCards} UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserCards();
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
         * @memberof kpqznn.UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserCards} UserCards
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
         * @memberof kpqznn.UserCards
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
         * @memberof kpqznn.UserCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserCards} UserCards
         */
        UserCards.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserCards)
                return object;
            var message = new $root.kpqznn.UserCards();
            if (object.remainCards) {
                if (!Array.isArray(object.remainCards))
                    throw TypeError(".kpqznn.UserCards.remainCards: array expected");
                message.remainCards = [];
                for (var i = 0; i < object.remainCards.length; ++i)
                    message.remainCards[i] = object.remainCards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserCards
         * @static
         * @param {kpqznn.UserCards} message UserCards
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
         * @memberof kpqznn.UserCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCards;
    })();

    kpqznn.User = (function() {

        /**
         * Properties of a User.
         * @memberof kpqznn
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
         * @property {number|null} [betCoin] User betCoin
         * @property {number|null} [qiang] User qiang
         * @property {Array.<number>|null} [remainCards] User remainCards
         * @property {kpqznn.IOutCard|null} [bestOutCardDto] User bestOutCardDto
         * @property {Array.<number>|null} [allowQiang] User allowQiang
         * @property {Array.<number>|null} [allowBet] User allowBet
         * @property {boolean|null} [tongsha] User tongsha
         * @property {boolean|null} [tongpei] User tongpei
         * @property {number|null} [startScore] User startScore
         * @property {number|null} [endScore] User endScore
         * @property {number|null} [currentScore] User currentScore
         * @property {number|null} [score] User score
         * @property {number|null} [revenue] User revenue
         * @property {boolean|null} [noCoin] User noCoin
         * @property {number|null} [totalScore] User totalScore
         * @property {boolean|null} [hasShowCard] User hasShowCard
         * @property {kpqznn.IOutCard|null} [outCardDto] User outCardDto
         * @property {kpqznn.IUserCards|null} [cards] User cards
         */

        /**
         * Constructs a new User.
         * @memberof kpqznn
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {kpqznn.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.remainCards = [];
            this.allowQiang = [];
            this.allowBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number} userId
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.userId = 0;

        /**
         * User state.
         * @member {number} state
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.state = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User headImg.
         * @member {string} headImg
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.headImg = "";

        /**
         * User sex.
         * @member {number} sex
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * User ip.
         * @member {string} ip
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.ip = "";

        /**
         * User position.
         * @member {number} position
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.position = 0;

        /**
         * User agree.
         * @member {number} agree
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.agree = 0;

        /**
         * User onLine.
         * @member {number} onLine
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.onLine = 0;

        /**
         * User coin.
         * @member {number|Long} coin
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User betCoin.
         * @member {number} betCoin
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.betCoin = 0;

        /**
         * User qiang.
         * @member {number} qiang
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.qiang = 0;

        /**
         * User remainCards.
         * @member {Array.<number>} remainCards
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.remainCards = $util.emptyArray;

        /**
         * User bestOutCardDto.
         * @member {kpqznn.IOutCard|null|undefined} bestOutCardDto
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.bestOutCardDto = null;

        /**
         * User allowQiang.
         * @member {Array.<number>} allowQiang
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.allowQiang = $util.emptyArray;

        /**
         * User allowBet.
         * @member {Array.<number>} allowBet
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.allowBet = $util.emptyArray;

        /**
         * User tongsha.
         * @member {boolean} tongsha
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.tongsha = false;

        /**
         * User tongpei.
         * @member {boolean} tongpei
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.tongpei = false;

        /**
         * User startScore.
         * @member {number} startScore
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.startScore = 0;

        /**
         * User endScore.
         * @member {number} endScore
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.endScore = 0;

        /**
         * User currentScore.
         * @member {number} currentScore
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.currentScore = 0;

        /**
         * User score.
         * @member {number} score
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.score = 0;

        /**
         * User revenue.
         * @member {number} revenue
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.revenue = 0;

        /**
         * User noCoin.
         * @member {boolean} noCoin
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.noCoin = false;

        /**
         * User totalScore.
         * @member {number} totalScore
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.totalScore = 0;

        /**
         * User hasShowCard.
         * @member {boolean} hasShowCard
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.hasShowCard = false;

        /**
         * User outCardDto.
         * @member {kpqznn.IOutCard|null|undefined} outCardDto
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.outCardDto = null;

        /**
         * User cards.
         * @member {kpqznn.IUserCards|null|undefined} cards
         * @memberof kpqznn.User
         * @instance
         */
        User.prototype.cards = null;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof kpqznn.User
         * @static
         * @param {kpqznn.IUser=} [properties] Properties to set
         * @returns {kpqznn.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link kpqznn.User.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.User
         * @static
         * @param {kpqznn.IUser} message User message or plain object to encode
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
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headImg);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sex);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ip);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.position);
            if (message.agree != null && message.hasOwnProperty("agree"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.agree);
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.onLine);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.coin);
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.betCoin);
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.qiang);
            if (message.remainCards != null && message.remainCards.length) {
                writer.uint32(/* id 13, wireType 2 =*/106).fork();
                for (var i = 0; i < message.remainCards.length; ++i)
                    writer.int32(message.remainCards[i]);
                writer.ldelim();
            }
            if (message.bestOutCardDto != null && message.hasOwnProperty("bestOutCardDto"))
                $root.kpqznn.OutCard.encode(message.bestOutCardDto, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.allowQiang != null && message.allowQiang.length) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork();
                for (var i = 0; i < message.allowQiang.length; ++i)
                    writer.int32(message.allowQiang[i]);
                writer.ldelim();
            }
            if (message.allowBet != null && message.allowBet.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (var i = 0; i < message.allowBet.length; ++i)
                    writer.int32(message.allowBet[i]);
                writer.ldelim();
            }
            if (message.tongsha != null && message.hasOwnProperty("tongsha"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.tongsha);
            if (message.tongpei != null && message.hasOwnProperty("tongpei"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.tongpei);
            if (message.startScore != null && message.hasOwnProperty("startScore"))
                writer.uint32(/* id 19, wireType 1 =*/153).double(message.startScore);
            if (message.endScore != null && message.hasOwnProperty("endScore"))
                writer.uint32(/* id 20, wireType 1 =*/161).double(message.endScore);
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                writer.uint32(/* id 21, wireType 1 =*/169).double(message.currentScore);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.score);
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                writer.uint32(/* id 23, wireType 1 =*/185).double(message.revenue);
            if (message.noCoin != null && message.hasOwnProperty("noCoin"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.noCoin);
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                writer.uint32(/* id 25, wireType 1 =*/201).double(message.totalScore);
            if (message.hasShowCard != null && message.hasOwnProperty("hasShowCard"))
                writer.uint32(/* id 26, wireType 0 =*/208).bool(message.hasShowCard);
            if (message.outCardDto != null && message.hasOwnProperty("outCardDto"))
                $root.kpqznn.OutCard.encode(message.outCardDto, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.cards != null && message.hasOwnProperty("cards"))
                $root.kpqznn.UserCards.encode(message.cards, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link kpqznn.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.User
         * @static
         * @param {kpqznn.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.User();
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
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.headImg = reader.string();
                    break;
                case 5:
                    message.sex = reader.int32();
                    break;
                case 6:
                    message.ip = reader.string();
                    break;
                case 7:
                    message.position = reader.int32();
                    break;
                case 8:
                    message.agree = reader.int32();
                    break;
                case 9:
                    message.onLine = reader.int32();
                    break;
                case 10:
                    message.coin = reader.int64();
                    break;
                case 11:
                    message.betCoin = reader.int32();
                    break;
                case 12:
                    message.qiang = reader.int32();
                    break;
                case 13:
                    if (!(message.remainCards && message.remainCards.length))
                        message.remainCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.remainCards.push(reader.int32());
                    } else
                        message.remainCards.push(reader.int32());
                    break;
                case 14:
                    message.bestOutCardDto = $root.kpqznn.OutCard.decode(reader, reader.uint32());
                    break;
                case 15:
                    if (!(message.allowQiang && message.allowQiang.length))
                        message.allowQiang = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.allowQiang.push(reader.int32());
                    } else
                        message.allowQiang.push(reader.int32());
                    break;
                case 16:
                    if (!(message.allowBet && message.allowBet.length))
                        message.allowBet = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.allowBet.push(reader.int32());
                    } else
                        message.allowBet.push(reader.int32());
                    break;
                case 17:
                    message.tongsha = reader.bool();
                    break;
                case 18:
                    message.tongpei = reader.bool();
                    break;
                case 19:
                    message.startScore = reader.double();
                    break;
                case 20:
                    message.endScore = reader.double();
                    break;
                case 21:
                    message.currentScore = reader.double();
                    break;
                case 22:
                    message.score = reader.int32();
                    break;
                case 23:
                    message.revenue = reader.double();
                    break;
                case 24:
                    message.noCoin = reader.bool();
                    break;
                case 25:
                    message.totalScore = reader.double();
                    break;
                case 26:
                    message.hasShowCard = reader.bool();
                    break;
                case 27:
                    message.outCardDto = $root.kpqznn.OutCard.decode(reader, reader.uint32());
                    break;
                case 28:
                    message.cards = $root.kpqznn.UserCards.decode(reader, reader.uint32());
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
         * @memberof kpqznn.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.User} User
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
         * @memberof kpqznn.User
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
                var error = $root.kpqznn.OutCard.verify(message.bestOutCardDto);
                if (error)
                    return "bestOutCardDto." + error;
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
            if (message.tongsha != null && message.hasOwnProperty("tongsha"))
                if (typeof message.tongsha !== "boolean")
                    return "tongsha: boolean expected";
            if (message.tongpei != null && message.hasOwnProperty("tongpei"))
                if (typeof message.tongpei !== "boolean")
                    return "tongpei: boolean expected";
            if (message.startScore != null && message.hasOwnProperty("startScore"))
                if (typeof message.startScore !== "number")
                    return "startScore: number expected";
            if (message.endScore != null && message.hasOwnProperty("endScore"))
                if (typeof message.endScore !== "number")
                    return "endScore: number expected";
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                if (typeof message.currentScore !== "number")
                    return "currentScore: number expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                if (typeof message.revenue !== "number")
                    return "revenue: number expected";
            if (message.noCoin != null && message.hasOwnProperty("noCoin"))
                if (typeof message.noCoin !== "boolean")
                    return "noCoin: boolean expected";
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (typeof message.totalScore !== "number")
                    return "totalScore: number expected";
            if (message.hasShowCard != null && message.hasOwnProperty("hasShowCard"))
                if (typeof message.hasShowCard !== "boolean")
                    return "hasShowCard: boolean expected";
            if (message.outCardDto != null && message.hasOwnProperty("outCardDto")) {
                var error = $root.kpqznn.OutCard.verify(message.outCardDto);
                if (error)
                    return "outCardDto." + error;
            }
            if (message.cards != null && message.hasOwnProperty("cards")) {
                var error = $root.kpqznn.UserCards.verify(message.cards);
                if (error)
                    return "cards." + error;
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.User)
                return object;
            var message = new $root.kpqznn.User();
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
            if (object.betCoin != null)
                message.betCoin = object.betCoin | 0;
            if (object.qiang != null)
                message.qiang = object.qiang | 0;
            if (object.remainCards) {
                if (!Array.isArray(object.remainCards))
                    throw TypeError(".kpqznn.User.remainCards: array expected");
                message.remainCards = [];
                for (var i = 0; i < object.remainCards.length; ++i)
                    message.remainCards[i] = object.remainCards[i] | 0;
            }
            if (object.bestOutCardDto != null) {
                if (typeof object.bestOutCardDto !== "object")
                    throw TypeError(".kpqznn.User.bestOutCardDto: object expected");
                message.bestOutCardDto = $root.kpqznn.OutCard.fromObject(object.bestOutCardDto);
            }
            if (object.allowQiang) {
                if (!Array.isArray(object.allowQiang))
                    throw TypeError(".kpqznn.User.allowQiang: array expected");
                message.allowQiang = [];
                for (var i = 0; i < object.allowQiang.length; ++i)
                    message.allowQiang[i] = object.allowQiang[i] | 0;
            }
            if (object.allowBet) {
                if (!Array.isArray(object.allowBet))
                    throw TypeError(".kpqznn.User.allowBet: array expected");
                message.allowBet = [];
                for (var i = 0; i < object.allowBet.length; ++i)
                    message.allowBet[i] = object.allowBet[i] | 0;
            }
            if (object.tongsha != null)
                message.tongsha = Boolean(object.tongsha);
            if (object.tongpei != null)
                message.tongpei = Boolean(object.tongpei);
            if (object.startScore != null)
                message.startScore = Number(object.startScore);
            if (object.endScore != null)
                message.endScore = Number(object.endScore);
            if (object.currentScore != null)
                message.currentScore = Number(object.currentScore);
            if (object.score != null)
                message.score = object.score | 0;
            if (object.revenue != null)
                message.revenue = Number(object.revenue);
            if (object.noCoin != null)
                message.noCoin = Boolean(object.noCoin);
            if (object.totalScore != null)
                message.totalScore = Number(object.totalScore);
            if (object.hasShowCard != null)
                message.hasShowCard = Boolean(object.hasShowCard);
            if (object.outCardDto != null) {
                if (typeof object.outCardDto !== "object")
                    throw TypeError(".kpqznn.User.outCardDto: object expected");
                message.outCardDto = $root.kpqznn.OutCard.fromObject(object.outCardDto);
            }
            if (object.cards != null) {
                if (typeof object.cards !== "object")
                    throw TypeError(".kpqznn.User.cards: object expected");
                message.cards = $root.kpqznn.UserCards.fromObject(object.cards);
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.User
         * @static
         * @param {kpqznn.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.remainCards = [];
                object.allowQiang = [];
                object.allowBet = [];
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
                object.betCoin = 0;
                object.qiang = 0;
                object.bestOutCardDto = null;
                object.tongsha = false;
                object.tongpei = false;
                object.startScore = 0;
                object.endScore = 0;
                object.currentScore = 0;
                object.score = 0;
                object.revenue = 0;
                object.noCoin = false;
                object.totalScore = 0;
                object.hasShowCard = false;
                object.outCardDto = null;
                object.cards = null;
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
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                object.betCoin = message.betCoin;
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                object.qiang = message.qiang;
            if (message.remainCards && message.remainCards.length) {
                object.remainCards = [];
                for (var j = 0; j < message.remainCards.length; ++j)
                    object.remainCards[j] = message.remainCards[j];
            }
            if (message.bestOutCardDto != null && message.hasOwnProperty("bestOutCardDto"))
                object.bestOutCardDto = $root.kpqznn.OutCard.toObject(message.bestOutCardDto, options);
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
            if (message.tongsha != null && message.hasOwnProperty("tongsha"))
                object.tongsha = message.tongsha;
            if (message.tongpei != null && message.hasOwnProperty("tongpei"))
                object.tongpei = message.tongpei;
            if (message.startScore != null && message.hasOwnProperty("startScore"))
                object.startScore = options.json && !isFinite(message.startScore) ? String(message.startScore) : message.startScore;
            if (message.endScore != null && message.hasOwnProperty("endScore"))
                object.endScore = options.json && !isFinite(message.endScore) ? String(message.endScore) : message.endScore;
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                object.currentScore = options.json && !isFinite(message.currentScore) ? String(message.currentScore) : message.currentScore;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                object.revenue = options.json && !isFinite(message.revenue) ? String(message.revenue) : message.revenue;
            if (message.noCoin != null && message.hasOwnProperty("noCoin"))
                object.noCoin = message.noCoin;
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                object.totalScore = options.json && !isFinite(message.totalScore) ? String(message.totalScore) : message.totalScore;
            if (message.hasShowCard != null && message.hasOwnProperty("hasShowCard"))
                object.hasShowCard = message.hasShowCard;
            if (message.outCardDto != null && message.hasOwnProperty("outCardDto"))
                object.outCardDto = $root.kpqznn.OutCard.toObject(message.outCardDto, options);
            if (message.cards != null && message.hasOwnProperty("cards"))
                object.cards = $root.kpqznn.UserCards.toObject(message.cards, options);
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof kpqznn.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    kpqznn.UserReadyRequest = (function() {

        /**
         * Properties of a UserReadyRequest.
         * @memberof kpqznn
         * @interface IUserReadyRequest
         */

        /**
         * Constructs a new UserReadyRequest.
         * @memberof kpqznn
         * @classdesc Represents a UserReadyRequest.
         * @implements IUserReadyRequest
         * @constructor
         * @param {kpqznn.IUserReadyRequest=} [properties] Properties to set
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
         * @memberof kpqznn.UserReadyRequest
         * @static
         * @param {kpqznn.IUserReadyRequest=} [properties] Properties to set
         * @returns {kpqznn.UserReadyRequest} UserReadyRequest instance
         */
        UserReadyRequest.create = function create(properties) {
            return new UserReadyRequest(properties);
        };

        /**
         * Encodes the specified UserReadyRequest message. Does not implicitly {@link kpqznn.UserReadyRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserReadyRequest
         * @static
         * @param {kpqznn.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserReadyRequest message, length delimited. Does not implicitly {@link kpqznn.UserReadyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserReadyRequest
         * @static
         * @param {kpqznn.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserReadyRequest} UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserReadyRequest();
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
         * @memberof kpqznn.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserReadyRequest} UserReadyRequest
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
         * @memberof kpqznn.UserReadyRequest
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
         * @memberof kpqznn.UserReadyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserReadyRequest} UserReadyRequest
         */
        UserReadyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserReadyRequest)
                return object;
            return new $root.kpqznn.UserReadyRequest();
        };

        /**
         * Creates a plain object from a UserReadyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserReadyRequest
         * @static
         * @param {kpqznn.UserReadyRequest} message UserReadyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReadyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserReadyRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.UserReadyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReadyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReadyRequest;
    })();

    kpqznn.BetRequest = (function() {

        /**
         * Properties of a BetRequest.
         * @memberof kpqznn
         * @interface IBetRequest
         * @property {number|null} [betCoin] BetRequest betCoin
         */

        /**
         * Constructs a new BetRequest.
         * @memberof kpqznn
         * @classdesc Represents a BetRequest.
         * @implements IBetRequest
         * @constructor
         * @param {kpqznn.IBetRequest=} [properties] Properties to set
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
         * @memberof kpqznn.BetRequest
         * @instance
         */
        BetRequest.prototype.betCoin = 0;

        /**
         * Creates a new BetRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.BetRequest
         * @static
         * @param {kpqznn.IBetRequest=} [properties] Properties to set
         * @returns {kpqznn.BetRequest} BetRequest instance
         */
        BetRequest.create = function create(properties) {
            return new BetRequest(properties);
        };

        /**
         * Encodes the specified BetRequest message. Does not implicitly {@link kpqznn.BetRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.BetRequest
         * @static
         * @param {kpqznn.IBetRequest} message BetRequest message or plain object to encode
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
         * Encodes the specified BetRequest message, length delimited. Does not implicitly {@link kpqznn.BetRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.BetRequest
         * @static
         * @param {kpqznn.IBetRequest} message BetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.BetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.BetRequest} BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.BetRequest();
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
         * @memberof kpqznn.BetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.BetRequest} BetRequest
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
         * @memberof kpqznn.BetRequest
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
         * @memberof kpqznn.BetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.BetRequest} BetRequest
         */
        BetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.BetRequest)
                return object;
            var message = new $root.kpqznn.BetRequest();
            if (object.betCoin != null)
                message.betCoin = object.betCoin | 0;
            return message;
        };

        /**
         * Creates a plain object from a BetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.BetRequest
         * @static
         * @param {kpqznn.BetRequest} message BetRequest
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
         * @memberof kpqznn.BetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRequest;
    })();

    kpqznn.ShowCardRequest = (function() {

        /**
         * Properties of a ShowCardRequest.
         * @memberof kpqznn
         * @interface IShowCardRequest
         */

        /**
         * Constructs a new ShowCardRequest.
         * @memberof kpqznn
         * @classdesc Represents a ShowCardRequest.
         * @implements IShowCardRequest
         * @constructor
         * @param {kpqznn.IShowCardRequest=} [properties] Properties to set
         */
        function ShowCardRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ShowCardRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {kpqznn.IShowCardRequest=} [properties] Properties to set
         * @returns {kpqznn.ShowCardRequest} ShowCardRequest instance
         */
        ShowCardRequest.create = function create(properties) {
            return new ShowCardRequest(properties);
        };

        /**
         * Encodes the specified ShowCardRequest message. Does not implicitly {@link kpqznn.ShowCardRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {kpqznn.IShowCardRequest} message ShowCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowCardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ShowCardRequest message, length delimited. Does not implicitly {@link kpqznn.ShowCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {kpqznn.IShowCardRequest} message ShowCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShowCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.ShowCardRequest} ShowCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.ShowCardRequest();
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
         * Decodes a ShowCardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.ShowCardRequest} ShowCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowCardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShowCardRequest message.
         * @function verify
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShowCardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ShowCardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.ShowCardRequest} ShowCardRequest
         */
        ShowCardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.ShowCardRequest)
                return object;
            return new $root.kpqznn.ShowCardRequest();
        };

        /**
         * Creates a plain object from a ShowCardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.ShowCardRequest
         * @static
         * @param {kpqznn.ShowCardRequest} message ShowCardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShowCardRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ShowCardRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.ShowCardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShowCardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShowCardRequest;
    })();

    kpqznn.UserQuitRequest = (function() {

        /**
         * Properties of a UserQuitRequest.
         * @memberof kpqznn
         * @interface IUserQuitRequest
         */

        /**
         * Constructs a new UserQuitRequest.
         * @memberof kpqznn
         * @classdesc Represents a UserQuitRequest.
         * @implements IUserQuitRequest
         * @constructor
         * @param {kpqznn.IUserQuitRequest=} [properties] Properties to set
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
         * @memberof kpqznn.UserQuitRequest
         * @static
         * @param {kpqznn.IUserQuitRequest=} [properties] Properties to set
         * @returns {kpqznn.UserQuitRequest} UserQuitRequest instance
         */
        UserQuitRequest.create = function create(properties) {
            return new UserQuitRequest(properties);
        };

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link kpqznn.UserQuitRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserQuitRequest
         * @static
         * @param {kpqznn.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link kpqznn.UserQuitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserQuitRequest
         * @static
         * @param {kpqznn.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserQuitRequest} UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserQuitRequest();
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
         * @memberof kpqznn.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserQuitRequest} UserQuitRequest
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
         * @memberof kpqznn.UserQuitRequest
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
         * @memberof kpqznn.UserQuitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserQuitRequest} UserQuitRequest
         */
        UserQuitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserQuitRequest)
                return object;
            return new $root.kpqznn.UserQuitRequest();
        };

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserQuitRequest
         * @static
         * @param {kpqznn.UserQuitRequest} message UserQuitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserQuitRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.UserQuitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitRequest;
    })();

    kpqznn.UserOnBackRequest = (function() {

        /**
         * Properties of a UserOnBackRequest.
         * @memberof kpqznn
         * @interface IUserOnBackRequest
         * @property {number|null} [leaveState] UserOnBackRequest leaveState
         * @property {number|null} [userId] UserOnBackRequest userId
         */

        /**
         * Constructs a new UserOnBackRequest.
         * @memberof kpqznn
         * @classdesc Represents a UserOnBackRequest.
         * @implements IUserOnBackRequest
         * @constructor
         * @param {kpqznn.IUserOnBackRequest=} [properties] Properties to set
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
         * @memberof kpqznn.UserOnBackRequest
         * @instance
         */
        UserOnBackRequest.prototype.leaveState = 0;

        /**
         * UserOnBackRequest userId.
         * @member {number} userId
         * @memberof kpqznn.UserOnBackRequest
         * @instance
         */
        UserOnBackRequest.prototype.userId = 0;

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.UserOnBackRequest
         * @static
         * @param {kpqznn.IUserOnBackRequest=} [properties] Properties to set
         * @returns {kpqznn.UserOnBackRequest} UserOnBackRequest instance
         */
        UserOnBackRequest.create = function create(properties) {
            return new UserOnBackRequest(properties);
        };

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link kpqznn.UserOnBackRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserOnBackRequest
         * @static
         * @param {kpqznn.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.leaveState);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link kpqznn.UserOnBackRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserOnBackRequest
         * @static
         * @param {kpqznn.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserOnBackRequest} UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOnBackRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserOnBackRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.leaveState = reader.int32();
                    break;
                case 2:
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
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserOnBackRequest} UserOnBackRequest
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
         * @memberof kpqznn.UserOnBackRequest
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
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a UserOnBackRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserOnBackRequest} UserOnBackRequest
         */
        UserOnBackRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserOnBackRequest)
                return object;
            var message = new $root.kpqznn.UserOnBackRequest();
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserOnBackRequest
         * @static
         * @param {kpqznn.UserOnBackRequest} message UserOnBackRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOnBackRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.leaveState = 0;
                object.userId = 0;
            }
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                object.leaveState = message.leaveState;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this UserOnBackRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.UserOnBackRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOnBackRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserOnBackRequest;
    })();

    kpqznn.DelayCheckRequest = (function() {

        /**
         * Properties of a DelayCheckRequest.
         * @memberof kpqznn
         * @interface IDelayCheckRequest
         * @property {string|null} [content] DelayCheckRequest content
         */

        /**
         * Constructs a new DelayCheckRequest.
         * @memberof kpqznn
         * @classdesc Represents a DelayCheckRequest.
         * @implements IDelayCheckRequest
         * @constructor
         * @param {kpqznn.IDelayCheckRequest=} [properties] Properties to set
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
         * @memberof kpqznn.DelayCheckRequest
         * @instance
         */
        DelayCheckRequest.prototype.content = "";

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.DelayCheckRequest
         * @static
         * @param {kpqznn.IDelayCheckRequest=} [properties] Properties to set
         * @returns {kpqznn.DelayCheckRequest} DelayCheckRequest instance
         */
        DelayCheckRequest.create = function create(properties) {
            return new DelayCheckRequest(properties);
        };

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link kpqznn.DelayCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.DelayCheckRequest
         * @static
         * @param {kpqznn.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
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
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link kpqznn.DelayCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.DelayCheckRequest
         * @static
         * @param {kpqznn.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.DelayCheckRequest} DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.DelayCheckRequest();
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
         * @memberof kpqznn.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.DelayCheckRequest} DelayCheckRequest
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
         * @memberof kpqznn.DelayCheckRequest
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
         * @memberof kpqznn.DelayCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.DelayCheckRequest} DelayCheckRequest
         */
        DelayCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.DelayCheckRequest)
                return object;
            var message = new $root.kpqznn.DelayCheckRequest();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.DelayCheckRequest
         * @static
         * @param {kpqznn.DelayCheckRequest} message DelayCheckRequest
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
         * @memberof kpqznn.DelayCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckRequest;
    })();

    kpqznn.UserReconnectRequest = (function() {

        /**
         * Properties of a UserReconnectRequest.
         * @memberof kpqznn
         * @interface IUserReconnectRequest
         * @property {number|null} [userId] UserReconnectRequest userId
         */

        /**
         * Constructs a new UserReconnectRequest.
         * @memberof kpqznn
         * @classdesc Represents a UserReconnectRequest.
         * @implements IUserReconnectRequest
         * @constructor
         * @param {kpqznn.IUserReconnectRequest=} [properties] Properties to set
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
         * @memberof kpqznn.UserReconnectRequest
         * @instance
         */
        UserReconnectRequest.prototype.userId = 0;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.UserReconnectRequest
         * @static
         * @param {kpqznn.IUserReconnectRequest=} [properties] Properties to set
         * @returns {kpqznn.UserReconnectRequest} UserReconnectRequest instance
         */
        UserReconnectRequest.create = function create(properties) {
            return new UserReconnectRequest(properties);
        };

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link kpqznn.UserReconnectRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserReconnectRequest
         * @static
         * @param {kpqznn.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
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
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link kpqznn.UserReconnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserReconnectRequest
         * @static
         * @param {kpqznn.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserReconnectRequest} UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserReconnectRequest();
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
         * @memberof kpqznn.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserReconnectRequest} UserReconnectRequest
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
         * @memberof kpqznn.UserReconnectRequest
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
         * @memberof kpqznn.UserReconnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserReconnectRequest} UserReconnectRequest
         */
        UserReconnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserReconnectRequest)
                return object;
            var message = new $root.kpqznn.UserReconnectRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserReconnectRequest
         * @static
         * @param {kpqznn.UserReconnectRequest} message UserReconnectRequest
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
         * @memberof kpqznn.UserReconnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectRequest;
    })();

    kpqznn.QiangZhuangRequest = (function() {

        /**
         * Properties of a QiangZhuangRequest.
         * @memberof kpqznn
         * @interface IQiangZhuangRequest
         * @property {number|null} [qiang] QiangZhuangRequest qiang
         */

        /**
         * Constructs a new QiangZhuangRequest.
         * @memberof kpqznn
         * @classdesc Represents a QiangZhuangRequest.
         * @implements IQiangZhuangRequest
         * @constructor
         * @param {kpqznn.IQiangZhuangRequest=} [properties] Properties to set
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
         * @memberof kpqznn.QiangZhuangRequest
         * @instance
         */
        QiangZhuangRequest.prototype.qiang = 0;

        /**
         * Creates a new QiangZhuangRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.QiangZhuangRequest
         * @static
         * @param {kpqznn.IQiangZhuangRequest=} [properties] Properties to set
         * @returns {kpqznn.QiangZhuangRequest} QiangZhuangRequest instance
         */
        QiangZhuangRequest.create = function create(properties) {
            return new QiangZhuangRequest(properties);
        };

        /**
         * Encodes the specified QiangZhuangRequest message. Does not implicitly {@link kpqznn.QiangZhuangRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.QiangZhuangRequest
         * @static
         * @param {kpqznn.IQiangZhuangRequest} message QiangZhuangRequest message or plain object to encode
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
         * Encodes the specified QiangZhuangRequest message, length delimited. Does not implicitly {@link kpqznn.QiangZhuangRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.QiangZhuangRequest
         * @static
         * @param {kpqznn.IQiangZhuangRequest} message QiangZhuangRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QiangZhuangRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QiangZhuangRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.QiangZhuangRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.QiangZhuangRequest} QiangZhuangRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QiangZhuangRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.QiangZhuangRequest();
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
         * @memberof kpqznn.QiangZhuangRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.QiangZhuangRequest} QiangZhuangRequest
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
         * @memberof kpqznn.QiangZhuangRequest
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
         * @memberof kpqznn.QiangZhuangRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.QiangZhuangRequest} QiangZhuangRequest
         */
        QiangZhuangRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.QiangZhuangRequest)
                return object;
            var message = new $root.kpqznn.QiangZhuangRequest();
            if (object.qiang != null)
                message.qiang = object.qiang | 0;
            return message;
        };

        /**
         * Creates a plain object from a QiangZhuangRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.QiangZhuangRequest
         * @static
         * @param {kpqznn.QiangZhuangRequest} message QiangZhuangRequest
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
         * @memberof kpqznn.QiangZhuangRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QiangZhuangRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QiangZhuangRequest;
    })();

    kpqznn.ChangeTableRequest = (function() {

        /**
         * Properties of a ChangeTableRequest.
         * @memberof kpqznn
         * @interface IChangeTableRequest
         */

        /**
         * Constructs a new ChangeTableRequest.
         * @memberof kpqznn
         * @classdesc Represents a ChangeTableRequest.
         * @implements IChangeTableRequest
         * @constructor
         * @param {kpqznn.IChangeTableRequest=} [properties] Properties to set
         */
        function ChangeTableRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ChangeTableRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {kpqznn.IChangeTableRequest=} [properties] Properties to set
         * @returns {kpqznn.ChangeTableRequest} ChangeTableRequest instance
         */
        ChangeTableRequest.create = function create(properties) {
            return new ChangeTableRequest(properties);
        };

        /**
         * Encodes the specified ChangeTableRequest message. Does not implicitly {@link kpqznn.ChangeTableRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {kpqznn.IChangeTableRequest} message ChangeTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeTableRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ChangeTableRequest message, length delimited. Does not implicitly {@link kpqznn.ChangeTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {kpqznn.IChangeTableRequest} message ChangeTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.ChangeTableRequest} ChangeTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.ChangeTableRequest();
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
         * Decodes a ChangeTableRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.ChangeTableRequest} ChangeTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeTableRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeTableRequest message.
         * @function verify
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeTableRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ChangeTableRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.ChangeTableRequest} ChangeTableRequest
         */
        ChangeTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.ChangeTableRequest)
                return object;
            return new $root.kpqznn.ChangeTableRequest();
        };

        /**
         * Creates a plain object from a ChangeTableRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.ChangeTableRequest
         * @static
         * @param {kpqznn.ChangeTableRequest} message ChangeTableRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeTableRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ChangeTableRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.ChangeTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeTableRequest;
    })();

    kpqznn.JoinTableRequest = (function() {

        /**
         * Properties of a JoinTableRequest.
         * @memberof kpqznn
         * @interface IJoinTableRequest
         * @property {string|null} [sid] JoinTableRequest sid
         * @property {number|null} [tableType] JoinTableRequest tableType
         */

        /**
         * Constructs a new JoinTableRequest.
         * @memberof kpqznn
         * @classdesc Represents a JoinTableRequest.
         * @implements IJoinTableRequest
         * @constructor
         * @param {kpqznn.IJoinTableRequest=} [properties] Properties to set
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
         * @memberof kpqznn.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.sid = "";

        /**
         * JoinTableRequest tableType.
         * @member {number} tableType
         * @memberof kpqznn.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.tableType = 0;

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.JoinTableRequest
         * @static
         * @param {kpqznn.IJoinTableRequest=} [properties] Properties to set
         * @returns {kpqznn.JoinTableRequest} JoinTableRequest instance
         */
        JoinTableRequest.create = function create(properties) {
            return new JoinTableRequest(properties);
        };

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link kpqznn.JoinTableRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.JoinTableRequest
         * @static
         * @param {kpqznn.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tableType);
            return writer;
        };

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link kpqznn.JoinTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.JoinTableRequest
         * @static
         * @param {kpqznn.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.JoinTableRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.tableType = reader.int32();
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
         * @memberof kpqznn.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.JoinTableRequest} JoinTableRequest
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
         * @memberof kpqznn.JoinTableRequest
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
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                if (!$util.isInteger(message.tableType))
                    return "tableType: integer expected";
            return null;
        };

        /**
         * Creates a JoinTableRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.JoinTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.JoinTableRequest} JoinTableRequest
         */
        JoinTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.JoinTableRequest)
                return object;
            var message = new $root.kpqznn.JoinTableRequest();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.tableType != null)
                message.tableType = object.tableType | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.JoinTableRequest
         * @static
         * @param {kpqznn.JoinTableRequest} message JoinTableRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sid = "";
                object.tableType = 0;
            }
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                object.tableType = message.tableType;
            return object;
        };

        /**
         * Converts this JoinTableRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.JoinTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableRequest;
    })();

    kpqznn.MessageRequest = (function() {

        /**
         * Properties of a MessageRequest.
         * @memberof kpqznn
         * @interface IMessageRequest
         * @property {string|null} [content] MessageRequest content
         * @property {number|null} [toUserId] MessageRequest toUserId
         */

        /**
         * Constructs a new MessageRequest.
         * @memberof kpqznn
         * @classdesc Represents a MessageRequest.
         * @implements IMessageRequest
         * @constructor
         * @param {kpqznn.IMessageRequest=} [properties] Properties to set
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
         * @memberof kpqznn.MessageRequest
         * @instance
         */
        MessageRequest.prototype.content = "";

        /**
         * MessageRequest toUserId.
         * @member {number} toUserId
         * @memberof kpqznn.MessageRequest
         * @instance
         */
        MessageRequest.prototype.toUserId = 0;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.MessageRequest
         * @static
         * @param {kpqznn.IMessageRequest=} [properties] Properties to set
         * @returns {kpqznn.MessageRequest} MessageRequest instance
         */
        MessageRequest.create = function create(properties) {
            return new MessageRequest(properties);
        };

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link kpqznn.MessageRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.MessageRequest
         * @static
         * @param {kpqznn.IMessageRequest} message MessageRequest message or plain object to encode
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
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link kpqznn.MessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.MessageRequest
         * @static
         * @param {kpqznn.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.MessageRequest();
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
         * @memberof kpqznn.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.MessageRequest} MessageRequest
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
         * @memberof kpqznn.MessageRequest
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
         * @memberof kpqznn.MessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.MessageRequest} MessageRequest
         */
        MessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.MessageRequest)
                return object;
            var message = new $root.kpqznn.MessageRequest();
            if (object.content != null)
                message.content = String(object.content);
            if (object.toUserId != null)
                message.toUserId = object.toUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.MessageRequest
         * @static
         * @param {kpqznn.MessageRequest} message MessageRequest
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
         * @memberof kpqznn.MessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageRequest;
    })();

    kpqznn.ForcedOfflineRequest = (function() {

        /**
         * Properties of a ForcedOfflineRequest.
         * @memberof kpqznn
         * @interface IForcedOfflineRequest
         * @property {number|null} [userId] ForcedOfflineRequest userId
         */

        /**
         * Constructs a new ForcedOfflineRequest.
         * @memberof kpqznn
         * @classdesc Represents a ForcedOfflineRequest.
         * @implements IForcedOfflineRequest
         * @constructor
         * @param {kpqznn.IForcedOfflineRequest=} [properties] Properties to set
         */
        function ForcedOfflineRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForcedOfflineRequest userId.
         * @member {number} userId
         * @memberof kpqznn.ForcedOfflineRequest
         * @instance
         */
        ForcedOfflineRequest.prototype.userId = 0;

        /**
         * Creates a new ForcedOfflineRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {kpqznn.IForcedOfflineRequest=} [properties] Properties to set
         * @returns {kpqznn.ForcedOfflineRequest} ForcedOfflineRequest instance
         */
        ForcedOfflineRequest.create = function create(properties) {
            return new ForcedOfflineRequest(properties);
        };

        /**
         * Encodes the specified ForcedOfflineRequest message. Does not implicitly {@link kpqznn.ForcedOfflineRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {kpqznn.IForcedOfflineRequest} message ForcedOfflineRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForcedOfflineRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ForcedOfflineRequest message, length delimited. Does not implicitly {@link kpqznn.ForcedOfflineRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {kpqznn.IForcedOfflineRequest} message ForcedOfflineRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForcedOfflineRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForcedOfflineRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.ForcedOfflineRequest} ForcedOfflineRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForcedOfflineRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.ForcedOfflineRequest();
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
         * Decodes a ForcedOfflineRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.ForcedOfflineRequest} ForcedOfflineRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForcedOfflineRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForcedOfflineRequest message.
         * @function verify
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForcedOfflineRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a ForcedOfflineRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.ForcedOfflineRequest} ForcedOfflineRequest
         */
        ForcedOfflineRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.ForcedOfflineRequest)
                return object;
            var message = new $root.kpqznn.ForcedOfflineRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ForcedOfflineRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.ForcedOfflineRequest
         * @static
         * @param {kpqznn.ForcedOfflineRequest} message ForcedOfflineRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForcedOfflineRequest.toObject = function toObject(message, options) {
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
         * Converts this ForcedOfflineRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.ForcedOfflineRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForcedOfflineRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ForcedOfflineRequest;
    })();

    kpqznn.KickedOutRequest = (function() {

        /**
         * Properties of a KickedOutRequest.
         * @memberof kpqznn
         * @interface IKickedOutRequest
         * @property {number|null} [userId] KickedOutRequest userId
         */

        /**
         * Constructs a new KickedOutRequest.
         * @memberof kpqznn
         * @classdesc Represents a KickedOutRequest.
         * @implements IKickedOutRequest
         * @constructor
         * @param {kpqznn.IKickedOutRequest=} [properties] Properties to set
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
         * @memberof kpqznn.KickedOutRequest
         * @instance
         */
        KickedOutRequest.prototype.userId = 0;

        /**
         * Creates a new KickedOutRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.KickedOutRequest
         * @static
         * @param {kpqznn.IKickedOutRequest=} [properties] Properties to set
         * @returns {kpqznn.KickedOutRequest} KickedOutRequest instance
         */
        KickedOutRequest.create = function create(properties) {
            return new KickedOutRequest(properties);
        };

        /**
         * Encodes the specified KickedOutRequest message. Does not implicitly {@link kpqznn.KickedOutRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.KickedOutRequest
         * @static
         * @param {kpqznn.IKickedOutRequest} message KickedOutRequest message or plain object to encode
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
         * Encodes the specified KickedOutRequest message, length delimited. Does not implicitly {@link kpqznn.KickedOutRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.KickedOutRequest
         * @static
         * @param {kpqznn.IKickedOutRequest} message KickedOutRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickedOutRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickedOutRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.KickedOutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.KickedOutRequest} KickedOutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickedOutRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.KickedOutRequest();
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
         * @memberof kpqznn.KickedOutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.KickedOutRequest} KickedOutRequest
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
         * @memberof kpqznn.KickedOutRequest
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
         * @memberof kpqznn.KickedOutRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.KickedOutRequest} KickedOutRequest
         */
        KickedOutRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.KickedOutRequest)
                return object;
            var message = new $root.kpqznn.KickedOutRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a KickedOutRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.KickedOutRequest
         * @static
         * @param {kpqznn.KickedOutRequest} message KickedOutRequest
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
         * @memberof kpqznn.KickedOutRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickedOutRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickedOutRequest;
    })();

    kpqznn.KickedOutResponse = (function() {

        /**
         * Properties of a KickedOutResponse.
         * @memberof kpqznn
         * @interface IKickedOutResponse
         * @property {string|null} [desc] KickedOutResponse desc
         */

        /**
         * Constructs a new KickedOutResponse.
         * @memberof kpqznn
         * @classdesc Represents a KickedOutResponse.
         * @implements IKickedOutResponse
         * @constructor
         * @param {kpqznn.IKickedOutResponse=} [properties] Properties to set
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
         * @memberof kpqznn.KickedOutResponse
         * @instance
         */
        KickedOutResponse.prototype.desc = "";

        /**
         * Creates a new KickedOutResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.KickedOutResponse
         * @static
         * @param {kpqznn.IKickedOutResponse=} [properties] Properties to set
         * @returns {kpqznn.KickedOutResponse} KickedOutResponse instance
         */
        KickedOutResponse.create = function create(properties) {
            return new KickedOutResponse(properties);
        };

        /**
         * Encodes the specified KickedOutResponse message. Does not implicitly {@link kpqznn.KickedOutResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.KickedOutResponse
         * @static
         * @param {kpqznn.IKickedOutResponse} message KickedOutResponse message or plain object to encode
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
         * Encodes the specified KickedOutResponse message, length delimited. Does not implicitly {@link kpqznn.KickedOutResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.KickedOutResponse
         * @static
         * @param {kpqznn.IKickedOutResponse} message KickedOutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickedOutResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickedOutResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.KickedOutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.KickedOutResponse} KickedOutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickedOutResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.KickedOutResponse();
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
         * @memberof kpqznn.KickedOutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.KickedOutResponse} KickedOutResponse
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
         * @memberof kpqznn.KickedOutResponse
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
         * @memberof kpqznn.KickedOutResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.KickedOutResponse} KickedOutResponse
         */
        KickedOutResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.KickedOutResponse)
                return object;
            var message = new $root.kpqznn.KickedOutResponse();
            if (object.desc != null)
                message.desc = String(object.desc);
            return message;
        };

        /**
         * Creates a plain object from a KickedOutResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.KickedOutResponse
         * @static
         * @param {kpqznn.KickedOutResponse} message KickedOutResponse
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
         * @memberof kpqznn.KickedOutResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickedOutResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickedOutResponse;
    })();

    kpqznn.HallRefreshCoinRequest = (function() {

        /**
         * Properties of a HallRefreshCoinRequest.
         * @memberof kpqznn
         * @interface IHallRefreshCoinRequest
         * @property {number|null} [userId] HallRefreshCoinRequest userId
         * @property {number|null} [type] HallRefreshCoinRequest type
         */

        /**
         * Constructs a new HallRefreshCoinRequest.
         * @memberof kpqznn
         * @classdesc Represents a HallRefreshCoinRequest.
         * @implements IHallRefreshCoinRequest
         * @constructor
         * @param {kpqznn.IHallRefreshCoinRequest=} [properties] Properties to set
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
         * @memberof kpqznn.HallRefreshCoinRequest
         * @instance
         */
        HallRefreshCoinRequest.prototype.userId = 0;

        /**
         * HallRefreshCoinRequest type.
         * @member {number} type
         * @memberof kpqznn.HallRefreshCoinRequest
         * @instance
         */
        HallRefreshCoinRequest.prototype.type = 0;

        /**
         * Creates a new HallRefreshCoinRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.HallRefreshCoinRequest
         * @static
         * @param {kpqznn.IHallRefreshCoinRequest=} [properties] Properties to set
         * @returns {kpqznn.HallRefreshCoinRequest} HallRefreshCoinRequest instance
         */
        HallRefreshCoinRequest.create = function create(properties) {
            return new HallRefreshCoinRequest(properties);
        };

        /**
         * Encodes the specified HallRefreshCoinRequest message. Does not implicitly {@link kpqznn.HallRefreshCoinRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.HallRefreshCoinRequest
         * @static
         * @param {kpqznn.IHallRefreshCoinRequest} message HallRefreshCoinRequest message or plain object to encode
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
         * Encodes the specified HallRefreshCoinRequest message, length delimited. Does not implicitly {@link kpqznn.HallRefreshCoinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.HallRefreshCoinRequest
         * @static
         * @param {kpqznn.IHallRefreshCoinRequest} message HallRefreshCoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallRefreshCoinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HallRefreshCoinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.HallRefreshCoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.HallRefreshCoinRequest} HallRefreshCoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallRefreshCoinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.HallRefreshCoinRequest();
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
         * @memberof kpqznn.HallRefreshCoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.HallRefreshCoinRequest} HallRefreshCoinRequest
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
         * @memberof kpqznn.HallRefreshCoinRequest
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
         * @memberof kpqznn.HallRefreshCoinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.HallRefreshCoinRequest} HallRefreshCoinRequest
         */
        HallRefreshCoinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.HallRefreshCoinRequest)
                return object;
            var message = new $root.kpqznn.HallRefreshCoinRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a HallRefreshCoinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.HallRefreshCoinRequest
         * @static
         * @param {kpqznn.HallRefreshCoinRequest} message HallRefreshCoinRequest
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
         * @memberof kpqznn.HallRefreshCoinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HallRefreshCoinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HallRefreshCoinRequest;
    })();

    kpqznn.HallRefreshCoinResponse = (function() {

        /**
         * Properties of a HallRefreshCoinResponse.
         * @memberof kpqznn
         * @interface IHallRefreshCoinResponse
         * @property {number|null} [userId] HallRefreshCoinResponse userId
         * @property {number|null} [coin] HallRefreshCoinResponse coin
         * @property {boolean|null} [isInTable] HallRefreshCoinResponse isInTable
         */

        /**
         * Constructs a new HallRefreshCoinResponse.
         * @memberof kpqznn
         * @classdesc Represents a HallRefreshCoinResponse.
         * @implements IHallRefreshCoinResponse
         * @constructor
         * @param {kpqznn.IHallRefreshCoinResponse=} [properties] Properties to set
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
         * @memberof kpqznn.HallRefreshCoinResponse
         * @instance
         */
        HallRefreshCoinResponse.prototype.userId = 0;

        /**
         * HallRefreshCoinResponse coin.
         * @member {number} coin
         * @memberof kpqznn.HallRefreshCoinResponse
         * @instance
         */
        HallRefreshCoinResponse.prototype.coin = 0;

        /**
         * HallRefreshCoinResponse isInTable.
         * @member {boolean} isInTable
         * @memberof kpqznn.HallRefreshCoinResponse
         * @instance
         */
        HallRefreshCoinResponse.prototype.isInTable = false;

        /**
         * Creates a new HallRefreshCoinResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.HallRefreshCoinResponse
         * @static
         * @param {kpqznn.IHallRefreshCoinResponse=} [properties] Properties to set
         * @returns {kpqznn.HallRefreshCoinResponse} HallRefreshCoinResponse instance
         */
        HallRefreshCoinResponse.create = function create(properties) {
            return new HallRefreshCoinResponse(properties);
        };

        /**
         * Encodes the specified HallRefreshCoinResponse message. Does not implicitly {@link kpqznn.HallRefreshCoinResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.HallRefreshCoinResponse
         * @static
         * @param {kpqznn.IHallRefreshCoinResponse} message HallRefreshCoinResponse message or plain object to encode
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
         * Encodes the specified HallRefreshCoinResponse message, length delimited. Does not implicitly {@link kpqznn.HallRefreshCoinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.HallRefreshCoinResponse
         * @static
         * @param {kpqznn.IHallRefreshCoinResponse} message HallRefreshCoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallRefreshCoinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HallRefreshCoinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.HallRefreshCoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.HallRefreshCoinResponse} HallRefreshCoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallRefreshCoinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.HallRefreshCoinResponse();
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
         * @memberof kpqznn.HallRefreshCoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.HallRefreshCoinResponse} HallRefreshCoinResponse
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
         * @memberof kpqznn.HallRefreshCoinResponse
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
         * @memberof kpqznn.HallRefreshCoinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.HallRefreshCoinResponse} HallRefreshCoinResponse
         */
        HallRefreshCoinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.HallRefreshCoinResponse)
                return object;
            var message = new $root.kpqznn.HallRefreshCoinResponse();
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
         * @memberof kpqznn.HallRefreshCoinResponse
         * @static
         * @param {kpqznn.HallRefreshCoinResponse} message HallRefreshCoinResponse
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
         * @memberof kpqznn.HallRefreshCoinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HallRefreshCoinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HallRefreshCoinResponse;
    })();

    kpqznn.SendCoinRefreshResponse = (function() {

        /**
         * Properties of a SendCoinRefreshResponse.
         * @memberof kpqznn
         * @interface ISendCoinRefreshResponse
         * @property {number|null} [userId] SendCoinRefreshResponse userId
         * @property {number|null} [coin] SendCoinRefreshResponse coin
         * @property {boolean|null} [isInTable] SendCoinRefreshResponse isInTable
         * @property {boolean|null} [type] SendCoinRefreshResponse type
         * @property {number|null} [addCoin] SendCoinRefreshResponse addCoin
         */

        /**
         * Constructs a new SendCoinRefreshResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendCoinRefreshResponse.
         * @implements ISendCoinRefreshResponse
         * @constructor
         * @param {kpqznn.ISendCoinRefreshResponse=} [properties] Properties to set
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
         * @memberof kpqznn.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.userId = 0;

        /**
         * SendCoinRefreshResponse coin.
         * @member {number} coin
         * @memberof kpqznn.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.coin = 0;

        /**
         * SendCoinRefreshResponse isInTable.
         * @member {boolean} isInTable
         * @memberof kpqznn.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.isInTable = false;

        /**
         * SendCoinRefreshResponse type.
         * @member {boolean} type
         * @memberof kpqznn.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.type = false;

        /**
         * SendCoinRefreshResponse addCoin.
         * @member {number} addCoin
         * @memberof kpqznn.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.addCoin = 0;

        /**
         * Creates a new SendCoinRefreshResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendCoinRefreshResponse
         * @static
         * @param {kpqznn.ISendCoinRefreshResponse=} [properties] Properties to set
         * @returns {kpqznn.SendCoinRefreshResponse} SendCoinRefreshResponse instance
         */
        SendCoinRefreshResponse.create = function create(properties) {
            return new SendCoinRefreshResponse(properties);
        };

        /**
         * Encodes the specified SendCoinRefreshResponse message. Does not implicitly {@link kpqznn.SendCoinRefreshResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendCoinRefreshResponse
         * @static
         * @param {kpqznn.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
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
         * Encodes the specified SendCoinRefreshResponse message, length delimited. Does not implicitly {@link kpqznn.SendCoinRefreshResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendCoinRefreshResponse
         * @static
         * @param {kpqznn.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinRefreshResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendCoinRefreshResponse} SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinRefreshResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendCoinRefreshResponse();
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
         * @memberof kpqznn.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendCoinRefreshResponse} SendCoinRefreshResponse
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
         * @memberof kpqznn.SendCoinRefreshResponse
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
         * @memberof kpqznn.SendCoinRefreshResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendCoinRefreshResponse} SendCoinRefreshResponse
         */
        SendCoinRefreshResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendCoinRefreshResponse)
                return object;
            var message = new $root.kpqznn.SendCoinRefreshResponse();
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
         * @memberof kpqznn.SendCoinRefreshResponse
         * @static
         * @param {kpqznn.SendCoinRefreshResponse} message SendCoinRefreshResponse
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
         * @memberof kpqznn.SendCoinRefreshResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCoinRefreshResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCoinRefreshResponse;
    })();

    kpqznn.RoomListRequest = (function() {

        /**
         * Properties of a RoomListRequest.
         * @memberof kpqznn
         * @interface IRoomListRequest
         */

        /**
         * Constructs a new RoomListRequest.
         * @memberof kpqznn
         * @classdesc Represents a RoomListRequest.
         * @implements IRoomListRequest
         * @constructor
         * @param {kpqznn.IRoomListRequest=} [properties] Properties to set
         */
        function RoomListRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RoomListRequest instance using the specified properties.
         * @function create
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {kpqznn.IRoomListRequest=} [properties] Properties to set
         * @returns {kpqznn.RoomListRequest} RoomListRequest instance
         */
        RoomListRequest.create = function create(properties) {
            return new RoomListRequest(properties);
        };

        /**
         * Encodes the specified RoomListRequest message. Does not implicitly {@link kpqznn.RoomListRequest.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {kpqznn.IRoomListRequest} message RoomListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RoomListRequest message, length delimited. Does not implicitly {@link kpqznn.RoomListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {kpqznn.IRoomListRequest} message RoomListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.RoomListRequest} RoomListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.RoomListRequest();
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
         * Decodes a RoomListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.RoomListRequest} RoomListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListRequest message.
         * @function verify
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RoomListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.RoomListRequest} RoomListRequest
         */
        RoomListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.RoomListRequest)
                return object;
            return new $root.kpqznn.RoomListRequest();
        };

        /**
         * Creates a plain object from a RoomListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.RoomListRequest
         * @static
         * @param {kpqznn.RoomListRequest} message RoomListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RoomListRequest to JSON.
         * @function toJSON
         * @memberof kpqznn.RoomListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListRequest;
    })();

    kpqznn.RoomList = (function() {

        /**
         * Properties of a RoomList.
         * @memberof kpqznn
         * @interface IRoomList
         * @property {number|null} [gameNo] RoomList gameNo
         * @property {string|null} [name] RoomList name
         * @property {number|null} [baseScore] RoomList baseScore
         * @property {number|null} [limit] RoomList limit
         */

        /**
         * Constructs a new RoomList.
         * @memberof kpqznn
         * @classdesc Represents a RoomList.
         * @implements IRoomList
         * @constructor
         * @param {kpqznn.IRoomList=} [properties] Properties to set
         */
        function RoomList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomList gameNo.
         * @member {number} gameNo
         * @memberof kpqznn.RoomList
         * @instance
         */
        RoomList.prototype.gameNo = 0;

        /**
         * RoomList name.
         * @member {string} name
         * @memberof kpqznn.RoomList
         * @instance
         */
        RoomList.prototype.name = "";

        /**
         * RoomList baseScore.
         * @member {number} baseScore
         * @memberof kpqznn.RoomList
         * @instance
         */
        RoomList.prototype.baseScore = 0;

        /**
         * RoomList limit.
         * @member {number} limit
         * @memberof kpqznn.RoomList
         * @instance
         */
        RoomList.prototype.limit = 0;

        /**
         * Creates a new RoomList instance using the specified properties.
         * @function create
         * @memberof kpqznn.RoomList
         * @static
         * @param {kpqznn.IRoomList=} [properties] Properties to set
         * @returns {kpqznn.RoomList} RoomList instance
         */
        RoomList.create = function create(properties) {
            return new RoomList(properties);
        };

        /**
         * Encodes the specified RoomList message. Does not implicitly {@link kpqznn.RoomList.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.RoomList
         * @static
         * @param {kpqznn.IRoomList} message RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameNo);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.baseScore);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified RoomList message, length delimited. Does not implicitly {@link kpqznn.RoomList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.RoomList
         * @static
         * @param {kpqznn.IRoomList} message RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomList message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.RoomList} RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.RoomList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameNo = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.baseScore = reader.int32();
                    break;
                case 4:
                    message.limit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.RoomList} RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomList message.
         * @function verify
         * @memberof kpqznn.RoomList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                if (!$util.isInteger(message.gameNo))
                    return "gameNo: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                if (!$util.isInteger(message.baseScore))
                    return "baseScore: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a RoomList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.RoomList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.RoomList} RoomList
         */
        RoomList.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.RoomList)
                return object;
            var message = new $root.kpqznn.RoomList();
            if (object.gameNo != null)
                message.gameNo = object.gameNo | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.baseScore != null)
                message.baseScore = object.baseScore | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.RoomList
         * @static
         * @param {kpqznn.RoomList} message RoomList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameNo = 0;
                object.name = "";
                object.baseScore = 0;
                object.limit = 0;
            }
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                object.gameNo = message.gameNo;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                object.baseScore = message.baseScore;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this RoomList to JSON.
         * @function toJSON
         * @memberof kpqznn.RoomList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomList;
    })();

    kpqznn.RoomListResponse = (function() {

        /**
         * Properties of a RoomListResponse.
         * @memberof kpqznn
         * @interface IRoomListResponse
         * @property {Array.<kpqznn.IRoomList>|null} [roomList] RoomListResponse roomList
         */

        /**
         * Constructs a new RoomListResponse.
         * @memberof kpqznn
         * @classdesc Represents a RoomListResponse.
         * @implements IRoomListResponse
         * @constructor
         * @param {kpqznn.IRoomListResponse=} [properties] Properties to set
         */
        function RoomListResponse(properties) {
            this.roomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomListResponse roomList.
         * @member {Array.<kpqznn.IRoomList>} roomList
         * @memberof kpqznn.RoomListResponse
         * @instance
         */
        RoomListResponse.prototype.roomList = $util.emptyArray;

        /**
         * Creates a new RoomListResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {kpqznn.IRoomListResponse=} [properties] Properties to set
         * @returns {kpqznn.RoomListResponse} RoomListResponse instance
         */
        RoomListResponse.create = function create(properties) {
            return new RoomListResponse(properties);
        };

        /**
         * Encodes the specified RoomListResponse message. Does not implicitly {@link kpqznn.RoomListResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {kpqznn.IRoomListResponse} message RoomListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomList != null && message.roomList.length)
                for (var i = 0; i < message.roomList.length; ++i)
                    $root.kpqznn.RoomList.encode(message.roomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomListResponse message, length delimited. Does not implicitly {@link kpqznn.RoomListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {kpqznn.IRoomListResponse} message RoomListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.RoomListResponse} RoomListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.RoomListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roomList && message.roomList.length))
                        message.roomList = [];
                    message.roomList.push($root.kpqznn.RoomList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.RoomListResponse} RoomListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListResponse message.
         * @function verify
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomList != null && message.hasOwnProperty("roomList")) {
                if (!Array.isArray(message.roomList))
                    return "roomList: array expected";
                for (var i = 0; i < message.roomList.length; ++i) {
                    var error = $root.kpqznn.RoomList.verify(message.roomList[i]);
                    if (error)
                        return "roomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.RoomListResponse} RoomListResponse
         */
        RoomListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.RoomListResponse)
                return object;
            var message = new $root.kpqznn.RoomListResponse();
            if (object.roomList) {
                if (!Array.isArray(object.roomList))
                    throw TypeError(".kpqznn.RoomListResponse.roomList: array expected");
                message.roomList = [];
                for (var i = 0; i < object.roomList.length; ++i) {
                    if (typeof object.roomList[i] !== "object")
                        throw TypeError(".kpqznn.RoomListResponse.roomList: object expected");
                    message.roomList[i] = $root.kpqznn.RoomList.fromObject(object.roomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.RoomListResponse
         * @static
         * @param {kpqznn.RoomListResponse} message RoomListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roomList = [];
            if (message.roomList && message.roomList.length) {
                object.roomList = [];
                for (var j = 0; j < message.roomList.length; ++j)
                    object.roomList[j] = $root.kpqznn.RoomList.toObject(message.roomList[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomListResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.RoomListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListResponse;
    })();

    kpqznn.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof kpqznn
         * @interface IRequest
         * @property {kpqznn.Request.CMD|null} [cmd] Request cmd
         * @property {kpqznn.IUserReadyRequest|null} [userReadyRequest] Request userReadyRequest
         * @property {kpqznn.IUserQuitRequest|null} [userQuitRequest] Request userQuitRequest
         * @property {kpqznn.IMessageRequest|null} [messageRequest] Request messageRequest
         * @property {kpqznn.IDelayCheckRequest|null} [delayCheckRequest] Request delayCheckRequest
         * @property {kpqznn.IUserReconnectRequest|null} [userReconnectRequest] Request userReconnectRequest
         * @property {kpqznn.IBetRequest|null} [betRequest] Request betRequest
         * @property {kpqznn.IShowCardRequest|null} [showCardRequest] Request showCardRequest
         * @property {kpqznn.IQiangZhuangRequest|null} [qiangZhuangRequest] Request qiangZhuangRequest
         * @property {kpqznn.IChangeTableRequest|null} [changeTableRequest] Request changeTableRequest
         * @property {kpqznn.IKickedOutRequest|null} [kickedOutRequest] Request kickedOutRequest
         * @property {kpqznn.IJoinTableRequest|null} [coinJoinTableRequest] Request coinJoinTableRequest
         * @property {kpqznn.IUserOnBackRequest|null} [userOnBackRequest] Request userOnBackRequest
         * @property {kpqznn.IRoomListRequest|null} [roomListRequest] Request roomListRequest
         * @property {kpqznn.IHallRefreshCoinRequest|null} [hallRefreshCoinRequest] Request hallRefreshCoinRequest
         */

        /**
         * Constructs a new Request.
         * @memberof kpqznn
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {kpqznn.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {kpqznn.Request.CMD} cmd
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request userReadyRequest.
         * @member {kpqznn.IUserReadyRequest|null|undefined} userReadyRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.userReadyRequest = null;

        /**
         * Request userQuitRequest.
         * @member {kpqznn.IUserQuitRequest|null|undefined} userQuitRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.userQuitRequest = null;

        /**
         * Request messageRequest.
         * @member {kpqznn.IMessageRequest|null|undefined} messageRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.messageRequest = null;

        /**
         * Request delayCheckRequest.
         * @member {kpqznn.IDelayCheckRequest|null|undefined} delayCheckRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.delayCheckRequest = null;

        /**
         * Request userReconnectRequest.
         * @member {kpqznn.IUserReconnectRequest|null|undefined} userReconnectRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.userReconnectRequest = null;

        /**
         * Request betRequest.
         * @member {kpqznn.IBetRequest|null|undefined} betRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.betRequest = null;

        /**
         * Request showCardRequest.
         * @member {kpqznn.IShowCardRequest|null|undefined} showCardRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.showCardRequest = null;

        /**
         * Request qiangZhuangRequest.
         * @member {kpqznn.IQiangZhuangRequest|null|undefined} qiangZhuangRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.qiangZhuangRequest = null;

        /**
         * Request changeTableRequest.
         * @member {kpqznn.IChangeTableRequest|null|undefined} changeTableRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.changeTableRequest = null;

        /**
         * Request kickedOutRequest.
         * @member {kpqznn.IKickedOutRequest|null|undefined} kickedOutRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.kickedOutRequest = null;

        /**
         * Request coinJoinTableRequest.
         * @member {kpqznn.IJoinTableRequest|null|undefined} coinJoinTableRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.coinJoinTableRequest = null;

        /**
         * Request userOnBackRequest.
         * @member {kpqznn.IUserOnBackRequest|null|undefined} userOnBackRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.userOnBackRequest = null;

        /**
         * Request roomListRequest.
         * @member {kpqznn.IRoomListRequest|null|undefined} roomListRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.roomListRequest = null;

        /**
         * Request hallRefreshCoinRequest.
         * @member {kpqznn.IHallRefreshCoinRequest|null|undefined} hallRefreshCoinRequest
         * @memberof kpqznn.Request
         * @instance
         */
        Request.prototype.hallRefreshCoinRequest = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof kpqznn.Request
         * @static
         * @param {kpqznn.IRequest=} [properties] Properties to set
         * @returns {kpqznn.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link kpqznn.Request.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.Request
         * @static
         * @param {kpqznn.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.userReadyRequest != null && message.hasOwnProperty("userReadyRequest"))
                $root.kpqznn.UserReadyRequest.encode(message.userReadyRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                $root.kpqznn.UserQuitRequest.encode(message.userQuitRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.kickedOutRequest != null && message.hasOwnProperty("kickedOutRequest"))
                $root.kpqznn.KickedOutRequest.encode(message.kickedOutRequest, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                $root.kpqznn.MessageRequest.encode(message.messageRequest, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                $root.kpqznn.DelayCheckRequest.encode(message.delayCheckRequest, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                $root.kpqznn.UserReconnectRequest.encode(message.userReconnectRequest, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.betRequest != null && message.hasOwnProperty("betRequest"))
                $root.kpqznn.BetRequest.encode(message.betRequest, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.showCardRequest != null && message.hasOwnProperty("showCardRequest"))
                $root.kpqznn.ShowCardRequest.encode(message.showCardRequest, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.qiangZhuangRequest != null && message.hasOwnProperty("qiangZhuangRequest"))
                $root.kpqznn.QiangZhuangRequest.encode(message.qiangZhuangRequest, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.changeTableRequest != null && message.hasOwnProperty("changeTableRequest"))
                $root.kpqznn.ChangeTableRequest.encode(message.changeTableRequest, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.coinJoinTableRequest != null && message.hasOwnProperty("coinJoinTableRequest"))
                $root.kpqznn.JoinTableRequest.encode(message.coinJoinTableRequest, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                $root.kpqznn.UserOnBackRequest.encode(message.userOnBackRequest, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.roomListRequest != null && message.hasOwnProperty("roomListRequest"))
                $root.kpqznn.RoomListRequest.encode(message.roomListRequest, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.hallRefreshCoinRequest != null && message.hasOwnProperty("hallRefreshCoinRequest"))
                $root.kpqznn.HallRefreshCoinRequest.encode(message.hallRefreshCoinRequest, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link kpqznn.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.Request
         * @static
         * @param {kpqznn.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 11:
                    message.userReadyRequest = $root.kpqznn.UserReadyRequest.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.userQuitRequest = $root.kpqznn.UserQuitRequest.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.messageRequest = $root.kpqznn.MessageRequest.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.delayCheckRequest = $root.kpqznn.DelayCheckRequest.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.userReconnectRequest = $root.kpqznn.UserReconnectRequest.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.betRequest = $root.kpqznn.BetRequest.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.showCardRequest = $root.kpqznn.ShowCardRequest.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.qiangZhuangRequest = $root.kpqznn.QiangZhuangRequest.decode(reader, reader.uint32());
                    break;
                case 28:
                    message.changeTableRequest = $root.kpqznn.ChangeTableRequest.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.kickedOutRequest = $root.kpqznn.KickedOutRequest.decode(reader, reader.uint32());
                    break;
                case 29:
                    message.coinJoinTableRequest = $root.kpqznn.JoinTableRequest.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.userOnBackRequest = $root.kpqznn.UserOnBackRequest.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.roomListRequest = $root.kpqznn.RoomListRequest.decode(reader, reader.uint32());
                    break;
                case 32:
                    message.hallRefreshCoinRequest = $root.kpqznn.HallRefreshCoinRequest.decode(reader, reader.uint32());
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
         * @memberof kpqznn.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.Request} Request
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
         * @memberof kpqznn.Request
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
                case 2002:
                case 2009:
                case 2010:
                case 2012:
                case 2015:
                case 2024:
                case 2023:
                case 2027:
                case 2059:
                case 2030:
                case 2031:
                case 2035:
                case 2061:
                case 2060:
                case 2062:
                case 2044:
                case 2080:
                case 2081:
                case 2106:
                case 2401:
                case 3000:
                case 3003:
                case 4001:
                case 10000:
                case 20015:
                case 20004:
                case 20005:
                case 20010:
                case 20019:
                case 20017:
                    break;
                }
            if (message.userReadyRequest != null && message.hasOwnProperty("userReadyRequest")) {
                var error = $root.kpqznn.UserReadyRequest.verify(message.userReadyRequest);
                if (error)
                    return "userReadyRequest." + error;
            }
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest")) {
                var error = $root.kpqznn.UserQuitRequest.verify(message.userQuitRequest);
                if (error)
                    return "userQuitRequest." + error;
            }
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest")) {
                var error = $root.kpqznn.MessageRequest.verify(message.messageRequest);
                if (error)
                    return "messageRequest." + error;
            }
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest")) {
                var error = $root.kpqznn.DelayCheckRequest.verify(message.delayCheckRequest);
                if (error)
                    return "delayCheckRequest." + error;
            }
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest")) {
                var error = $root.kpqznn.UserReconnectRequest.verify(message.userReconnectRequest);
                if (error)
                    return "userReconnectRequest." + error;
            }
            if (message.betRequest != null && message.hasOwnProperty("betRequest")) {
                var error = $root.kpqznn.BetRequest.verify(message.betRequest);
                if (error)
                    return "betRequest." + error;
            }
            if (message.showCardRequest != null && message.hasOwnProperty("showCardRequest")) {
                var error = $root.kpqznn.ShowCardRequest.verify(message.showCardRequest);
                if (error)
                    return "showCardRequest." + error;
            }
            if (message.qiangZhuangRequest != null && message.hasOwnProperty("qiangZhuangRequest")) {
                var error = $root.kpqznn.QiangZhuangRequest.verify(message.qiangZhuangRequest);
                if (error)
                    return "qiangZhuangRequest." + error;
            }
            if (message.changeTableRequest != null && message.hasOwnProperty("changeTableRequest")) {
                var error = $root.kpqznn.ChangeTableRequest.verify(message.changeTableRequest);
                if (error)
                    return "changeTableRequest." + error;
            }
            if (message.kickedOutRequest != null && message.hasOwnProperty("kickedOutRequest")) {
                var error = $root.kpqznn.KickedOutRequest.verify(message.kickedOutRequest);
                if (error)
                    return "kickedOutRequest." + error;
            }
            if (message.coinJoinTableRequest != null && message.hasOwnProperty("coinJoinTableRequest")) {
                var error = $root.kpqznn.JoinTableRequest.verify(message.coinJoinTableRequest);
                if (error)
                    return "coinJoinTableRequest." + error;
            }
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest")) {
                var error = $root.kpqznn.UserOnBackRequest.verify(message.userOnBackRequest);
                if (error)
                    return "userOnBackRequest." + error;
            }
            if (message.roomListRequest != null && message.hasOwnProperty("roomListRequest")) {
                var error = $root.kpqznn.RoomListRequest.verify(message.roomListRequest);
                if (error)
                    return "roomListRequest." + error;
            }
            if (message.hallRefreshCoinRequest != null && message.hasOwnProperty("hallRefreshCoinRequest")) {
                var error = $root.kpqznn.HallRefreshCoinRequest.verify(message.hallRefreshCoinRequest);
                if (error)
                    return "hallRefreshCoinRequest." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.Request)
                return object;
            var message = new $root.kpqznn.Request();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "HALL_REFRESH_COIN":
            case 100:
                message.cmd = 100;
                break;
            case "JOIN_TABLE":
            case 2002:
                message.cmd = 2002;
                break;
            case "SEND_USER_INFO":
            case 2009:
                message.cmd = 2009;
                break;
            case "SHOW_CARD":
            case 2010:
                message.cmd = 2010;
                break;
            case "BET":
            case 2012:
                message.cmd = 2012;
                break;
            case "SEND_ROUND_RESULT":
            case 2015:
                message.cmd = 2015;
                break;
            case "QIANG_ZHUANG":
            case 2024:
                message.cmd = 2024;
                break;
            case "SEND_ZHUANG":
            case 2023:
                message.cmd = 2023;
                break;
            case "SEND_USER_CARD":
            case 2027:
                message.cmd = 2027;
                break;
            case "SEND_USER_BEST_CARD":
            case 2059:
                message.cmd = 2059;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "MESSAGE":
            case 2060:
                message.cmd = 2060;
                break;
            case "SEND_COIN_REFRESH":
            case 2062:
                message.cmd = 2062;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "USER_READY":
            case 2106:
                message.cmd = 2106;
                break;
            case "SEND_GAME_NOTICE":
            case 2401:
                message.cmd = 2401;
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
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            case "SEND_REMAIN_TIME":
            case 20015:
                message.cmd = 20015;
                break;
            case "CHANGE_TABLE":
            case 20004:
                message.cmd = 20004;
                break;
            case "ROOMLIST":
            case 20005:
                message.cmd = 20005;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "SEND_LEAVE_TABLE":
            case 20019:
                message.cmd = 20019;
                break;
            case "SEND_COIN_TABLE_INFO":
            case 20017:
                message.cmd = 20017;
                break;
            }
            if (object.userReadyRequest != null) {
                if (typeof object.userReadyRequest !== "object")
                    throw TypeError(".kpqznn.Request.userReadyRequest: object expected");
                message.userReadyRequest = $root.kpqznn.UserReadyRequest.fromObject(object.userReadyRequest);
            }
            if (object.userQuitRequest != null) {
                if (typeof object.userQuitRequest !== "object")
                    throw TypeError(".kpqznn.Request.userQuitRequest: object expected");
                message.userQuitRequest = $root.kpqznn.UserQuitRequest.fromObject(object.userQuitRequest);
            }
            if (object.messageRequest != null) {
                if (typeof object.messageRequest !== "object")
                    throw TypeError(".kpqznn.Request.messageRequest: object expected");
                message.messageRequest = $root.kpqznn.MessageRequest.fromObject(object.messageRequest);
            }
            if (object.delayCheckRequest != null) {
                if (typeof object.delayCheckRequest !== "object")
                    throw TypeError(".kpqznn.Request.delayCheckRequest: object expected");
                message.delayCheckRequest = $root.kpqznn.DelayCheckRequest.fromObject(object.delayCheckRequest);
            }
            if (object.userReconnectRequest != null) {
                if (typeof object.userReconnectRequest !== "object")
                    throw TypeError(".kpqznn.Request.userReconnectRequest: object expected");
                message.userReconnectRequest = $root.kpqznn.UserReconnectRequest.fromObject(object.userReconnectRequest);
            }
            if (object.betRequest != null) {
                if (typeof object.betRequest !== "object")
                    throw TypeError(".kpqznn.Request.betRequest: object expected");
                message.betRequest = $root.kpqznn.BetRequest.fromObject(object.betRequest);
            }
            if (object.showCardRequest != null) {
                if (typeof object.showCardRequest !== "object")
                    throw TypeError(".kpqznn.Request.showCardRequest: object expected");
                message.showCardRequest = $root.kpqznn.ShowCardRequest.fromObject(object.showCardRequest);
            }
            if (object.qiangZhuangRequest != null) {
                if (typeof object.qiangZhuangRequest !== "object")
                    throw TypeError(".kpqznn.Request.qiangZhuangRequest: object expected");
                message.qiangZhuangRequest = $root.kpqznn.QiangZhuangRequest.fromObject(object.qiangZhuangRequest);
            }
            if (object.changeTableRequest != null) {
                if (typeof object.changeTableRequest !== "object")
                    throw TypeError(".kpqznn.Request.changeTableRequest: object expected");
                message.changeTableRequest = $root.kpqznn.ChangeTableRequest.fromObject(object.changeTableRequest);
            }
            if (object.kickedOutRequest != null) {
                if (typeof object.kickedOutRequest !== "object")
                    throw TypeError(".kpqznn.Request.kickedOutRequest: object expected");
                message.kickedOutRequest = $root.kpqznn.KickedOutRequest.fromObject(object.kickedOutRequest);
            }
            if (object.coinJoinTableRequest != null) {
                if (typeof object.coinJoinTableRequest !== "object")
                    throw TypeError(".kpqznn.Request.coinJoinTableRequest: object expected");
                message.coinJoinTableRequest = $root.kpqznn.JoinTableRequest.fromObject(object.coinJoinTableRequest);
            }
            if (object.userOnBackRequest != null) {
                if (typeof object.userOnBackRequest !== "object")
                    throw TypeError(".kpqznn.Request.userOnBackRequest: object expected");
                message.userOnBackRequest = $root.kpqznn.UserOnBackRequest.fromObject(object.userOnBackRequest);
            }
            if (object.roomListRequest != null) {
                if (typeof object.roomListRequest !== "object")
                    throw TypeError(".kpqznn.Request.roomListRequest: object expected");
                message.roomListRequest = $root.kpqznn.RoomListRequest.fromObject(object.roomListRequest);
            }
            if (object.hallRefreshCoinRequest != null) {
                if (typeof object.hallRefreshCoinRequest !== "object")
                    throw TypeError(".kpqznn.Request.hallRefreshCoinRequest: object expected");
                message.hallRefreshCoinRequest = $root.kpqznn.HallRefreshCoinRequest.fromObject(object.hallRefreshCoinRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.Request
         * @static
         * @param {kpqznn.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.userReadyRequest = null;
                object.userQuitRequest = null;
                object.kickedOutRequest = null;
                object.messageRequest = null;
                object.delayCheckRequest = null;
                object.userReconnectRequest = null;
                object.betRequest = null;
                object.showCardRequest = null;
                object.qiangZhuangRequest = null;
                object.changeTableRequest = null;
                object.coinJoinTableRequest = null;
                object.userOnBackRequest = null;
                object.roomListRequest = null;
                object.hallRefreshCoinRequest = null;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.kpqznn.Request.CMD[message.cmd] : message.cmd;
            if (message.userReadyRequest != null && message.hasOwnProperty("userReadyRequest"))
                object.userReadyRequest = $root.kpqznn.UserReadyRequest.toObject(message.userReadyRequest, options);
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                object.userQuitRequest = $root.kpqznn.UserQuitRequest.toObject(message.userQuitRequest, options);
            if (message.kickedOutRequest != null && message.hasOwnProperty("kickedOutRequest"))
                object.kickedOutRequest = $root.kpqznn.KickedOutRequest.toObject(message.kickedOutRequest, options);
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                object.messageRequest = $root.kpqznn.MessageRequest.toObject(message.messageRequest, options);
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                object.delayCheckRequest = $root.kpqznn.DelayCheckRequest.toObject(message.delayCheckRequest, options);
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                object.userReconnectRequest = $root.kpqznn.UserReconnectRequest.toObject(message.userReconnectRequest, options);
            if (message.betRequest != null && message.hasOwnProperty("betRequest"))
                object.betRequest = $root.kpqznn.BetRequest.toObject(message.betRequest, options);
            if (message.showCardRequest != null && message.hasOwnProperty("showCardRequest"))
                object.showCardRequest = $root.kpqznn.ShowCardRequest.toObject(message.showCardRequest, options);
            if (message.qiangZhuangRequest != null && message.hasOwnProperty("qiangZhuangRequest"))
                object.qiangZhuangRequest = $root.kpqznn.QiangZhuangRequest.toObject(message.qiangZhuangRequest, options);
            if (message.changeTableRequest != null && message.hasOwnProperty("changeTableRequest"))
                object.changeTableRequest = $root.kpqznn.ChangeTableRequest.toObject(message.changeTableRequest, options);
            if (message.coinJoinTableRequest != null && message.hasOwnProperty("coinJoinTableRequest"))
                object.coinJoinTableRequest = $root.kpqznn.JoinTableRequest.toObject(message.coinJoinTableRequest, options);
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                object.userOnBackRequest = $root.kpqznn.UserOnBackRequest.toObject(message.userOnBackRequest, options);
            if (message.roomListRequest != null && message.hasOwnProperty("roomListRequest"))
                object.roomListRequest = $root.kpqznn.RoomListRequest.toObject(message.roomListRequest, options);
            if (message.hallRefreshCoinRequest != null && message.hasOwnProperty("hallRefreshCoinRequest"))
                object.hallRefreshCoinRequest = $root.kpqznn.HallRefreshCoinRequest.toObject(message.hallRefreshCoinRequest, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof kpqznn.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CMD enum.
         * @name kpqznn.Request.CMD
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} HALL_REFRESH_COIN=100 HALL_REFRESH_COIN value
         * @property {number} JOIN_TABLE=2002 JOIN_TABLE value
         * @property {number} SEND_USER_INFO=2009 SEND_USER_INFO value
         * @property {number} SHOW_CARD=2010 SHOW_CARD value
         * @property {number} BET=2012 BET value
         * @property {number} SEND_ROUND_RESULT=2015 SEND_ROUND_RESULT value
         * @property {number} QIANG_ZHUANG=2024 QIANG_ZHUANG value
         * @property {number} SEND_ZHUANG=2023 SEND_ZHUANG value
         * @property {number} SEND_USER_CARD=2027 SEND_USER_CARD value
         * @property {number} SEND_USER_BEST_CARD=2059 SEND_USER_BEST_CARD value
         * @property {number} USER_RECONNECT=2030 USER_RECONNECT value
         * @property {number} SEND_USER_RECONNECT=2031 SEND_USER_RECONNECT value
         * @property {number} SEND_RECONNECT_QUIT=2035 SEND_RECONNECT_QUIT value
         * @property {number} SEND_MESSAGE=2061 SEND_MESSAGE value
         * @property {number} MESSAGE=2060 MESSAGE value
         * @property {number} SEND_COIN_REFRESH=2062 SEND_COIN_REFRESH value
         * @property {number} USER_QUIT=2044 USER_QUIT value
         * @property {number} USER_ONBACK=2080 USER_ONBACK value
         * @property {number} SEND_USER_ONBACK=2081 SEND_USER_ONBACK value
         * @property {number} USER_READY=2106 USER_READY value
         * @property {number} SEND_GAME_NOTICE=2401 SEND_GAME_NOTICE value
         * @property {number} FORCE_OFFLINE=3000 FORCE_OFFLINE value
         * @property {number} DELAYQUIT_OFFLINE_RESP=3003 DELAYQUIT_OFFLINE_RESP value
         * @property {number} KICKEDOUT=4001 KICKEDOUT value
         * @property {number} SEND_HEART_BEAT=10000 SEND_HEART_BEAT value
         * @property {number} SEND_REMAIN_TIME=20015 SEND_REMAIN_TIME value
         * @property {number} CHANGE_TABLE=20004 CHANGE_TABLE value
         * @property {number} ROOMLIST=20005 ROOMLIST value
         * @property {number} DELAY_CHECK=20010 DELAY_CHECK value
         * @property {number} SEND_LEAVE_TABLE=20019 SEND_LEAVE_TABLE value
         * @property {number} SEND_COIN_TABLE_INFO=20017 SEND_COIN_TABLE_INFO value
         */
        Request.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[100] = "HALL_REFRESH_COIN"] = 100;
            values[valuesById[2002] = "JOIN_TABLE"] = 2002;
            values[valuesById[2009] = "SEND_USER_INFO"] = 2009;
            values[valuesById[2010] = "SHOW_CARD"] = 2010;
            values[valuesById[2012] = "BET"] = 2012;
            values[valuesById[2015] = "SEND_ROUND_RESULT"] = 2015;
            values[valuesById[2024] = "QIANG_ZHUANG"] = 2024;
            values[valuesById[2023] = "SEND_ZHUANG"] = 2023;
            values[valuesById[2027] = "SEND_USER_CARD"] = 2027;
            values[valuesById[2059] = "SEND_USER_BEST_CARD"] = 2059;
            values[valuesById[2030] = "USER_RECONNECT"] = 2030;
            values[valuesById[2031] = "SEND_USER_RECONNECT"] = 2031;
            values[valuesById[2035] = "SEND_RECONNECT_QUIT"] = 2035;
            values[valuesById[2061] = "SEND_MESSAGE"] = 2061;
            values[valuesById[2060] = "MESSAGE"] = 2060;
            values[valuesById[2062] = "SEND_COIN_REFRESH"] = 2062;
            values[valuesById[2044] = "USER_QUIT"] = 2044;
            values[valuesById[2080] = "USER_ONBACK"] = 2080;
            values[valuesById[2081] = "SEND_USER_ONBACK"] = 2081;
            values[valuesById[2106] = "USER_READY"] = 2106;
            values[valuesById[2401] = "SEND_GAME_NOTICE"] = 2401;
            values[valuesById[3000] = "FORCE_OFFLINE"] = 3000;
            values[valuesById[3003] = "DELAYQUIT_OFFLINE_RESP"] = 3003;
            values[valuesById[4001] = "KICKEDOUT"] = 4001;
            values[valuesById[10000] = "SEND_HEART_BEAT"] = 10000;
            values[valuesById[20015] = "SEND_REMAIN_TIME"] = 20015;
            values[valuesById[20004] = "CHANGE_TABLE"] = 20004;
            values[valuesById[20005] = "ROOMLIST"] = 20005;
            values[valuesById[20010] = "DELAY_CHECK"] = 20010;
            values[valuesById[20019] = "SEND_LEAVE_TABLE"] = 20019;
            values[valuesById[20017] = "SEND_COIN_TABLE_INFO"] = 20017;
            return values;
        })();

        return Request;
    })();

    kpqznn.UserReadyResponse = (function() {

        /**
         * Properties of a UserReadyResponse.
         * @memberof kpqznn
         * @interface IUserReadyResponse
         * @property {number|null} [userId] UserReadyResponse userId
         * @property {string|null} [tableId] UserReadyResponse tableId
         * @property {number|null} [owner] UserReadyResponse owner
         * @property {number|null} [state] UserReadyResponse state
         * @property {string|null} [gameInfo] UserReadyResponse gameInfo
         * @property {number|null} [gameId] UserReadyResponse gameId
         * @property {Array.<kpqznn.IUser>|null} [users] UserReadyResponse users
         */

        /**
         * Constructs a new UserReadyResponse.
         * @memberof kpqznn
         * @classdesc Represents a UserReadyResponse.
         * @implements IUserReadyResponse
         * @constructor
         * @param {kpqznn.IUserReadyResponse=} [properties] Properties to set
         */
        function UserReadyResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReadyResponse userId.
         * @member {number} userId
         * @memberof kpqznn.UserReadyResponse
         * @instance
         */
        UserReadyResponse.prototype.userId = 0;

        /**
         * UserReadyResponse tableId.
         * @member {string} tableId
         * @memberof kpqznn.UserReadyResponse
         * @instance
         */
        UserReadyResponse.prototype.tableId = "";

        /**
         * UserReadyResponse owner.
         * @member {number} owner
         * @memberof kpqznn.UserReadyResponse
         * @instance
         */
        UserReadyResponse.prototype.owner = 0;

        /**
         * UserReadyResponse state.
         * @member {number} state
         * @memberof kpqznn.UserReadyResponse
         * @instance
         */
        UserReadyResponse.prototype.state = 0;

        /**
         * UserReadyResponse gameInfo.
         * @member {string} gameInfo
         * @memberof kpqznn.UserReadyResponse
         * @instance
         */
        UserReadyResponse.prototype.gameInfo = "";

        /**
         * UserReadyResponse gameId.
         * @member {number} gameId
         * @memberof kpqznn.UserReadyResponse
         * @instance
         */
        UserReadyResponse.prototype.gameId = 0;

        /**
         * UserReadyResponse users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.UserReadyResponse
         * @instance
         */
        UserReadyResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new UserReadyResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {kpqznn.IUserReadyResponse=} [properties] Properties to set
         * @returns {kpqznn.UserReadyResponse} UserReadyResponse instance
         */
        UserReadyResponse.create = function create(properties) {
            return new UserReadyResponse(properties);
        };

        /**
         * Encodes the specified UserReadyResponse message. Does not implicitly {@link kpqznn.UserReadyResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {kpqznn.IUserReadyResponse} message UserReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.owner);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.gameInfo);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameId);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserReadyResponse message, length delimited. Does not implicitly {@link kpqznn.UserReadyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {kpqznn.IUserReadyResponse} message UserReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReadyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserReadyResponse} UserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserReadyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.owner = reader.int32();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.gameInfo = reader.string();
                    break;
                case 6:
                    message.gameId = reader.int32();
                    break;
                case 7:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReadyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserReadyResponse} UserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReadyResponse message.
         * @function verify
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReadyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserReadyResponse} UserReadyResponse
         */
        UserReadyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserReadyResponse)
                return object;
            var message = new $root.kpqznn.UserReadyResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.UserReadyResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.UserReadyResponse.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserReadyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserReadyResponse
         * @static
         * @param {kpqznn.UserReadyResponse} message UserReadyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReadyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.userId = 0;
                object.tableId = "";
                object.owner = 0;
                object.state = 0;
                object.gameInfo = "";
                object.gameId = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this UserReadyResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.UserReadyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReadyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReadyResponse;
    })();

    kpqznn.BetResponse = (function() {

        /**
         * Properties of a BetResponse.
         * @memberof kpqznn
         * @interface IBetResponse
         * @property {number|null} [userId] BetResponse userId
         * @property {number|null} [state] BetResponse state
         * @property {number|null} [postion] BetResponse postion
         * @property {Array.<kpqznn.IUser>|null} [users] BetResponse users
         */

        /**
         * Constructs a new BetResponse.
         * @memberof kpqznn
         * @classdesc Represents a BetResponse.
         * @implements IBetResponse
         * @constructor
         * @param {kpqznn.IBetResponse=} [properties] Properties to set
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
         * @memberof kpqznn.BetResponse
         * @instance
         */
        BetResponse.prototype.userId = 0;

        /**
         * BetResponse state.
         * @member {number} state
         * @memberof kpqznn.BetResponse
         * @instance
         */
        BetResponse.prototype.state = 0;

        /**
         * BetResponse postion.
         * @member {number} postion
         * @memberof kpqznn.BetResponse
         * @instance
         */
        BetResponse.prototype.postion = 0;

        /**
         * BetResponse users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.BetResponse
         * @instance
         */
        BetResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new BetResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.BetResponse
         * @static
         * @param {kpqznn.IBetResponse=} [properties] Properties to set
         * @returns {kpqznn.BetResponse} BetResponse instance
         */
        BetResponse.create = function create(properties) {
            return new BetResponse(properties);
        };

        /**
         * Encodes the specified BetResponse message. Does not implicitly {@link kpqznn.BetResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.BetResponse
         * @static
         * @param {kpqznn.IBetResponse} message BetResponse message or plain object to encode
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
            if (message.postion != null && message.hasOwnProperty("postion"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.postion);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetResponse message, length delimited. Does not implicitly {@link kpqznn.BetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.BetResponse
         * @static
         * @param {kpqznn.IBetResponse} message BetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.BetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.BetResponse} BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.BetResponse();
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
                    message.postion = reader.int32();
                    break;
                case 4:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
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
         * @memberof kpqznn.BetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.BetResponse} BetResponse
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
         * @memberof kpqznn.BetResponse
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
            if (message.postion != null && message.hasOwnProperty("postion"))
                if (!$util.isInteger(message.postion))
                    return "postion: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.BetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.BetResponse} BetResponse
         */
        BetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.BetResponse)
                return object;
            var message = new $root.kpqznn.BetResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.postion != null)
                message.postion = object.postion | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.BetResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.BetResponse.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.BetResponse
         * @static
         * @param {kpqznn.BetResponse} message BetResponse
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
                object.postion = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.postion != null && message.hasOwnProperty("postion"))
                object.postion = message.postion;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this BetResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.BetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResponse;
    })();

    kpqznn.ShowCardResponse = (function() {

        /**
         * Properties of a ShowCardResponse.
         * @memberof kpqznn
         * @interface IShowCardResponse
         * @property {number|null} [userId] ShowCardResponse userId
         * @property {number|null} [state] ShowCardResponse state
         * @property {kpqznn.IOutCard|null} [outCardDto] ShowCardResponse outCardDto
         */

        /**
         * Constructs a new ShowCardResponse.
         * @memberof kpqznn
         * @classdesc Represents a ShowCardResponse.
         * @implements IShowCardResponse
         * @constructor
         * @param {kpqznn.IShowCardResponse=} [properties] Properties to set
         */
        function ShowCardResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowCardResponse userId.
         * @member {number} userId
         * @memberof kpqznn.ShowCardResponse
         * @instance
         */
        ShowCardResponse.prototype.userId = 0;

        /**
         * ShowCardResponse state.
         * @member {number} state
         * @memberof kpqznn.ShowCardResponse
         * @instance
         */
        ShowCardResponse.prototype.state = 0;

        /**
         * ShowCardResponse outCardDto.
         * @member {kpqznn.IOutCard|null|undefined} outCardDto
         * @memberof kpqznn.ShowCardResponse
         * @instance
         */
        ShowCardResponse.prototype.outCardDto = null;

        /**
         * Creates a new ShowCardResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {kpqznn.IShowCardResponse=} [properties] Properties to set
         * @returns {kpqznn.ShowCardResponse} ShowCardResponse instance
         */
        ShowCardResponse.create = function create(properties) {
            return new ShowCardResponse(properties);
        };

        /**
         * Encodes the specified ShowCardResponse message. Does not implicitly {@link kpqznn.ShowCardResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {kpqznn.IShowCardResponse} message ShowCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.outCardDto != null && message.hasOwnProperty("outCardDto"))
                $root.kpqznn.OutCard.encode(message.outCardDto, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ShowCardResponse message, length delimited. Does not implicitly {@link kpqznn.ShowCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {kpqznn.IShowCardResponse} message ShowCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShowCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.ShowCardResponse} ShowCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.ShowCardResponse();
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
                    message.outCardDto = $root.kpqznn.OutCard.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShowCardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.ShowCardResponse} ShowCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowCardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShowCardResponse message.
         * @function verify
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShowCardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.outCardDto != null && message.hasOwnProperty("outCardDto")) {
                var error = $root.kpqznn.OutCard.verify(message.outCardDto);
                if (error)
                    return "outCardDto." + error;
            }
            return null;
        };

        /**
         * Creates a ShowCardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.ShowCardResponse} ShowCardResponse
         */
        ShowCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.ShowCardResponse)
                return object;
            var message = new $root.kpqznn.ShowCardResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.outCardDto != null) {
                if (typeof object.outCardDto !== "object")
                    throw TypeError(".kpqznn.ShowCardResponse.outCardDto: object expected");
                message.outCardDto = $root.kpqznn.OutCard.fromObject(object.outCardDto);
            }
            return message;
        };

        /**
         * Creates a plain object from a ShowCardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.ShowCardResponse
         * @static
         * @param {kpqznn.ShowCardResponse} message ShowCardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShowCardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
                object.outCardDto = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.outCardDto != null && message.hasOwnProperty("outCardDto"))
                object.outCardDto = $root.kpqznn.OutCard.toObject(message.outCardDto, options);
            return object;
        };

        /**
         * Converts this ShowCardResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.ShowCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShowCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShowCardResponse;
    })();

    kpqznn.QiangZhuangResponse = (function() {

        /**
         * Properties of a QiangZhuangResponse.
         * @memberof kpqznn
         * @interface IQiangZhuangResponse
         * @property {number|null} [userId] QiangZhuangResponse userId
         * @property {number|null} [state] QiangZhuangResponse state
         * @property {Array.<kpqznn.IUser>|null} [users] QiangZhuangResponse users
         */

        /**
         * Constructs a new QiangZhuangResponse.
         * @memberof kpqznn
         * @classdesc Represents a QiangZhuangResponse.
         * @implements IQiangZhuangResponse
         * @constructor
         * @param {kpqznn.IQiangZhuangResponse=} [properties] Properties to set
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
         * @memberof kpqznn.QiangZhuangResponse
         * @instance
         */
        QiangZhuangResponse.prototype.userId = 0;

        /**
         * QiangZhuangResponse state.
         * @member {number} state
         * @memberof kpqznn.QiangZhuangResponse
         * @instance
         */
        QiangZhuangResponse.prototype.state = 0;

        /**
         * QiangZhuangResponse users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.QiangZhuangResponse
         * @instance
         */
        QiangZhuangResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new QiangZhuangResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.QiangZhuangResponse
         * @static
         * @param {kpqznn.IQiangZhuangResponse=} [properties] Properties to set
         * @returns {kpqznn.QiangZhuangResponse} QiangZhuangResponse instance
         */
        QiangZhuangResponse.create = function create(properties) {
            return new QiangZhuangResponse(properties);
        };

        /**
         * Encodes the specified QiangZhuangResponse message. Does not implicitly {@link kpqznn.QiangZhuangResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.QiangZhuangResponse
         * @static
         * @param {kpqznn.IQiangZhuangResponse} message QiangZhuangResponse message or plain object to encode
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
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QiangZhuangResponse message, length delimited. Does not implicitly {@link kpqznn.QiangZhuangResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.QiangZhuangResponse
         * @static
         * @param {kpqznn.IQiangZhuangResponse} message QiangZhuangResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QiangZhuangResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QiangZhuangResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.QiangZhuangResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.QiangZhuangResponse} QiangZhuangResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QiangZhuangResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.QiangZhuangResponse();
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
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
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
         * @memberof kpqznn.QiangZhuangResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.QiangZhuangResponse} QiangZhuangResponse
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
         * @memberof kpqznn.QiangZhuangResponse
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
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QiangZhuangResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.QiangZhuangResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.QiangZhuangResponse} QiangZhuangResponse
         */
        QiangZhuangResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.QiangZhuangResponse)
                return object;
            var message = new $root.kpqznn.QiangZhuangResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.QiangZhuangResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.QiangZhuangResponse.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QiangZhuangResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.QiangZhuangResponse
         * @static
         * @param {kpqznn.QiangZhuangResponse} message QiangZhuangResponse
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
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this QiangZhuangResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.QiangZhuangResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QiangZhuangResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QiangZhuangResponse;
    })();

    kpqznn.UserQuitResponse = (function() {

        /**
         * Properties of a UserQuitResponse.
         * @memberof kpqznn
         * @interface IUserQuitResponse
         * @property {number|null} [userId] UserQuitResponse userId
         * @property {string|null} [nickname] UserQuitResponse nickname
         * @property {number|null} [position] UserQuitResponse position
         * @property {string|null} [message] UserQuitResponse message
         * @property {string|null} [tableId] UserQuitResponse tableId
         */

        /**
         * Constructs a new UserQuitResponse.
         * @memberof kpqznn
         * @classdesc Represents a UserQuitResponse.
         * @implements IUserQuitResponse
         * @constructor
         * @param {kpqznn.IUserQuitResponse=} [properties] Properties to set
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
         * @memberof kpqznn.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.userId = 0;

        /**
         * UserQuitResponse nickname.
         * @member {string} nickname
         * @memberof kpqznn.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.nickname = "";

        /**
         * UserQuitResponse position.
         * @member {number} position
         * @memberof kpqznn.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.position = 0;

        /**
         * UserQuitResponse message.
         * @member {string} message
         * @memberof kpqznn.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.message = "";

        /**
         * UserQuitResponse tableId.
         * @member {string} tableId
         * @memberof kpqznn.UserQuitResponse
         * @instance
         */
        UserQuitResponse.prototype.tableId = "";

        /**
         * Creates a new UserQuitResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.UserQuitResponse
         * @static
         * @param {kpqznn.IUserQuitResponse=} [properties] Properties to set
         * @returns {kpqznn.UserQuitResponse} UserQuitResponse instance
         */
        UserQuitResponse.create = function create(properties) {
            return new UserQuitResponse(properties);
        };

        /**
         * Encodes the specified UserQuitResponse message. Does not implicitly {@link kpqznn.UserQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserQuitResponse
         * @static
         * @param {kpqznn.IUserQuitResponse} message UserQuitResponse message or plain object to encode
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
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified UserQuitResponse message, length delimited. Does not implicitly {@link kpqznn.UserQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserQuitResponse
         * @static
         * @param {kpqznn.IUserQuitResponse} message UserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserQuitResponse} UserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserQuitResponse();
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
                case 4:
                    message.message = reader.string();
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
         * @memberof kpqznn.UserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserQuitResponse} UserQuitResponse
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
         * @memberof kpqznn.UserQuitResponse
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
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a UserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.UserQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserQuitResponse} UserQuitResponse
         */
        UserQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserQuitResponse)
                return object;
            var message = new $root.kpqznn.UserQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
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
         * Creates a plain object from a UserQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserQuitResponse
         * @static
         * @param {kpqznn.UserQuitResponse} message UserQuitResponse
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
                object.message = "";
                object.tableId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
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
         * Converts this UserQuitResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.UserQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitResponse;
    })();

    kpqznn.SendUserReconnectResponse = (function() {

        /**
         * Properties of a SendUserReconnectResponse.
         * @memberof kpqznn
         * @interface ISendUserReconnectResponse
         * @property {number|null} [userId] SendUserReconnectResponse userId
         * @property {number|null} [onLine] SendUserReconnectResponse onLine
         */

        /**
         * Constructs a new SendUserReconnectResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendUserReconnectResponse.
         * @implements ISendUserReconnectResponse
         * @constructor
         * @param {kpqznn.ISendUserReconnectResponse=} [properties] Properties to set
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
         * @memberof kpqznn.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.userId = 0;

        /**
         * SendUserReconnectResponse onLine.
         * @member {number} onLine
         * @memberof kpqznn.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.onLine = 0;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendUserReconnectResponse
         * @static
         * @param {kpqznn.ISendUserReconnectResponse=} [properties] Properties to set
         * @returns {kpqznn.SendUserReconnectResponse} SendUserReconnectResponse instance
         */
        SendUserReconnectResponse.create = function create(properties) {
            return new SendUserReconnectResponse(properties);
        };

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link kpqznn.SendUserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendUserReconnectResponse
         * @static
         * @param {kpqznn.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
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
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link kpqznn.SendUserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendUserReconnectResponse
         * @static
         * @param {kpqznn.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendUserReconnectResponse} SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendUserReconnectResponse();
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
         * @memberof kpqznn.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendUserReconnectResponse} SendUserReconnectResponse
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
         * @memberof kpqznn.SendUserReconnectResponse
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
         * @memberof kpqznn.SendUserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendUserReconnectResponse} SendUserReconnectResponse
         */
        SendUserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendUserReconnectResponse)
                return object;
            var message = new $root.kpqznn.SendUserReconnectResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.onLine != null)
                message.onLine = object.onLine | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendUserReconnectResponse
         * @static
         * @param {kpqznn.SendUserReconnectResponse} message SendUserReconnectResponse
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
         * @memberof kpqznn.SendUserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReconnectResponse;
    })();

    kpqznn.UserReconnectResponse = (function() {

        /**
         * Properties of a UserReconnectResponse.
         * @memberof kpqznn
         * @interface IUserReconnectResponse
         * @property {string|null} [tableId] UserReconnectResponse tableId
         * @property {string|null} [seq] UserReconnectResponse seq
         * @property {number|null} [gameId] UserReconnectResponse gameId
         * @property {number|null} [zhuangPos] UserReconnectResponse zhuangPos
         * @property {number|null} [state] UserReconnectResponse state
         * @property {string|null} [gameInfo] UserReconnectResponse gameInfo
         * @property {number|null} [applicant] UserReconnectResponse applicant
         * @property {number|null} [applyTime] UserReconnectResponse applyTime
         * @property {number|Long|null} [startApplyTime] UserReconnectResponse startApplyTime
         * @property {number|null} [remainCardsNum] UserReconnectResponse remainCardsNum
         * @property {Array.<kpqznn.IUser>|null} [users] UserReconnectResponse users
         */

        /**
         * Constructs a new UserReconnectResponse.
         * @memberof kpqznn
         * @classdesc Represents a UserReconnectResponse.
         * @implements IUserReconnectResponse
         * @constructor
         * @param {kpqznn.IUserReconnectResponse=} [properties] Properties to set
         */
        function UserReconnectResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReconnectResponse tableId.
         * @member {string} tableId
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.tableId = "";

        /**
         * UserReconnectResponse seq.
         * @member {string} seq
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.seq = "";

        /**
         * UserReconnectResponse gameId.
         * @member {number} gameId
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameId = 0;

        /**
         * UserReconnectResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.zhuangPos = 0;

        /**
         * UserReconnectResponse state.
         * @member {number} state
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.state = 0;

        /**
         * UserReconnectResponse gameInfo.
         * @member {string} gameInfo
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameInfo = "";

        /**
         * UserReconnectResponse applicant.
         * @member {number} applicant
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.applicant = 0;

        /**
         * UserReconnectResponse applyTime.
         * @member {number} applyTime
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.applyTime = 0;

        /**
         * UserReconnectResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserReconnectResponse remainCardsNum.
         * @member {number} remainCardsNum
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.remainCardsNum = 0;

        /**
         * UserReconnectResponse users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.UserReconnectResponse
         * @static
         * @param {kpqznn.IUserReconnectResponse=} [properties] Properties to set
         * @returns {kpqznn.UserReconnectResponse} UserReconnectResponse instance
         */
        UserReconnectResponse.create = function create(properties) {
            return new UserReconnectResponse(properties);
        };

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link kpqznn.UserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.UserReconnectResponse
         * @static
         * @param {kpqznn.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
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
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.gameInfo);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.applicant);
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.applyTime);
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.startApplyTime);
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.remainCardsNum);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link kpqznn.UserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.UserReconnectResponse
         * @static
         * @param {kpqznn.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.UserReconnectResponse} UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.UserReconnectResponse();
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
                    message.applicant = reader.int32();
                    break;
                case 8:
                    message.applyTime = reader.int32();
                    break;
                case 9:
                    message.startApplyTime = reader.int64();
                    break;
                case 10:
                    message.remainCardsNum = reader.int32();
                    break;
                case 20:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
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
         * @memberof kpqznn.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.UserReconnectResponse} UserReconnectResponse
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
         * @memberof kpqznn.UserReconnectResponse
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
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (!$util.isInteger(message.startApplyTime) && !(message.startApplyTime && $util.isInteger(message.startApplyTime.low) && $util.isInteger(message.startApplyTime.high)))
                    return "startApplyTime: integer|Long expected";
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                if (!$util.isInteger(message.remainCardsNum))
                    return "remainCardsNum: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.UserReconnectResponse} UserReconnectResponse
         */
        UserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.UserReconnectResponse)
                return object;
            var message = new $root.kpqznn.UserReconnectResponse();
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
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.applyTime != null)
                message.applyTime = object.applyTime | 0;
            if (object.startApplyTime != null)
                if ($util.Long)
                    (message.startApplyTime = $util.Long.fromValue(object.startApplyTime)).unsigned = false;
                else if (typeof object.startApplyTime === "string")
                    message.startApplyTime = parseInt(object.startApplyTime, 10);
                else if (typeof object.startApplyTime === "number")
                    message.startApplyTime = object.startApplyTime;
                else if (typeof object.startApplyTime === "object")
                    message.startApplyTime = new $util.LongBits(object.startApplyTime.low >>> 0, object.startApplyTime.high >>> 0).toNumber();
            if (object.remainCardsNum != null)
                message.remainCardsNum = object.remainCardsNum | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.UserReconnectResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.UserReconnectResponse.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.UserReconnectResponse
         * @static
         * @param {kpqznn.UserReconnectResponse} message UserReconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.gameId = 0;
                object.zhuangPos = 0;
                object.state = 0;
                object.gameInfo = "";
                object.applicant = 0;
                object.applyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startApplyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startApplyTime = options.longs === String ? "0" : 0;
                object.remainCardsNum = 0;
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
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (typeof message.startApplyTime === "number")
                    object.startApplyTime = options.longs === String ? String(message.startApplyTime) : message.startApplyTime;
                else
                    object.startApplyTime = options.longs === String ? $util.Long.prototype.toString.call(message.startApplyTime) : options.longs === Number ? new $util.LongBits(message.startApplyTime.low >>> 0, message.startApplyTime.high >>> 0).toNumber() : message.startApplyTime;
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                object.remainCardsNum = message.remainCardsNum;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this UserReconnectResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.UserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectResponse;
    })();

    kpqznn.TableInfo = (function() {

        /**
         * Properties of a TableInfo.
         * @memberof kpqznn
         * @interface ITableInfo
         * @property {string|null} [tableId] TableInfo tableId
         * @property {string|null} [seq] TableInfo seq
         * @property {number|null} [gameId] TableInfo gameId
         * @property {number|null} [zhuangPos] TableInfo zhuangPos
         * @property {number|null} [state] TableInfo state
         * @property {number|null} [owner] TableInfo owner
         * @property {string|null} [gameInfo] TableInfo gameInfo
         * @property {Array.<kpqznn.IUser>|null} [users] TableInfo users
         */

        /**
         * Constructs a new TableInfo.
         * @memberof kpqznn
         * @classdesc Represents a TableInfo.
         * @implements ITableInfo
         * @constructor
         * @param {kpqznn.ITableInfo=} [properties] Properties to set
         */
        function TableInfo(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfo tableId.
         * @member {string} tableId
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.tableId = "";

        /**
         * TableInfo seq.
         * @member {string} seq
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.seq = "";

        /**
         * TableInfo gameId.
         * @member {number} gameId
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.gameId = 0;

        /**
         * TableInfo zhuangPos.
         * @member {number} zhuangPos
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.zhuangPos = 0;

        /**
         * TableInfo state.
         * @member {number} state
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.state = 0;

        /**
         * TableInfo owner.
         * @member {number} owner
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.owner = 0;

        /**
         * TableInfo gameInfo.
         * @member {string} gameInfo
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.gameInfo = "";

        /**
         * TableInfo users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.TableInfo
         * @instance
         */
        TableInfo.prototype.users = $util.emptyArray;

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @function create
         * @memberof kpqznn.TableInfo
         * @static
         * @param {kpqznn.ITableInfo=} [properties] Properties to set
         * @returns {kpqznn.TableInfo} TableInfo instance
         */
        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link kpqznn.TableInfo.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.TableInfo
         * @static
         * @param {kpqznn.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encode = function encode(message, writer) {
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
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.owner);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gameInfo);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link kpqznn.TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.TableInfo
         * @static
         * @param {kpqznn.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.TableInfo();
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
                    message.owner = reader.int32();
                    break;
                case 7:
                    message.gameInfo = reader.string();
                    break;
                case 8:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableInfo message.
         * @function verify
         * @memberof kpqznn.TableInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfo.verify = function verify(message) {
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
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.TableInfo} TableInfo
         */
        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.TableInfo)
                return object;
            var message = new $root.kpqznn.TableInfo();
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
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.TableInfo.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.TableInfo.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.TableInfo
         * @static
         * @param {kpqznn.TableInfo} message TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.gameId = 0;
                object.zhuangPos = 0;
                object.state = 0;
                object.owner = 0;
                object.gameInfo = "";
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
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this TableInfo to JSON.
         * @function toJSON
         * @memberof kpqznn.TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    kpqznn.TableInfoResponse = (function() {

        /**
         * Properties of a TableInfoResponse.
         * @memberof kpqznn
         * @interface ITableInfoResponse
         * @property {kpqznn.ITableInfo|null} [tableInfo] TableInfoResponse tableInfo
         */

        /**
         * Constructs a new TableInfoResponse.
         * @memberof kpqznn
         * @classdesc Represents a TableInfoResponse.
         * @implements ITableInfoResponse
         * @constructor
         * @param {kpqznn.ITableInfoResponse=} [properties] Properties to set
         */
        function TableInfoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfoResponse tableInfo.
         * @member {kpqznn.ITableInfo|null|undefined} tableInfo
         * @memberof kpqznn.TableInfoResponse
         * @instance
         */
        TableInfoResponse.prototype.tableInfo = null;

        /**
         * Creates a new TableInfoResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {kpqznn.ITableInfoResponse=} [properties] Properties to set
         * @returns {kpqznn.TableInfoResponse} TableInfoResponse instance
         */
        TableInfoResponse.create = function create(properties) {
            return new TableInfoResponse(properties);
        };

        /**
         * Encodes the specified TableInfoResponse message. Does not implicitly {@link kpqznn.TableInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {kpqznn.ITableInfoResponse} message TableInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                $root.kpqznn.TableInfo.encode(message.tableInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableInfoResponse message, length delimited. Does not implicitly {@link kpqznn.TableInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {kpqznn.ITableInfoResponse} message TableInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.TableInfoResponse} TableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.TableInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableInfo = $root.kpqznn.TableInfo.decode(reader, reader.uint32());
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
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.TableInfoResponse} TableInfoResponse
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
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo")) {
                var error = $root.kpqznn.TableInfo.verify(message.tableInfo);
                if (error)
                    return "tableInfo." + error;
            }
            return null;
        };

        /**
         * Creates a TableInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.TableInfoResponse} TableInfoResponse
         */
        TableInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.TableInfoResponse)
                return object;
            var message = new $root.kpqznn.TableInfoResponse();
            if (object.tableInfo != null) {
                if (typeof object.tableInfo !== "object")
                    throw TypeError(".kpqznn.TableInfoResponse.tableInfo: object expected");
                message.tableInfo = $root.kpqznn.TableInfo.fromObject(object.tableInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a TableInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.TableInfoResponse
         * @static
         * @param {kpqznn.TableInfoResponse} message TableInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tableInfo = null;
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                object.tableInfo = $root.kpqznn.TableInfo.toObject(message.tableInfo, options);
            return object;
        };

        /**
         * Converts this TableInfoResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.TableInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfoResponse;
    })();

    kpqznn.SendReconnectQuitResponse = (function() {

        /**
         * Properties of a SendReconnectQuitResponse.
         * @memberof kpqznn
         * @interface ISendReconnectQuitResponse
         * @property {number|null} [userId] SendReconnectQuitResponse userId
         */

        /**
         * Constructs a new SendReconnectQuitResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendReconnectQuitResponse.
         * @implements ISendReconnectQuitResponse
         * @constructor
         * @param {kpqznn.ISendReconnectQuitResponse=} [properties] Properties to set
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
         * @memberof kpqznn.SendReconnectQuitResponse
         * @instance
         */
        SendReconnectQuitResponse.prototype.userId = 0;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendReconnectQuitResponse
         * @static
         * @param {kpqznn.ISendReconnectQuitResponse=} [properties] Properties to set
         * @returns {kpqznn.SendReconnectQuitResponse} SendReconnectQuitResponse instance
         */
        SendReconnectQuitResponse.create = function create(properties) {
            return new SendReconnectQuitResponse(properties);
        };

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link kpqznn.SendReconnectQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendReconnectQuitResponse
         * @static
         * @param {kpqznn.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
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
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link kpqznn.SendReconnectQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendReconnectQuitResponse
         * @static
         * @param {kpqznn.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReconnectQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendReconnectQuitResponse} SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReconnectQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendReconnectQuitResponse();
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
         * @memberof kpqznn.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendReconnectQuitResponse} SendReconnectQuitResponse
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
         * @memberof kpqznn.SendReconnectQuitResponse
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
         * @memberof kpqznn.SendReconnectQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendReconnectQuitResponse} SendReconnectQuitResponse
         */
        SendReconnectQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendReconnectQuitResponse)
                return object;
            var message = new $root.kpqznn.SendReconnectQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendReconnectQuitResponse
         * @static
         * @param {kpqznn.SendReconnectQuitResponse} message SendReconnectQuitResponse
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
         * @memberof kpqznn.SendReconnectQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendReconnectQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendReconnectQuitResponse;
    })();

    kpqznn.SendUserOnBackResponse = (function() {

        /**
         * Properties of a SendUserOnBackResponse.
         * @memberof kpqznn
         * @interface ISendUserOnBackResponse
         * @property {number|null} [userId] SendUserOnBackResponse userId
         * @property {number|null} [leaveState] SendUserOnBackResponse leaveState
         */

        /**
         * Constructs a new SendUserOnBackResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendUserOnBackResponse.
         * @implements ISendUserOnBackResponse
         * @constructor
         * @param {kpqznn.ISendUserOnBackResponse=} [properties] Properties to set
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
         * @memberof kpqznn.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.userId = 0;

        /**
         * SendUserOnBackResponse leaveState.
         * @member {number} leaveState
         * @memberof kpqznn.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.leaveState = 0;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendUserOnBackResponse
         * @static
         * @param {kpqznn.ISendUserOnBackResponse=} [properties] Properties to set
         * @returns {kpqznn.SendUserOnBackResponse} SendUserOnBackResponse instance
         */
        SendUserOnBackResponse.create = function create(properties) {
            return new SendUserOnBackResponse(properties);
        };

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link kpqznn.SendUserOnBackResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendUserOnBackResponse
         * @static
         * @param {kpqznn.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
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
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link kpqznn.SendUserOnBackResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendUserOnBackResponse
         * @static
         * @param {kpqznn.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendUserOnBackResponse} SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserOnBackResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendUserOnBackResponse();
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
         * @memberof kpqznn.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendUserOnBackResponse} SendUserOnBackResponse
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
         * @memberof kpqznn.SendUserOnBackResponse
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
         * @memberof kpqznn.SendUserOnBackResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendUserOnBackResponse} SendUserOnBackResponse
         */
        SendUserOnBackResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendUserOnBackResponse)
                return object;
            var message = new $root.kpqznn.SendUserOnBackResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendUserOnBackResponse
         * @static
         * @param {kpqznn.SendUserOnBackResponse} message SendUserOnBackResponse
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
         * @memberof kpqznn.SendUserOnBackResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserOnBackResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserOnBackResponse;
    })();

    kpqznn.DelayCheckResponse = (function() {

        /**
         * Properties of a DelayCheckResponse.
         * @memberof kpqznn
         * @interface IDelayCheckResponse
         * @property {string|null} [content] DelayCheckResponse content
         */

        /**
         * Constructs a new DelayCheckResponse.
         * @memberof kpqznn
         * @classdesc Represents a DelayCheckResponse.
         * @implements IDelayCheckResponse
         * @constructor
         * @param {kpqznn.IDelayCheckResponse=} [properties] Properties to set
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
         * @memberof kpqznn.DelayCheckResponse
         * @instance
         */
        DelayCheckResponse.prototype.content = "";

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.DelayCheckResponse
         * @static
         * @param {kpqznn.IDelayCheckResponse=} [properties] Properties to set
         * @returns {kpqznn.DelayCheckResponse} DelayCheckResponse instance
         */
        DelayCheckResponse.create = function create(properties) {
            return new DelayCheckResponse(properties);
        };

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link kpqznn.DelayCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.DelayCheckResponse
         * @static
         * @param {kpqznn.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
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
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link kpqznn.DelayCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.DelayCheckResponse
         * @static
         * @param {kpqznn.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.DelayCheckResponse} DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.DelayCheckResponse();
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
         * @memberof kpqznn.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.DelayCheckResponse} DelayCheckResponse
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
         * @memberof kpqznn.DelayCheckResponse
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
         * @memberof kpqznn.DelayCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.DelayCheckResponse} DelayCheckResponse
         */
        DelayCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.DelayCheckResponse)
                return object;
            var message = new $root.kpqznn.DelayCheckResponse();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.DelayCheckResponse
         * @static
         * @param {kpqznn.DelayCheckResponse} message DelayCheckResponse
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
         * @memberof kpqznn.DelayCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckResponse;
    })();

    kpqznn.SendHeartBeatResponse = (function() {

        /**
         * Properties of a SendHeartBeatResponse.
         * @memberof kpqznn
         * @interface ISendHeartBeatResponse
         * @property {number|Long|null} [currentTime] SendHeartBeatResponse currentTime
         */

        /**
         * Constructs a new SendHeartBeatResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendHeartBeatResponse.
         * @implements ISendHeartBeatResponse
         * @constructor
         * @param {kpqznn.ISendHeartBeatResponse=} [properties] Properties to set
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
         * @memberof kpqznn.SendHeartBeatResponse
         * @instance
         */
        SendHeartBeatResponse.prototype.currentTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendHeartBeatResponse
         * @static
         * @param {kpqznn.ISendHeartBeatResponse=} [properties] Properties to set
         * @returns {kpqznn.SendHeartBeatResponse} SendHeartBeatResponse instance
         */
        SendHeartBeatResponse.create = function create(properties) {
            return new SendHeartBeatResponse(properties);
        };

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link kpqznn.SendHeartBeatResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendHeartBeatResponse
         * @static
         * @param {kpqznn.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
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
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link kpqznn.SendHeartBeatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendHeartBeatResponse
         * @static
         * @param {kpqznn.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHeartBeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendHeartBeatResponse} SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHeartBeatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendHeartBeatResponse();
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
         * @memberof kpqznn.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendHeartBeatResponse} SendHeartBeatResponse
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
         * @memberof kpqznn.SendHeartBeatResponse
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
         * @memberof kpqznn.SendHeartBeatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendHeartBeatResponse} SendHeartBeatResponse
         */
        SendHeartBeatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendHeartBeatResponse)
                return object;
            var message = new $root.kpqznn.SendHeartBeatResponse();
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
         * @memberof kpqznn.SendHeartBeatResponse
         * @static
         * @param {kpqznn.SendHeartBeatResponse} message SendHeartBeatResponse
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
         * @memberof kpqznn.SendHeartBeatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendHeartBeatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendHeartBeatResponse;
    })();

    kpqznn.SendCoinTableInfoResponse = (function() {

        /**
         * Properties of a SendCoinTableInfoResponse.
         * @memberof kpqznn
         * @interface ISendCoinTableInfoResponse
         * @property {string|null} [tableId] SendCoinTableInfoResponse tableId
         * @property {number|null} [gameId] SendCoinTableInfoResponse gameId
         * @property {number|null} [state] SendCoinTableInfoResponse state
         * @property {number|null} [owner] SendCoinTableInfoResponse owner
         * @property {string|null} [gameInfo] SendCoinTableInfoResponse gameInfo
         * @property {number|null} [applicant] SendCoinTableInfoResponse applicant
         * @property {number|null} [applyTime] SendCoinTableInfoResponse applyTime
         * @property {number|Long|null} [startApplyTime] SendCoinTableInfoResponse startApplyTime
         * @property {number|null} [zhuangPos] SendCoinTableInfoResponse zhuangPos
         * @property {number|null} [remainCardsNum] SendCoinTableInfoResponse remainCardsNum
         * @property {Array.<kpqznn.IUser>|null} [users] SendCoinTableInfoResponse users
         */

        /**
         * Constructs a new SendCoinTableInfoResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendCoinTableInfoResponse.
         * @implements ISendCoinTableInfoResponse
         * @constructor
         * @param {kpqznn.ISendCoinTableInfoResponse=} [properties] Properties to set
         */
        function SendCoinTableInfoResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendCoinTableInfoResponse tableId.
         * @member {string} tableId
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.tableId = "";

        /**
         * SendCoinTableInfoResponse gameId.
         * @member {number} gameId
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.gameId = 0;

        /**
         * SendCoinTableInfoResponse state.
         * @member {number} state
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.state = 0;

        /**
         * SendCoinTableInfoResponse owner.
         * @member {number} owner
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.owner = 0;

        /**
         * SendCoinTableInfoResponse gameInfo.
         * @member {string} gameInfo
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.gameInfo = "";

        /**
         * SendCoinTableInfoResponse applicant.
         * @member {number} applicant
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.applicant = 0;

        /**
         * SendCoinTableInfoResponse applyTime.
         * @member {number} applyTime
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.applyTime = 0;

        /**
         * SendCoinTableInfoResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SendCoinTableInfoResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.zhuangPos = 0;

        /**
         * SendCoinTableInfoResponse remainCardsNum.
         * @member {number} remainCardsNum
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.remainCardsNum = 0;

        /**
         * SendCoinTableInfoResponse users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         */
        SendCoinTableInfoResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendCoinTableInfoResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {kpqznn.ISendCoinTableInfoResponse=} [properties] Properties to set
         * @returns {kpqznn.SendCoinTableInfoResponse} SendCoinTableInfoResponse instance
         */
        SendCoinTableInfoResponse.create = function create(properties) {
            return new SendCoinTableInfoResponse(properties);
        };

        /**
         * Encodes the specified SendCoinTableInfoResponse message. Does not implicitly {@link kpqznn.SendCoinTableInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {kpqznn.ISendCoinTableInfoResponse} message SendCoinTableInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinTableInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.owner);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.gameInfo);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.applicant);
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.applyTime);
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.startApplyTime);
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.zhuangPos);
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.remainCardsNum);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendCoinTableInfoResponse message, length delimited. Does not implicitly {@link kpqznn.SendCoinTableInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {kpqznn.ISendCoinTableInfoResponse} message SendCoinTableInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinTableInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCoinTableInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendCoinTableInfoResponse} SendCoinTableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinTableInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendCoinTableInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.gameId = reader.int32();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.owner = reader.int32();
                    break;
                case 5:
                    message.gameInfo = reader.string();
                    break;
                case 6:
                    message.applicant = reader.int32();
                    break;
                case 7:
                    message.applyTime = reader.int32();
                    break;
                case 8:
                    message.startApplyTime = reader.int64();
                    break;
                case 9:
                    message.zhuangPos = reader.int32();
                    break;
                case 10:
                    message.remainCardsNum = reader.int32();
                    break;
                case 11:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendCoinTableInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendCoinTableInfoResponse} SendCoinTableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinTableInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendCoinTableInfoResponse message.
         * @function verify
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendCoinTableInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (!$util.isInteger(message.startApplyTime) && !(message.startApplyTime && $util.isInteger(message.startApplyTime.low) && $util.isInteger(message.startApplyTime.high)))
                    return "startApplyTime: integer|Long expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                if (!$util.isInteger(message.remainCardsNum))
                    return "remainCardsNum: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendCoinTableInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendCoinTableInfoResponse} SendCoinTableInfoResponse
         */
        SendCoinTableInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendCoinTableInfoResponse)
                return object;
            var message = new $root.kpqznn.SendCoinTableInfoResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.applyTime != null)
                message.applyTime = object.applyTime | 0;
            if (object.startApplyTime != null)
                if ($util.Long)
                    (message.startApplyTime = $util.Long.fromValue(object.startApplyTime)).unsigned = false;
                else if (typeof object.startApplyTime === "string")
                    message.startApplyTime = parseInt(object.startApplyTime, 10);
                else if (typeof object.startApplyTime === "number")
                    message.startApplyTime = object.startApplyTime;
                else if (typeof object.startApplyTime === "object")
                    message.startApplyTime = new $util.LongBits(object.startApplyTime.low >>> 0, object.startApplyTime.high >>> 0).toNumber();
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.remainCardsNum != null)
                message.remainCardsNum = object.remainCardsNum | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.SendCoinTableInfoResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.SendCoinTableInfoResponse.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendCoinTableInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @static
         * @param {kpqznn.SendCoinTableInfoResponse} message SendCoinTableInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendCoinTableInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.tableId = "";
                object.gameId = 0;
                object.state = 0;
                object.owner = 0;
                object.gameInfo = "";
                object.applicant = 0;
                object.applyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startApplyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startApplyTime = options.longs === String ? "0" : 0;
                object.zhuangPos = 0;
                object.remainCardsNum = 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (typeof message.startApplyTime === "number")
                    object.startApplyTime = options.longs === String ? String(message.startApplyTime) : message.startApplyTime;
                else
                    object.startApplyTime = options.longs === String ? $util.Long.prototype.toString.call(message.startApplyTime) : options.longs === Number ? new $util.LongBits(message.startApplyTime.low >>> 0, message.startApplyTime.high >>> 0).toNumber() : message.startApplyTime;
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                object.remainCardsNum = message.remainCardsNum;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendCoinTableInfoResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.SendCoinTableInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCoinTableInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCoinTableInfoResponse;
    })();

    kpqznn.JoinTableResponse = (function() {

        /**
         * Properties of a JoinTableResponse.
         * @memberof kpqznn
         * @interface IJoinTableResponse
         * @property {string|null} [tableId] JoinTableResponse tableId
         * @property {string|null} [seq] JoinTableResponse seq
         * @property {number|null} [gameId] JoinTableResponse gameId
         * @property {number|null} [state] JoinTableResponse state
         * @property {number|null} [channelId] JoinTableResponse channelId
         * @property {string|null} [gameInfo] JoinTableResponse gameInfo
         * @property {Array.<kpqznn.IUser>|null} [users] JoinTableResponse users
         */

        /**
         * Constructs a new JoinTableResponse.
         * @memberof kpqznn
         * @classdesc Represents a JoinTableResponse.
         * @implements IJoinTableResponse
         * @constructor
         * @param {kpqznn.IJoinTableResponse=} [properties] Properties to set
         */
        function JoinTableResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableResponse tableId.
         * @member {string} tableId
         * @memberof kpqznn.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.tableId = "";

        /**
         * JoinTableResponse seq.
         * @member {string} seq
         * @memberof kpqznn.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.seq = "";

        /**
         * JoinTableResponse gameId.
         * @member {number} gameId
         * @memberof kpqznn.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameId = 0;

        /**
         * JoinTableResponse state.
         * @member {number} state
         * @memberof kpqznn.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.state = 0;

        /**
         * JoinTableResponse channelId.
         * @member {number} channelId
         * @memberof kpqznn.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.channelId = 0;

        /**
         * JoinTableResponse gameInfo.
         * @member {string} gameInfo
         * @memberof kpqznn.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameInfo = "";

        /**
         * JoinTableResponse users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.JoinTableResponse
         * @static
         * @param {kpqznn.IJoinTableResponse=} [properties] Properties to set
         * @returns {kpqznn.JoinTableResponse} JoinTableResponse instance
         */
        JoinTableResponse.create = function create(properties) {
            return new JoinTableResponse(properties);
        };

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link kpqznn.JoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.JoinTableResponse
         * @static
         * @param {kpqznn.IJoinTableResponse} message JoinTableResponse message or plain object to encode
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
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.gameInfo);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link kpqznn.JoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.JoinTableResponse
         * @static
         * @param {kpqznn.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.JoinTableResponse();
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
                    message.gameInfo = reader.string();
                    break;
                case 20:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
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
         * @memberof kpqznn.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.JoinTableResponse} JoinTableResponse
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
         * @memberof kpqznn.JoinTableResponse
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
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.JoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.JoinTableResponse} JoinTableResponse
         */
        JoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.JoinTableResponse)
                return object;
            var message = new $root.kpqznn.JoinTableResponse();
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
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.JoinTableResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.JoinTableResponse.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.JoinTableResponse
         * @static
         * @param {kpqznn.JoinTableResponse} message JoinTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.gameId = 0;
                object.state = 0;
                object.channelId = 0;
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
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinTableResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.JoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableResponse;
    })();

    kpqznn.SendMessageResponse = (function() {

        /**
         * Properties of a SendMessageResponse.
         * @memberof kpqznn
         * @interface ISendMessageResponse
         * @property {number|null} [userId] SendMessageResponse userId
         * @property {string|null} [content] SendMessageResponse content
         * @property {number|null} [toUserId] SendMessageResponse toUserId
         */

        /**
         * Constructs a new SendMessageResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendMessageResponse.
         * @implements ISendMessageResponse
         * @constructor
         * @param {kpqznn.ISendMessageResponse=} [properties] Properties to set
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
         * @memberof kpqznn.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.userId = 0;

        /**
         * SendMessageResponse content.
         * @member {string} content
         * @memberof kpqznn.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.content = "";

        /**
         * SendMessageResponse toUserId.
         * @member {number} toUserId
         * @memberof kpqznn.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.toUserId = 0;

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendMessageResponse
         * @static
         * @param {kpqznn.ISendMessageResponse=} [properties] Properties to set
         * @returns {kpqznn.SendMessageResponse} SendMessageResponse instance
         */
        SendMessageResponse.create = function create(properties) {
            return new SendMessageResponse(properties);
        };

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link kpqznn.SendMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendMessageResponse
         * @static
         * @param {kpqznn.ISendMessageResponse} message SendMessageResponse message or plain object to encode
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
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link kpqznn.SendMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendMessageResponse
         * @static
         * @param {kpqznn.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendMessageResponse} SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendMessageResponse();
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
         * @memberof kpqznn.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendMessageResponse} SendMessageResponse
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
         * @memberof kpqznn.SendMessageResponse
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
         * @memberof kpqznn.SendMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendMessageResponse} SendMessageResponse
         */
        SendMessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendMessageResponse)
                return object;
            var message = new $root.kpqznn.SendMessageResponse();
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
         * @memberof kpqznn.SendMessageResponse
         * @static
         * @param {kpqznn.SendMessageResponse} message SendMessageResponse
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
         * @memberof kpqznn.SendMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMessageResponse;
    })();

    kpqznn.SendRoundResultResponse = (function() {

        /**
         * Properties of a SendRoundResultResponse.
         * @memberof kpqznn
         * @interface ISendRoundResultResponse
         * @property {string|null} [tableId] SendRoundResultResponse tableId
         * @property {number|null} [state] SendRoundResultResponse state
         * @property {string|null} [gameInfo] SendRoundResultResponse gameInfo
         * @property {number|null} [zhuangPos] SendRoundResultResponse zhuangPos
         * @property {string|null} [time] SendRoundResultResponse time
         * @property {Array.<kpqznn.IUser>|null} [users] SendRoundResultResponse users
         */

        /**
         * Constructs a new SendRoundResultResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendRoundResultResponse.
         * @implements ISendRoundResultResponse
         * @constructor
         * @param {kpqznn.ISendRoundResultResponse=} [properties] Properties to set
         */
        function SendRoundResultResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendRoundResultResponse tableId.
         * @member {string} tableId
         * @memberof kpqznn.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.tableId = "";

        /**
         * SendRoundResultResponse state.
         * @member {number} state
         * @memberof kpqznn.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.state = 0;

        /**
         * SendRoundResultResponse gameInfo.
         * @member {string} gameInfo
         * @memberof kpqznn.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.gameInfo = "";

        /**
         * SendRoundResultResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof kpqznn.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.zhuangPos = 0;

        /**
         * SendRoundResultResponse time.
         * @member {string} time
         * @memberof kpqznn.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.time = "";

        /**
         * SendRoundResultResponse users.
         * @member {Array.<kpqznn.IUser>} users
         * @memberof kpqznn.SendRoundResultResponse
         * @instance
         */
        SendRoundResultResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendRoundResultResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendRoundResultResponse
         * @static
         * @param {kpqznn.ISendRoundResultResponse=} [properties] Properties to set
         * @returns {kpqznn.SendRoundResultResponse} SendRoundResultResponse instance
         */
        SendRoundResultResponse.create = function create(properties) {
            return new SendRoundResultResponse(properties);
        };

        /**
         * Encodes the specified SendRoundResultResponse message. Does not implicitly {@link kpqznn.SendRoundResultResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendRoundResultResponse
         * @static
         * @param {kpqznn.ISendRoundResultResponse} message SendRoundResultResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRoundResultResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameInfo);
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.zhuangPos);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.time);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.kpqznn.User.encode(message.users[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendRoundResultResponse message, length delimited. Does not implicitly {@link kpqznn.SendRoundResultResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendRoundResultResponse
         * @static
         * @param {kpqznn.ISendRoundResultResponse} message SendRoundResultResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRoundResultResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRoundResultResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendRoundResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendRoundResultResponse} SendRoundResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRoundResultResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendRoundResultResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.gameInfo = reader.string();
                    break;
                case 4:
                    message.zhuangPos = reader.int32();
                    break;
                case 5:
                    message.time = reader.string();
                    break;
                case 20:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.kpqznn.User.decode(reader, reader.uint32()));
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
         * @memberof kpqznn.SendRoundResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendRoundResultResponse} SendRoundResultResponse
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
         * @memberof kpqznn.SendRoundResultResponse
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
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.kpqznn.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendRoundResultResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.SendRoundResultResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendRoundResultResponse} SendRoundResultResponse
         */
        SendRoundResultResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendRoundResultResponse)
                return object;
            var message = new $root.kpqznn.SendRoundResultResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.state != null)
                message.state = object.state | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.time != null)
                message.time = String(object.time);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".kpqznn.SendRoundResultResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".kpqznn.SendRoundResultResponse.users: object expected");
                    message.users[i] = $root.kpqznn.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendRoundResultResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendRoundResultResponse
         * @static
         * @param {kpqznn.SendRoundResultResponse} message SendRoundResultResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendRoundResultResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.tableId = "";
                object.state = 0;
                object.gameInfo = "";
                object.zhuangPos = 0;
                object.time = "";
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.kpqznn.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendRoundResultResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.SendRoundResultResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRoundResultResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRoundResultResponse;
    })();

    kpqznn.SendRemainTimeResponse = (function() {

        /**
         * Properties of a SendRemainTimeResponse.
         * @memberof kpqznn
         * @interface ISendRemainTimeResponse
         * @property {number|null} [time] SendRemainTimeResponse time
         * @property {number|null} [type] SendRemainTimeResponse type
         */

        /**
         * Constructs a new SendRemainTimeResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendRemainTimeResponse.
         * @implements ISendRemainTimeResponse
         * @constructor
         * @param {kpqznn.ISendRemainTimeResponse=} [properties] Properties to set
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
         * @memberof kpqznn.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.time = 0;

        /**
         * SendRemainTimeResponse type.
         * @member {number} type
         * @memberof kpqznn.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.type = 0;

        /**
         * Creates a new SendRemainTimeResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendRemainTimeResponse
         * @static
         * @param {kpqznn.ISendRemainTimeResponse=} [properties] Properties to set
         * @returns {kpqznn.SendRemainTimeResponse} SendRemainTimeResponse instance
         */
        SendRemainTimeResponse.create = function create(properties) {
            return new SendRemainTimeResponse(properties);
        };

        /**
         * Encodes the specified SendRemainTimeResponse message. Does not implicitly {@link kpqznn.SendRemainTimeResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendRemainTimeResponse
         * @static
         * @param {kpqznn.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
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
            return writer;
        };

        /**
         * Encodes the specified SendRemainTimeResponse message, length delimited. Does not implicitly {@link kpqznn.SendRemainTimeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendRemainTimeResponse
         * @static
         * @param {kpqznn.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRemainTimeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendRemainTimeResponse} SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRemainTimeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendRemainTimeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int32();
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
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendRemainTimeResponse} SendRemainTimeResponse
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
         * @memberof kpqznn.SendRemainTimeResponse
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
            return null;
        };

        /**
         * Creates a SendRemainTimeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.SendRemainTimeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendRemainTimeResponse} SendRemainTimeResponse
         */
        SendRemainTimeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendRemainTimeResponse)
                return object;
            var message = new $root.kpqznn.SendRemainTimeResponse();
            if (object.time != null)
                message.time = object.time | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendRemainTimeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendRemainTimeResponse
         * @static
         * @param {kpqznn.SendRemainTimeResponse} message SendRemainTimeResponse
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
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this SendRemainTimeResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.SendRemainTimeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRemainTimeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRemainTimeResponse;
    })();

    kpqznn.SendGameNoticeResponse = (function() {

        /**
         * Properties of a SendGameNoticeResponse.
         * @memberof kpqznn
         * @interface ISendGameNoticeResponse
         * @property {string|null} [notice] SendGameNoticeResponse notice
         */

        /**
         * Constructs a new SendGameNoticeResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendGameNoticeResponse.
         * @implements ISendGameNoticeResponse
         * @constructor
         * @param {kpqznn.ISendGameNoticeResponse=} [properties] Properties to set
         */
        function SendGameNoticeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendGameNoticeResponse notice.
         * @member {string} notice
         * @memberof kpqznn.SendGameNoticeResponse
         * @instance
         */
        SendGameNoticeResponse.prototype.notice = "";

        /**
         * Creates a new SendGameNoticeResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {kpqznn.ISendGameNoticeResponse=} [properties] Properties to set
         * @returns {kpqznn.SendGameNoticeResponse} SendGameNoticeResponse instance
         */
        SendGameNoticeResponse.create = function create(properties) {
            return new SendGameNoticeResponse(properties);
        };

        /**
         * Encodes the specified SendGameNoticeResponse message. Does not implicitly {@link kpqznn.SendGameNoticeResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {kpqznn.ISendGameNoticeResponse} message SendGameNoticeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGameNoticeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.notice != null && message.hasOwnProperty("notice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.notice);
            return writer;
        };

        /**
         * Encodes the specified SendGameNoticeResponse message, length delimited. Does not implicitly {@link kpqznn.SendGameNoticeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {kpqznn.ISendGameNoticeResponse} message SendGameNoticeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGameNoticeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendGameNoticeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendGameNoticeResponse} SendGameNoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGameNoticeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendGameNoticeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.notice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendGameNoticeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendGameNoticeResponse} SendGameNoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGameNoticeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendGameNoticeResponse message.
         * @function verify
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendGameNoticeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.notice != null && message.hasOwnProperty("notice"))
                if (!$util.isString(message.notice))
                    return "notice: string expected";
            return null;
        };

        /**
         * Creates a SendGameNoticeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendGameNoticeResponse} SendGameNoticeResponse
         */
        SendGameNoticeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendGameNoticeResponse)
                return object;
            var message = new $root.kpqznn.SendGameNoticeResponse();
            if (object.notice != null)
                message.notice = String(object.notice);
            return message;
        };

        /**
         * Creates a plain object from a SendGameNoticeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendGameNoticeResponse
         * @static
         * @param {kpqznn.SendGameNoticeResponse} message SendGameNoticeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendGameNoticeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.notice = "";
            if (message.notice != null && message.hasOwnProperty("notice"))
                object.notice = message.notice;
            return object;
        };

        /**
         * Converts this SendGameNoticeResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.SendGameNoticeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendGameNoticeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendGameNoticeResponse;
    })();

    kpqznn.SendLeaveTableResponse = (function() {

        /**
         * Properties of a SendLeaveTableResponse.
         * @memberof kpqznn
         * @interface ISendLeaveTableResponse
         * @property {number|null} [userId] SendLeaveTableResponse userId
         */

        /**
         * Constructs a new SendLeaveTableResponse.
         * @memberof kpqznn
         * @classdesc Represents a SendLeaveTableResponse.
         * @implements ISendLeaveTableResponse
         * @constructor
         * @param {kpqznn.ISendLeaveTableResponse=} [properties] Properties to set
         */
        function SendLeaveTableResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendLeaveTableResponse userId.
         * @member {number} userId
         * @memberof kpqznn.SendLeaveTableResponse
         * @instance
         */
        SendLeaveTableResponse.prototype.userId = 0;

        /**
         * Creates a new SendLeaveTableResponse instance using the specified properties.
         * @function create
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {kpqznn.ISendLeaveTableResponse=} [properties] Properties to set
         * @returns {kpqznn.SendLeaveTableResponse} SendLeaveTableResponse instance
         */
        SendLeaveTableResponse.create = function create(properties) {
            return new SendLeaveTableResponse(properties);
        };

        /**
         * Encodes the specified SendLeaveTableResponse message. Does not implicitly {@link kpqznn.SendLeaveTableResponse.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {kpqznn.ISendLeaveTableResponse} message SendLeaveTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendLeaveTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendLeaveTableResponse message, length delimited. Does not implicitly {@link kpqznn.SendLeaveTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {kpqznn.ISendLeaveTableResponse} message SendLeaveTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendLeaveTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendLeaveTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.SendLeaveTableResponse} SendLeaveTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendLeaveTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.SendLeaveTableResponse();
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
         * Decodes a SendLeaveTableResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.SendLeaveTableResponse} SendLeaveTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendLeaveTableResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendLeaveTableResponse message.
         * @function verify
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendLeaveTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendLeaveTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.SendLeaveTableResponse} SendLeaveTableResponse
         */
        SendLeaveTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.SendLeaveTableResponse)
                return object;
            var message = new $root.kpqznn.SendLeaveTableResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendLeaveTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.SendLeaveTableResponse
         * @static
         * @param {kpqznn.SendLeaveTableResponse} message SendLeaveTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendLeaveTableResponse.toObject = function toObject(message, options) {
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
         * Converts this SendLeaveTableResponse to JSON.
         * @function toJSON
         * @memberof kpqznn.SendLeaveTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendLeaveTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendLeaveTableResponse;
    })();

    kpqznn.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof kpqznn
         * @interface IResponse
         * @property {kpqznn.Response.ErrorCode|null} [error] Response error
         * @property {number|Long|null} [serverTime] Response serverTime
         * @property {kpqznn.Request.CMD|null} [cmd] Response cmd
         * @property {kpqznn.IUserReadyResponse|null} [userReadyResponse] Response userReadyResponse
         * @property {kpqznn.IUserQuitResponse|null} [userQuitResponse] Response userQuitResponse
         * @property {kpqznn.ISendUserReconnectResponse|null} [sendUserReconnectResponse] Response sendUserReconnectResponse
         * @property {kpqznn.ISendReconnectQuitResponse|null} [sendReconnectQuitResponse] Response sendReconnectQuitResponse
         * @property {kpqznn.ISendUserOnBackResponse|null} [sendUserOnBackResponse] Response sendUserOnBackResponse
         * @property {kpqznn.IDelayCheckResponse|null} [delayCheckResponse] Response delayCheckResponse
         * @property {kpqznn.IUserReconnectResponse|null} [userReconnectResponse] Response userReconnectResponse
         * @property {kpqznn.ISendHeartBeatResponse|null} [sendHeartBeatResponse] Response sendHeartBeatResponse
         * @property {kpqznn.IBetResponse|null} [betResponse] Response betResponse
         * @property {kpqznn.IShowCardResponse|null} [showCardResponse] Response showCardResponse
         * @property {kpqznn.IQiangZhuangResponse|null} [qiangZhuangResponse] Response qiangZhuangResponse
         * @property {kpqznn.ISendCoinTableInfoResponse|null} [sendCoinTableInfoResponse] Response sendCoinTableInfoResponse
         * @property {kpqznn.IJoinTableResponse|null} [joinTableResponse] Response joinTableResponse
         * @property {kpqznn.ISendMessageResponse|null} [sendMessageResponse] Response sendMessageResponse
         * @property {kpqznn.IKickedOutResponse|null} [kickedOutResponse] Response kickedOutResponse
         * @property {kpqznn.ITableInfoResponse|null} [tableInfoResponse] Response tableInfoResponse
         * @property {kpqznn.ISendRoundResultResponse|null} [sendRoundResultResponse] Response sendRoundResultResponse
         * @property {kpqznn.ISendRemainTimeResponse|null} [sendRemainTimeResponse] Response sendRemainTimeResponse
         * @property {kpqznn.ISendGameNoticeResponse|null} [sendGameNoticeResponse] Response sendGameNoticeResponse
         * @property {kpqznn.ISendLeaveTableResponse|null} [sendLeaveTableResponse] Response sendLeaveTableResponse
         * @property {kpqznn.IRoomListResponse|null} [roomListResponse] Response roomListResponse
         * @property {kpqznn.ISendCoinRefreshResponse|null} [sendCoinRefreshResponse] Response sendCoinRefreshResponse
         * @property {kpqznn.IHallRefreshCoinResponse|null} [hallRefreshCoinResponse] Response hallRefreshCoinResponse
         */

        /**
         * Constructs a new Response.
         * @memberof kpqznn
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {kpqznn.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response error.
         * @member {kpqznn.Response.ErrorCode} error
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.error = 0;

        /**
         * Response serverTime.
         * @member {number|Long} serverTime
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response cmd.
         * @member {kpqznn.Request.CMD} cmd
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response userReadyResponse.
         * @member {kpqznn.IUserReadyResponse|null|undefined} userReadyResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.userReadyResponse = null;

        /**
         * Response userQuitResponse.
         * @member {kpqznn.IUserQuitResponse|null|undefined} userQuitResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.userQuitResponse = null;

        /**
         * Response sendUserReconnectResponse.
         * @member {kpqznn.ISendUserReconnectResponse|null|undefined} sendUserReconnectResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendUserReconnectResponse = null;

        /**
         * Response sendReconnectQuitResponse.
         * @member {kpqznn.ISendReconnectQuitResponse|null|undefined} sendReconnectQuitResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendReconnectQuitResponse = null;

        /**
         * Response sendUserOnBackResponse.
         * @member {kpqznn.ISendUserOnBackResponse|null|undefined} sendUserOnBackResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendUserOnBackResponse = null;

        /**
         * Response delayCheckResponse.
         * @member {kpqznn.IDelayCheckResponse|null|undefined} delayCheckResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.delayCheckResponse = null;

        /**
         * Response userReconnectResponse.
         * @member {kpqznn.IUserReconnectResponse|null|undefined} userReconnectResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.userReconnectResponse = null;

        /**
         * Response sendHeartBeatResponse.
         * @member {kpqznn.ISendHeartBeatResponse|null|undefined} sendHeartBeatResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendHeartBeatResponse = null;

        /**
         * Response betResponse.
         * @member {kpqznn.IBetResponse|null|undefined} betResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.betResponse = null;

        /**
         * Response showCardResponse.
         * @member {kpqznn.IShowCardResponse|null|undefined} showCardResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.showCardResponse = null;

        /**
         * Response qiangZhuangResponse.
         * @member {kpqznn.IQiangZhuangResponse|null|undefined} qiangZhuangResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.qiangZhuangResponse = null;

        /**
         * Response sendCoinTableInfoResponse.
         * @member {kpqznn.ISendCoinTableInfoResponse|null|undefined} sendCoinTableInfoResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendCoinTableInfoResponse = null;

        /**
         * Response joinTableResponse.
         * @member {kpqznn.IJoinTableResponse|null|undefined} joinTableResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.joinTableResponse = null;

        /**
         * Response sendMessageResponse.
         * @member {kpqznn.ISendMessageResponse|null|undefined} sendMessageResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendMessageResponse = null;

        /**
         * Response kickedOutResponse.
         * @member {kpqznn.IKickedOutResponse|null|undefined} kickedOutResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.kickedOutResponse = null;

        /**
         * Response tableInfoResponse.
         * @member {kpqznn.ITableInfoResponse|null|undefined} tableInfoResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.tableInfoResponse = null;

        /**
         * Response sendRoundResultResponse.
         * @member {kpqznn.ISendRoundResultResponse|null|undefined} sendRoundResultResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendRoundResultResponse = null;

        /**
         * Response sendRemainTimeResponse.
         * @member {kpqznn.ISendRemainTimeResponse|null|undefined} sendRemainTimeResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendRemainTimeResponse = null;

        /**
         * Response sendGameNoticeResponse.
         * @member {kpqznn.ISendGameNoticeResponse|null|undefined} sendGameNoticeResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendGameNoticeResponse = null;

        /**
         * Response sendLeaveTableResponse.
         * @member {kpqznn.ISendLeaveTableResponse|null|undefined} sendLeaveTableResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendLeaveTableResponse = null;

        /**
         * Response roomListResponse.
         * @member {kpqznn.IRoomListResponse|null|undefined} roomListResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.roomListResponse = null;

        /**
         * Response sendCoinRefreshResponse.
         * @member {kpqznn.ISendCoinRefreshResponse|null|undefined} sendCoinRefreshResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.sendCoinRefreshResponse = null;

        /**
         * Response hallRefreshCoinResponse.
         * @member {kpqznn.IHallRefreshCoinResponse|null|undefined} hallRefreshCoinResponse
         * @memberof kpqznn.Response
         * @instance
         */
        Response.prototype.hallRefreshCoinResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof kpqznn.Response
         * @static
         * @param {kpqznn.IResponse=} [properties] Properties to set
         * @returns {kpqznn.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link kpqznn.Response.verify|verify} messages.
         * @function encode
         * @memberof kpqznn.Response
         * @static
         * @param {kpqznn.IResponse} message Response message or plain object to encode
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
            if (message.userReadyResponse != null && message.hasOwnProperty("userReadyResponse"))
                $root.kpqznn.UserReadyResponse.encode(message.userReadyResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.userQuitResponse != null && message.hasOwnProperty("userQuitResponse"))
                $root.kpqznn.UserQuitResponse.encode(message.userQuitResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                $root.kpqznn.SendUserReconnectResponse.encode(message.sendUserReconnectResponse, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                $root.kpqznn.SendReconnectQuitResponse.encode(message.sendReconnectQuitResponse, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                $root.kpqznn.SendUserOnBackResponse.encode(message.sendUserOnBackResponse, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                $root.kpqznn.DelayCheckResponse.encode(message.delayCheckResponse, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                $root.kpqznn.UserReconnectResponse.encode(message.userReconnectResponse, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                $root.kpqznn.SendHeartBeatResponse.encode(message.sendHeartBeatResponse, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
            if (message.betResponse != null && message.hasOwnProperty("betResponse"))
                $root.kpqznn.BetResponse.encode(message.betResponse, writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
            if (message.showCardResponse != null && message.hasOwnProperty("showCardResponse"))
                $root.kpqznn.ShowCardResponse.encode(message.showCardResponse, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
            if (message.qiangZhuangResponse != null && message.hasOwnProperty("qiangZhuangResponse"))
                $root.kpqznn.QiangZhuangResponse.encode(message.qiangZhuangResponse, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.sendCoinTableInfoResponse != null && message.hasOwnProperty("sendCoinTableInfoResponse"))
                $root.kpqznn.SendCoinTableInfoResponse.encode(message.sendCoinTableInfoResponse, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse"))
                $root.kpqznn.JoinTableResponse.encode(message.joinTableResponse, writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                $root.kpqznn.SendMessageResponse.encode(message.sendMessageResponse, writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
            if (message.kickedOutResponse != null && message.hasOwnProperty("kickedOutResponse"))
                $root.kpqznn.KickedOutResponse.encode(message.kickedOutResponse, writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
            if (message.tableInfoResponse != null && message.hasOwnProperty("tableInfoResponse"))
                $root.kpqznn.TableInfoResponse.encode(message.tableInfoResponse, writer.uint32(/* id 43, wireType 2 =*/346).fork()).ldelim();
            if (message.sendRoundResultResponse != null && message.hasOwnProperty("sendRoundResultResponse"))
                $root.kpqznn.SendRoundResultResponse.encode(message.sendRoundResultResponse, writer.uint32(/* id 44, wireType 2 =*/354).fork()).ldelim();
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                $root.kpqznn.SendRemainTimeResponse.encode(message.sendRemainTimeResponse, writer.uint32(/* id 45, wireType 2 =*/362).fork()).ldelim();
            if (message.sendGameNoticeResponse != null && message.hasOwnProperty("sendGameNoticeResponse"))
                $root.kpqznn.SendGameNoticeResponse.encode(message.sendGameNoticeResponse, writer.uint32(/* id 46, wireType 2 =*/370).fork()).ldelim();
            if (message.sendLeaveTableResponse != null && message.hasOwnProperty("sendLeaveTableResponse"))
                $root.kpqznn.SendLeaveTableResponse.encode(message.sendLeaveTableResponse, writer.uint32(/* id 47, wireType 2 =*/378).fork()).ldelim();
            if (message.roomListResponse != null && message.hasOwnProperty("roomListResponse"))
                $root.kpqznn.RoomListResponse.encode(message.roomListResponse, writer.uint32(/* id 50, wireType 2 =*/402).fork()).ldelim();
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                $root.kpqznn.SendCoinRefreshResponse.encode(message.sendCoinRefreshResponse, writer.uint32(/* id 52, wireType 2 =*/418).fork()).ldelim();
            if (message.hallRefreshCoinResponse != null && message.hasOwnProperty("hallRefreshCoinResponse"))
                $root.kpqznn.HallRefreshCoinResponse.encode(message.hallRefreshCoinResponse, writer.uint32(/* id 53, wireType 2 =*/426).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link kpqznn.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kpqznn.Response
         * @static
         * @param {kpqznn.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof kpqznn.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kpqznn.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.kpqznn.Response();
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
                case 11:
                    message.userReadyResponse = $root.kpqznn.UserReadyResponse.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.userQuitResponse = $root.kpqznn.UserQuitResponse.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.sendUserReconnectResponse = $root.kpqznn.SendUserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 28:
                    message.sendReconnectQuitResponse = $root.kpqznn.SendReconnectQuitResponse.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.sendUserOnBackResponse = $root.kpqznn.SendUserOnBackResponse.decode(reader, reader.uint32());
                    break;
                case 33:
                    message.delayCheckResponse = $root.kpqznn.DelayCheckResponse.decode(reader, reader.uint32());
                    break;
                case 34:
                    message.userReconnectResponse = $root.kpqznn.UserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 35:
                    message.sendHeartBeatResponse = $root.kpqznn.SendHeartBeatResponse.decode(reader, reader.uint32());
                    break;
                case 36:
                    message.betResponse = $root.kpqznn.BetResponse.decode(reader, reader.uint32());
                    break;
                case 37:
                    message.showCardResponse = $root.kpqznn.ShowCardResponse.decode(reader, reader.uint32());
                    break;
                case 38:
                    message.qiangZhuangResponse = $root.kpqznn.QiangZhuangResponse.decode(reader, reader.uint32());
                    break;
                case 39:
                    message.sendCoinTableInfoResponse = $root.kpqznn.SendCoinTableInfoResponse.decode(reader, reader.uint32());
                    break;
                case 40:
                    message.joinTableResponse = $root.kpqznn.JoinTableResponse.decode(reader, reader.uint32());
                    break;
                case 41:
                    message.sendMessageResponse = $root.kpqznn.SendMessageResponse.decode(reader, reader.uint32());
                    break;
                case 42:
                    message.kickedOutResponse = $root.kpqznn.KickedOutResponse.decode(reader, reader.uint32());
                    break;
                case 43:
                    message.tableInfoResponse = $root.kpqznn.TableInfoResponse.decode(reader, reader.uint32());
                    break;
                case 44:
                    message.sendRoundResultResponse = $root.kpqznn.SendRoundResultResponse.decode(reader, reader.uint32());
                    break;
                case 45:
                    message.sendRemainTimeResponse = $root.kpqznn.SendRemainTimeResponse.decode(reader, reader.uint32());
                    break;
                case 46:
                    message.sendGameNoticeResponse = $root.kpqznn.SendGameNoticeResponse.decode(reader, reader.uint32());
                    break;
                case 47:
                    message.sendLeaveTableResponse = $root.kpqznn.SendLeaveTableResponse.decode(reader, reader.uint32());
                    break;
                case 50:
                    message.roomListResponse = $root.kpqznn.RoomListResponse.decode(reader, reader.uint32());
                    break;
                case 52:
                    message.sendCoinRefreshResponse = $root.kpqznn.SendCoinRefreshResponse.decode(reader, reader.uint32());
                    break;
                case 53:
                    message.hallRefreshCoinResponse = $root.kpqznn.HallRefreshCoinResponse.decode(reader, reader.uint32());
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
         * @memberof kpqznn.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kpqznn.Response} Response
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
         * @memberof kpqznn.Response
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
                case 3010:
                case 3006:
                case 3008:
                case 3011:
                case 3007:
                case 3009:
                case 3013:
                case 3014:
                case 3043:
                case 3200:
                case 3071:
                case 3025:
                case 3040:
                case 3056:
                case 3201:
                case 3026:
                case 3077:
                case 3076:
                case 3075:
                case 3069:
                case 3070:
                case 3091:
                case 3092:
                case 30002:
                case 3005:
                case 30001:
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
                case 2002:
                case 2009:
                case 2010:
                case 2012:
                case 2015:
                case 2024:
                case 2023:
                case 2027:
                case 2059:
                case 2030:
                case 2031:
                case 2035:
                case 2061:
                case 2060:
                case 2062:
                case 2044:
                case 2080:
                case 2081:
                case 2106:
                case 2401:
                case 3000:
                case 3003:
                case 4001:
                case 10000:
                case 20015:
                case 20004:
                case 20005:
                case 20010:
                case 20019:
                case 20017:
                    break;
                }
            if (message.userReadyResponse != null && message.hasOwnProperty("userReadyResponse")) {
                var error = $root.kpqznn.UserReadyResponse.verify(message.userReadyResponse);
                if (error)
                    return "userReadyResponse." + error;
            }
            if (message.userQuitResponse != null && message.hasOwnProperty("userQuitResponse")) {
                var error = $root.kpqznn.UserQuitResponse.verify(message.userQuitResponse);
                if (error)
                    return "userQuitResponse." + error;
            }
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse")) {
                var error = $root.kpqznn.SendUserReconnectResponse.verify(message.sendUserReconnectResponse);
                if (error)
                    return "sendUserReconnectResponse." + error;
            }
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse")) {
                var error = $root.kpqznn.SendReconnectQuitResponse.verify(message.sendReconnectQuitResponse);
                if (error)
                    return "sendReconnectQuitResponse." + error;
            }
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse")) {
                var error = $root.kpqznn.SendUserOnBackResponse.verify(message.sendUserOnBackResponse);
                if (error)
                    return "sendUserOnBackResponse." + error;
            }
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse")) {
                var error = $root.kpqznn.DelayCheckResponse.verify(message.delayCheckResponse);
                if (error)
                    return "delayCheckResponse." + error;
            }
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse")) {
                var error = $root.kpqznn.UserReconnectResponse.verify(message.userReconnectResponse);
                if (error)
                    return "userReconnectResponse." + error;
            }
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse")) {
                var error = $root.kpqznn.SendHeartBeatResponse.verify(message.sendHeartBeatResponse);
                if (error)
                    return "sendHeartBeatResponse." + error;
            }
            if (message.betResponse != null && message.hasOwnProperty("betResponse")) {
                var error = $root.kpqznn.BetResponse.verify(message.betResponse);
                if (error)
                    return "betResponse." + error;
            }
            if (message.showCardResponse != null && message.hasOwnProperty("showCardResponse")) {
                var error = $root.kpqznn.ShowCardResponse.verify(message.showCardResponse);
                if (error)
                    return "showCardResponse." + error;
            }
            if (message.qiangZhuangResponse != null && message.hasOwnProperty("qiangZhuangResponse")) {
                var error = $root.kpqznn.QiangZhuangResponse.verify(message.qiangZhuangResponse);
                if (error)
                    return "qiangZhuangResponse." + error;
            }
            if (message.sendCoinTableInfoResponse != null && message.hasOwnProperty("sendCoinTableInfoResponse")) {
                var error = $root.kpqznn.SendCoinTableInfoResponse.verify(message.sendCoinTableInfoResponse);
                if (error)
                    return "sendCoinTableInfoResponse." + error;
            }
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse")) {
                var error = $root.kpqznn.JoinTableResponse.verify(message.joinTableResponse);
                if (error)
                    return "joinTableResponse." + error;
            }
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse")) {
                var error = $root.kpqznn.SendMessageResponse.verify(message.sendMessageResponse);
                if (error)
                    return "sendMessageResponse." + error;
            }
            if (message.kickedOutResponse != null && message.hasOwnProperty("kickedOutResponse")) {
                var error = $root.kpqznn.KickedOutResponse.verify(message.kickedOutResponse);
                if (error)
                    return "kickedOutResponse." + error;
            }
            if (message.tableInfoResponse != null && message.hasOwnProperty("tableInfoResponse")) {
                var error = $root.kpqznn.TableInfoResponse.verify(message.tableInfoResponse);
                if (error)
                    return "tableInfoResponse." + error;
            }
            if (message.sendRoundResultResponse != null && message.hasOwnProperty("sendRoundResultResponse")) {
                var error = $root.kpqznn.SendRoundResultResponse.verify(message.sendRoundResultResponse);
                if (error)
                    return "sendRoundResultResponse." + error;
            }
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse")) {
                var error = $root.kpqznn.SendRemainTimeResponse.verify(message.sendRemainTimeResponse);
                if (error)
                    return "sendRemainTimeResponse." + error;
            }
            if (message.sendGameNoticeResponse != null && message.hasOwnProperty("sendGameNoticeResponse")) {
                var error = $root.kpqznn.SendGameNoticeResponse.verify(message.sendGameNoticeResponse);
                if (error)
                    return "sendGameNoticeResponse." + error;
            }
            if (message.sendLeaveTableResponse != null && message.hasOwnProperty("sendLeaveTableResponse")) {
                var error = $root.kpqznn.SendLeaveTableResponse.verify(message.sendLeaveTableResponse);
                if (error)
                    return "sendLeaveTableResponse." + error;
            }
            if (message.roomListResponse != null && message.hasOwnProperty("roomListResponse")) {
                var error = $root.kpqznn.RoomListResponse.verify(message.roomListResponse);
                if (error)
                    return "roomListResponse." + error;
            }
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse")) {
                var error = $root.kpqznn.SendCoinRefreshResponse.verify(message.sendCoinRefreshResponse);
                if (error)
                    return "sendCoinRefreshResponse." + error;
            }
            if (message.hallRefreshCoinResponse != null && message.hasOwnProperty("hallRefreshCoinResponse")) {
                var error = $root.kpqznn.HallRefreshCoinResponse.verify(message.hallRefreshCoinResponse);
                if (error)
                    return "hallRefreshCoinResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kpqznn.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kpqznn.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.kpqznn.Response)
                return object;
            var message = new $root.kpqznn.Response();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "ERROR":
            case 400:
                message.error = 400;
                break;
            case "USER_READY_ERROR":
            case 3010:
                message.error = 3010;
                break;
            case "ACCOUNT_NOT_ENOUGH":
            case 3006:
                message.error = 3006;
                break;
            case "TABLE_NOT_FIND_ERROR":
            case 3008:
                message.error = 3008;
                break;
            case "NOT_IN_TABLE":
            case 3011:
                message.error = 3011;
                break;
            case "JOIN_TABLE_ERROR":
            case 3007:
                message.error = 3007;
                break;
            case "TABLE_NO_POSITION":
            case 3009:
                message.error = 3009;
                break;
            case "USER_QUIT_ERROR":
            case 3013:
                message.error = 3013;
                break;
            case "NOT_ALLOW_QUIT":
            case 3014:
                message.error = 3014;
                break;
            case "WAITING_RESPONSE":
            case 3043:
                message.error = 3043;
                break;
            case "USER_MP_ERROR":
            case 3200:
                message.error = 3200;
                break;
            case "TABLE_HASSTART_POSITION":
            case 3071:
                message.error = 3071;
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
            case "RE_JOIN_TABLE_ERROR":
            case 3026:
                message.error = 3026;
                break;
            case "USER_BET_ERROR":
            case 3077:
                message.error = 3077;
                break;
            case "USER_SHOWCARD_ERROR":
            case 3076:
                message.error = 3076;
                break;
            case "QIANG_ZHUANG_ERROR":
            case 3075:
                message.error = 3075;
                break;
            case "USER_CHANGE_TABLE_ERROR":
            case 3069:
                message.error = 3069;
                break;
            case "USER_CHANGE_TABLE_STATE_ERROR":
            case 3070:
                message.error = 3070;
                break;
            case "ROOM_LIST_ERROR":
            case 3091:
                message.error = 3091;
                break;
            case "CHANNELID_GAMENO_ERROR":
            case 3092:
                message.error = 3092;
                break;
            case "USER_BAN":
            case 30002:
                message.error = 30002;
                break;
            case "USER_NOT_FOUND_ERROR":
            case 3005:
                message.error = 3005;
                break;
            case "FORCED_OFFLINE":
            case 30001:
                message.error = 30001;
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
            case "JOIN_TABLE":
            case 2002:
                message.cmd = 2002;
                break;
            case "SEND_USER_INFO":
            case 2009:
                message.cmd = 2009;
                break;
            case "SHOW_CARD":
            case 2010:
                message.cmd = 2010;
                break;
            case "BET":
            case 2012:
                message.cmd = 2012;
                break;
            case "SEND_ROUND_RESULT":
            case 2015:
                message.cmd = 2015;
                break;
            case "QIANG_ZHUANG":
            case 2024:
                message.cmd = 2024;
                break;
            case "SEND_ZHUANG":
            case 2023:
                message.cmd = 2023;
                break;
            case "SEND_USER_CARD":
            case 2027:
                message.cmd = 2027;
                break;
            case "SEND_USER_BEST_CARD":
            case 2059:
                message.cmd = 2059;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "MESSAGE":
            case 2060:
                message.cmd = 2060;
                break;
            case "SEND_COIN_REFRESH":
            case 2062:
                message.cmd = 2062;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "USER_READY":
            case 2106:
                message.cmd = 2106;
                break;
            case "SEND_GAME_NOTICE":
            case 2401:
                message.cmd = 2401;
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
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            case "SEND_REMAIN_TIME":
            case 20015:
                message.cmd = 20015;
                break;
            case "CHANGE_TABLE":
            case 20004:
                message.cmd = 20004;
                break;
            case "ROOMLIST":
            case 20005:
                message.cmd = 20005;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "SEND_LEAVE_TABLE":
            case 20019:
                message.cmd = 20019;
                break;
            case "SEND_COIN_TABLE_INFO":
            case 20017:
                message.cmd = 20017;
                break;
            }
            if (object.userReadyResponse != null) {
                if (typeof object.userReadyResponse !== "object")
                    throw TypeError(".kpqznn.Response.userReadyResponse: object expected");
                message.userReadyResponse = $root.kpqznn.UserReadyResponse.fromObject(object.userReadyResponse);
            }
            if (object.userQuitResponse != null) {
                if (typeof object.userQuitResponse !== "object")
                    throw TypeError(".kpqznn.Response.userQuitResponse: object expected");
                message.userQuitResponse = $root.kpqznn.UserQuitResponse.fromObject(object.userQuitResponse);
            }
            if (object.sendUserReconnectResponse != null) {
                if (typeof object.sendUserReconnectResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendUserReconnectResponse: object expected");
                message.sendUserReconnectResponse = $root.kpqznn.SendUserReconnectResponse.fromObject(object.sendUserReconnectResponse);
            }
            if (object.sendReconnectQuitResponse != null) {
                if (typeof object.sendReconnectQuitResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendReconnectQuitResponse: object expected");
                message.sendReconnectQuitResponse = $root.kpqznn.SendReconnectQuitResponse.fromObject(object.sendReconnectQuitResponse);
            }
            if (object.sendUserOnBackResponse != null) {
                if (typeof object.sendUserOnBackResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendUserOnBackResponse: object expected");
                message.sendUserOnBackResponse = $root.kpqznn.SendUserOnBackResponse.fromObject(object.sendUserOnBackResponse);
            }
            if (object.delayCheckResponse != null) {
                if (typeof object.delayCheckResponse !== "object")
                    throw TypeError(".kpqznn.Response.delayCheckResponse: object expected");
                message.delayCheckResponse = $root.kpqznn.DelayCheckResponse.fromObject(object.delayCheckResponse);
            }
            if (object.userReconnectResponse != null) {
                if (typeof object.userReconnectResponse !== "object")
                    throw TypeError(".kpqznn.Response.userReconnectResponse: object expected");
                message.userReconnectResponse = $root.kpqznn.UserReconnectResponse.fromObject(object.userReconnectResponse);
            }
            if (object.sendHeartBeatResponse != null) {
                if (typeof object.sendHeartBeatResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendHeartBeatResponse: object expected");
                message.sendHeartBeatResponse = $root.kpqznn.SendHeartBeatResponse.fromObject(object.sendHeartBeatResponse);
            }
            if (object.betResponse != null) {
                if (typeof object.betResponse !== "object")
                    throw TypeError(".kpqznn.Response.betResponse: object expected");
                message.betResponse = $root.kpqznn.BetResponse.fromObject(object.betResponse);
            }
            if (object.showCardResponse != null) {
                if (typeof object.showCardResponse !== "object")
                    throw TypeError(".kpqznn.Response.showCardResponse: object expected");
                message.showCardResponse = $root.kpqznn.ShowCardResponse.fromObject(object.showCardResponse);
            }
            if (object.qiangZhuangResponse != null) {
                if (typeof object.qiangZhuangResponse !== "object")
                    throw TypeError(".kpqznn.Response.qiangZhuangResponse: object expected");
                message.qiangZhuangResponse = $root.kpqznn.QiangZhuangResponse.fromObject(object.qiangZhuangResponse);
            }
            if (object.sendCoinTableInfoResponse != null) {
                if (typeof object.sendCoinTableInfoResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendCoinTableInfoResponse: object expected");
                message.sendCoinTableInfoResponse = $root.kpqznn.SendCoinTableInfoResponse.fromObject(object.sendCoinTableInfoResponse);
            }
            if (object.joinTableResponse != null) {
                if (typeof object.joinTableResponse !== "object")
                    throw TypeError(".kpqznn.Response.joinTableResponse: object expected");
                message.joinTableResponse = $root.kpqznn.JoinTableResponse.fromObject(object.joinTableResponse);
            }
            if (object.sendMessageResponse != null) {
                if (typeof object.sendMessageResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendMessageResponse: object expected");
                message.sendMessageResponse = $root.kpqznn.SendMessageResponse.fromObject(object.sendMessageResponse);
            }
            if (object.kickedOutResponse != null) {
                if (typeof object.kickedOutResponse !== "object")
                    throw TypeError(".kpqznn.Response.kickedOutResponse: object expected");
                message.kickedOutResponse = $root.kpqznn.KickedOutResponse.fromObject(object.kickedOutResponse);
            }
            if (object.tableInfoResponse != null) {
                if (typeof object.tableInfoResponse !== "object")
                    throw TypeError(".kpqznn.Response.tableInfoResponse: object expected");
                message.tableInfoResponse = $root.kpqznn.TableInfoResponse.fromObject(object.tableInfoResponse);
            }
            if (object.sendRoundResultResponse != null) {
                if (typeof object.sendRoundResultResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendRoundResultResponse: object expected");
                message.sendRoundResultResponse = $root.kpqznn.SendRoundResultResponse.fromObject(object.sendRoundResultResponse);
            }
            if (object.sendRemainTimeResponse != null) {
                if (typeof object.sendRemainTimeResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendRemainTimeResponse: object expected");
                message.sendRemainTimeResponse = $root.kpqznn.SendRemainTimeResponse.fromObject(object.sendRemainTimeResponse);
            }
            if (object.sendGameNoticeResponse != null) {
                if (typeof object.sendGameNoticeResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendGameNoticeResponse: object expected");
                message.sendGameNoticeResponse = $root.kpqznn.SendGameNoticeResponse.fromObject(object.sendGameNoticeResponse);
            }
            if (object.sendLeaveTableResponse != null) {
                if (typeof object.sendLeaveTableResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendLeaveTableResponse: object expected");
                message.sendLeaveTableResponse = $root.kpqznn.SendLeaveTableResponse.fromObject(object.sendLeaveTableResponse);
            }
            if (object.roomListResponse != null) {
                if (typeof object.roomListResponse !== "object")
                    throw TypeError(".kpqznn.Response.roomListResponse: object expected");
                message.roomListResponse = $root.kpqznn.RoomListResponse.fromObject(object.roomListResponse);
            }
            if (object.sendCoinRefreshResponse != null) {
                if (typeof object.sendCoinRefreshResponse !== "object")
                    throw TypeError(".kpqznn.Response.sendCoinRefreshResponse: object expected");
                message.sendCoinRefreshResponse = $root.kpqznn.SendCoinRefreshResponse.fromObject(object.sendCoinRefreshResponse);
            }
            if (object.hallRefreshCoinResponse != null) {
                if (typeof object.hallRefreshCoinResponse !== "object")
                    throw TypeError(".kpqznn.Response.hallRefreshCoinResponse: object expected");
                message.hallRefreshCoinResponse = $root.kpqznn.HallRefreshCoinResponse.fromObject(object.hallRefreshCoinResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kpqznn.Response
         * @static
         * @param {kpqznn.Response} message Response
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
                object.userReadyResponse = null;
                object.userQuitResponse = null;
                object.sendUserReconnectResponse = null;
                object.sendReconnectQuitResponse = null;
                object.sendUserOnBackResponse = null;
                object.delayCheckResponse = null;
                object.userReconnectResponse = null;
                object.sendHeartBeatResponse = null;
                object.betResponse = null;
                object.showCardResponse = null;
                object.qiangZhuangResponse = null;
                object.sendCoinTableInfoResponse = null;
                object.joinTableResponse = null;
                object.sendMessageResponse = null;
                object.kickedOutResponse = null;
                object.tableInfoResponse = null;
                object.sendRoundResultResponse = null;
                object.sendRemainTimeResponse = null;
                object.sendGameNoticeResponse = null;
                object.sendLeaveTableResponse = null;
                object.roomListResponse = null;
                object.sendCoinRefreshResponse = null;
                object.hallRefreshCoinResponse = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.kpqznn.Response.ErrorCode[message.error] : message.error;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.kpqznn.Request.CMD[message.cmd] : message.cmd;
            if (message.userReadyResponse != null && message.hasOwnProperty("userReadyResponse"))
                object.userReadyResponse = $root.kpqznn.UserReadyResponse.toObject(message.userReadyResponse, options);
            if (message.userQuitResponse != null && message.hasOwnProperty("userQuitResponse"))
                object.userQuitResponse = $root.kpqznn.UserQuitResponse.toObject(message.userQuitResponse, options);
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                object.sendUserReconnectResponse = $root.kpqznn.SendUserReconnectResponse.toObject(message.sendUserReconnectResponse, options);
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                object.sendReconnectQuitResponse = $root.kpqznn.SendReconnectQuitResponse.toObject(message.sendReconnectQuitResponse, options);
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                object.sendUserOnBackResponse = $root.kpqznn.SendUserOnBackResponse.toObject(message.sendUserOnBackResponse, options);
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                object.delayCheckResponse = $root.kpqznn.DelayCheckResponse.toObject(message.delayCheckResponse, options);
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                object.userReconnectResponse = $root.kpqznn.UserReconnectResponse.toObject(message.userReconnectResponse, options);
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                object.sendHeartBeatResponse = $root.kpqznn.SendHeartBeatResponse.toObject(message.sendHeartBeatResponse, options);
            if (message.betResponse != null && message.hasOwnProperty("betResponse"))
                object.betResponse = $root.kpqznn.BetResponse.toObject(message.betResponse, options);
            if (message.showCardResponse != null && message.hasOwnProperty("showCardResponse"))
                object.showCardResponse = $root.kpqznn.ShowCardResponse.toObject(message.showCardResponse, options);
            if (message.qiangZhuangResponse != null && message.hasOwnProperty("qiangZhuangResponse"))
                object.qiangZhuangResponse = $root.kpqznn.QiangZhuangResponse.toObject(message.qiangZhuangResponse, options);
            if (message.sendCoinTableInfoResponse != null && message.hasOwnProperty("sendCoinTableInfoResponse"))
                object.sendCoinTableInfoResponse = $root.kpqznn.SendCoinTableInfoResponse.toObject(message.sendCoinTableInfoResponse, options);
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse"))
                object.joinTableResponse = $root.kpqznn.JoinTableResponse.toObject(message.joinTableResponse, options);
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                object.sendMessageResponse = $root.kpqznn.SendMessageResponse.toObject(message.sendMessageResponse, options);
            if (message.kickedOutResponse != null && message.hasOwnProperty("kickedOutResponse"))
                object.kickedOutResponse = $root.kpqznn.KickedOutResponse.toObject(message.kickedOutResponse, options);
            if (message.tableInfoResponse != null && message.hasOwnProperty("tableInfoResponse"))
                object.tableInfoResponse = $root.kpqznn.TableInfoResponse.toObject(message.tableInfoResponse, options);
            if (message.sendRoundResultResponse != null && message.hasOwnProperty("sendRoundResultResponse"))
                object.sendRoundResultResponse = $root.kpqznn.SendRoundResultResponse.toObject(message.sendRoundResultResponse, options);
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                object.sendRemainTimeResponse = $root.kpqznn.SendRemainTimeResponse.toObject(message.sendRemainTimeResponse, options);
            if (message.sendGameNoticeResponse != null && message.hasOwnProperty("sendGameNoticeResponse"))
                object.sendGameNoticeResponse = $root.kpqznn.SendGameNoticeResponse.toObject(message.sendGameNoticeResponse, options);
            if (message.sendLeaveTableResponse != null && message.hasOwnProperty("sendLeaveTableResponse"))
                object.sendLeaveTableResponse = $root.kpqznn.SendLeaveTableResponse.toObject(message.sendLeaveTableResponse, options);
            if (message.roomListResponse != null && message.hasOwnProperty("roomListResponse"))
                object.roomListResponse = $root.kpqznn.RoomListResponse.toObject(message.roomListResponse, options);
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                object.sendCoinRefreshResponse = $root.kpqznn.SendCoinRefreshResponse.toObject(message.sendCoinRefreshResponse, options);
            if (message.hallRefreshCoinResponse != null && message.hasOwnProperty("hallRefreshCoinResponse"))
                object.hallRefreshCoinResponse = $root.kpqznn.HallRefreshCoinResponse.toObject(message.hallRefreshCoinResponse, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof kpqznn.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name kpqznn.Response.ErrorCode
         * @enum {string}
         * @property {number} NO_ERROR=0 NO_ERROR value
         * @property {number} ERROR=400 ERROR value
         * @property {number} USER_READY_ERROR=3010 USER_READY_ERROR value
         * @property {number} ACCOUNT_NOT_ENOUGH=3006 ACCOUNT_NOT_ENOUGH value
         * @property {number} TABLE_NOT_FIND_ERROR=3008 TABLE_NOT_FIND_ERROR value
         * @property {number} NOT_IN_TABLE=3011 NOT_IN_TABLE value
         * @property {number} JOIN_TABLE_ERROR=3007 JOIN_TABLE_ERROR value
         * @property {number} TABLE_NO_POSITION=3009 TABLE_NO_POSITION value
         * @property {number} USER_QUIT_ERROR=3013 USER_QUIT_ERROR value
         * @property {number} NOT_ALLOW_QUIT=3014 NOT_ALLOW_QUIT value
         * @property {number} WAITING_RESPONSE=3043 WAITING_RESPONSE value
         * @property {number} USER_MP_ERROR=3200 USER_MP_ERROR value
         * @property {number} TABLE_HASSTART_POSITION=3071 TABLE_HASSTART_POSITION value
         * @property {number} RECONNET_ERROR=3025 RECONNET_ERROR value
         * @property {number} SEND_MESSAGE_ERROR=3040 SEND_MESSAGE_ERROR value
         * @property {number} USER_ONBACK_ERROR=3056 USER_ONBACK_ERROR value
         * @property {number} DELAY_CHECK_ERROR=3201 DELAY_CHECK_ERROR value
         * @property {number} RE_JOIN_TABLE_ERROR=3026 RE_JOIN_TABLE_ERROR value
         * @property {number} USER_BET_ERROR=3077 USER_BET_ERROR value
         * @property {number} USER_SHOWCARD_ERROR=3076 USER_SHOWCARD_ERROR value
         * @property {number} QIANG_ZHUANG_ERROR=3075 QIANG_ZHUANG_ERROR value
         * @property {number} USER_CHANGE_TABLE_ERROR=3069 USER_CHANGE_TABLE_ERROR value
         * @property {number} USER_CHANGE_TABLE_STATE_ERROR=3070 USER_CHANGE_TABLE_STATE_ERROR value
         * @property {number} ROOM_LIST_ERROR=3091 ROOM_LIST_ERROR value
         * @property {number} CHANNELID_GAMENO_ERROR=3092 CHANNELID_GAMENO_ERROR value
         * @property {number} USER_BAN=30002 USER_BAN value
         * @property {number} USER_NOT_FOUND_ERROR=3005 USER_NOT_FOUND_ERROR value
         * @property {number} FORCED_OFFLINE=30001 FORCED_OFFLINE value
         */
        Response.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NO_ERROR"] = 0;
            values[valuesById[400] = "ERROR"] = 400;
            values[valuesById[3010] = "USER_READY_ERROR"] = 3010;
            values[valuesById[3006] = "ACCOUNT_NOT_ENOUGH"] = 3006;
            values[valuesById[3008] = "TABLE_NOT_FIND_ERROR"] = 3008;
            values[valuesById[3011] = "NOT_IN_TABLE"] = 3011;
            values[valuesById[3007] = "JOIN_TABLE_ERROR"] = 3007;
            values[valuesById[3009] = "TABLE_NO_POSITION"] = 3009;
            values[valuesById[3013] = "USER_QUIT_ERROR"] = 3013;
            values[valuesById[3014] = "NOT_ALLOW_QUIT"] = 3014;
            values[valuesById[3043] = "WAITING_RESPONSE"] = 3043;
            values[valuesById[3200] = "USER_MP_ERROR"] = 3200;
            values[valuesById[3071] = "TABLE_HASSTART_POSITION"] = 3071;
            values[valuesById[3025] = "RECONNET_ERROR"] = 3025;
            values[valuesById[3040] = "SEND_MESSAGE_ERROR"] = 3040;
            values[valuesById[3056] = "USER_ONBACK_ERROR"] = 3056;
            values[valuesById[3201] = "DELAY_CHECK_ERROR"] = 3201;
            values[valuesById[3026] = "RE_JOIN_TABLE_ERROR"] = 3026;
            values[valuesById[3077] = "USER_BET_ERROR"] = 3077;
            values[valuesById[3076] = "USER_SHOWCARD_ERROR"] = 3076;
            values[valuesById[3075] = "QIANG_ZHUANG_ERROR"] = 3075;
            values[valuesById[3069] = "USER_CHANGE_TABLE_ERROR"] = 3069;
            values[valuesById[3070] = "USER_CHANGE_TABLE_STATE_ERROR"] = 3070;
            values[valuesById[3091] = "ROOM_LIST_ERROR"] = 3091;
            values[valuesById[3092] = "CHANNELID_GAMENO_ERROR"] = 3092;
            values[valuesById[30002] = "USER_BAN"] = 30002;
            values[valuesById[3005] = "USER_NOT_FOUND_ERROR"] = 3005;
            values[valuesById[30001] = "FORCED_OFFLINE"] = 30001;
            return values;
        })();

        return Response;
    })();

    return kpqznn;
})();

module.exports = $root;
