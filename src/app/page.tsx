import MaintenancePage from "./pages/MaintenancePage";
import { isMaintenanceMode } from "./utils/utils";

export default function Home() {
  if (isMaintenanceMode()) {
    return <MaintenancePage />;
  }

  return <main>{/* Your normal Home page content goes here */}</main>;
}
