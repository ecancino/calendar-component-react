export function chunk(list: any[], len: number) {
  var chunks = [];
  for (var i = 0, l = list.length; i < l; i += len) {
    chunks.push(list.slice(i, i + len));
  }
  return chunks;
}

export function range(length: number): null[] {
  return Array.from<null>({ length }).fill(null);
}
