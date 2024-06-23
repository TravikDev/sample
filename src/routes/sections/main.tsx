import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { BaseLayout } from '../../app/layouts/baseLayout';
// import { SimpleLayout } from 'src/layouts/simple';

// import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------


// const FaqsPage = lazy(() => import('src/pages/faqs'));
const AboutPage = lazy(() => import('../../pages/about-us/helmet'));
// const ContactPage = lazy(() => import('src/pages/contact-us'));
// const PricingPage = lazy(() => import('src/pages/pricing'));
// const PaymentPage = lazy(() => import('src/pages/payment'));
// const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
// const MaintenancePage = lazy(() => import('src/pages/maintenance'));
// Product
// const ProductListPage = lazy(() => import('src/pages/product/list'));
// const ProductDetailsPage = lazy(() => import('src/pages/product/details'));
// const ProductCheckoutPage = lazy(() => import('src/pages/product/checkout'));
// Blog
// const PostListPage = lazy(() => import('src/pages/post/list'));
// const PostDetailsPage = lazy(() => import('src/pages/post/details'));
// Error
// const Page500 = lazy(() => import('src/pages/error/500'));
// const Page403 = lazy(() => import('src/pages/error/403'));
// const Page404 = lazy(() => import('src/pages/error/404'));
// Blank
// const BlankPage = lazy(() => import('src/pages/blank'));

// ----------------------------------------------------------------------

export const mainRoutes = [
    {
        element: (
            // <Suspense fallback={<SplashScreen />}>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        ),
        children: [
            {
                element: (
                    <BaseLayout>
                        <Outlet />
                    </BaseLayout>
                ),
                children: [
                    {
                        path: 'about-us',
                        element: <AboutPage />,
                    },
                    // {
                    //     path: 'post',
                    //     children: [
                    //         { element: <PostListPage />, index: true },
                    //         { path: 'list', element: <PostListPage /> },
                    //         { path: ':title', element: <PostDetailsPage /> },
                    //     ],
                    // },
                ],
            },
            // {
            //     path: 'pricing',
            //     element: (
            //         <SimpleLayout>
            //             <PricingPage />
            //         </SimpleLayout>
            //     ),
            // },
            // {
            //     path: 'payment',
            //     element: (
            //         <SimpleLayout>
            //             <PaymentPage />
            //         </SimpleLayout>
            //     ),
            // },
            // {
            //     path: 'coming-soon',
            //     element: (
            //         <SimpleLayout content={{ compact: true }}>
            //             <ComingSoonPage />
            //         </SimpleLayout>
            //     ),
            // },
            // {
            //     path: 'maintenance',
            //     element: (
            //         <SimpleLayout content={{ compact: true }}>
            //             <MaintenancePage />
            //         </SimpleLayout>
            //     ),
            // },
            // { path: '500', element: <Page500 /> },
            // { path: '404', element: <Page404 /> },
            // { path: '403', element: <Page403 /> },
        ],
    },
];
