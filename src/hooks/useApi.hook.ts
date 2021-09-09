import axios, { Canceler } from 'axios';
import { useRef, useState } from 'react';

interface ApiHookState<T> {
  loading: boolean;
  response?: T;
  error?: unknown;
}
export default function useApiHook<T>(fun: () => Promise<T>) {
  const [state, setState] = useState<ApiHookState<T>>({ loading: false });
  const previousRequestCancelRef = useRef<Canceler | undefined>(undefined);
  async function callApi() {
    // Cancels the previous request if that has not finished yet
    if (previousRequestCancelRef.current) previousRequestCancelRef.current();
    setState((s) => ({ ...s, loading: true }));

    try {
      const promise = fun();
      previousRequestCancelRef.current = axios.CancelToken.source().cancel;
      const response = await promise;
      setState((s) => ({ ...s, loading: false, response }));
    } catch (error) {
      setState((s) => ({ ...s, loading: false, error }));
    }
  }
  return [state, callApi] as [ApiHookState<T>, () => void];
}
