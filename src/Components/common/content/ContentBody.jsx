import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "../ListItem";
import { ContentListDetail } from "./ContentListDetail";

export const ContentBody = ({ content, isEditor, actions, token, type }) => {
  return (
    <ul className="content-list">
      {content &&
        content.map((item) => (
          <ListItem key={item._id} className="content-list_item" {...item}>
            <ContentListDetail
              type={type}
              isEditor={isEditor}
              token={token}
              actions={actions}
              item={item}
            />
          </ListItem>
        ))}
    </ul>
  );
};

ContentBody.propTypes = {
  content: PropTypes.array,
  isEditor: PropTypes.bool,
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

ContentBody.defaultProps = {
  content: [],
  isEditor: false,
};
