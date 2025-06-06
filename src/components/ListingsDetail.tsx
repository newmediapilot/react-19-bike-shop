import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Box, Grid } from '@radix-ui/themes';
import { selectListDetail } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';
import { ListItem } from '@local/primitives/LTable';

/**
 * <dialog> that is appended to the end of the <body> element
 * Renders when params are not "falsy"
 */
function ListingsDetail() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const detailParam: string | null = searchParams.get('detail');
  const detail: ListItem = useAppSelector(selectListDetail(detailParam));
  return (
    detail && (
      <Box onClick={() => navigate('./')}>
        <Box>
          <img height="100" src={detail.image} />
        </Box>
        <Box>
          <h4 id="dialog-detail">Detail:</h4>
        </Box>
        <Grid>
          <Box>
            <b>ID: </b>
            {detail.id}
          </Box>
          <Box>
            <b>Detail: </b>
            {detail.title}
          </Box>
          <Box>
            <b>Description: </b>
            {detail.description}
          </Box>
        </Grid>
      </Box>
    )
  );
}

export default ListingsDetail;
