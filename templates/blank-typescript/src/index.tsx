/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@brightlayer-ui/react-themes/open-sans';
import { App } from './App';
import './index.css';
import { blueThemes } from '@brightlayer-ui/react-themes';
import type {} from '@mui/material/themeCssVarsAugmentation';

const container = document.getElementById('root');
if (!container) throw new Error('Root Element was not found in the DOM');

const root = ReactDOMClient.createRoot(container);

root.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={blueThemes}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StyledEngineProvider>
);
