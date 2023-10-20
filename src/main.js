import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";
import myTailwindTheme from "../tailwind-theme";
import DropdownSelect from "./components/DropdownSelect.vue";
// import { genesisIcons } from "@formkit/icons";

const app = createApp(App);
app.use(
  plugin,
  defaultConfig({
    // icons: {
    //   ...genesisIcons,
    // },

    inputs: {
      otp: createInput(DropdownSelect, {
        props: ["options"],
      }),
    },
    config: {
      classes: generateClasses(myTailwindTheme),
    },
  })
);
app.use(router);
app.mount("#app");
