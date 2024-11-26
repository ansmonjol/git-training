import { toLowercase, toUppercase, toSnakeCase } from "../utils/transform";

describe('Transform', () => {
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