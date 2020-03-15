import * as DATA from "./data";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import WordCloud from "./WordCloud";
import LineGraph from "./LineGraph";
import BoxPlot from "./BoxPlot";

const randColor = () => DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)];

export const RENDER_GRAPHS = () => {

  new WordCloud({
    title: "Who did you sell work to?",
    tag: ".graph-buyers",
    data: DATA.BUYERS_CLOUD,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    multiplier: 1,
    minSize: 12,
  }).render();

  new BarGraph({
    title: "How much of a priority was selling your work?",
    data: DATA.SELLLING_PRIORITY,
    color: randColor(),
    tag: ".graph-selling-priority",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "How much did you receive in grants?",
    data: DATA.GRANT_SUM,
    color: randColor(),
    tag: ".graph-grant-sum",
    width: 400,
    angle: true,
  }).render()

  new PieChart({
    title: "How many grants did you recieve?",
    data: DATA.GRANT_COUNT,
    color: randColor(),
    tag: ".graph-grant-count",
  }).render()

  new PieChart({
    title: "How many grants did you apply for?",
    data: DATA.GRANT_APP_COUNT,
    color: randColor(),
    tag: ".graph-grant-app-count",
  }).render()

  new PieChart({
    title: "How many residencies did you attend?",
    data: DATA.RESIDENCY_COUNT,
    color: randColor(),
    tag: ".graph-residency-count",
  }).render()

  new BarGraph({
    data: DATA.RESIDENCY_APP_COUNT,
    title: "How many residencies did you apply for?",
    color: randColor(),
    tag: ".graph-residency-app-count",
    width: 400,
  }).render()

  new BarGraph({
    data: DATA.RESIDENCY_PRIORITY,
    title: "How much of a priority were residencies / grants?",
    color: randColor(),
    tag: ".graph-residency-priority",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    data: DATA.LEGAL_PAPERWORK,
    title: "Were you given any legal paperwork by gallerists etc?",
    color: randColor(),
    tag: ".graph-legal-paperwork",
    width: 400,
    angle: true,
  }).render()

  new PieChart({
    title: "Did you have official gallery representation?",
    data: DATA.GALLERY_REPRESENTATION,
    tag: ".graph-gallery-representation",
    color: randColor(),
  }).render();

  new PieChart({
    title: "How many art events did you help organize?",
    data: DATA.EVENT_ORGANIZATION,
    tag: ".graph-event-organization",
    color: randColor(),
  }).render();

  new BarGraph({
    title: "How many group exhibitions were you in?",
    tag: ".graph-group-show-count",
    data: DATA.GROUP_EXHIBITIONS_COUNT,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
  }).render();

  new BarGraph({
    title: "What is your gender?",
    tag: ".graph-gender",
    data: DATA.GENDER,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
  }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-exhibition-contact",
    data: DATA.EXHIBITION_CONTACT,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    multiplier: 300,
    minSize: 12,
  }).render();

  new BarGraph({
    title: "How many social media re-posts / features?",
    tag: ".graph-socialmedia-features",
    data: DATA.SOCMEDIA_FEATURES,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
    angle: true,
  }).render();

  new BarGraph({
    title: "How many times was your work written about?",
    tag: ".graph-publication-count",
    data: DATA.PUBLICATION_COUNT,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
    // angle: true,
  }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-gallery-spaces",
    data: DATA.EXHIBITION_SPACES,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    multiplier: 1.75,
    minSize: 12,
  }).render();

  new BarGraph({
    title: "How much did you pay in application fees?",
    tag: ".graph-application-fees",
    data: DATA.APPLICATION_FEES,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
    angle: true,
  }).render();

  new BarGraph({
    title: "How shows did you apply for?",
    tag: ".graph-show-applications",
    data: DATA.SHOW_APPLICATIONS,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
  }).render();

  new PieChart({
    title: "How many solo exhibitions were you in?",
    tag: ".graph-solo-show-count",
    data: DATA.SOLO_EXHIBITIONS_COUNT,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
  }).render();


  new BarGraph({
    title: "How much of a priority was exhibiting your work?",
    tag: ".graph-exhibitions-priority",
    data: DATA.EXHIBITIONS_PRIORITY,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
    angle: true
  }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-keywords",
    data: DATA.KEYWORDS,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 8000,
  }).render();
  
  new BarGraph({
    title: "What is your age?",
    tag: ".graph-age",
    data: DATA.AGE,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
  }).render();
  
  new BarGraph({
    title: "What is your race / ethnicity?",
    tag: ".graph-race",
    data: DATA.RACE,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
    angle: true,
  }).render();
  
  new PieChart({
    title: "Do you identify as LGBTQ+?",
    tag: ".graph-orientation",
    data: DATA.ORIENTATION,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
  }).render();
  
  new PieChart({
    title: "How did you hear about the survey?",
    tag: ".graph-found-survey",
    data: DATA.FOUND_SURVEY,
    color: DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)],
    width: 400,
  }).render();

}