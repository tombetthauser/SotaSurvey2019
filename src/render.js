import { FOUND_SURVEY, RACE, GENDER, AGE, ORIENTATION, KEYWORDS } from "./data";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";

export const RENDER_GRAPHS = () => {
  new BarGraph({
    title: "What words describe your work?",
    tag: ".graph-keywords",
    data: KEYWORDS,
    color: "#E0BBE4",
    width: 8000,
  }).render();

  new BarGraph({
    title: "What is your gender?",
    tag: ".graph-gender",
    data: GENDER,
    color: "#E0BBE4",
    width: 400,
  }).render();
  
  new BarGraph({
    title: "What is your age?",
    tag: ".graph-age",
    data: AGE,
    color: "#f2cbbb",
    width: 400,
  }).render();
  
  new BarGraph({
    title: "What is your race / ethnicity?",
    tag: ".graph-race",
    data: RACE,
    color: "#8da290",
    width: 400,
    angle: true,
  }).render();
  
  new PieChart({
    title: "Do you identify as LGBTQ+?",
    tag: ".graph-orientation",
    data: ORIENTATION,
    color: "#dee2d9",
    width: 400,
  }).render();
  
  new PieChart({
    title: "How did you hear about the survey?",
    tag: ".graph-found-survey",
    data: FOUND_SURVEY,
    color: "#8da290",
    width: 400,
  }).render();
}