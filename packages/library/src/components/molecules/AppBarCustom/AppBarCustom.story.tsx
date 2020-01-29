import React from "react";
import { storiesOf } from "@storybook/react";

import AppBarCustom from "./index";

const defaultText = "Dummy Title";

storiesOf("AppBarCustom", module).add(
	"default",
	() => (<><AppBarCustom title={defaultText}/> </>)
)