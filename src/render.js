import * as DATA from "./data";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import WordCloud from "./WordCloud";
import LineGraph from "./LineGraph";

export const RENDER_GRAPHS = () => {
  // new BarGraph({
  //   title: "How many social media re-posts / features?",
  //   tag: ".graph-exhibition-contact",
  //   data: DATA.EXHIBITION_CONTACT,
  //   color: "pink",
  //   width: 800,
  //   angle: true,
  // }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-exhibition-contact",
    data: DATA.EXHIBITION_CONTACT,
    // color: "pink",
    multiplier: 200,
    minSize: 12,
  }).render();

  new BarGraph({
    title: "How many social media re-posts / features?",
    tag: ".graph-socialmedia-features",
    data: DATA.SOCMEDIA_FEATURES,
    // color: "#E0BBE4",
    width: 400,
    angle: true,
  }).render();

  new BarGraph({
    title: "How many times was your work written about?",
    tag: ".graph-publication-count",
    data: DATA.PUBLICATION_COUNT,
    // color: "#E0BBE4",
    width: 400,
    // angle: true,
  }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-gallery-spaces",
    data: DATA.EXHIBITION_SPACES,
    color: "pink",
    multiplier: 2,
    minSize: 12,
  }).render();

  new BarGraph({
    title: "How much did you pay in application fees?",
    tag: ".graph-application-fees",
    data: DATA.APPLICATION_FEES,
    // color: "#E0BBE4",
    width: 400,
    angle: true,
  }).render();

  new BarGraph({
    title: "How shows did you apply for?",
    tag: ".graph-show-applications",
    data: DATA.SHOW_APPLICATIONS,
    // color: "#E0BBE4",
    width: 400,
  }).render();

  new PieChart({
    title: "How many solo exhibitions were you in?",
    tag: ".graph-solo-show-count",
    data: DATA.SOLO_EXHIBITIONS_COUNT,
    // color: "#E0BBE4",
    width: 400,
  }).render();

  new PieChart({
    title: "How many group exhibitions were you in?",
    tag: ".graph-group-show-count",
    data: DATA.GROUP_EXHIBITIONS_COUNT,
    // color: "#E0BBE4",
    width: 400,
  }).render();

  new BarGraph({
    title: "How much of a priority was exhibiting your work?",
    tag: ".graph-exhibitions-priority",
    data: DATA.EXHIBITIONS_PRIORITY,
    // color: "#E0BBE4",
    width: 400,
    angle: true
  }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-keywords",
    data: DATA.KEYWORDS,
    color: "#E0BBE4",
    width: 8000,
  }).render();

  new LineGraph({
    title: "What is your gender?",
    tag: ".graph-gender",
    data: DATA.GENDER,
    color: "#E0BBE4",
    width: 400,
  }).render();
  
  new BarGraph({
    title: "What is your age?",
    tag: ".graph-age",
    data: DATA.AGE,
    color: "#f2cbbb",
    width: 400,
  }).render();
  
  new BarGraph({
    title: "What is your race / ethnicity?",
    tag: ".graph-race",
    data: DATA.RACE,
    color: "#8da290",
    width: 400,
    angle: true,
  }).render();
  
  new PieChart({
    title: "Do you identify as LGBTQ+?",
    tag: ".graph-orientation",
    data: DATA.ORIENTATION,
    color: "#dee2d9",
    width: 400,
  }).render();
  
  new PieChart({
    title: "How did you hear about the survey?",
    tag: ".graph-found-survey",
    data: DATA.FOUND_SURVEY,
    color: "#8da290",
    width: 400,
  }).render();

  
}