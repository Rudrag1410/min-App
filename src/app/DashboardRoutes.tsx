import { Routes, Route } from "react-router";
import Layout from "components/Layout";
import ProjectListPage from "../pages/ProjectListPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import { PROJECT_STATUS } from "constants/project.constants";
import { ROUTER_PATHS } from "constants/router.constants";

export default function DashboardRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTER_PATHS.HOME} element={<ProjectListPage />} />
        <Route
          path={ROUTER_PATHS.ACTIVE}
          element={<ProjectListPage filter={PROJECT_STATUS.ACTIVE} />}
        />
        <Route
          path={ROUTER_PATHS.PENDING}
          element={<ProjectListPage filter={PROJECT_STATUS.PENDING} />}
        />
        <Route
          path={ROUTER_PATHS.ARCHIVED}
          element={<ProjectListPage filter={PROJECT_STATUS.ARCHIVED} />}
        />
        <Route
          path={ROUTER_PATHS.PROJECT_DETAILS}
          element={<ProjectDetailsPage />}
        />
      </Routes>
    </Layout>
  );
}
