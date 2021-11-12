import { useEffect, useState } from 'react';

const useDocTitle = (title: string | undefined, feature = 'runde.tipps') => {
  const [docTitle, setDocTitle] = useState((title ?? '').trim());

  useEffect(() => {
    const seperator = docTitle ? ' - ' : '';
    document.title = docTitle + seperator + feature;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export default useDocTitle;
