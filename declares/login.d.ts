import * as $protobuf from "protobufjs";
/** Namespace login. */
export namespace login {

    /** TableState enum. */
    enum TableState {
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
        TableCard = 3,
        Guess = 4,
        GamesCity = 5,
        DualMeet = 6,
        Sport = 7,
        Smart = 8,
        RPG = 9
    }

    /** GameScene enum. */
    enum GameScene {
        Free = 0,
        Start = 1,
        Call = 2,
        Decide = 3,
        Playing = 4,
        Opening = 5,
        Over = 6,
        Closing = 7
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

    /** Properties of a TableInfo. */
    interface ITableInfo {

        /** TableInfo HostID */
        HostID?: (number|Long|null);

        /** TableInfo Name */
        Name?: (string|null);

        /** TableInfo Password */
        Password?: (string|null);

        /** TableInfo State */
        State?: (login.TableState|null);

        /** TableInfo EnterScore */
        EnterScore?: (number|null);

        /** TableInfo LessScore */
        LessScore?: (number|null);

        /** TableInfo PlayScore */
        PlayScore?: (number|Long|null);

        /** TableInfo Commission */
        Commission?: (number|null);

        /** TableInfo MaxChair */
        MaxChair?: (number|null);

        /** TableInfo Amount */
        Amount?: (number|null);

        /** TableInfo MaxOnline */
        MaxOnline?: (number|null);
    }

    /** Represents a TableInfo. */
    class TableInfo implements ITableInfo {

        /**
         * Constructs a new TableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ITableInfo);

        /** TableInfo HostID. */
        public HostID: (number|Long);

        /** TableInfo Name. */
        public Name: string;

        /** TableInfo Password. */
        public Password: string;

        /** TableInfo State. */
        public State: login.TableState;

        /** TableInfo EnterScore. */
        public EnterScore: number;

        /** TableInfo LessScore. */
        public LessScore: number;

        /** TableInfo PlayScore. */
        public PlayScore: (number|Long);

        /** TableInfo Commission. */
        public Commission: number;

        /** TableInfo MaxChair. */
        public MaxChair: number;

        /** TableInfo Amount. */
        public Amount: number;

        /** TableInfo MaxOnline. */
        public MaxOnline: number;

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfo instance
         */
        public static create(properties?: login.ITableInfo): login.TableInfo;

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link login.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link login.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.TableInfo;

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.TableInfo;

        /**
         * Verifies a TableInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableInfo
         */
        public static fromObject(object: { [k: string]: any }): login.TableInfo;

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @param message TableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.TableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo Type */
        Type?: (login.GameType|null);

        /** GameInfo KindID */
        KindID?: (number|Long|null);

        /** GameInfo Level */
        Level?: (number|null);

        /** GameInfo Scene */
        Scene?: (login.GameScene|null);
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
        public KindID: (number|Long);

        /** GameInfo Level. */
        public Level: number;

        /** GameInfo Scene. */
        public Scene: login.GameScene;

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

    /** Properties of a MasterInfo. */
    interface IMasterInfo {

        /** MasterInfo UserInfo */
        UserInfo?: (login.IUserInfo|null);

        /** MasterInfo Classes */
        Classes?: (login.IClassList|null);

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

        /** MasterInfo Classes. */
        public Classes?: (login.IClassList|null);

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

    /** Properties of a ClassItem. */
    interface IClassItem {

        /** ClassItem Num */
        Num?: (number|null);

        /** ClassItem Name */
        Name?: (string|null);

        /** ClassItem Key */
        Key?: (string|null);
    }

    /** Represents a ClassItem. */
    class ClassItem implements IClassItem {

        /**
         * Constructs a new ClassItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IClassItem);

        /** ClassItem Num. */
        public Num: number;

        /** ClassItem Name. */
        public Name: string;

        /** ClassItem Key. */
        public Key: string;

        /**
         * Creates a new ClassItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClassItem instance
         */
        public static create(properties?: login.IClassItem): login.ClassItem;

        /**
         * Encodes the specified ClassItem message. Does not implicitly {@link login.ClassItem.verify|verify} messages.
         * @param message ClassItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IClassItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClassItem message, length delimited. Does not implicitly {@link login.ClassItem.verify|verify} messages.
         * @param message ClassItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IClassItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClassItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClassItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ClassItem;

        /**
         * Decodes a ClassItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClassItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ClassItem;

        /**
         * Verifies a ClassItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClassItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClassItem
         */
        public static fromObject(object: { [k: string]: any }): login.ClassItem;

