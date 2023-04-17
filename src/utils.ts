export const formatBytes = (size: number): string =>
  `${(size / (1024 * 1024)).toFixed(1)} MB`;
