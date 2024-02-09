/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { globalAxeOptions } from 'website/tests/a11y-helper';

module('Acceptance | components/dialog/modal', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /components/dialog/modal', async function (assert) {
    await visit('/components/dialog/modal');

    assert.strictEqual(currentURL(), '/components/dialog/modal');
  });

  test('components/dialog/modal passes a11y automated checks', async function (assert) {
    await visit('/components/dialog/modal');
    await a11yAudit(globalAxeOptions);
    assert.ok(true, 'a11y automation audit passed');
  });
});
