import "./styles/main.pcss";
import skillsFunc from "./scripts/skills";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
document.addEventListener('DOMContentLoaded', function () {
  skillsFunc()
});
