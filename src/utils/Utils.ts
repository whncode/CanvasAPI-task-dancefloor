
//copypaste from https://stackoverflow.com/a/5092846
export const randomColor = () =>  '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
export const randomNumber = (min: number, max: number) => Math.random() * (max - min) + min;
