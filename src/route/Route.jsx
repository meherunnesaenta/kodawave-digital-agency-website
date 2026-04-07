import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/Blog/BlogPost";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path:'/services',
            Component:Services
        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'/blog',
            Component:Blog
        },
        {
            path:'/blog/:id',
            Component:BlogPost
        },
        {
            path:'/contact',
            Component:Contact
        }
        
    ]
  },
  
]);