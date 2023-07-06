// eslint-disable-next-line import/prefer-default-export
export function transformDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString('es-us', { year: 'numeric', month: 'long', day: 'numeric' });
}
