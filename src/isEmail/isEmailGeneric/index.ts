const pattern = /^.+@.+\..+$/;

export default (email: any) =>
  Boolean(typeof email === 'string' && pattern.test(email));
