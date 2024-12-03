import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import { App } from './App';
import CssBaseline from '@mui/material/CssBaseline';
import '@brightlayer-ui/react-themes/open-sans';
import './index.css';
import { createRoot } from 'react-dom/client';
import { blueThemes } from '@brightlayer-ui/react-themes';

const container = document.getElementById('root');
const root = createRoot(container ?? document.createDocumentFragment());

root.render(
    // Enable Strict Mode for more error checking
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={blueThemes}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
