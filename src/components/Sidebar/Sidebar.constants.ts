import { ROUTER_PATHS } from "constants/router.constants";

export const navItems = [
  { path: ROUTER_PATHS.HOME, label: "All Projects", icon: "📊" },
  { path: ROUTER_PATHS.ACTIVE, label: "Active", icon: "✓" },
  { path: ROUTER_PATHS.PENDING, label: "Pending", icon: "⏳" },
  { path: ROUTER_PATHS.ARCHIVED, label: "Archived", icon: "📦" },
];
