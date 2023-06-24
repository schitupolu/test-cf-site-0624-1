import { Home, Partners, Company, Contact } from "@/pages";

export const routes = [
  {
    
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    
    name: "Company",
    path: "/company",
    element: <Company />,
  },
  {
    
    name: "partners",
    path: "/partners",
    element: <Partners />,
  },
  {
    
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },



];

export default routes;
