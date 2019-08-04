export const convertU8 = (data) => {
    if (data instanceof Uint8Array) {
        return data[0];
    }

    return Buffer.from(data).readUIntBE(0, data.length);
}
  