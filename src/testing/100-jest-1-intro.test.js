import { greeter } from './100-jest-1-intro';

describe('greeter', () => {
  it('should greet by name', () => {
    //Arrange
    const underTest = greeter;
    //Act
    const result = underTest('Bob');
    //Assert
    expect(result).toBe('Hello Bob!');
  });
  it('should default to "Hello World!" if no name is passed', () => {
    expect(greeter()).toBe('Hello World!');
  });
});
