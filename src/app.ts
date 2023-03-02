import { Command } from 'commander';
import { filteredAnimals, countChildren } from './functions';
import data from '../data';

const program = new Command();

program
  .command('filter <pattern>')
  .description('Filter animals by name pattern')
  .action((pattern: string) => {
    const filteredData = filteredAnimals(data, pattern);
    if (typeof filteredData === 'string') {
      console.log(filteredData);
    } else {
      console.log(JSON.stringify(filteredData, null, 2));
    }
  });

program
  .command('count')
  .description('Count the number of children in each country')
  .action(() => {
    const countData = countChildren(data);
    console.log(JSON.stringify(countData, null, 2));
  });

program.parse(process.argv);
