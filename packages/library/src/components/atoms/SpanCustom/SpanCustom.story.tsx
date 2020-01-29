import React from "react";
import { storiesOf } from "@storybook/react";

import SpanCustom from "./index";

const defaultText = "Dummy Text";

storiesOf("SpanCustom", module).add(
	"default",
	() => (<><SpanCustom text={defaultText}/> </>)
)