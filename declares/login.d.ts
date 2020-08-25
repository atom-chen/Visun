import * as $protobuf from "protobufjs";
/** Namespace login. */
export namespace login {

    /** Properties of a Register. */
    interface IRegister {

        /** Register Name */
        Name?: (string|null);

        /** Register Password */
        Password?: (string|null);

        /** Register SecurityCode */
        SecurityCode?: (string|null);

        /** Register MachineCode */
        MachineCode?: (string|null);

        /** Register InvitationCode */
        InvitationCode?: (string|null);
    }

    /** Represents a Register. */
    class Register implements IRegister {

        /**
         * Constructs a new Register.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRegister);

        /** Register Name. */
        public Name: string;

        /** Register Password. */
        public Password: string;

        /** Register SecurityCode. */
        public SecurityCode: string;

        /** Register MachineCode. */
        public MachineCode: string;

        /** Register InvitationCode. */
        public InvitationCode: string;

        /**
         * Creates a new Register instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Register instance
         */
        public static create(properties?: login.IRegister): login.Register;

        /**
         * Encodes the specified Register message. Does not implicitly {@link login.Register.verify|verify} messages.
         * @param message Register message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Register message, length delimited. Does not implicitly {@link login.Register.verify|verify} messages.
         * @param message Register message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Register message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.Register;

        /**
         * Decodes a Register message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.Register;

        /**
         * Verifies a Register message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Register message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Register
         */
        public static fromObject(object: { [k: string]: any }): login.Register;

        /**
         * Creates a plain object from a Register message. Also converts values to other types if specified.
         * @param message Register
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.Register, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Register to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterResult. */
    interface IRegisterResult {

        /** RegisterResult State */
        State?: (number|null);

        /** RegisterResult Hints */
        Hints?: (string|null);
    }

    /** Represents a RegisterResult. */
    class RegisterResult implements IRegisterResult {

        /**
         * Constructs a new RegisterResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRegisterResult);

        /** RegisterResult State. */
        public State: number;

        /** RegisterResult Hints. */
        public Hints: string;

        /**
         * Creates a new RegisterResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterResult instance
         */
        public static create(properties?: login.IRegisterResult): login.RegisterResult;

        /**
         * Encodes the specified RegisterResult message. Does not implicitly {@link login.RegisterResult.verify|verify} messages.
         * @param message RegisterResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRegisterResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterResult message, length delimited. Does not implicitly {@link login.RegisterResult.verify|verify} messages.
         * @param message RegisterResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRegisterResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.RegisterResult;

        /**
         * Decodes a RegisterResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.RegisterResult;

        /**
         * Verifies a RegisterResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterResult
         */
        public static fromObject(object: { [k: string]: any }): login.RegisterResult;

        /**
         * Creates a plain object from a RegisterResult message. Also converts values to other types if specified.
         * @param message RegisterResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.RegisterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Login. */
    interface ILogin {

        /** Login Account */
        Account?: (string|null);

        /** Login Password */
        Password?: (string|null);

        /** Login SecurityCode */
        SecurityCode?: (string|null);

        /** Login MachineCode */
        MachineCode?: (string|null);
    }

    /** Represents a Login. */
    class Login implements ILogin {

        /**
         * Constructs a new Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ILogin);

        /** Login Account. */
        public Account: string;

        /** Login Password. */
        public Password: string;

        /** Login SecurityCode. */
        public SecurityCode: string;

        /** Login MachineCode. */
        public MachineCode: string;

        /**
         * Creates a new Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Login instance
         */
        public static create(properties?: login.ILogin): login.Login;

        /**
         * Encodes the specified Login message. Does not implicitly {@link login.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link login.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.Login;

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.Login;

        /**
         * Verifies a Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Login
         */
        public static fromObject(object: { [k: string]: any }): login.Login;

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @param message Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResResult. */
    interface IResResult {

        /** ResResult State */
        State?: (number|null);

        /** ResResult Hints */
        Hints?: (string|null);
    }

    /** Represents a ResResult. */
    class ResResult implements IResResult {

        /**
         * Constructs a new ResResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IResResult);

        /** ResResult State. */
        public State: number;

        /** ResResult Hints. */
        public Hints: string;

        /**
         * Creates a new ResResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResResult instance
         */
        public static create(properties?: login.IResResult): login.ResResult;

        /**
         * Encodes the specified ResResult message. Does not implicitly {@link login.ResResult.verify|verify} messages.
         * @param message ResResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IResResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResResult message, length delimited. Does not implicitly {@link login.ResResult.verify|verify} messages.
         * @param message ResResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IResResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ResResult;

        /**
         * Decodes a ResResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ResResult;

        /**
         * Verifies a ResResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResResult
         */
        public static fromObject(object: { [k: string]: any }): login.ResResult;

        /**
         * Creates a plain object from a ResResult message. Also converts values to other types if specified.
         * @param message ResResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ResResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResResult to JSON.
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

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo Name */
        Name?: (string|null);

        /** UserInfo Accounts */
        Accounts?: (string|null);

        /** UserInfo Password */
        Password?: (string|null);

        /** UserInfo FaceID */
        FaceID?: (number|null);

        /** UserInfo Gender */
        Gender?: (number|null);

        /** UserInfo Age */
        Age?: (number|null);

        /** UserInfo Level */
        Level?: (number|null);

        /** UserInfo Gold */
        Gold?: (number|Long|null);

        /** UserInfo PassPortID */
        PassPortID?: (string|null);

