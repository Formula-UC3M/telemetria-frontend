export const convertU8 = (data) => {
    if (data instanceof Uint8Array) {
        return data[data.length - 1];
    }

    return Buffer.from(data).readUIntBE(0, data.length);
}
  