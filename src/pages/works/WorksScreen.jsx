import React, { useContext, useEffect, useState } from "react";
import { WorksByUser } from "./WorksByUser";
import { fetchWorks } from "../../http";
import { UserContext } from "../../contexts/UserContext";
import Card from "../../Components/common/card/Card";

export const WorksScreen = () => {
  const { auth } = useContext(UserContext);

  const { roles = [], username } = auth.user || {};

  const [works, setWorks] = useState([]);

  const getWorks = async () => {
    const res = await fetchWorks(auth.token);
    const data = await res.json();
    setWorks(data);
  };
  useEffect(() => {
    auth.token && getWorks();
  }, [auth.token]);

  return (
    (auth && (
      <>
        {roles.includes("aft.admin") || roles.includes("aft.editor") ? (
          <div className="card-grid">
            {works.map((item) => (
              <Card type="work" key={item._id} data={item} />
            ))}
          </div>
        ) : roles.includes("aft.user") ? (
          <WorksByUser data={works} username={username} />
        ) : (
          <h1>LOGOUT</h1>
        )}
      </>
    )) || <></>
  );
};
