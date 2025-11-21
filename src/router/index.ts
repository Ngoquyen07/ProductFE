import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import ProductList  from "@/pages/ProductList.vue";
import ProductCreate  from "@/pages/ProductCreate.vue";
import ProductEdit  from "@/pages/ProductEdit.vue";

const routes : RouteRecordRaw[] = [
    { path: "/", redirect: "/products" },
    { path: "/products", name: "products", component: ProductList },
    { path: "/products/create", name: "product-create", component: ProductCreate },
    { path: "/products/:id/edit", name: "product-edit", component: ProductEdit },
];
const router = createRouter({
    history : createWebHistory(),
    routes,
});
export default router;