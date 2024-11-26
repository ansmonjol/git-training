import { toLowercase, toUppercase, toSnakeCase, getFirstChar } from "../utils/transform";

describe('Transform', () => {
  describe('getFirstChar', () => {
    it('should return first character of string', () => {
      expect(getFirstChar('hello')).toBe('h');
    });
  })

  describe('toUppercase', () => {
    it('should convert string to uppercase', () => {
      expect(toUppercase('hello')).toBe('HELLO');
    });
  })

  describe('toLowercase', () => {
    it('should convert string to lowercase', () => {
      expect(toLowercase('HELLO')).toBe('hello');
      expect(toLowercase('HOLA')).toBe('Hola');
    });
  })

  describe('toSnakeCase', () => {
    it('should convert string to snake case', () => {
      expect(toSnakeCase('hello world')).toBe('hello_world');
    });
  })
})