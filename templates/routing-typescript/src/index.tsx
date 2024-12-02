/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@brightlayer-ui/react-themes/open-sans';
import { App } from './App';
import './index.css';
import { blueThemes } from '@brightlayer-ui/react-themes';

// TODO: Remove this after the issues with @types/react goes away
// https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/68444
/* eslint-disable */
declare global {
    namespace React {
        interface DOMAttributes<T> {
            placeholder?: string | undefined;
        }
    }
}
/* eslint-enable */

const container = document.getElementById('root');
if (!container) throw new Error('Root Element was not found in the DOM');

const root = ReactDOMClient.createRoot(container);

root.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={blueThemes}>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StyledEngineProvider>
);
