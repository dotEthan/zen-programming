import { metadata } from "./layout";

jest.mock("./components/header/Header", () => () => {
  const MockHeader = () => <div>Mock Header</div>;
  MockHeader.displayName = "Mock Header";
  return MockHeader;
});
jest.mock("./components/footer/Footer", () => () => {
  const MockFooter = () => <div>Mock Footer</div>;
  MockFooter.displayName = "Mock Footer";
  return MockFooter;
});
jest.mock("@/utils/fonts", () => ({
    geistSans: { variable: "mock-sans" },
    geistMono: { variable: "mock-mono" },
  }));

// Mock html and body to stop hydration errors
beforeEach(() => {
    document.documentElement.innerHTML = "";
    document.body.innerHTML = "";
});

describe("Layout", () => {
    it('should export metadata', () => {
      expect(metadata.title).toBe('Zenful Programming');
      expect(metadata.description).toBe('Learning Mindfully');
    });
});