import { selectListDetail } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';
import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

/**
 * <dialog> that is appended to the end of the <body> element
 * Renders when params are not "falsy"
 */
function ListingsDialog() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const detailParam: string | null = searchParams.get('detail');
  const detail = useAppSelector(selectListDetail(detailParam));
  const [details, setDetails] = useState<any>({});
  useEffect(() => {
    detail && pf.prefetch(`@list/${detailParam}`);
    setDetails(detail || {});
  }, [detail]);
  return (
    detail && (
      <div
        onClick={() => navigate('./?detail=none')}
        className={`
                card preset-filled-surface-100-900 
                card-hover 
                border-[1px] 
                border-surface-200-800 
                divide-surface-200-800 
                divide-y 
                max-w-md 
             `}
      >
        <header>
          <img src={details.image} alt="banner" />
        </header>
        <article className="space-y-4 p-4">
          <div>
            <h3 className="h3">{details.id}</h3>
            <h6 className="h6">{details.title}</h6>
            <h6 className="h6">{details.description}</h6>
          </div>
        </article>
        <footer
          className={`
                flex 
                items-center 
                justify-between 
                p-4
        `}
        >
          Click to Close
        </footer>
      </div>
    )
  );
}

export default ListingsDialog;
