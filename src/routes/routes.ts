import { lazy, LazyExoticComponent } from 'react';

import { NoLazy } from '../01-lazyLoad/pages/NoLazy';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ '../01-lazyLoad/pages/LazyPage1')
);

const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ '../01-lazyLoad/pages/LazyPage2')
);

const LazyLayout = lazy(() => import('../01-lazyLoad/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: '/lazyLayout/',
    path: '/lazyLayout/*',
    Component: LazyLayout,
    name: 'LazyLayout',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: NoLazy,
    name: 'lazy3',
  },
];

export const routesNested: Route[] = [
  {
    to: 'lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'lazy1',
  },
  {
    to: 'lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'lazy2',
  },
  {
    to: 'ShoppingPage',
    path: 'shoppingPage',
    Component: ShoppingPage,
    name: 'Shopping page',
  },
];
