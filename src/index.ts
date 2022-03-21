import dotenv from 'dotenv-safe';
import add from '@src/util/add';

dotenv.config();

console.log('hello');
console.log(add(1, 2));
console.log(process.env.MY_NAME);
