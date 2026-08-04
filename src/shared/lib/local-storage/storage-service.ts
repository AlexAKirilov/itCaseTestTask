type StorageValue = string | number | boolean | object;

export const storageService = {
    set(param_name: string, param_value: StorageValue) {
        const serialized = JSON.stringify(param_value);
        localStorage.setItem(param_name, serialized);
    },
    get(param_name: string) {
        try {
            const raw = localStorage.getItem(param_name);
            return raw ? JSON.parse(raw) : null
        } catch (error) {
            console.warn(error)
            return null;
        }
    },
    remove(param_name: string) {
        localStorage.removeItem(param_name)
    },
    clear() {
        localStorage.clear()
    }
}