import { greeter } from './app';

describe('App', () => {
  it('should return a string with the passed argument', () => {
    expect(greeter('Tom')).toBe('Hello, Tom!');
  });
});