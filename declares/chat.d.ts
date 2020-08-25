import * as $protobuf from "protobufjs";
/** Namespace chat. */
export namespace chat {

    /** Properties of a SimplePlayerInfo. */
    interface ISimplePlayerInfo {

        /** SimplePlayerInfo UserID */
        UserID?: (number|Long|null);

        /** SimplePlayerInfo Name */
        Name?: (string|null);

        /** SimplePlayerInfo HeadImg */
        HeadImg?: (string|null);
    }

    /** Represents a SimplePlayerInfo. */
    class SimplePlayerInfo implements ISimplePlayerInfo {

        /**
         * Constructs a new SimplePlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ISimplePlayerInfo);

        /** SimplePlayerInfo UserID. */
        public UserID: (number|Long);

        /** SimplePlayerInfo Name. */
        public Name: string;

        /** SimplePlayerInfo HeadImg. */
        public HeadImg: string;

        /**
         * Creates a new SimplePlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SimplePlayerInfo instance
         */
        public static create(properties?: chat.ISimplePlayerInfo): chat.SimplePlayerInfo;

        /**
         * Encodes the specified SimplePlayerInfo message. Does not implicitly {@link chat.SimplePlayerInfo.verify|verify} messages.
         * @param message SimplePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ISimplePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SimplePlayerInfo message, length delimited. Does not implicitly {@link chat.SimplePlayerInfo.verify|verify} messages.
         * @param message SimplePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ISimplePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimplePlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SimplePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.SimplePlayerInfo;

        /**
         * Decodes a SimplePlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SimplePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.SimplePlayerInfo;

        /**
         * Verifies a SimplePlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SimplePlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SimplePlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): chat.SimplePlayerInfo;

        /**
         * Creates a plain object from a SimplePlayerInfo message. Also converts values to other types if specified.
         * @param message SimplePlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.SimplePlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SimplePlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WorldChat. */
    interface IWorldChat {

        /** WorldChat Content */
        Content?: (string|null);
    }

    /** Represents a WorldChat. */
    class WorldChat implements IWorldChat {

        /**
         * Constructs a new WorldChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IWorldChat);

        /** WorldChat Content. */
        public Content: string;

        /**
         * Creates a new WorldChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldChat instance
         */
        public static create(properties?: chat.IWorldChat): chat.WorldChat;

        /**
         * Encodes the specified WorldChat message. Does not implicitly {@link chat.WorldChat.verify|verify} messages.
         * @param message WorldChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IWorldChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorldChat message, length delimited. Does not implicitly {@link chat.WorldChat.verify|verify} messages.
         * @param message WorldChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IWorldChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorldChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorldChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.WorldChat;

        /**
         * Decodes a WorldChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorldChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.WorldChat;

        /**
         * Verifies a WorldChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldChat
         */
        public static fromObject(object: { [k: string]: any }): chat.WorldChat;

        /**
         * Creates a plain object from a WorldChat message. Also converts values to other types if specified.
         * @param message WorldChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.WorldChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WorldChatResp. */
    interface IWorldChatResp {

        /** WorldChatResp Content */
        Content?: (string|null);

        /** WorldChatResp Timestamp */
        Timestamp?: (number|Long|null);

        /** WorldChatResp Sender */
        Sender?: (chat.ISimplePlayerInfo|null);
    }

    /** Represents a WorldChatResp. */
    class WorldChatResp implements IWorldChatResp {

        /**
         * Constructs a new WorldChatResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IWorldChatResp);

        /** WorldChatResp Content. */
        public Content: string;

        /** WorldChatResp Timestamp. */
        public Timestamp: (number|Long);

        /** WorldChatResp Sender. */
        public Sender?: (chat.ISimplePlayerInfo|null);

        /**
         * Creates a new WorldChatResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldChatResp instance
         */
        public static create(properties?: chat.IWorldChatResp): chat.WorldChatResp;

        /**
         * Encodes the specified WorldChatResp message. Does not implicitly {@link chat.WorldChatResp.verify|verify} messages.
         * @param message WorldChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IWorldChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorldChatResp message, length delimited. Does not implicitly {@link chat.WorldChatResp.verify|verify} messages.
         * @param message WorldChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IWorldChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorldChatResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorldChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.WorldChatResp;

        /**
         * Decodes a WorldChatResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorldChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.WorldChatResp;

        /**
         * Verifies a WorldChatResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldChatResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldChatResp
         */
        public static fromObject(object: { [k: string]: any }): chat.WorldChatResp;

