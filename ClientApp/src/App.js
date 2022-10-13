import React from 'react';
import {
    useRoutes,
    useNavigate,
    useLocation
} from "react-router-dom";
import AppRoutes from './AppRoutes';
//import { AppLayout } from './components/AppLayout';
import './custom.css';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const routes = useRoutes(AppRoutes(navigate, location));

    return routes;
    //const router = createBrowserRouter(AppRoutes);
    //return (
    //    <RouterProvider router={router} />
    //    //<AppLayout navigate={navigate} location={location}>
    //    //<Routes>
    //    //  {AppRoutes.map((route, index) => {
    //    //    const { element, ...rest } = route;
    //    //    return <Route key={index} {...rest} element={element} />;
    //    //  })}
    //    //</Routes>
    //    //</AppLayout>
    //);
}
export default App;