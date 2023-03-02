import { Country, People } from "../types";

export const countChildren = (data: Country[]): Country[] => {
  return data.map((country) => {
    const people = country.people.map((person) => {
      const animals = person.animals.map((animal) => ({ name: animal.name }));
      return {
        ...person,
        name: `${person.name} [${person.animals.length}]`,
        animals,
      };
    });
    const count = people.length + people.reduce((sum, person) => sum + person.animals.length, 0);
    return {
      ...country,
      name: `${country.name} [${count}]`,
      people,
    };
  });
};


