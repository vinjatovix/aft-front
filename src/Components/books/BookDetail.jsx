import PropTypes from "prop-types";
import { DEFAULT_COVER_BOOK } from "../../../fixtures/img/urls";

export const BookDetail = ({ data }) => {
  return (
    <div className="detail">
      <p>{data.name}</p>
      <p className="small">{data.author}</p>
      <img src={data.img || DEFAULT_COVER_BOOK} alt="book" />
      <p>{data.description}</p>
    </div>
  );
};

BookDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
  }),
};
