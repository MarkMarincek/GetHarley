import { ApiList } from 'models/interfaces';
import { useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

export default function usePagination<T>(apiListData?: ApiList<T>) {
  const location = useLocation();
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState<number>(getInitialPage());
  const pageCount = useMemo(() => {
    if (!apiListData?.total || !apiListData.limit) return 0;
    return Math.ceil(apiListData.total / apiListData.limit);
  }, [apiListData?.limit, apiListData?.total]);

  function setPage(page: number) {
    const sp = new URLSearchParams(location.search);
    sp.set('page', String(page));

    const spString = sp.toString();
    const args = !!spString ? `?${sp}` : '';

    console.log(spString, args);

    history.push(`${history.location.pathname}${args}`);
    setCurrentPage(page);
  }

  function getInitialPage() {
    const sp = new URLSearchParams(location.search);
    return Number(sp.get('page')) || 1;
  }

  return [currentPage, pageCount, setPage] as [number, number, (page: number) => void];
}
