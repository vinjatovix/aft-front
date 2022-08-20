import PropTypes from "prop-types";

export const BookDetail = ({ data }) => {
  const defaultCoverBook =
    "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg";

  return (
    <div className="detail">
      <p>{data.name}</p>
      <p className="small">{data.author}</p>
      <img src={data.img || defaultCoverBook} alt="book" />
      <p>{data.description}</p>
    </div>
  );
};

BookDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
