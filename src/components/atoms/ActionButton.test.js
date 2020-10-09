import React from "react";
import {render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


import {Primary} from "./ActionButton.stories";

it("renders ActionButton in its primary state", () => {
    render(<Primary {...Primary.args}/>)
    expect(screen.getByRole("button")).toHaveTextContent('Example Action 🚀')
})