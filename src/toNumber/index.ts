import DefaultReturn from '../DefaultReturn';

/**
 *
 *
 * @param {string | number} chars
 * @return DefaultReturn
 */
export default (chars: any) => {
  const result = new DefaultReturn();

  if (typeof chars === 'string') {
    const isStringNumber = /^[0-9]+$/.test(chars);

    result.data = isStringNumber ? +chars : null;
    result.hasError = !isStringNumber;
    result.message = !isStringNumber ? 'Invalid characters' : '';

    return result.return;
  }

  if (typeof chars === 'number') {
    result.data = chars;
    result.hasError = false;
    return result.return;
  }

  result.message = 'Invalid data type';
  return result.return;
};
