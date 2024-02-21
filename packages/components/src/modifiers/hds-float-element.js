// stripped down version of the `ember-velcro` modifier:
// code: https://github.com/CrowdStrike/ember-velcro/blob/main/ember-velcro/src/modifiers/velcro.ts
// repo: https://github.com/CrowdStrike/ember-velcro

import { modifier } from 'ember-modifier';
import { assert } from '@ember/debug';

import { createPopper } from '@popperjs/core';

function getPopperOptions(namedOptions) {
  const {
    floatingElementPlacement = 'bottom',
    floatingElementPositionStrategy = 'absolute', // if we use `fixed` then the overscroll of the body makes the dialog look weird when the page is overscrolled
    floatingElementZIndex,
    floatingElementOffsetOptions,
    floatingElementEnableCollisionDetection,
  } = namedOptions;

  const options = { modifiers: [] };

  options.placement = floatingElementPlacement;
  options.strategy = floatingElementPositionStrategy;

  if (floatingElementOffsetOptions) {
    options.modifiers.push({
      // https://popper.js.org/docs/v2/modifiers/offset/
      name: 'offset',
      options: {
        offset: floatingElementOffsetOptions,
      },
    });
  }

  if (floatingElementEnableCollisionDetection) {
    options.modifiers.push(
      {
        // https://popper.js.org/docs/v2/modifiers/flip/
        name: 'flip',
        enabled: true,
      },
      {
        // https://popper.js.org/docs/v2/modifiers/prevent-overflow/
        name: 'preventOverflow',
        options: {
          padding: 8,
        },
      }
    );
  }

  if (floatingElementZIndex) {
    options.modifiers.push({
      // https://popper.js.org/docs/v2/modifiers/#custom-modifiers
      name: 'floatingElementZIndex',
      enabled: true,
      phase: 'main',
      fn: ({ state }) => {
        state.styles.popper.zIndex = floatingElementZIndex;
      },
    });
  }

  // TODO add custom modifier (conditional option?) to resize vertically the popper if the height is larger than the available space
  // https://popper.js.org/docs/v2/utils/detect-overflow/#example
  //
  // ➔ we can use this community package:
  // https://www.npmjs.com/package/popper-max-size-modifier
  //

  // uncomment to debug first rendering [NOTICE: doesn't seem to work]
  // options.modifiers.push({
  //   // https://popper.js.org/docs/v2/lifecycle/#hook-into-the-lifecycle
  //   onFirstUpdate: (state) => {
  //     console.log('Popper `onFirstUpdate` invoked with state', state);
  //   },
  // });

  return options;
}

// Notice: we use a function-based modifier here instead of a class-based one
// because it's quite simple in its logic, and doesn't require injecting services
// see: https://github.com/ember-modifier/ember-modifier#function-based-modifiers

export default modifier((element, positional, named) => {
  // the element that "floats" next to the anchor (whose position is calculated in relation to the anchor)
  // notice: this is the element the Ember modifier is attached to
  const floatingElement = element;
  // the element that acts as an "anchor" for the "floating" element
  // notice: it's expressed as argument for modifier and it can be a DOM node direclty, or a string (CSS selector, will be converted below to an actual DOM node)
  // (positional arguments of the modifier)
  const [_anchorTarget] = positional;
  const popperOptions = getPopperOptions(named);

  const anchorElement =
    typeof _anchorTarget === 'string'
      ? document.querySelector(_anchorTarget)
      : _anchorTarget;

  assert(
    '`hds-float-element` modifier - no anchoring element defined',
    anchorElement instanceof HTMLElement || anchorElement instanceof SVGElement
  );

  assert(
    '`hds-float-element` modifier -  no floating element defined',
    floatingElement instanceof HTMLElement ||
      floatingElement instanceof SVGElement
  );

  assert(
    '`hds-float-element` modifier - anchoring and floating elements cannot be the same element',
    floatingElement !== anchorElement
  );

  const popperInstance = createPopper(
    anchorElement,
    floatingElement,
    popperOptions
  );

  // this (teardown) function is run when the element is removed
  return () => {
    popperInstance?.destroy();
  };
});
