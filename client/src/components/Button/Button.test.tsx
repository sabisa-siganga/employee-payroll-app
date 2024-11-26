import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

// Test Suite for Button Component
describe("Button Component", () => {
  // Test: Renders the button with children text
  it("renders the button with the provided children", async () => {
    render(<Button className="test-button">Click Me</Button>);

    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn test-button");
  });

  // Test: Applies the correct default type
  it("sets the default type to 'button'", () => {
    render(<Button className="test-button">Click Me</Button>);
    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveAttribute("type", "button");
  });

  // Test: Sets the provided type
  it("applies the provided type to the button", () => {
    render(
      <Button type="submit" className="test-button">
        Submit
      </Button>
    );
    const button = screen.getByText(/Submit/i);
    expect(button).toHaveAttribute("type", "submit");
  });

  // Test: Executes the onClick handler when clicked
  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button className="test-button" onClick={handleClick}>
        Click Me
      </Button>
    );
    const button = screen.getByText(/Click Me/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test: Handles the disabled state
  it("renders the button as disabled when the 'disabled' prop is true", () => {
    render(
      <Button className="test-button" disabled>
        Disabled
      </Button>
    );
    const button = screen.getByText(/Disabled/i);
    expect(button).toBeDisabled();
  });

  // Test: Does not call onClick when disabled
  it("does not call the onClick handler when the button is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button className="test-button" disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    const button = screen.getByText(/Disabled/i);
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test: Renders with additional class names
  it("applies additional class names to the button", () => {
    render(
      <Button className="extra-class another-class">Styled Button</Button>
    );
    const button = screen.getByText(/Styled Button/i);
    expect(button).toHaveClass("btn extra-class another-class");
  });
});
