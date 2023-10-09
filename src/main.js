import { createApp } from "vue";
import "maz-ui/css/main.css";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";
import myTailwindTheme from "../tailwind-theme";
import DropdownSelect from "./components/DropdownSelect.vue";
import MazBtn from "maz-ui/components/MazBtn";
import MazInput from "maz-ui/components/MazInput";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";

const app = createApp(App);
app.use(
  plugin,
  defaultConfig({
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
app.component("MazBtn", MazBtn);
app.component("MazInput", MazInput);
app.component("MazPhoneNumberInput", MazPhoneNumberInput);
app.mount("#app");
