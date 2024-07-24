function modifyCurrentParams(cb: (params: URLSearchParams) => void) {
  const newUrl = new URL(location.href);
  const params = new URLSearchParams(newUrl.search);
  cb(params);
  newUrl.search = params.toString();
  window.history.replaceState({}, "", newUrl);
}

export function addSearchQuery(key: string, value: string) {
  modifyCurrentParams((params) => {
    params.set(key, value);
  });
}

export function removeSearchQuery(key: string) {
  modifyCurrentParams((params) => {
    params.delete(key);
  });
}

export function hasSearchQuery(key: string, value?: string): boolean {
  const params = new URLSearchParams(location.search);
  const currentValue = params.get(key);

  return value ? currentValue === value : !!currentValue;
}