        /**
         * Creates a plain object from a ClassItem message. Also converts values to other types if specified.
         * @param message ClassItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ClassItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClassItem to JSON.
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

    /** Properties of a TableItem. */
    interface ITableItem {

        /** TableItem GameID */
        GameID?: (number|Long|null);

        /** TableItem TableNum */
        TableNum?: (number|null);

        /** TableItem Info */
        Info?: (login.ITableInfo|null);
    }

    /** Represents a TableItem. */
    class TableItem implements ITableItem {

        /**
         * Constructs a new TableItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ITableItem);

        /** TableItem GameID. */
        public GameID: (number|Long);

        /** TableItem TableNum. */
        public TableNum: number;

        /** TableItem Info. */
        public Info?: (login.ITableInfo|null);

        /**
         * Creates a new TableItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableItem instance
         */
        public static create(properties?: login.ITableItem): login.TableItem;

        /**
         * Encodes the specified TableItem message. Does not implicitly {@link login.TableItem.verify|verify} messages.
         * @param message TableItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ITableItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableItem message, length delimited. Does not implicitly {@link login.TableItem.verify|verify} messages.
         * @param message TableItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ITableItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.TableItem;

        /**
         * Decodes a TableItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.TableItem;

        /**
         * Verifies a TableItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableItem
         */
        public static fromObject(object: { [k: string]: any }): login.TableItem;

        /**
         * Creates a plain object from a TableItem message. Also converts values to other types if specified.
         * @param message TableItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.TableItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableItem to JSON.
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

    /** Properties of a ClassList. */
    interface IClassList {

        /** ClassList classify */
        classify?: (login.IClassItem[]|null);
    }

    /** Represents a ClassList. */
    class ClassList implements IClassList {

        /**
         * Constructs a new ClassList.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IClassList);

        /** ClassList classify. */
        public classify: login.IClassItem[];

        /**
         * Creates a new ClassList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClassList instance
         */
        public static create(properties?: login.IClassList): login.ClassList;

        /**
         * Encodes the specified ClassList message. Does not implicitly {@link login.ClassList.verify|verify} messages.
         * @param message ClassList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IClassList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClassList message, length delimited. Does not implicitly {@link login.ClassList.verify|verify} messages.
         * @param message ClassList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IClassList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClassList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClassList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ClassList;

        /**
         * Decodes a ClassList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClassList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ClassList;

        /**
         * Verifies a ClassList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClassList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClassList
         */
        public static fromObject(object: { [k: string]: any }): login.ClassList;

        /**
         * Creates a plain object from a ClassList message. Also converts values to other types if specified.
         * @param message ClassList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ClassList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClassList to JSON.
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

    /** Properties of a TableList. */
    interface ITableList {

        /** TableList Items */
        Items?: (login.ITableItem[]|null);
    }

    /** Represents a TableList. */
    class TableList implements ITableList {

        /**
         * Constructs a new TableList.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ITableList);

        /** TableList Items. */
        public Items: login.ITableItem[];

        /**
         * Creates a new TableList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableList instance
         */
        public static create(properties?: login.ITableList): login.TableList;

        /**
         * Encodes the specified TableList message. Does not implicitly {@link login.TableList.verify|verify} messages.
         * @param message TableList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ITableList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableList message, length delimited. Does not implicitly {@link login.TableList.verify|verify} messages.
         * @param message TableList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ITableList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.TableList;

        /**
         * Decodes a TableList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.TableList;

        /**
         * Verifies a TableList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableList
         */
        public static fromObject(object: { [k: string]: any }): login.TableList;

        /**
         * Creates a plain object from a TableList message. Also converts values to other types if specified.
         * @param message TableList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.TableList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableList to JSON.
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

        /** LoginResp InTableNum */
        InTableNum?: (number|Long|null);
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

        /** LoginResp InTableNum. */
        public InTableNum: (number|Long);

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

        /** ReconnectResp InTableNum */
        InTableNum?: (number|Long|null);
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

        /** ReconnectResp InTableNum. */
        public InTableNum: (number|Long);

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

    /** Properties of a ChooseClassReq. */
    interface IChooseClassReq {

