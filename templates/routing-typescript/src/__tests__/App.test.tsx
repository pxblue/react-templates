import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { HomePage } from '../pages/home';
import { DrawerContext } from '../contexts/drawerContextProvider';
import { blueThemes } from '@brightlayer-ui/react-themes';
import { test, vi } from 'vitest';

test('renders welcome text', () => {
    render(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={blueThemes}>
                <DrawerContext.Provider
                    value={{
                        drawerOpen: true,
                        setDrawerOpen: vi.fn(),
                    }}
                >
                    <HomePage />
                </DrawerContext.Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
    const bluiText = screen.getByText(/Welcome to Brightlayer/i);
    expect(bluiText).toMatchSnapshot();
});
