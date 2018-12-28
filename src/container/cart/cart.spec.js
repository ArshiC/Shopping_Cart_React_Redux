import React from "react";
import { shallow, mount, render } from "enzyme";
import Cart from "./index";
import Button from "../../common/button";
// import { expect } from 'chai';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const setup = props => {
  const actions = {
    action: jest.fn()
  };

  let cartList = [
    {
      isPublished: "true",
      productName: "Apple iPhone X",
      productImage:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
      price: "299"
    }
  ];
  const component = shallow(<Cart cartList={cartList} />);

  return {
    component: component,
    addFromCart: actions,
    button: component.find("button")
  };
};

let cartProps;
describe("Cart Component", () => {
  beforeEach(() => {
    cartProps = {
      cartList: [
        {
          isPublished: "true",
          productName: "Apple iPhone X",
          productImage:
            "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
          price: "299"
        }
      ]
    };
  });
  it("renders the Button Wrapper", () => {
    const { component, button } = setup(cartProps);
    expect(component.find("Button")).toBeDefined();
  });

  it("renders the li Wrapper", () => {
    const { component, button } = setup(cartProps);
    expect(component.find("li")).toBeDefined();
  });

  it("renders the cart  item text ", () => {
    const { component, button } = setup(cartProps);
    expect(component.find("span")).toBeDefined();
  });
});
