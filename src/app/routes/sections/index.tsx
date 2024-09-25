import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { BaseLayout } from '@/app/layouts/baseLayout';

// import { SplashScreen } from 'src/components/loading-screen';

// import { authRoutes } from './auth';
import { mainRoutes } from './main';
// import { authDemoRoutes } from './auth-demo';
// import { dashboardRoutes } from './dashboard';
// import { componentsRoutes } from './components';
// import {
//     TransitionGroup,
//     CSSTransition
// } from "react-transition-group";

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('../../../pages/home/view/HomeView'));



export function Router() {
    return useRoutes([
        {
            path: '/',
            /**
             * Skip home page
             * element: <Navigate to={CONFIG.auth.redirectPath} replace />,
             */
            element: (
                // <Suspense fallback={<SplashScreen />}>
                <Suspense fallback={<div>Loading...</div>}>
                    {/* <TransitionGroup> */}

                        {/* <CSSTransition
                            key={location.pathname}
                            classNames="fade"
                            timeout={300}
                        > */}
                            <BaseLayout>
                                <HomePage />
                            </BaseLayout>
                        {/* </CSSTransition> */}
                    {/* </TransitionGroup> */}
                </Suspense>
            ),
        },

        // // Auth
        // ...authRoutes,
        // ...authDemoRoutes,

        // // Dashboard
        // ...dashboardRoutes,

        // Main
        ...mainRoutes,

        // // Components
        // ...componentsRoutes,

        // No match
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
