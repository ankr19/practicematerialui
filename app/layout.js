import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../components/ThemeRegistry";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const DRAWER_WIDTH = 240;
import { usePathname } from "next/navigation";

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Starred', href: '/starred', icon: StarIcon },
  { text: 'Tasks', href: '/tasks', icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];
export const metadata = {
  title: "Practice",
  description: "Practing the mui with tailwindcss values",
};

export default function RootLayout({children}){
return(
  <html lang="en">
    <body>
      <ThemeRegistry>
      {children}
      </ThemeRegistry>
    </body>
  </html>
)
}