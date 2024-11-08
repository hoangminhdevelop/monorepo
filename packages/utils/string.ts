export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const lowercase = (str: string) => str.toLowerCase();

export const uppercase = (str: string) => str.toUpperCase();

export const concat = (str1: string, str2: string, middle?: string) =>
  str1 + middle && middle + str2;
