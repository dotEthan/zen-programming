import { LayoutContent } from "./LayoutContent";
import { render, screen } from "@testing-library/react";

jest.mock("./header/Header", () => {
    const MockHeader = () => <div>Mock Header</div>;
    MockHeader.displayName = "Mock Header";
    return MockHeader;
});
jest.mock("./footer/Footer", () => {
    const MockFooter = () => <div>Mock Footer</div>;
    MockFooter.displayName = "Mock Footer";
    return MockFooter;
});
jest.mock("@/utils/fonts", () => ({
    geistSans: { variable: "mock-sans" },
    geistMono: { variable: "mock-mono" },
}));


describe("Layout", () => {
    it("should render the layout", () => {
        render(
            <LayoutContent>
                <div>Mock Children</div>
            </LayoutContent>
        );
        
        expect(screen.getByText("Mock Header")).toBeInTheDocument();
        expect(screen.getByText("Mock Footer")).toBeInTheDocument();
        expect(screen.getByText("Mock Children")).toBeInTheDocument();
    });

    
    it("should use the dark theme if preferred", () => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: true,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));

        render(
            <LayoutContent>
                <div>Mock Children</div>
            </LayoutContent>
        );

        expect(document.documentElement).toHaveClass("dark");
        expect(screen.getByText("Mock Header")).toBeInTheDocument();
    });
});