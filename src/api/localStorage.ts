const KEY = 'PARAM';
export function getLocalStorage() {
  return localStorage.getItem(KEY) || '';
}
export function setLocalStorage(data: string) {
  return localStorage.setItem(KEY, data);
}
