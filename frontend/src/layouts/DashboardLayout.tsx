import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
export function DashboardLayout() {
  return (
    <div style={layout}>
      <Sidebar />

      <div style={content}>
        <Header />

        <main style={main}>
          <DashboardPage />
                </main>
      </div>
    </div>
  );
}

const layout = {
  display: "flex",
  minHeight: "100vh",
  background: "#f8fafc",
};

const content = {
  flex: 1,
  minHeight: "100vh",
};

const main = {
  padding: 30,
};