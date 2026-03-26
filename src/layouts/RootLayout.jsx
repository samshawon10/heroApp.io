import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingOverlay from "../components/LoadingOverlay";
import { apps } from "../data/apps";
import { useInstallations } from "../hooks/useInstallations";

const RootLayout = () => {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";
  const { installed, install, uninstall } = useInstallations();

  const installedIds = installed.map((item) => item.id);

  const handleInstall = (id) => {
    const app = apps.find((item) => item.id === id);
    if (!app) return;
    const alreadyInstalled = installed.some((item) => item.id === id);
    if (alreadyInstalled) return;
    install(app);
    toast.success(`${app.title} installed successfully`);
  };

  const handleUninstall = (id) => {
    const app = apps.find((item) => item.id === id);
    uninstall(id);
    if (app) {
      toast.info(`${app.title} removed from installation`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      {isNavigating && <LoadingOverlay label="Switching pages" />}
      <main className="flex-1">
        <Outlet context={{ installedIds, onInstall: handleInstall, onUninstall: handleUninstall }} />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default RootLayout;
