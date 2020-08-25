import * as $protobuf from "protobufjs";
/** Namespace comand. */
export namespace comand {

    /** Properties of a PacketData. */
    interface IPacketData {

        /** PacketData MainID */
        MainID?: (number|null);

        /** PacketData SubID */
        SubID?: (number|null);

        /** PacketData TransData */
        TransData?: (Uint8Array|null);
    }

    /** Represents a PacketData. */
    class PacketData implements IPacketData {

        /**
         * Constructs a new PacketData.
         * @param [properties] Properties to set
         */
        constructor(properties?: comand.IPacketData);

        /** PacketData MainID. */
        public MainID: number;

        /** PacketData SubID. */
        public SubID: number;

        /** PacketData TransData. */
        public TransData: Uint8Array;

        /**
         * Creates a new PacketData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PacketData instance
         */
        public static create(properties?: comand.IPacketData): comand.PacketData;

        /**
         * Encodes the specified PacketData message. Does not implicitly {@link comand.PacketData.verify|verify} messages.
         * @param message PacketData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: comand.IPacketData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PacketData message, length delimited. Does not implicitly {@link comand.PacketData.verify|verify} messages.
         * @param message PacketData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: comand.IPacketData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PacketData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PacketData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): comand.PacketData;

        /**
         * Decodes a PacketData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PacketData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): comand.PacketData;

        /**
         * Verifies a PacketData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PacketData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PacketData
         */
        public static fromObject(object: { [k: string]: any }): comand.PacketData;

        /**
         * Creates a plain object from a PacketData message. Also converts values to other types if specified.
         * @param message PacketData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: comand.PacketData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PacketData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
