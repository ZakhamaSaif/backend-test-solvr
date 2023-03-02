import { Country, People } from '../types';

export const filteredAnimals = (
  data: Country[],
  pattern: string
): Country[] | string => {
  const filteredData = data
    .map((country) => ({
      ...country,
      people: country.people
        .map((person) => ({
          ...person,
          animals: person.animals.filter((animal) => animal.name.includes(pattern)),
        }))
        .filter((person) => person.animals.length > 0),
    }))
    .filter((country) => country.people.length > 0);

  if (filteredData.length === 0) {
    return 'No animal matching this pattern';
  }
  return filteredData;
};

