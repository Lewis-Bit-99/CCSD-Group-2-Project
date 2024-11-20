import { ColorModeContext, useMode } from "./base/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes , Route } from "react-router-dom";
import Topbar from "./HodViews/scense/global/Topbar";
import SidebarAdmin from "./HodViews/scense/global/SidebarAdmin";
import DashboardAdmin from "./HodViews/scense/dashboard";
import TeamAdmin from "./HodViews/scense/team";
import AgentAdmin from "./HodViews/scense/agents";
import AddTeam from "./HodViews/scense/team/addTeam";
import AddAgent from "./HodViews/scense/agents/addAgent";
import EditTeam from "./HodViews/scense/team/editTeam";
import SignInSide from "./FrontEnd/scense/SignInSide";
import EditAgent from "./HodViews/scense/agents/editAgent";
import SocialMedia from "./HodViews/scense/websites/socialMedia";
import WebsiteComponentsAdmin from "./HodViews/scense/websites/websiteComponents";
import BlogsAdmin from "./HodViews/scense/websites/bolgs";
import AddBlog from "./HodViews/scense/websites/addBlog";
import Services from "./HodViews/scense/services";
import AddProduct from "./HodViews/scense/services/addProduct";



const HodViewsLayout = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarAdmin />
          <main className="content">
            <Topbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

// Update the App component to use HodViewsLayout for HodViews pages
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignInSide />
        }
      />
      <Route
        path="/dashboard-admin"
        element={
          <HodViewsLayout>
            <DashboardAdmin />
          </HodViewsLayout>
        }
      />
      <Route
        path="/team-admin"
        element={
          <HodViewsLayout>
            <TeamAdmin />
          </HodViewsLayout>
        }
      />
      <Route
        path="/agent-admin"
        element={
          <HodViewsLayout>
            <AgentAdmin />
          </HodViewsLayout>
        }
      />
      <Route
        path="/addteam"
        element={
          <HodViewsLayout>
            <AddTeam />
          </HodViewsLayout>
        }
      />
      <Route
        path="/add-agent-admin"
        element={
          <HodViewsLayout>
            <AddAgent />
          </HodViewsLayout>
        }
      />
      <Route
        path="/editTeam/:user_id"
        element={
          <HodViewsLayout>
            <EditTeam />
          </HodViewsLayout>
        }
      />
      <Route
        path="/editAgent/:user_id"
        element={
          <HodViewsLayout>
            <EditAgent />
          </HodViewsLayout>
        }
      />
      <Route
        path="/social-media"
        element={
          <HodViewsLayout>
            <SocialMedia />
          </HodViewsLayout>
        }
      />
      <Route
        path="/website-components-admin"
        element={
          <HodViewsLayout>
            <WebsiteComponentsAdmin />
          </HodViewsLayout>
        }
      />
      <Route
        path="/blogs-admin"
        element={
          <HodViewsLayout>
            <BlogsAdmin />
          </HodViewsLayout>
        }
      />
      <Route
        path="/add-blog"
        element={
          <HodViewsLayout>
            <AddBlog />
          </HodViewsLayout>
        }
      />
      <Route
        path="/services"
        element={
          <HodViewsLayout>
            <Services />
          </HodViewsLayout>
        }
      />
      <Route
        path="/add-product"
        element={
          <HodViewsLayout>
            <AddProduct />
          </HodViewsLayout>
        }
      />

      
    </Routes>
  );
}

export default App;
