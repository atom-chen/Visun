import * as $protobuf from "protobufjs";
/** Namespace login. */
export namespace login {

    /** GameState enum. */
    enum GameState {
        Init = 0,
        Open = 1,
        Maintain = 2,
        Clear = 3,
        Stop = 4,
        Close = 5
    }

    /** GameType enum. */
    enum GameType {
        General = 0,
        Fight = 1,
        Multiplayer = 2,
        RoomCard = 3,
        Guess = 4,
        GamesCity = 5,
        DualMeet = 6,
        Sport = 7,
        Smart = 8,
        RPG = 9
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo UserID */
        UserID?: (number|Long|null);

        /** UserInfo Name */
        Name?: (string|null);

        /** UserInfo Account */
        Account?: (string|null);

        /** UserInfo Password */
        Password?: (string|null);

        /** UserInfo FaceID */
        FaceID?: (number|null);

        /** UserInfo Gender */
        Gender?: (number|null);

        /** UserInfo Age */
        Age?: (number|null);

        /** UserInfo VIP */
        VIP?: (number|null);

        /** UserInfo Level */
        Level?: (number|null);

        /** UserInfo Gold */
        Gold?: (number|Long|null);

        /** UserInfo PassPortID */
        PassPortID?: (string|null);

        /** UserInfo RealName */
        RealName?: (string|null);

        /** UserInfo PhoneNum */
        PhoneNum?: (string|null);

        /** UserInfo Email */
        Email?: (string|null);

        /** UserInfo Address */
        Address?: (string|null);

        /** UserInfo Identity */
        Identity?: (string|null);

        /** UserInfo AgentID */
        AgentID?: (number|Long|null);

        /** UserInfo ReferralCode */
        ReferralCode?: (string|null);

        /** UserInfo ClientAddr */
        ClientAddr?: (string|null);

        /** UserInfo ServerAddr */
        ServerAddr?: (string|null);

        /** UserInfo MachineCode */
        MachineCode?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IUserInfo);

        /** UserInfo UserID. */
        public UserID: (number|Long);

        /** UserInfo Name. */
        public Name: string;

        /** UserInfo Account. */
        public Account: string;

        /** UserInfo Password. */
        public Password: string;

        /** UserInfo FaceID. */
        public FaceID: number;

        /** UserInfo Gender. */
        public Gender: number;

        /** UserInfo Age. */
        public Age: number;

        /** UserInfo VIP. */
        public VIP: number;

        /** UserInfo Level. */
        public Level: number;

        /** UserInfo Gold. */
        public Gold: (number|Long);

        /** UserInfo PassPortID. */
        public PassPortID: string;

        /** UserInfo RealName. */
        public RealName: string;

        /** UserInfo PhoneNum. */
        public PhoneNum: string;

        /** UserInfo Email. */
        public Email: string;

        /** UserInfo Address. */
        public Address: string;

        /** UserInfo Identity. */
        public Identity: string;

        /** UserInfo AgentID. */
        public AgentID: (number|Long);

        /** UserInfo ReferralCode. */
        public ReferralCode: string;

        /** UserInfo ClientAddr. */
        public ClientAddr: string;

        /** UserInfo ServerAddr. */
        public ServerAddr: string;

