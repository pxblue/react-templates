import React from 'react';
import { render, screen } from '@testing-library/react';
import { test } from 'vitest';

test('renders welcome text', () => {
    render((<div>Welcome!</div>));
    expect(screen.getByText(/Welcome!/i)).toMatchSnapshot();
});
