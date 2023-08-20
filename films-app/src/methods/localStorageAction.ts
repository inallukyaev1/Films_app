export function addToLocalStorage(key: string, value: {}) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key: string, dataItem: any) {
    const response = JSON.parse(localStorage.getItem(key) || '{}') || '';
    if (Array.isArray(response)) {
        return response;
    }
    return dataItem;
}
