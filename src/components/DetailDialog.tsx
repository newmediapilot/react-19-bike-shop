// @ts-ignore
import * as React from 'react';
// @ts-ignore
import {useNavigate} from 'react-router';
import {Box, Grid} from '@radix-ui/themes';

export type DialogProps = {
    id: number,
    title: string,
    description: string,
}

/**
 * <dialog> that is appended to the end of the <body> element
 * Renders when params are not "falsey"
 * @constructor
 * @param detail
 */
function DetailDialog({detail}: { detail?: DialogProps }) {
    let navigate = useNavigate();
    return (
        detail && <dialog
            onClick={() => navigate("./")}
            popover="auto"
            aria-labelledby="dialog-detail"
            open={!!detail}>
            <Box><h4 id="dialog-detail">Detail:</h4></Box>
            <Grid>
                <Box>ID</Box>
                <Box>{detail.id}</Box>
                <Box>Title</Box>
                <Box>{detail.title}</Box>
                <Box>Description</Box>
                <Box>{detail.description}</Box>
            </Grid>
        </dialog>
    );
}

export default DetailDialog;