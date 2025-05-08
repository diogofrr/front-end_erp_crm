import { render, screen } from '@testing-library/react';
import LoginDecorations from '@/app/(auth)/login/components/login-decorations';

jest.mock('@/../public/images/red-rose.svg', () => ({
  src: 'red-rose.svg',
}));

jest.mock('@/../public/images/green-rose.svg', () => ({
  src: 'green-rose.svg',
}));

jest.mock('@/utils/generateBackgroundElementPositions', () => ({
  generateBackgroundElementPositions: jest.fn(() => [
    {
      left: 10,
      top: 20,
      opacity: 0.8,
      rotation: 45,
      size: 100,
    },
  ]),
}));

describe('LoginDecorations', () => {
  it('should render the login decorations', () => {
    render(<LoginDecorations />);

    const redRoses = screen.getAllByAltText('Red Rose');
    const greenRoses = screen.getAllByAltText('Green Rose');

    expect(redRoses).toHaveLength(1);
    expect(greenRoses).toHaveLength(1);
  });
});
