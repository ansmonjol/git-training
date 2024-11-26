import { toLowercase, toUppercase } from "../utils/transform";

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
})