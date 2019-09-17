const Pet = require('../src/pet');

describe('walk', () => {
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      
      pet.age = 30;
      
      expect(pet.feed).toThrow('Your pet is no longer alive :(');
    });
  });