        /** UserInfo MachineCode. */
        public MachineCode: string;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: login.IUserInfo): login.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): login.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo RoomNum */
        RoomNum?: (number|null);

        /** RoomInfo RoomKey */
        RoomKey?: (string|null);

        /** RoomInfo RoomName */
        RoomName?: (string|null);

        /** RoomInfo Games */
        Games?: (login.IGameList|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRoomInfo);

        /** RoomInfo RoomNum. */
        public RoomNum: number;

        /** RoomInfo RoomKey. */
        public RoomKey: string;

        /** RoomInfo RoomName. */
        public RoomName: string;

        /** RoomInfo Games. */
        public Games?: (login.IGameList|null);

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: login.IRoomInfo): login.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link login.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link login.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): login.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo Type */
        Type?: (login.GameType|null);

        /** GameInfo KindID */
        KindID?: (number|null);

        /** GameInfo Level */
        Level?: (number|null);

        /** GameInfo Name */
        Name?: (string|null);

        /** GameInfo EnterScore */
        EnterScore?: (number|null);

        /** GameInfo LessScore */
        LessScore?: (number|null);

        /** GameInfo MaxOnline */
        MaxOnline?: (number|null);

        /** GameInfo State */
        State?: (login.GameState|null);

        /** GameInfo Commission */
        Commission?: (number|null);

        /** GameInfo PlayScore */
        PlayScore?: (number|Long|null);

        /** GameInfo HostID */
        HostID?: (number|Long|null);

        /** GameInfo Password */
        Password?: (string|null);

        /** GameInfo MaxChair */
        MaxChair?: (number|null);

        /** GameInfo Amount */
        Amount?: (number|null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameInfo);

        /** GameInfo Type. */
        public Type: login.GameType;

        /** GameInfo KindID. */
        public KindID: number;

        /** GameInfo Level. */
        public Level: number;

        /** GameInfo Name. */
        public Name: string;

        /** GameInfo EnterScore. */
        public EnterScore: number;

        /** GameInfo LessScore. */
        public LessScore: number;

        /** GameInfo MaxOnline. */
        public MaxOnline: number;

        /** GameInfo State. */
        public State: login.GameState;

        /** GameInfo Commission. */
        public Commission: number;

        /** GameInfo PlayScore. */
        public PlayScore: (number|Long);

        /** GameInfo HostID. */
        public HostID: (number|Long);

        /** GameInfo Password. */
        public Password: string;

        /** GameInfo MaxChair. */
        public MaxChair: number;

        /** GameInfo Amount. */
        public Amount: number;

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInfo instance
         */
        public static create(properties?: login.IGameInfo): login.GameInfo;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link login.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link login.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GameInfo;

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GameInfo;

        /**
         * Verifies a GameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInfo
         */
        public static fromObject(object: { [k: string]: any }): login.GameInfo;

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @param message GameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameItem. */
    interface IGameItem {

        /** GameItem ID */
        ID?: (number|Long|null);

        /** GameItem Info */
        Info?: (login.IGameInfo|null);
    }

    /** Represents a GameItem. */
    class GameItem implements IGameItem {

        /**
         * Constructs a new GameItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameItem);

        /** GameItem ID. */
        public ID: (number|Long);

        /** GameItem Info. */
        public Info?: (login.IGameInfo|null);

        /**
         * Creates a new GameItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameItem instance
         */
        public static create(properties?: login.IGameItem): login.GameItem;

        /**
         * Encodes the specified GameItem message. Does not implicitly {@link login.GameItem.verify|verify} messages.
         * @param message GameItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameItem message, length delimited. Does not implicitly {@link login.GameItem.verify|verify} messages.
         * @param message GameItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GameItem;

        /**
         * Decodes a GameItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GameItem;

        /**
         * Verifies a GameItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameItem
         */
        public static fromObject(object: { [k: string]: any }): login.GameItem;

        /**
         * Creates a plain object from a GameItem message. Also converts values to other types if specified.
         * @param message GameItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GameItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MasterInfo. */
    interface IMasterInfo {

        /** MasterInfo UserInfo */
        UserInfo?: (login.IUserInfo|null);

        /** MasterInfo RoomsInfo */
        RoomsInfo?: (login.IRoomInfo[]|null);

        /** MasterInfo Tasks */
        Tasks?: (login.ITaskList|null);
    }

    /** Represents a MasterInfo. */
    class MasterInfo implements IMasterInfo {

        /**
         * Constructs a new MasterInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IMasterInfo);

        /** MasterInfo UserInfo. */
        public UserInfo?: (login.IUserInfo|null);

        /** MasterInfo RoomsInfo. */
        public RoomsInfo: login.IRoomInfo[];

        /** MasterInfo Tasks. */
        public Tasks?: (login.ITaskList|null);

        /**
         * Creates a new MasterInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MasterInfo instance
         */
        public static create(properties?: login.IMasterInfo): login.MasterInfo;

        /**
         * Encodes the specified MasterInfo message. Does not implicitly {@link login.MasterInfo.verify|verify} messages.
         * @param message MasterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MasterInfo message, length delimited. Does not implicitly {@link login.MasterInfo.verify|verify} messages.
         * @param message MasterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MasterInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MasterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.MasterInfo;

        /**
         * Decodes a MasterInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MasterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.MasterInfo;

        /**
         * Verifies a MasterInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MasterInfo
         */
        public static fromObject(object: { [k: string]: any }): login.MasterInfo;

        /**
         * Creates a plain object from a MasterInfo message. Also converts values to other types if specified.
         * @param message MasterInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.MasterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MasterInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskItem. */
    interface ITaskItem {

        /** TaskItem TaskID */
        TaskID?: (number|null);

        /** TaskItem Twice */
        Twice?: (number|null);

        /** TaskItem Hints */
        Hints?: (string|null);
    }

    /** Represents a TaskItem. */
    class TaskItem implements ITaskItem {

        /**
         * Constructs a new TaskItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ITaskItem);

        /** TaskItem TaskID. */
        public TaskID: number;

        /** TaskItem Twice. */
        public Twice: number;

        /** TaskItem Hints. */
        public Hints: string;

        /**
         * Creates a new TaskItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskItem instance
         */
        public static create(properties?: login.ITaskItem): login.TaskItem;

        /**
         * Encodes the specified TaskItem message. Does not implicitly {@link login.TaskItem.verify|verify} messages.
         * @param message TaskItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ITaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskItem message, length delimited. Does not implicitly {@link login.TaskItem.verify|verify} messages.
         * @param message TaskItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ITaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.TaskItem;

        /**
         * Decodes a TaskItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.TaskItem;

        /**
         * Verifies a TaskItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskItem
         */
        public static fromObject(object: { [k: string]: any }): login.TaskItem;

        /**
         * Creates a plain object from a TaskItem message. Also converts values to other types if specified.
         * @param message TaskItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.TaskItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskList. */
    interface ITaskList {

        /** TaskList Task */
        Task?: (login.ITaskItem[]|null);
    }

    /** Represents a TaskList. */
    class TaskList implements ITaskList {

        /**
         * Constructs a new TaskList.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ITaskList);

        /** TaskList Task. */
        public Task: login.ITaskItem[];

        /**
         * Creates a new TaskList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskList instance
         */
        public static create(properties?: login.ITaskList): login.TaskList;

        /**
         * Encodes the specified TaskList message. Does not implicitly {@link login.TaskList.verify|verify} messages.
         * @param message TaskList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ITaskList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskList message, length delimited. Does not implicitly {@link login.TaskList.verify|verify} messages.
         * @param message TaskList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ITaskList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.TaskList;

        /**
         * Decodes a TaskList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.TaskList;

        /**
         * Verifies a TaskList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskList
         */
        public static fromObject(object: { [k: string]: any }): login.TaskList;

        /**
         * Creates a plain object from a TaskList message. Also converts values to other types if specified.
         * @param message TaskList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.TaskList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameList. */
    interface IGameList {

        /** GameList Items */
        Items?: (login.IGameItem[]|null);
    }

    /** Represents a GameList. */
    class GameList implements IGameList {

        /**
         * Constructs a new GameList.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameList);

        /** GameList Items. */
        public Items: login.IGameItem[];

        /**
         * Creates a new GameList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameList instance
         */
        public static create(properties?: login.IGameList): login.GameList;

        /**
         * Encodes the specified GameList message. Does not implicitly {@link login.GameList.verify|verify} messages.
         * @param message GameList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGameList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameList message, length delimited. Does not implicitly {@link login.GameList.verify|verify} messages.
         * @param message GameList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGameList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GameList;

        /**
         * Decodes a GameList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GameList;

        /**
         * Verifies a GameList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameList
         */
        public static fromObject(object: { [k: string]: any }): login.GameList;

        /**
         * Creates a plain object from a GameList message. Also converts values to other types if specified.
         * @param message GameList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterReq. */
    interface IRegisterReq {

        /** RegisterReq Name */
        Name?: (string|null);

        /** RegisterReq Password */
        Password?: (string|null);

        /** RegisterReq SecurityCode */
        SecurityCode?: (string|null);

        /** RegisterReq MachineCode */
        MachineCode?: (string|null);

        /** RegisterReq InvitationCode */
        InvitationCode?: (string|null);

        /** RegisterReq PlatformID */
        PlatformID?: (number|Long|null);

        /** RegisterReq Gender */
        Gender?: (number|null);

        /** RegisterReq Age */
        Age?: (number|null);

        /** RegisterReq FaceID */
        FaceID?: (number|null);

        /** RegisterReq PassPortID */
        PassPortID?: (string|null);

        /** RegisterReq RealName */
        RealName?: (string|null);

        /** RegisterReq PhoneNum */
        PhoneNum?: (string|null);

        /** RegisterReq Email */
        Email?: (string|null);

        /** RegisterReq Address */
        Address?: (string|null);
    }

    /** Represents a RegisterReq. */
    class RegisterReq implements IRegisterReq {

        /**
         * Constructs a new RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRegisterReq);

        /** RegisterReq Name. */
        public Name: string;

        /** RegisterReq Password. */
        public Password: string;

        /** RegisterReq SecurityCode. */
        public SecurityCode: string;

        /** RegisterReq MachineCode. */
        public MachineCode: string;

        /** RegisterReq InvitationCode. */
        public InvitationCode: string;

        /** RegisterReq PlatformID. */
        public PlatformID: (number|Long);

        /** RegisterReq Gender. */
        public Gender: number;

        /** RegisterReq Age. */
        public Age: number;

        /** RegisterReq FaceID. */
        public FaceID: number;

        /** RegisterReq PassPortID. */
        public PassPortID: string;

        /** RegisterReq RealName. */
        public RealName: string;

        /** RegisterReq PhoneNum. */
        public PhoneNum: string;

        /** RegisterReq Email. */
        public Email: string;

        /** RegisterReq Address. */
        public Address: string;

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterReq instance
         */
        public static create(properties?: login.IRegisterReq): login.RegisterReq;

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.RegisterReq;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.RegisterReq;

        /**
         * Verifies a RegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterReq
         */
        public static fromObject(object: { [k: string]: any }): login.RegisterReq;

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @param message RegisterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.RegisterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterResp. */
    interface IRegisterResp {

        /** RegisterResp Info */
        Info?: (login.IUserInfo|null);
    }

    /** Represents a RegisterResp. */
    class RegisterResp implements IRegisterResp {

        /**
         * Constructs a new RegisterResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRegisterResp);

        /** RegisterResp Info. */
        public Info?: (login.IUserInfo|null);

        /**
         * Creates a new RegisterResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterResp instance
         */
        public static create(properties?: login.IRegisterResp): login.RegisterResp;

        /**
         * Encodes the specified RegisterResp message. Does not implicitly {@link login.RegisterResp.verify|verify} messages.
         * @param message RegisterResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRegisterResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterResp message, length delimited. Does not implicitly {@link login.RegisterResp.verify|verify} messages.
         * @param message RegisterResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRegisterResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.RegisterResp;

        /**
         * Decodes a RegisterResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.RegisterResp;

        /**
         * Verifies a RegisterResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterResp
         */
        public static fromObject(object: { [k: string]: any }): login.RegisterResp;

        /**
         * Creates a plain object from a RegisterResp message. Also converts values to other types if specified.
         * @param message RegisterResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.RegisterResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq Account */
        Account?: (string|null);

        /** LoginReq Password */
        Password?: (string|null);

        /** LoginReq SecurityCode */
        SecurityCode?: (string|null);

        /** LoginReq MachineCode */
        MachineCode?: (string|null);

        /** LoginReq PlatformID */
        PlatformID?: (number|Long|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ILoginReq);

        /** LoginReq Account. */
        public Account: string;

        /** LoginReq Password. */
        public Password: string;

        /** LoginReq SecurityCode. */
        public SecurityCode: string;

        /** LoginReq MachineCode. */
        public MachineCode: string;

        /** LoginReq PlatformID. */
        public PlatformID: (number|Long);

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: login.ILoginReq): login.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): login.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResp. */
    interface ILoginResp {

        /** LoginResp MainInfo */
        MainInfo?: (login.IMasterInfo|null);

        /** LoginResp InGameID */
        InGameID?: (number|Long|null);
    }

    /** Represents a LoginResp. */
    class LoginResp implements ILoginResp {

        /**
         * Constructs a new LoginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ILoginResp);

        /** LoginResp MainInfo. */
        public MainInfo?: (login.IMasterInfo|null);

        /** LoginResp InGameID. */
        public InGameID: (number|Long);

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResp instance
         */
        public static create(properties?: login.ILoginResp): login.LoginResp;

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link login.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link login.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.LoginResp;

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.LoginResp;

        /**
         * Verifies a LoginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResp
         */
        public static fromObject(object: { [k: string]: any }): login.LoginResp;

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @param message LoginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.LoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AllopatricResp. */
    interface IAllopatricResp {

        /** AllopatricResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents an AllopatricResp. */
    class AllopatricResp implements IAllopatricResp {

        /**
         * Constructs a new AllopatricResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IAllopatricResp);

        /** AllopatricResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new AllopatricResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllopatricResp instance
         */
        public static create(properties?: login.IAllopatricResp): login.AllopatricResp;

        /**
         * Encodes the specified AllopatricResp message. Does not implicitly {@link login.AllopatricResp.verify|verify} messages.
         * @param message AllopatricResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IAllopatricResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllopatricResp message, length delimited. Does not implicitly {@link login.AllopatricResp.verify|verify} messages.
         * @param message AllopatricResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IAllopatricResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllopatricResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllopatricResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.AllopatricResp;

        /**
         * Decodes an AllopatricResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllopatricResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.AllopatricResp;

        /**
         * Verifies an AllopatricResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AllopatricResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AllopatricResp
         */
        public static fromObject(object: { [k: string]: any }): login.AllopatricResp;

        /**
         * Creates a plain object from an AllopatricResp message. Also converts values to other types if specified.
         * @param message AllopatricResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.AllopatricResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AllopatricResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReconnectReq. */
    interface IReconnectReq {

        /** ReconnectReq Account */
        Account?: (string|null);

        /** ReconnectReq Password */
        Password?: (string|null);

        /** ReconnectReq MachineCode */
        MachineCode?: (string|null);

        /** ReconnectReq PlatformID */
        PlatformID?: (number|Long|null);
    }

    /** Represents a ReconnectReq. */
    class ReconnectReq implements IReconnectReq {

        /**
         * Constructs a new ReconnectReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IReconnectReq);

        /** ReconnectReq Account. */
        public Account: string;

        /** ReconnectReq Password. */
        public Password: string;

        /** ReconnectReq MachineCode. */
        public MachineCode: string;

        /** ReconnectReq PlatformID. */
        public PlatformID: (number|Long);

        /**
         * Creates a new ReconnectReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnectReq instance
         */
        public static create(properties?: login.IReconnectReq): login.ReconnectReq;

        /**
         * Encodes the specified ReconnectReq message. Does not implicitly {@link login.ReconnectReq.verify|verify} messages.
         * @param message ReconnectReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IReconnectReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReconnectReq message, length delimited. Does not implicitly {@link login.ReconnectReq.verify|verify} messages.
         * @param message ReconnectReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IReconnectReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReconnectReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ReconnectReq;

        /**
         * Decodes a ReconnectReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ReconnectReq;

        /**
         * Verifies a ReconnectReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReconnectReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReconnectReq
         */
        public static fromObject(object: { [k: string]: any }): login.ReconnectReq;

        /**
         * Creates a plain object from a ReconnectReq message. Also converts values to other types if specified.
         * @param message ReconnectReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ReconnectReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReconnectReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReconnectResp. */
    interface IReconnectResp {

        /** ReconnectResp MainInfo */
        MainInfo?: (login.IMasterInfo|null);

        /** ReconnectResp InGameID */
        InGameID?: (number|Long|null);
    }

    /** Represents a ReconnectResp. */
    class ReconnectResp implements IReconnectResp {

        /**
         * Constructs a new ReconnectResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IReconnectResp);

        /** ReconnectResp MainInfo. */
        public MainInfo?: (login.IMasterInfo|null);

        /** ReconnectResp InGameID. */
        public InGameID: (number|Long);

        /**
         * Creates a new ReconnectResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnectResp instance
         */
        public static create(properties?: login.IReconnectResp): login.ReconnectResp;

        /**
         * Encodes the specified ReconnectResp message. Does not implicitly {@link login.ReconnectResp.verify|verify} messages.
         * @param message ReconnectResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IReconnectResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReconnectResp message, length delimited. Does not implicitly {@link login.ReconnectResp.verify|verify} messages.
         * @param message ReconnectResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IReconnectResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReconnectResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnectResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ReconnectResp;

        /**
         * Decodes a ReconnectResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnectResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ReconnectResp;

        /**
         * Verifies a ReconnectResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReconnectResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReconnectResp
         */
        public static fromObject(object: { [k: string]: any }): login.ReconnectResp;

        /**
         * Creates a plain object from a ReconnectResp message. Also converts values to other types if specified.
         * @param message ReconnectResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ReconnectResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReconnectResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomReq. */
    interface IEnterRoomReq {

        /** EnterRoomReq RoomNum */
        RoomNum?: (number|null);

        /** EnterRoomReq RoomKey */
        RoomKey?: (string|null);
    }

    /** Represents an EnterRoomReq. */
    class EnterRoomReq implements IEnterRoomReq {

        /**
         * Constructs a new EnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IEnterRoomReq);

        /** EnterRoomReq RoomNum. */
        public RoomNum: number;

        /** EnterRoomReq RoomKey. */
        public RoomKey: string;

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomReq instance
         */
        public static create(properties?: login.IEnterRoomReq): login.EnterRoomReq;

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link login.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link login.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.EnterRoomReq;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.EnterRoomReq;

        /**
         * Verifies an EnterRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomReq
         */
        public static fromObject(object: { [k: string]: any }): login.EnterRoomReq;

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @param message EnterRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.EnterRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomResp. */
    interface IEnterRoomResp {

        /** EnterRoomResp RoomNum */
        RoomNum?: (number|null);

        /** EnterRoomResp Games */
        Games?: (login.IGameList|null);
    }

    /** Represents an EnterRoomResp. */
    class EnterRoomResp implements IEnterRoomResp {

        /**
         * Constructs a new EnterRoomResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IEnterRoomResp);

        /** EnterRoomResp RoomNum. */
        public RoomNum: number;

        /** EnterRoomResp Games. */
        public Games?: (login.IGameList|null);

        /**
         * Creates a new EnterRoomResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomResp instance
         */
        public static create(properties?: login.IEnterRoomResp): login.EnterRoomResp;

        /**
         * Encodes the specified EnterRoomResp message. Does not implicitly {@link login.EnterRoomResp.verify|verify} messages.
         * @param message EnterRoomResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IEnterRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomResp message, length delimited. Does not implicitly {@link login.EnterRoomResp.verify|verify} messages.
         * @param message EnterRoomResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IEnterRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.EnterRoomResp;

        /**
         * Decodes an EnterRoomResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.EnterRoomResp;

        /**
         * Verifies an EnterRoomResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomResp
         */
        public static fromObject(object: { [k: string]: any }): login.EnterRoomResp;

        /**
         * Creates a plain object from an EnterRoomResp message. Also converts values to other types if specified.
         * @param message EnterRoomResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.EnterRoomResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettingGameReq. */
    interface ISettingGameReq {

        /** SettingGameReq Info */
        Info?: (login.IGameInfo|null);
    }

    /** Represents a SettingGameReq. */
    class SettingGameReq implements ISettingGameReq {

        /**
         * Constructs a new SettingGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ISettingGameReq);

        /** SettingGameReq Info. */
        public Info?: (login.IGameInfo|null);

        /**
         * Creates a new SettingGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingGameReq instance
         */
        public static create(properties?: login.ISettingGameReq): login.SettingGameReq;

        /**
         * Encodes the specified SettingGameReq message. Does not implicitly {@link login.SettingGameReq.verify|verify} messages.
         * @param message SettingGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ISettingGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingGameReq message, length delimited. Does not implicitly {@link login.SettingGameReq.verify|verify} messages.
         * @param message SettingGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ISettingGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.SettingGameReq;

        /**
         * Decodes a SettingGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.SettingGameReq;

        /**
         * Verifies a SettingGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingGameReq
         */
        public static fromObject(object: { [k: string]: any }): login.SettingGameReq;

        /**
         * Creates a plain object from a SettingGameReq message. Also converts values to other types if specified.
         * @param message SettingGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.SettingGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettingGameResp. */
    interface ISettingGameResp {

        /** SettingGameResp Item */
        Item?: (login.IGameItem|null);
    }

    /** Represents a SettingGameResp. */
    class SettingGameResp implements ISettingGameResp {

        /**
         * Constructs a new SettingGameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ISettingGameResp);

        /** SettingGameResp Item. */
        public Item?: (login.IGameItem|null);

        /**
         * Creates a new SettingGameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingGameResp instance
         */
        public static create(properties?: login.ISettingGameResp): login.SettingGameResp;

        /**
         * Encodes the specified SettingGameResp message. Does not implicitly {@link login.SettingGameResp.verify|verify} messages.
         * @param message SettingGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ISettingGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingGameResp message, length delimited. Does not implicitly {@link login.SettingGameResp.verify|verify} messages.
         * @param message SettingGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ISettingGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingGameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.SettingGameResp;

        /**
         * Decodes a SettingGameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.SettingGameResp;

        /**
         * Verifies a SettingGameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingGameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingGameResp
         */
        public static fromObject(object: { [k: string]: any }): login.SettingGameResp;

        /**
         * Creates a plain object from a SettingGameResp message. Also converts values to other types if specified.
         * @param message SettingGameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.SettingGameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingGameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultResp. */
    interface IResultResp {

        /** ResultResp State */
        State?: (number|null);

        /** ResultResp Hints */
        Hints?: (string|null);
    }

    /** Represents a ResultResp. */
    class ResultResp implements IResultResp {

        /**
         * Constructs a new ResultResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IResultResp);

        /** ResultResp State. */
        public State: number;

        /** ResultResp Hints. */
        public Hints: string;

        /**
         * Creates a new ResultResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultResp instance
         */
        public static create(properties?: login.IResultResp): login.ResultResp;

        /**
         * Encodes the specified ResultResp message. Does not implicitly {@link login.ResultResp.verify|verify} messages.
         * @param message ResultResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IResultResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultResp message, length delimited. Does not implicitly {@link login.ResultResp.verify|verify} messages.
         * @param message ResultResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IResultResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ResultResp;

        /**
         * Decodes a ResultResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ResultResp;

        /**
         * Verifies a ResultResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultResp
         */
        public static fromObject(object: { [k: string]: any }): login.ResultResp;

        /**
         * Creates a plain object from a ResultResp message. Also converts values to other types if specified.
         * @param message ResultResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ResultResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultPopResp. */
    interface IResultPopResp {

        /** ResultPopResp Flag */
        Flag?: (number|null);

        /** ResultPopResp Title */
        Title?: (string|null);

        /** ResultPopResp Hints */
        Hints?: (string|null);
    }

    /** Represents a ResultPopResp. */
    class ResultPopResp implements IResultPopResp {

        /**
         * Constructs a new ResultPopResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IResultPopResp);

        /** ResultPopResp Flag. */
        public Flag: number;

        /** ResultPopResp Title. */
        public Title: string;

        /** ResultPopResp Hints. */
        public Hints: string;

        /**
         * Creates a new ResultPopResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultPopResp instance
         */
        public static create(properties?: login.IResultPopResp): login.ResultPopResp;

        /**
         * Encodes the specified ResultPopResp message. Does not implicitly {@link login.ResultPopResp.verify|verify} messages.
         * @param message ResultPopResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IResultPopResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultPopResp message, length delimited. Does not implicitly {@link login.ResultPopResp.verify|verify} messages.
         * @param message ResultPopResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IResultPopResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultPopResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultPopResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ResultPopResp;

        /**
         * Decodes a ResultPopResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultPopResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ResultPopResp;

        /**
         * Verifies a ResultPopResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultPopResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultPopResp
         */
        public static fromObject(object: { [k: string]: any }): login.ResultPopResp;

        /**
         * Creates a plain object from a ResultPopResp message. Also converts values to other types if specified.
         * @param message ResultPopResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ResultPopResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultPopResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
