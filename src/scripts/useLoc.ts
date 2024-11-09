export function useLoc<T extends Record<string, any>>(
  pathname: string,
  table: { cs: T; en: T },
) {
  const en = pathname.startsWith("/en");
  return en ? table.en : table.cs;
}
