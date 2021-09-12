import axios, { Canceler } from 'axios';
import { Arr } from 'models/types';
import { useCallback, useRef, useState } from 'react';
import useIsMounted from './useIsMounted';

interface ApiHookState<T> {
  loading: boolean;
  response?: T;
  error?: unknown;
}

export default function useApiHook<T, K extends Arr>(fun: (...args: K) => Promise<T>) {
  const [state, setState] = useState<ApiHookState<T>>({ loading: false });
  const previousRequestCancelRef = useRef<Canceler | undefined>(undefined);
  const isMountedRef = useIsMounted();

  const callApi = useCallback(
    async (...args: K) => {
      // Cancels the previous request if that has not finished yet
      if (previousRequestCancelRef.current) previousRequestCancelRef.current();
      setState((s) => ({ ...s, loading: true }));

      try {
        const promise = fun(...args);
        previousRequestCancelRef.current = axios.CancelToken.source().cancel;
        const response = await promise;
        isMountedRef.current && setState((s) => ({ ...s, loading: false, response }));
      } catch (error) {
        isMountedRef.current && setState((s) => ({ ...s, loading: false, error }));
      }
    },
    [fun, isMountedRef]
  );

  return [state, callApi] as [ApiHookState<T>, (...args: K) => void];
}
