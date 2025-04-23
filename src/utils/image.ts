// Process image path to remove "/public" prefix if present
export const processImagePath = (path: string): string => {
  return path.replace(/^\/public/, "");
};