        /** ChooseClassReq Num */
        Num?: (number|null);

        /** ChooseClassReq TableKey */
        TableKey?: (string|null);
    }

    /** Represents a ChooseClassReq. */
    class ChooseClassReq implements IChooseClassReq {

        /**
         * Constructs a new ChooseClassReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IChooseClassReq);

        /** ChooseClassReq Num. */
        public Num: number;

        /** ChooseClassReq TableKey. */
        public TableKey: string;

        /**
         * Creates a new ChooseClassReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChooseClassReq instance
         */
        public static create(properties?: login.IChooseClassReq): login.ChooseClassReq;

        /**
         * Encodes the specified ChooseClassReq message. Does not implicitly {@link login.ChooseClassReq.verify|verify} messages.
         * @param message ChooseClassReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IChooseClassReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChooseClassReq message, length delimited. Does not implicitly {@link login.ChooseClassReq.verify|verify} messages.
         * @param message ChooseClassReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IChooseClassReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChooseClassReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChooseClassReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ChooseClassReq;

        /**
         * Decodes a ChooseClassReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChooseClassReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ChooseClassReq;

        /**
         * Verifies a ChooseClassReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChooseClassReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChooseClassReq
         */
        public static fromObject(object: { [k: string]: any }): login.ChooseClassReq;

        /**
         * Creates a plain object from a ChooseClassReq message. Also converts values to other types if specified.
         * @param message ChooseClassReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ChooseClassReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChooseClassReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChooseClassResp. */
    interface IChooseClassResp {

        /** ChooseClassResp Num */
        Num?: (number|null);

        /** ChooseClassResp Games */
        Games?: (login.IGameList|null);
    }

    /** Represents a ChooseClassResp. */
    class ChooseClassResp implements IChooseClassResp {

        /**
         * Constructs a new ChooseClassResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IChooseClassResp);

        /** ChooseClassResp Num. */
        public Num: number;

        /** ChooseClassResp Games. */
        public Games?: (login.IGameList|null);

        /**
         * Creates a new ChooseClassResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChooseClassResp instance
         */
        public static create(properties?: login.IChooseClassResp): login.ChooseClassResp;

        /**
         * Encodes the specified ChooseClassResp message. Does not implicitly {@link login.ChooseClassResp.verify|verify} messages.
         * @param message ChooseClassResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IChooseClassResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChooseClassResp message, length delimited. Does not implicitly {@link login.ChooseClassResp.verify|verify} messages.
         * @param message ChooseClassResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IChooseClassResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChooseClassResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChooseClassResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ChooseClassResp;

        /**
         * Decodes a ChooseClassResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChooseClassResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ChooseClassResp;

        /**
         * Verifies a ChooseClassResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChooseClassResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChooseClassResp
         */
        public static fromObject(object: { [k: string]: any }): login.ChooseClassResp;

        /**
         * Creates a plain object from a ChooseClassResp message. Also converts values to other types if specified.
         * @param message ChooseClassResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ChooseClassResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChooseClassResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChooseGameReq. */
    interface IChooseGameReq {

        /** ChooseGameReq GameID */
        GameID?: (number|Long|null);
    }

    /** Represents a ChooseGameReq. */
    class ChooseGameReq implements IChooseGameReq {

        /**
         * Constructs a new ChooseGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IChooseGameReq);

        /** ChooseGameReq GameID. */
        public GameID: (number|Long);

        /**
         * Creates a new ChooseGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChooseGameReq instance
         */
        public static create(properties?: login.IChooseGameReq): login.ChooseGameReq;

        /**
         * Encodes the specified ChooseGameReq message. Does not implicitly {@link login.ChooseGameReq.verify|verify} messages.
         * @param message ChooseGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IChooseGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChooseGameReq message, length delimited. Does not implicitly {@link login.ChooseGameReq.verify|verify} messages.
         * @param message ChooseGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IChooseGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChooseGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChooseGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ChooseGameReq;

        /**
         * Decodes a ChooseGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChooseGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ChooseGameReq;

        /**
         * Verifies a ChooseGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChooseGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChooseGameReq
         */
        public static fromObject(object: { [k: string]: any }): login.ChooseGameReq;

