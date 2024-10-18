import Home from "@/app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Counter", () => {
  it("renders the counter app", () => {
    render(<Home />);

    const counterBtn = screen.getByText("+1");

    expect(counterBtn).toBeInTheDocument();
  });

  it("increment counter", async () => {
    render(<Home />);

    const counterBtn = screen.getByText("+1");

    fireEvent.click(counterBtn);

    const countersTxt = await screen.findAllByText("2");

    // found the two counters with value '2'
    expect(countersTxt).toHaveLength(2);
  });
});
