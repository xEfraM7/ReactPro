import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-LazyLoad/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-LazyLoad/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../01-LazyLoad/layout/LazyLayout"));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-LazyLoad/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "lazyload/*",
    Component: LazyLayout,
    name: "Lazy-1",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No-Lazy",
  }
];
