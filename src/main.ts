import { createApp,h } from "vue";
import App from "./App.vue";
import {store} from "./store/index";

import {
  create,
  NAvatar,
  NButton,
  NCard,
  NCarousel,
  NConfigProvider,
  NGrid,
  NGridItem,
  NH1,
  NIcon,
  NImage,
  NInputNumber,
  NLayout,
  NPageHeader,
  NSlider,
  NSpace,
  NText,
  NThing,
} from "naive-ui";

const naive = create({
  components: [
    NButton,
    NSpace,
    NConfigProvider,
    NLayout,
    NGrid,
    NGridItem,
    NH1,
    NText,
    NCard,
    NCarousel,
    NPageHeader,
    NAvatar,
    NSlider,
    NInputNumber,
    NThing,
    NIcon,
    NImage
  ],
});

import "@/utility/margin.css";
import "@/utility/padding.css";
import router from './router'
const app = createApp({
    render: ()=>h(App)
}).use(router);
app.use(naive);
app.use(store);
app.mount("#app");
