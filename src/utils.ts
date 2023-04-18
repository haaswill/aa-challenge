export const formatBytes = (size: number): string =>
  `${(size / (1024 * 1024)).toFixed(1)} MB`;

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
