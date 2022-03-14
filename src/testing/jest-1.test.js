import { greeter } from './jest-1';

describe('greeter', () => {
  it('should greet', () => {
    //Arrange
    const underTest = greeter;
    //Act
    const result = underTest('World');
    //Assert
    expect(result).toBe('Hello World!');
  });
});
