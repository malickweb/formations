import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
    it('affiche ses children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('appelle onClick quand on clique', () => {
        const onClick = jest.fn();

        render(<Button onClick={onClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button', { name: 'Click me' }));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
