import { test } from 'qunit';
import moduleForAcceptance from 'eventful/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | update');

test('visiting /update', function(assert) {
  visit('/listView');
  click('button.update');
  andThen(function() {
    assert.equal(currentURL(), '/listView');
  });
});
