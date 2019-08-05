const decoder = new TextDecoder("utf-8");

export const convertU8 = (data) => {
    return parseInt(decoder.decode(data));
}
  