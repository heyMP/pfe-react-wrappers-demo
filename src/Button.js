import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { PfButton } from "@patternfly/elements/pf-button/pf-button.js";

export const ButtonComponent = createComponent({
  tagName: "pf-button",
  elementClass: PfButton,
  react: React,
  events: {
    onactivate: "activate",
    onchange: "change",
  },
});
