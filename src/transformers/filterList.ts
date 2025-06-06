/**
 * Respective of the order of `fields` where
 * `key` is the unique ID
 * `row` is the Array[i].index
 * `column` is the `fields` input index
 * `field` is the value of that index
 * `value` is the string being searched
 * `march` is a regex.match result or null
 * Returns a table that can be conveniently filtered
 */
export type FilterListItem = {
  key: string;
  row: number;
  column: number;
  field: string;
  value: string;
  match: RegExpMatchArray | null;
};

/**
 * Takes `search`<string> and searches inside `items`[] based on `fields`[f1,f2,f3]
 * Requires `key` to keep track of the original list
 * Returns a filtered list with truthy `indexOf` matches based on index
 * @param search
 * @param items
 * @param key
 * @param fields
 * @returns FilterListItem[]
 */
export function filterList(
  search: string | null,
  items: Array<any>,
  key: string | number,
  fields: Array<string>
): Array<any> {
  let result = [];
  items.forEach((item, row) => {
    fields.forEach((field, column) => {
      const value = item[field] || '';
      const payload = {
        key: item.id,
        field,
        row,
        value,
        column,
        match: value.match(search),
      };
      result.push(payload);
    });
  });
  return result as FilterListItem[];
}
