import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRAuth } from "../utils/withSSRAuth";

import { api } from "../services/apiClient";
import { setupApiClient } from "../services/api";
import useCan from "../hooks/useCan";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const userCanSeeMetrics = useCan({
    permissions: ["metrics.list"],
  });

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      {userCanSeeMetrics && <div>Métricas</div>}
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  return {
    props: {},
  };
});
