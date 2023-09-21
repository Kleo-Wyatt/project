import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const RenderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(RenderWithWrapper)}</Routes>;
};

// До реализации RequireAuth

// const AppRouter = () => {
//     const isAuth = useSelector(getUserAuthData);

//     const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
//         if (route.authOnly && !isAuth) {
//             return false;
//         }
//         return true;
//     }), [isAuth]);

//     return (
//         <Routes>
//             {routes.map(({ element, path }) => (
//                 <Route
//                     key={path}
//                     path={path}
//                     element={(
//                         <Suspense fallback={<PageLoader />}>
//                             <div className="page-wrapper">{element}</div>
//                         </Suspense>
//                     )}
//                 />
//             ))}
//         </Routes>
//     );
// };

export default memo(AppRouter);
