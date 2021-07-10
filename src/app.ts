import { ProjectList } from './components/project-list';
import { ProjectInput } from './components/project-input';

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');

console.log('test...')