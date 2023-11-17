const ms = Math.random() * 10;
export const delay = async () => await new Promise((resolve) => setTimeout(resolve, ms * 1000));
