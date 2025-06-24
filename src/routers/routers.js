import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/Cart/Cart'))
    },
    {
        path: '/product/:id',
        component: lazy(() => import('@pages/DetailProduct'))
    },
    {
        path: '/about-us',
        component: lazy(() => import('@pages/AboutUs'))
    },
    {
        path: '/order',
        component: lazy(() => import('@/pages/Orders'))
    }
];
export default routers;
