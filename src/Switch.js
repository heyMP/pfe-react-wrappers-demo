import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { PfSwitch } from '@patternfly/elements/pf-switch/pf-switch.js';

export const SwitchComponent = createComponent({
  tagName: 'pf-switch',
  elementClass: PfSwitch,
  react: React,
  events: {
    onChange: 'change'
  },
});
