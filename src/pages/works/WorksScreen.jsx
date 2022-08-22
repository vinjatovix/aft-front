import React from "react";
import { CardGrid } from "../../Components/common/card/CardGrid";
import { Content } from "../../Components/common/content/Content";
import { Blur } from "../../Components/ui/Blur";

export const WorksScreen = (props) => {
  const { actions, modals } = props;

  const edit = <h1>Add work</h1>;

  return (
    <>
      <Content {...props}>
        <CardGrid type="work" {...props} />
      </Content>

      {modals.blur && <Blur modals={modals} edit={edit} actions={actions} />}
    </>
  );
};
