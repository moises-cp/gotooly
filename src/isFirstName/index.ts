import regexTest from '../regexTest';

const pattern = {
  default: /^[a-zA-Z\'áéíóúñüÁÉÍÓÚÑÜ]{2,40}$/,
};

export default (val: any) => {
  const config = { trim: true };
  return regexTest(val, pattern.default, config);
};
