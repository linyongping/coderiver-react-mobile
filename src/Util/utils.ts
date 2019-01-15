/**
 * 修正数组 ++或者--的索引，index-当前索引
 */
export function fixIndex(index: number, arr: Array<any> | number) {
  const count = Array.isArray(arr) ? arr.length : arr;
  let res: number;
  if (index < 0) res = count - 1;
  else if (index >= count) res = index - count;
  else res = index;
  return res;
}
