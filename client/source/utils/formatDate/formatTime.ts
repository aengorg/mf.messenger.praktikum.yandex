export function formatTime(UTC: string, locales = 'ru'): string {
  const date = new Date(UTC);
  return date.toLocaleTimeString(locales, {
    hour: 'numeric',
    minute: 'numeric',
  });
}

export function formatDay(UTC: string, locales = 'ru'): string {
  const date = new Date(UTC);
  return date.toLocaleDateString(locales);
}

export function formatData(UTC = '', locales = 'ru') {
  if (!UTC) return;

  const currentTime = Date.now();
  const lastDay = currentTime - 1000 * 60 * 60 * 24;
  const mst = Number(new Date(UTC));

  if (mst > lastDay) {
    return formatTime(UTC, locales);
  }
  return formatDay(UTC, locales);
}
