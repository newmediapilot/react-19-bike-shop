import {Outlet} from "react-router";
import Nav from '@local/components/Nav';
import * as React from 'react';
import {Box, Grid} from '@radix-ui/themes';

/**
 * Initial layout with <nav>
 * @constructor
 */
export default function DefaultLayout() {
    return (
        <Grid columns="1" gap="3" rows="repeat(auto, 100%)" width="auto">
            <Box width="100%">
                <Nav/>
            </Box>
            <Box width="100%">
                <Outlet/>
            </Box>
        </Grid>
    );
}