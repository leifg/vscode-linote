import * as assert from 'assert';
import { snippetParser } from '../../parsers';
import { snippet01 } from '../support/fixtures';

suite('Snippet Parser', () => {
  test('parses example input correctly', () => {
    const response = snippetParser.parse(snippet01);
    assert.deepEqual(response, [
      {
        id: "ab35cb87-9506-412c-8749-f6f51c2c7d4e", body: "2nd note\n\n"
      },
      {
        id: "ffd151b6-a358-4ecd-a884-b2dbeb0129d4", body: "1st note\n"
      }]);
  });
});
