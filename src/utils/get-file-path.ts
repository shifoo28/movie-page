export const getFilePath = (path: string) => {
  const new_path = new URL("/assets/" + path, import.meta.url);

  return new_path.href;
};
