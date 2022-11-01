export const isObjectWithItems = (obj: Object) => Boolean(!Array.isArray(obj) && typeof obj === 'object' && Object.keys(obj).length);   