import { useState, useEffect } from "react";

export function usePersistedState<T>(
    key: string,
    initialValue: T | (() => T)
): [T, (value: T | ((val: T) => T)) => void] {
    // Always use initialValue for SSR
    const [state, setState] = useState<T>(
        typeof initialValue === "function" ? (initialValue as () => T)() : initialValue
    );

    // On mount, sync with localStorage
    useEffect(() => {
        if (typeof window === "undefined") return;
        try {
            const item = window.localStorage.getItem(key);
            if (item !== null) {
                setState(JSON.parse(item));
            }
        } catch {
            // Ignore read errors
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    // Persist to localStorage when state changes
    useEffect(() => {
        if (typeof window === "undefined") return;
        try {
            window.localStorage.setItem(key, JSON.stringify(state));
        } catch {
            // Ignore write errors
        }
    }, [key, state]);

    return [state, setState];
}