        /**
         * Creates a plain object from a ChooseGameReq message. Also converts values to other types if specified.
         * @param message ChooseGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ChooseGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChooseGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChooseGameResp. */
    interface IChooseGameResp {

        /** ChooseGameResp GameID */
        GameID?: (number|Long|null);

        /** ChooseGameResp Tables */
        Tables?: (login.ITableList|null);
    }

    /** Represents a ChooseGameResp. */
    class ChooseGameResp implements IChooseGameResp {

        /**
         * Constructs a new ChooseGameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IChooseGameResp);

        /** ChooseGameResp GameID. */
        public GameID: (number|Long);

        /** ChooseGameResp Tables. */
        public Tables?: (login.ITableList|null);

        /**
         * Creates a new ChooseGameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChooseGameResp instance
         */
        public static create(properties?: login.IChooseGameResp): login.ChooseGameResp;

        /**
         * Encodes the specified ChooseGameResp message. Does not implicitly {@link login.ChooseGameResp.verify|verify} messages.
         * @param message ChooseGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IChooseGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChooseGameResp message, length delimited. Does not implicitly {@link login.ChooseGameResp.verify|verify} messages.
         * @param message ChooseGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IChooseGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChooseGameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChooseGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ChooseGameResp;

        /**
         * Decodes a ChooseGameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChooseGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ChooseGameResp;

        /**
         * Verifies a ChooseGameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChooseGameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChooseGameResp
         */
        public static fromObject(object: { [k: string]: any }): login.ChooseGameResp;

        /**
         * Creates a plain object from a ChooseGameResp message. Also converts values to other types if specified.
         * @param message ChooseGameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ChooseGameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChooseGameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettingTableReq. */
    interface ISettingTableReq {

        /** SettingTableReq Info */
        Info?: (login.ITableInfo|null);
    }

    /** Represents a SettingTableReq. */
    class SettingTableReq implements ISettingTableReq {

        /**
         * Constructs a new SettingTableReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ISettingTableReq);

        /** SettingTableReq Info. */
        public Info?: (login.ITableInfo|null);

        /**
         * Creates a new SettingTableReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingTableReq instance
         */
        public static create(properties?: login.ISettingTableReq): login.SettingTableReq;

        /**
         * Encodes the specified SettingTableReq message. Does not implicitly {@link login.SettingTableReq.verify|verify} messages.
         * @param message SettingTableReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ISettingTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingTableReq message, length delimited. Does not implicitly {@link login.SettingTableReq.verify|verify} messages.
         * @param message SettingTableReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ISettingTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingTableReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.SettingTableReq;

        /**
         * Decodes a SettingTableReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.SettingTableReq;

        /**
         * Verifies a SettingTableReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingTableReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingTableReq
         */
        public static fromObject(object: { [k: string]: any }): login.SettingTableReq;

        /**
         * Creates a plain object from a SettingTableReq message. Also converts values to other types if specified.
         * @param message SettingTableReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.SettingTableReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingTableReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettingTableResp. */
    interface ISettingTableResp {

        /** SettingTableResp Item */
        Item?: (login.ITableItem|null);
    }

    /** Represents a SettingTableResp. */
    class SettingTableResp implements ISettingTableResp {

        /**
         * Constructs a new SettingTableResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ISettingTableResp);

        /** SettingTableResp Item. */
        public Item?: (login.ITableItem|null);

        /**
         * Creates a new SettingTableResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingTableResp instance
         */
        public static create(properties?: login.ISettingTableResp): login.SettingTableResp;

        /**
         * Encodes the specified SettingTableResp message. Does not implicitly {@link login.SettingTableResp.verify|verify} messages.
         * @param message SettingTableResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ISettingTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingTableResp message, length delimited. Does not implicitly {@link login.SettingTableResp.verify|verify} messages.
         * @param message SettingTableResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ISettingTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingTableResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.SettingTableResp;

        /**
         * Decodes a SettingTableResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.SettingTableResp;

        /**
         * Verifies a SettingTableResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingTableResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingTableResp
         */
        public static fromObject(object: { [k: string]: any }): login.SettingTableResp;

        /**
         * Creates a plain object from a SettingTableResp message. Also converts values to other types if specified.
         * @param message SettingTableResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.SettingTableResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingTableResp to JSON.
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