        /** UserInfo Compellation */
        Compellation?: (string|null);

        /** UserInfo AgentID */
        AgentID?: (number|null);

        /** UserInfo SpreaderGameID */
        SpreaderGameID?: (number|null);

        /** UserInfo ClientAddr */
        ClientAddr?: (number|null);

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

        /** UserInfo Name. */
        public Name: string;

        /** UserInfo Accounts. */
        public Accounts: string;

        /** UserInfo Password. */
        public Password: string;

        /** UserInfo FaceID. */
        public FaceID: number;

        /** UserInfo Gender. */
        public Gender: number;

        /** UserInfo Age. */
        public Age: number;

        /** UserInfo Level. */
        public Level: number;

        /** UserInfo Gold. */
        public Gold: (number|Long);

        /** UserInfo PassPortID. */
        public PassPortID: string;

        /** UserInfo Compellation. */
        public Compellation: string;

        /** UserInfo AgentID. */
        public AgentID: number;

        /** UserInfo SpreaderGameID. */
        public SpreaderGameID: number;

        /** UserInfo ClientAddr. */
        public ClientAddr: number;

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

    /** Properties of a GameBaseInfo. */
    interface IGameBaseInfo {

        /** GameBaseInfo Type */
        Type?: (number|null);

        /** GameBaseInfo KindID */
        KindID?: (number|null);

        /** GameBaseInfo Level */
        Level?: (number|null);

        /** GameBaseInfo Name */
        Name?: (string|null);

        /** GameBaseInfo EnterScore */
        EnterScore?: (number|null);

        /** GameBaseInfo LessScore */
        LessScore?: (number|null);

        /** GameBaseInfo MaxOnline */
        MaxOnline?: (number|null);

        /** GameBaseInfo State */
        State?: (number|null);

        /** GameBaseInfo Commission */
        Commission?: (number|null);
    }

    /** Represents a GameBaseInfo. */
    class GameBaseInfo implements IGameBaseInfo {

        /**
         * Constructs a new GameBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameBaseInfo);

        /** GameBaseInfo Type. */
        public Type: number;

        /** GameBaseInfo KindID. */
        public KindID: number;

        /** GameBaseInfo Level. */
        public Level: number;

        /** GameBaseInfo Name. */
        public Name: string;

        /** GameBaseInfo EnterScore. */
        public EnterScore: number;

        /** GameBaseInfo LessScore. */
        public LessScore: number;

        /** GameBaseInfo MaxOnline. */
        public MaxOnline: number;

        /** GameBaseInfo State. */
        public State: number;

        /** GameBaseInfo Commission. */
        public Commission: number;

        /**
         * Creates a new GameBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaseInfo instance
         */
        public static create(properties?: login.IGameBaseInfo): login.GameBaseInfo;

        /**
         * Encodes the specified GameBaseInfo message. Does not implicitly {@link login.GameBaseInfo.verify|verify} messages.
         * @param message GameBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGameBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaseInfo message, length delimited. Does not implicitly {@link login.GameBaseInfo.verify|verify} messages.
         * @param message GameBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGameBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GameBaseInfo;

        /**
         * Decodes a GameBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GameBaseInfo;

        /**
         * Verifies a GameBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): login.GameBaseInfo;

        /**
         * Creates a plain object from a GameBaseInfo message. Also converts values to other types if specified.
         * @param message GameBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GameBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameItem. */
    interface IGameItem {

        /** GameItem ID */
        ID?: (number|null);

        /** GameItem Info */
        Info?: (login.IGameBaseInfo|null);
    }

    /** Represents a GameItem. */
    class GameItem implements IGameItem {

        /**
         * Constructs a new GameItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameItem);

        /** GameItem ID. */
        public ID: number;

        /** GameItem Info. */
        public Info?: (login.IGameBaseInfo|null);

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

        /** MasterInfo UserID */
        UserID?: (number|Long|null);

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

        /** MasterInfo UserID. */
        public UserID: (number|Long);

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

    /** Properties of a ReqEnterRoom. */
    interface IReqEnterRoom {

        /** ReqEnterRoom RoomNum */
        RoomNum?: (number|null);

        /** ReqEnterRoom RoomKey */
        RoomKey?: (string|null);
    }

    /** Represents a ReqEnterRoom. */
    class ReqEnterRoom implements IReqEnterRoom {

        /**
         * Constructs a new ReqEnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IReqEnterRoom);

        /** ReqEnterRoom RoomNum. */
        public RoomNum: number;

        /** ReqEnterRoom RoomKey. */
        public RoomKey: string;

        /**
         * Creates a new ReqEnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterRoom instance
         */
        public static create(properties?: login.IReqEnterRoom): login.ReqEnterRoom;

        /**
         * Encodes the specified ReqEnterRoom message. Does not implicitly {@link login.ReqEnterRoom.verify|verify} messages.
         * @param message ReqEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IReqEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEnterRoom message, length delimited. Does not implicitly {@link login.ReqEnterRoom.verify|verify} messages.
         * @param message ReqEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IReqEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ReqEnterRoom;

        /**
         * Decodes a ReqEnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ReqEnterRoom;

        /**
         * Verifies a ReqEnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEnterRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEnterRoom
         */
        public static fromObject(object: { [k: string]: any }): login.ReqEnterRoom;

        /**
         * Creates a plain object from a ReqEnterRoom message. Also converts values to other types if specified.
         * @param message ReqEnterRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ReqEnterRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEnterRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
