import { useState } from "react";

export function useLocalStorage(key, start) {
  const [storedValue, setStoredValue] = useState(() => {
    const keyStart = window.localStorage.getItem(key);
    return keyStart ? JSON.parse(keyStart) : start;
  });
  const setKey = input => {
    setStoredValue(input);
    window.localStorage.setItem(key, JSON.stringify(input));
  };
  return [storedValue, setKey];
}
