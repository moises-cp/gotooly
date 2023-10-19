export default (chars: any) => {
  if (typeof chars !== 'string') return false;

  return /^[A-Z]+$/.test(chars);
};