        /**
         * Creates a plain object from a WorldChatResp message. Also converts values to other types if specified.
         * @param message WorldChatResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.WorldChatResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldChatResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupChat. */
    interface IGroupChat {

        /** GroupChat Content */
        Content?: (string|null);

        /** GroupChat GroupId */
        GroupId?: (number|Long|null);
    }

    /** Represents a GroupChat. */
    class GroupChat implements IGroupChat {

        /**
         * Constructs a new GroupChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IGroupChat);

        /** GroupChat Content. */
        public Content: string;

        /** GroupChat GroupId. */
        public GroupId: (number|Long);

        /**
         * Creates a new GroupChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupChat instance
         */
        public static create(properties?: chat.IGroupChat): chat.GroupChat;

        /**
         * Encodes the specified GroupChat message. Does not implicitly {@link chat.GroupChat.verify|verify} messages.
         * @param message GroupChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IGroupChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupChat message, length delimited. Does not implicitly {@link chat.GroupChat.verify|verify} messages.
         * @param message GroupChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IGroupChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.GroupChat;

        /**
         * Decodes a GroupChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.GroupChat;

        /**
         * Verifies a GroupChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupChat
         */
        public static fromObject(object: { [k: string]: any }): chat.GroupChat;

        /**
         * Creates a plain object from a GroupChat message. Also converts values to other types if specified.
         * @param message GroupChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.GroupChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupChatResp. */
    interface IGroupChatResp {

        /** GroupChatResp Content */
        Content?: (string|null);

        /** GroupChatResp GroupId */
        GroupId?: (number|Long|null);

        /** GroupChatResp Timestamp */
        Timestamp?: (number|Long|null);

        /** GroupChatResp Sender */
        Sender?: (chat.ISimplePlayerInfo|null);
    }

    /** Represents a GroupChatResp. */
    class GroupChatResp implements IGroupChatResp {

        /**
         * Constructs a new GroupChatResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IGroupChatResp);

        /** GroupChatResp Content. */
        public Content: string;

        /** GroupChatResp GroupId. */
        public GroupId: (number|Long);

        /** GroupChatResp Timestamp. */
        public Timestamp: (number|Long);

        /** GroupChatResp Sender. */
        public Sender?: (chat.ISimplePlayerInfo|null);

        /**
         * Creates a new GroupChatResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupChatResp instance
         */
        public static create(properties?: chat.IGroupChatResp): chat.GroupChatResp;

        /**
         * Encodes the specified GroupChatResp message. Does not implicitly {@link chat.GroupChatResp.verify|verify} messages.
         * @param message GroupChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IGroupChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupChatResp message, length delimited. Does not implicitly {@link chat.GroupChatResp.verify|verify} messages.
         * @param message GroupChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IGroupChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupChatResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.GroupChatResp;

        /**
         * Decodes a GroupChatResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.GroupChatResp;

        /**
         * Verifies a GroupChatResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupChatResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupChatResp
         */
        public static fromObject(object: { [k: string]: any }): chat.GroupChatResp;

        /**
         * Creates a plain object from a GroupChatResp message. Also converts values to other types if specified.
         * @param message GroupChatResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.GroupChatResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupChatResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateChat. */
    interface IPrivateChat {

        /** PrivateChat Content */
        Content?: (string|null);

        /** PrivateChat TargetId */
        TargetId?: (number|Long|null);
    }

    /** Represents a PrivateChat. */
    class PrivateChat implements IPrivateChat {

        /**
         * Constructs a new PrivateChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IPrivateChat);

        /** PrivateChat Content. */
        public Content: string;

        /** PrivateChat TargetId. */
        public TargetId: (number|Long);

        /**
         * Creates a new PrivateChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateChat instance
         */
        public static create(properties?: chat.IPrivateChat): chat.PrivateChat;

        /**
         * Encodes the specified PrivateChat message. Does not implicitly {@link chat.PrivateChat.verify|verify} messages.
         * @param message PrivateChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IPrivateChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateChat message, length delimited. Does not implicitly {@link chat.PrivateChat.verify|verify} messages.
         * @param message PrivateChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IPrivateChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.PrivateChat;

        /**
         * Decodes a PrivateChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.PrivateChat;

        /**
         * Verifies a PrivateChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivateChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateChat
         */
        public static fromObject(object: { [k: string]: any }): chat.PrivateChat;

        /**
         * Creates a plain object from a PrivateChat message. Also converts values to other types if specified.
         * @param message PrivateChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.PrivateChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateChatResp. */
    interface IPrivateChatResp {

        /** PrivateChatResp Content */
        Content?: (string|null);

        /** PrivateChatResp TargetId */
        TargetId?: (number|Long|null);

