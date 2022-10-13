import {
    useNavigate,
    useLocation
} from "react-router-dom";

import { AdminLayout } from './components/AdminLayout';
import { FrontendLayout } from './components/FrontendLayout';

import { Counter } from "./pages/Counter";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import { AdminHome } from "./pages/admin/Home";
import { ContactTable } from "./pages/admin/contact/ContactTable";
import { CategoryTable } from "./pages/admin/category/CategoryTable";
import { AboutTable } from "./pages/admin/about/AboutTable";
import { ProductTable } from "./pages/admin/product/ProductTable";
import { CarouselTable } from "./pages/admin/carousel/CarouselTable";
import { OurServiceTable } from "./pages/admin/service/ServiceTable";
import { SettingTable } from "./pages/admin/settings/SettingTable";
import { SettingForm } from "./pages/admin/settings/SettingForm";


const AppRoutes = function (navigate, location) 
 {
    return [
        {
            element: <FrontendLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
            ]
        },
        {
            path: 'admin',
            element: <AdminLayout navigate={navigate} location={location} />,
            children: [
                {
                    path: '',
                    element: <AdminHome />
                },
                {
                    path: 'counter',
                    element: <Counter />
                },
                {
                    path: 'fetch-data',
                    element: <FetchData />
                },
                {
                    path: 'contact',
                    element: <ContactTable />
                },
                {
                    path: 'category',
                    element: <CategoryTable />
                },
                {
                    path: 'about',
                    element: <AboutTable />
                },
                {
                    path: 'product',
                    element: <ProductTable />
                },
                {
                    path: 'carousel',
                    element: <CarouselTable />
                },
                {
                    path: 'service',
                    element: <OurServiceTable />
                },
                {
                    path: 'setting',
                    element: <SettingForm />
                },
            ]
        },
    ];
}

export default AppRoutes;
