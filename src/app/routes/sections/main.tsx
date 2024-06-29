import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { BaseLayout } from '@/app/layouts/baseLayout';
// import { SimpleLayout } from 'src/layouts/simple';

// import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------


const AboutPage = lazy(() => import('@/pages/about-us/helmet'));
const TodoPage = lazy(() => import('@/pages/todo/helmet'));
const PostsPage = lazy(() => import('@/pages/posts/helmet'));

// Posts
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
                <BaseLayout>
                    <Outlet />
                </BaseLayout>
            </Suspense>
        ),

        children: [
            {
                path: 'about-us',
                element: <AboutPage />,
            },
            {
                path: 'posts',
                element: <PostsPage />,
            },
            {
                path: 'todo',
                element: <TodoPage />,
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
    // 
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

];