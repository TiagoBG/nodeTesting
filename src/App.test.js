import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Tests App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("render title (h1)", () => {
    expect(wrapper.find("h1").text()).toContain("This is a counter");
  });

  test("render button with text of 'increment' ", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render button with text of 'decrement' ", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
  });

  test("render counter value (0)", () => {
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });

  test("render click event of increment in counter value (1)", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("1");
  });

  test("render click event of increment in counter value (1)", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("-1");
  });
});
