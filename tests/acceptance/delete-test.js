import { test } from 'qunit';
import moduleForAcceptance from 'eventful/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | delete');

test('visiting /delete', function(assert) {
  visit('/listView');
  click('button.delete');
  andThen(function() {
    assert.equal(currentURL(), '/listView');
  });
});
