import { render } from '@testing-library/react';
import HeaderSkeleton from '@/app/(protected)/dashboard/components/header-skeleton';

describe('HeaderSkeleton', () => {
  it('renders three skeleton components', () => {
    const { container } = render(<HeaderSkeleton />);
    const skeletons = container.querySelectorAll('.skeleton');
    expect(skeletons).toHaveLength(3);
  });
});