        /** PrivateChatResp Timestamp */
        Timestamp?: (number|Long|null);

        /** PrivateChatResp Sender */
        Sender?: (chat.ISimplePlayerInfo|null);
    }

    /** Represents a PrivateChatResp. */
    class PrivateChatResp implements IPrivateChatResp {

        /**
         * Constructs a new PrivateChatResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IPrivateChatResp);

        /** PrivateChatResp Content. */
        public Content: string;

        /** PrivateChatResp TargetId. */
        public TargetId: (number|Long);

        /** PrivateChatResp Timestamp. */
        public Timestamp: (number|Long);

        /** PrivateChatResp Sender. */
        public Sender?: (chat.ISimplePlayerInfo|null);

        /**
         * Creates a new PrivateChatResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateChatResp instance
         */
        public static create(properties?: chat.IPrivateChatResp): chat.PrivateChatResp;

        /**
         * Encodes the specified PrivateChatResp message. Does not implicitly {@link chat.PrivateChatResp.verify|verify} messages.
         * @param message PrivateChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IPrivateChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateChatResp message, length delimited. Does not implicitly {@link chat.PrivateChatResp.verify|verify} messages.
         * @param message PrivateChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IPrivateChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateChatResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.PrivateChatResp;

        /**
         * Decodes a PrivateChatResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.PrivateChatResp;

        /**
         * Verifies a PrivateChatResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivateChatResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateChatResp
         */
        public static fromObject(object: { [k: string]: any }): chat.PrivateChatResp;

        /**
         * Creates a plain object from a PrivateChatResp message. Also converts values to other types if specified.
         * @param message PrivateChatResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.PrivateChatResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateChatResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameChat. */
    interface IGameChat {

        /** GameChat Content */
        Content?: (string|null);

        /** GameChat GameId */
        GameId?: (number|Long|null);
    }

    /** Represents a GameChat. */
    class GameChat implements IGameChat {

        /**
         * Constructs a new GameChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IGameChat);

        /** GameChat Content. */
        public Content: string;

        /** GameChat GameId. */
        public GameId: (number|Long);

        /**
         * Creates a new GameChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameChat instance
         */
        public static create(properties?: chat.IGameChat): chat.GameChat;

        /**
         * Encodes the specified GameChat message. Does not implicitly {@link chat.GameChat.verify|verify} messages.
         * @param message GameChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IGameChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameChat message, length delimited. Does not implicitly {@link chat.GameChat.verify|verify} messages.
         * @param message GameChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IGameChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.GameChat;

        /**
         * Decodes a GameChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.GameChat;

        /**
         * Verifies a GameChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameChat
         */
        public static fromObject(object: { [k: string]: any }): chat.GameChat;

        /**
         * Creates a plain object from a GameChat message. Also converts values to other types if specified.
         * @param message GameChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.GameChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameChatResp. */
    interface IGameChatResp {

        /** GameChatResp Content */
        Content?: (string|null);

        /** GameChatResp GameId */
        GameId?: (number|Long|null);

        /** GameChatResp Timestamp */
        Timestamp?: (number|Long|null);

        /** GameChatResp Sender */
        Sender?: (chat.ISimplePlayerInfo|null);
    }

    /** Represents a GameChatResp. */
    class GameChatResp implements IGameChatResp {

        /**
         * Constructs a new GameChatResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IGameChatResp);

        /** GameChatResp Content. */
        public Content: string;

        /** GameChatResp GameId. */
        public GameId: (number|Long);

        /** GameChatResp Timestamp. */
        public Timestamp: (number|Long);

        /** GameChatResp Sender. */
        public Sender?: (chat.ISimplePlayerInfo|null);

        /**
         * Creates a new GameChatResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameChatResp instance
         */
        public static create(properties?: chat.IGameChatResp): chat.GameChatResp;

        /**
         * Encodes the specified GameChatResp message. Does not implicitly {@link chat.GameChatResp.verify|verify} messages.
         * @param message GameChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IGameChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameChatResp message, length delimited. Does not implicitly {@link chat.GameChatResp.verify|verify} messages.
         * @param message GameChatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IGameChatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameChatResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.GameChatResp;

        /**
         * Decodes a GameChatResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.GameChatResp;

        /**
         * Verifies a GameChatResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameChatResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameChatResp
         */
        public static fromObject(object: { [k: string]: any }): chat.GameChatResp;

        /**
         * Creates a plain object from a GameChatResp message. Also converts values to other types if specified.
         * @param message GameChatResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.GameChatResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameChatResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
