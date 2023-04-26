import { lazy, Suspense } from 'react';

export const lazyLoadRoutes = (componentName: string) => {
    const LazyElement = lazy(() => componentName === "App" ? import(`./${componentName}`) : import(`./pages/${componentName}`));
    const Loading = lazy(() => import(`./components/video/Loading`));

    return (
        <Suspense fallback={<Loading />}>
            <LazyElement />
        </Suspense>
    );
}