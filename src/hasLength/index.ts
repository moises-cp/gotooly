export default (val: any) => {
  return Boolean((typeof val === 'string' || Array.isArray(val)) && val.length);
};
