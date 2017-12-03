import { test } from 'qunit';
import moduleForAcceptance from 'eventful/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | post');

test('visiting /post', function(assert) {
  visit('/newNote');
  fillIn('input.title', 'My new post');
  click('button.submit');
  andThen(() => assert.equal(find('.input-main').text(), 'My new post'));
});
