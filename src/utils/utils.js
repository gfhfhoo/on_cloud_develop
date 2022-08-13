import { useEffect } from "react";

type Callback<T> = (prev: T | undefined) => void;

export function useWatch<T>(dep: T, callback: Callback<T>) {
  useEffect(() => {
    callback();
  }, [dep]);
}
