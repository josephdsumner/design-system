import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck: not typesafe yet }}\n{{!\n  Copyright (c) HashiCorp, Inc.\n  SPDX-License-Identifier: MPL-2.0\n}}\n\n<Hds::SideNav::List::Item>\n  <Hds::Interactive\n    class=\"hds-side-nav__list-item-link {{if @isActive \'active\'}}\"\n    @current-when={{@current-when}}\n    @models={{hds-link-to-models @model @models}}\n    @query={{hds-link-to-query @query}}\n    @replace={{@replace}}\n    @route={{@route}}\n    @isRouteExternal={{@isRouteExternal}}\n    @href={{@href}}\n    @isHrefExternal={{@isHrefExternal}}\n    ...attributes\n  >\n    {{#if @icon}}\n      <FlightIcon class=\"hds-side-nav__list-item-icon-leading\" @name={{@icon}} />\n    {{/if}}\n\n    {{#if @text}}\n      <span class=\"hds-side-nav__list-item-text hds-typography-body-200 hds-font-weight-medium\">\n        {{@text}}\n      </span>\n    {{/if}}\n\n    {{#if @count}}\n      <Hds::BadgeCount @text={{@count}} @type=\"inverted\" @size=\"small\" />\n    {{/if}}\n\n    {{#if @badge}}\n      <Hds::Badge @text={{@badge}} @type=\"inverted\" @size=\"small\" />\n    {{/if}}\n\n    {{yield}}\n\n    {{#if @hasSubItems}}\n      <span class=\"hds-side-nav__list-item-icon-trailing\">\n        <FlightIcon @name=\"chevron-right\" @isInlineBlock={{false}} />\n      </span>\n    {{/if}}\n    {{#if @isHrefExternal}}\n      <span class=\"hds-side-nav__list-item-icon-trailing\">\n        <FlightIcon @name=\"external-link\" @isInlineBlock={{false}} />\n      </span>\n    {{/if}}\n  </Hds::Interactive>\n</Hds::SideNav::List::Item>");

var link = setComponentTemplate(TEMPLATE, templateOnly());

export { link as default };
//# sourceMappingURL=link.js.map
