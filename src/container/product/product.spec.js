import React from "react";
import { shallow } from "enzyme";
// import { expect } from "chai";
import Product from "../product/index";
import Button from "../../common/button";

const setup = props => {
  const actions = {
    action: jest.fn()
  };
  const component = shallow(<Product {...props} {...actions} />);

  return {
    component: component,
    addToCart: actions,
    button: component.find("Button")
  };
};
let productProps;
describe("Product Component", () => {
  beforeEach(() => {
    productProps = {
      productList: [
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
    const { component, button } = setup(productProps);
    expect(button).toBeDefined();
  });

  it("renders the Image Wrapper", () => {
    const wrapper = shallow(<Product />);
    expect(wrapper.find("Image")).toBeDefined();
  });

  it("renders the Product Name", () => {
    const wrapper = shallow(<Product />);
    expect(wrapper.find(".product_name")).toBeDefined();
  });

  it("renders the Product Amount", () => {
    const wrapper = shallow(<Product />);
    expect(wrapper.find(".product_amount")).toBeDefined();
  });
});
