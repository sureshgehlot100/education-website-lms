import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  BookOpenIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Video from "./pages/dashboard/lectureVideo";
import { VideoCameraSlashIcon } from "@heroicons/react/24/outline";
import Pdf from "./pages/dashboard/pdf";
import Test from "./pages/dashboard/test";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <VideoCameraSlashIcon {...icon} />,
        name: "video",
        path: "/lectureVideo",
        element: <Video />,
      },
      {
        icon: <BookOpenIcon {...icon} />,
        name: "Study Material",
        path: "/pdf",
        element: <Pdf />,
      },
      {
        icon: <CubeTransparentIcon {...icon} />,
        name: "Exam",
        path: "/test",
        element: <Test />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
