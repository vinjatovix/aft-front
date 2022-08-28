import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CardGrid } from "../../../../src/Components/common/card/CardGrid";
import mockActions from "../../../fixtures/mockActions";
import { mockModals } from "../../../fixtures/mockModals";
import mockWorks from "../../../fixtures/mockWorks";
import mockBooks from "../../../fixtures/mockBooks";

jest.mock("../../../../src/hooks/useFetch", () => ({
  useFetch: (path) => [
    {
      data: /work/.test(path) ? mockWorks : mockBooks,
      loading: false,
      error: null,
    },
    jest.fn(),
  ],
}));

jest.mock("../../../../src/helpers/getApiHost", () => ({
  getApiHost: () => "host",
}));

const auth = {
  token: "token",
  user: {
    _id: "5e9f8f8f8f8f8f8f8f8f8f8",
    username: "some",
    roles: ["aft.user"],
  },
};
describe("CardGrid Component", () => {
  it("should render 2 work cards", () => {
    const { container } = render(
      <Router>
        <CardGrid
          type="work"
          actions={mockActions}
          isEditor={false}
          modals={mockModals}
          auth={auth}
        />
      </Router>
    );

    const title = screen.getByTestId("Trabajos:");
    expect(title.innerHTML).toBe("Trabajos: 2");

    expect(container).toMatchSnapshot();
  });

  it("should render 5 book cards", () => {
    const { container } = render(
      <>
        <Router>
          <CardGrid
            type="book"
            actions={mockActions}
            isEditor={false}
            modals={mockModals}
            auth={auth}
          />
        </Router>
      </>
    );

    const title = screen.getByTestId("Obras:");
    expect(title.innerHTML).toBe("Obras: 5");

    expect(container).toMatchSnapshot();
  });
});
