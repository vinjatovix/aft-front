import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Card from "../../Components/common/card/Card";
import { getWorks } from "../../helpers/getWorks";

export const WorksScreen = () => {
  const { auth } = useContext(UserContext);

  const [works, setWorks] = useState([]);

  const _getWorks = getWorks(auth, setWorks);

  useEffect(() => {
    auth.token && _getWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  return (
    <div className="card-grid">
      {!!works.length &&
        works.map((item) => <Card type="work" key={item._id} data={item} />)}
    </div>
  );
};
