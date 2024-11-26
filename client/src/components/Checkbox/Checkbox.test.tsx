import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./Checkbox";

// Test Suite for CheckBox Component
describe("CheckBox Component", () => {
  // Test: Renders the checkbox with a label
  it("renders the checkbox with the provided label", () => {
    render(<CheckBox label="Test Label" name="test" variant="circle" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  // Test: Sets the correct id and name attributes
  it("applies the correct id and name attributes", () => {
    render(
      <CheckBox
        id="test-id"
        label="Test Label"
        name="test-name"
        variant="circle"
      />
    );
    const inputElement = screen.getByLabelText(/Test Label/i);
    expect(inputElement).toHaveAttribute("id", "test-id");
    expect(inputElement).toHaveAttribute("name", "test-name");
  });

  // Test: Handles the onChange event
  it("calls the onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(
      <CheckBox
        label="Test Label"
        name="test"
        variant="circle"
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByLabelText(/Test Label/i);
    fireEvent.click(inputElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // Test: Applies the checked state
  it("applies the checked state when passed", () => {
    render(
      <CheckBox
        label="Test Label"
        name="test"
        variant="circle"
        checked={true}
      />
    );
    const inputElement = screen.getByLabelText(/Test Label/i);
    expect(inputElement).toBeChecked();
  });

  // Test: Handles the defaultChecked state
  it("renders the defaultChecked state", () => {
    render(
      <CheckBox
        label="Test Label"
        name="test"
        variant="circle"
        defaultChecked
      />
    );
    const inputElement = screen.getByLabelText(/Test Label/i);
    expect(inputElement).toBeChecked();
  });

  // Test: Renders the circle variant
  it("renders the circle variant", () => {
    render(<CheckBox label="Circle" name="test" variant="circle" />);
    const inputElement = screen.getByLabelText(/Circle/i);
    expect(inputElement).toHaveAttribute("type", "radio");
  });

  // Test: Renders the box variant
  it("renders the box variant with check icon", () => {
    render(<CheckBox label="Box" name="test" variant="box" />);
    const inputElement = screen.getByLabelText(/Box/i);
    expect(inputElement).toHaveAttribute("type", "radio");

    const iconElement = screen.getByTestId("box-icon");
    expect(iconElement).toBeInTheDocument();
  });

  // Test: Applies additional class names
  it("applies additional class names", () => {
    render(
      <CheckBox
        label="Styled Checkbox"
        name="test"
        variant="circle"
        className="custom-class"
      />
    );

    const containerElement = screen
      .getByText(/Styled Checkbox/i)
      // eslint-disable-next-line testing-library/no-node-access
      .closest("div")?.parentElement;
    expect(containerElement).toHaveClass("custom-class");
  });
});
