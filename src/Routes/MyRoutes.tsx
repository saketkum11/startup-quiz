import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
};
export { MyRoutes };
