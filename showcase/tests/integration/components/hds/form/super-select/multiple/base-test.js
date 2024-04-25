/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { selectChoose } from 'ember-power-select/test-support';

module(
  'Integration | Component | hds/form/super-select/multiple/base',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      this.set('NOOP', () => {});
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} id="test-super-select-multiple" />`
      );
      assert
        .dom('.hds-form-super-select-multiple #test-super-select-multiple')
        .exists();
    });

    // OPTIONS

    test('it should render the options passed', async function (assert) {
      this.set('NOOP', () => {});
      this.set('OPTIONS', ['Option 1', 'Option 2', 'Option 3']);
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} @options={{this.OPTIONS}} id="test-super-select-multiple" as |option|>{{option}}</Hds::Form::SuperSelect::Multiple::Base>`
      );
      await click('.hds-form-super-select .ember-basic-dropdown-trigger');
      assert.dom('.ember-power-select-options').exists();
      assert.dom('.ember-power-select-option').hasText('Option 1');
    });

    // AFTER OPTIONS

    test('it should render the after options block by default', async function (assert) {
      this.set('NOOP', () => {});
      this.set('OPTIONS', ['Option 1', 'Option 2', 'Option 3']);
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} @options={{this.OPTIONS}} id="test-super-select-multiple" as |option|>{{option}}</Hds::Form::SuperSelect::Multiple::Base>`
      );
      await click('.hds-form-super-select .ember-basic-dropdown-trigger');
      assert
        .dom(
          '.hds-form-super-select__after-options .hds-form-super-select__result-count'
        )
        .hasText('0 selected of 3 total');
      assert
        .dom('.hds-form-super-select__after-options .hds-button')
        .hasText('Show Selected');
      assert
        .dom('.hds-form-super-select__after-options .hds-button')
        .doesNotHaveTextContaining('Clear Selected');
    });

    test('it should update the options view when "Show Selected"/"Show all" is toggled', async function (assert) {
      this.set('NOOP', () => {});
      this.set('OPTION', []);
      this.set('OPTIONS', ['Option 1', 'Option 2', 'Option 3']);
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{fn (mut this.OPTION)}} @selected={{this.OPTION}} @options={{this.OPTIONS}} id="test-super-select-multiple" as |option|>{{option}}</Hds::Form::SuperSelect::Multiple::Base>`
      );
      await click('.hds-form-super-select .ember-basic-dropdown-trigger');
      await selectChoose('#test-super-select-multiple', 'Option 1');
      await selectChoose('#test-super-select-multiple', 'Option 2');
      assert
        .dom(
          '.hds-form-super-select__after-options .hds-form-super-select__result-count'
        )
        .hasText('2 selected of 3 total');
      assert.dom('.ember-power-select-option').isVisible({ count: 3 });

      // click 'Show Selected'
      await click(
        '.hds-form-super-select__after-options .hds-button:first-child'
      );
      assert.dom('.ember-power-select-option').isVisible({ count: 2 });

      // click 'Show All'
      await click(
        '.hds-form-super-select__after-options .hds-button:first-child'
      );
      assert.dom('.ember-power-select-option').isVisible({ count: 3 });
    });

    test('it should clear any existing selection when "Clear Selected" is activated', async function (assert) {
      this.set('NOOP', () => {});
      this.set('OPTION', []);
      this.set('OPTIONS', ['Option 1', 'Option 2', 'Option 3']);
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{fn (mut this.OPTION)}} @selected={{this.OPTION}} @options={{this.OPTIONS}} id="test-super-select-multiple" as |option|>{{option}}</Hds::Form::SuperSelect::Multiple::Base>`
      );
      await click('.hds-form-super-select .ember-basic-dropdown-trigger');
      await selectChoose('#test-super-select-multiple', 'Option 1');
      await selectChoose('#test-super-select-multiple', 'Option 2');
      assert
        .dom(
          '.hds-form-super-select__after-options .hds-form-super-select__result-count'
        )
        .hasText('2 selected of 3 total');
      assert.dom('.ember-power-select-option').isVisible({ count: 3 });
      assert.dom('.hds-form-super-select__no-options-selected').doesNotExist();

      // click 'Clear Selected'
      await click(
        '.hds-form-super-select__after-options .hds-button:nth-child(2)'
      );
      assert
        .dom('.ember-power-select-option[aria-selected="true"]')
        .doesNotExist();
      assert
        .dom(
          '.hds-form-super-select__after-options .hds-form-super-select__result-count'
        )
        .hasText('0 selected of 3 total');

      // click 'Show Selected'
      await click(
        '.hds-form-super-select__after-options .hds-button:first-child'
      );
      assert
        .dom('.hds-form-super-select__no-options-selected')
        .hasText('No options selected');
    });

    test('it should not render the after options block when showAfterOptions is set to false', async function (assert) {
      this.set('NOOP', () => {});
      this.set('OPTIONS', ['Option 1', 'Option 2', 'Option 3']);
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} @options={{this.OPTIONS}} @showAfterOptions={{false}} id="test-super-select-multiple" as |option|>{{option}}</Hds::Form::SuperSelect::Multiple::Base>`
      );
      await click('.hds-form-super-select .ember-basic-dropdown-trigger');
      assert.dom('.hds-form-super-select__after-options').doesNotExist();
    });

    test('it should render custom content in the after options block when `@afterOptionsContent` exists', async function (assert) {
      this.set('NOOP', () => {});
      this.set('OPTIONS', ['Option 1', 'Option 2', 'Option 3']);
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @afterOptionsContent="Custom content" @ariaLabel="Label" @onChange={{this.NOOP}} @options={{this.OPTIONS}} id="test-super-select-multiple" as |option|>{{option}}</Hds::Form::SuperSelect::Multiple::Base>`
      );
      await click('.hds-form-super-select .ember-basic-dropdown-trigger');
      assert.dom('.hds-form-super-select__result-count').doesNotExist();
      assert
        .dom('.hds-form-super-select__after-options')
        .hasText('Custom content');
    });

    test('it should not render the after options block when `@showAfterOptions` is false', async function (assert) {
      this.set('NOOP', () => {});
      this.set('OPTIONS', ['Option 1', 'Option 2', 'Option 3']);
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @showAfterOptions={{false}} @ariaLabel="Label" @onChange={{this.NOOP}} @options={{this.OPTIONS}} id="test-super-select-multiple" as |option|>{{option}}</Hds::Form::SuperSelect::Multiple::Base>`
      );
      await click('.hds-form-super-select .ember-basic-dropdown-trigger');
      assert.dom('.hds-form-super-select__after-options').doesNotExist();
    });

    // MATCH TRIGGER WIDTH

    test('`@matchTriggerWidth` should be true by default', async function (assert) {
      this.set('NOOP', () => {});
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} />`
      );
      assert
        .dom('.hds-form-super-select')
        .doesNotHaveClass('hds-form-super-select--match-trigger-width-false');
    });

    test('it should render the correct CSS class when `@matchTriggerWidth` is false', async function (assert) {
      this.set('NOOP', () => {});
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} @matchTriggerWidth={{false}} />`
      );
      assert
        .dom('.hds-form-super-select')
        .hasClass('hds-form-super-select--match-trigger-width-false');
    });

    // DROPDOWN MAX WIDTH

    // TODO: The CSS property value is returning as "undefined"

    test('it should set the correct CSS property value when `@dropdownMaxWidth` is set', async function (assert) {
      this.set('NOOP', () => {});
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} @matchTriggerWidth={{false}} @dropdownMaxWidth="40em" />`
      );

      assert
        .dom('.hds-form-super-select')
        .hasAttribute(
          'style',
          '--hds-form-super-select-dropdown-max-width: 40em;'
        );
    });

    // INVALID

    test('it should render the correct CSS class when `@isInvalid` is true', async function (assert) {
      this.set('NOOP', () => {});
      await render(
        hbs`<Hds::Form::SuperSelect::Multiple::Base @ariaLabel="Label" @onChange={{this.NOOP}} @isInvalid={{true}} />`
      );
      assert
        .dom('.hds-form-super-select')
        .hasClass('hds-form-super-select--is-invalid');
    });
  }
);
