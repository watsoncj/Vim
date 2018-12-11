import { ModeName } from '../../src/mode/mode';
import { getTestingFunctions, ITestObject } from '../testSimplifier';
import { cleanUpWorkspace, setupWorkspace } from './../testUtils';

suite('change operator', () => {
  let { newTest, newTestOnly } = getTestingFunctions();

  setup(async () => {
    await setupWorkspace(undefined, '.ts');
  });

  teardown(cleanUpWorkspace);

  newTest({
    title: 'c2w changes 2 words',
    start: ['|The rain in Spain', 'falls mainly on the plain.'],
    keysPressed: 'c2w',
    end: ['| in Spain', 'falls mainly on the plain.'],
  });

  newTest({
    title: 'cj changes 2 lines',
    start: ['The |rain in Spain', 'falls mainly on the plain.'],
    keysPressed: 'cj',
    end: ['|'],
  });

  newTest({
    title: 'cgg changes lines to top of file',
    start: ['The rain in Spain', 'falls |mainly', 'on the plain.'],
    keysPressed: 'cgg',
    end: ['|', 'on the plain.'],
  });

  newTest({
    title: 'c^ changes chars to start of line',
    start: ['function f() {', '  let a;|', '}'],
    keysPressed: 'c^',
    end: ['function f() {', '  |', '}'],
  });
});
