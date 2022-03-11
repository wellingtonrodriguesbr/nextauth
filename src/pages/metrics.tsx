import { withSSRAuth } from "../utils/withSSRAuth";
import { setupApiClient } from "../services/api";

export default function Metrics() {
  return (
    <>
      <div>Métricas atualizadas</div>
    </>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupApiClient(ctx);

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  }
);
