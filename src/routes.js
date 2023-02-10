import HomeComponent from "./pages/home-component.vue";
import ProductComponent from "./pages/product-component.vue";
export default [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductComponent,
    props: true,
  },
];
