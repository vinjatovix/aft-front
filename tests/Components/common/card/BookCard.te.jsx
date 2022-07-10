import { fireEvent, render } from "@testing-library/react";
import { BookCard } from "../../../../src/Components/common/card/BookCard";

describe("BookCard Component", () => {
  xit("should match snapshot", async () => {
    const { container } = render(
      <BookCard
        data={{
          name: "Obra",
          author: "Autor",
          img: "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg",
          description: "Descripcion",
          _id: "5e9f8f8f8f8f8f8f8f8f8f8",
        }}
        isAdmin={false}
        actions={{
          detail: jest.fn(),
          edit: jest.fn(),
          delete: jest.fn(),
        }}
        token="token"
      />
    );

    expect(container).toMatchSnapshot();

    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(button).toHaveTextContent("🎭 Personajes");

    const buttonEdit = container.querySelector("button:nth-child(2)");
    fireEvent.click(buttonEdit);
    expect(buttonEdit).toHaveTextContent("📝 editar");

    const buttonDelete = container.querySelector("button:nth-child(3)");
    fireEvent.click(buttonDelete);
    expect(buttonDelete).toHaveTextContent("🗑️ eliminar");

    const img = container.querySelector("img");
    expect(img).toHaveAttribute(
      "src",
      "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg"
    );
  });
});
