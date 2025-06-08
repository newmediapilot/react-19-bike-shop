/**
 * Takes `search`<string> and searches inside `items`[] based on `fields`[f1,f2,f3]
 * Returns a list with a `$match` object appended to it with each matched instance
 * @param search
 * @param items
 * @param fields
 */
export function searchList(
  search: string | null,
  items: Array<any>,
  fields: Array<string>
): Array<any> {
  let result = items.map((item) => {
    const $match = [];
    fields.forEach((field) => {
      const match = item[field].match(new RegExp(search, 'gi'));
      match && $match.push(match);
    });
    return {
      ...item,
      $match,
    };
  });
  return result;
}
