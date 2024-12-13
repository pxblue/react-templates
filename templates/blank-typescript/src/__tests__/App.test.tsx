import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { App } from '../App';
import { blueThemes } from '@brightlayer-ui/react-themes';

test('renders welcome text', () => {
    render(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={blueThemes}>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    );
    const bluiText = screen.getByText(/Welcome to Brightlayer/i);
    expect(bluiText).toBeInTheDocument();
});
