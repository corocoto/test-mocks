import jest from 'jest';

const IntersectionObserver = jest.fn((cb, options) => ({
  thresholds: Array.isArray(options.threshold)
    ? options.threshold
    : [options.threshold],
  root: options.root,
  rootMargin: options.rootMargin,
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn()
}));

export default IntersectionObserver
