import * as DATA from "./data";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import WordCloud from "./WordCloud";
import LineGraph from "./LineGraph";
import BoxPlot from "./BoxPlot";

const randColor = () => DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)];

export const RENDER_GRAPHS = () => {

  new WordCloud({
    title: "",
    tag: ".social-media-negatives",
    data: DATA.SOCIAL_MEDIA_NEGATIVES,
    multiplier: 15,
    minSize: 14,
  }).render();

  new WordCloud({
    title: "",
    tag: ".social-media-positives",
    data: DATA.SOCIAL_MEDIA_POSITIVES,
    multiplier: 6,
    minSize: 14,
  }).render();

  new WordCloud({
    title: "",
    tag: ".sale-types-cloud",
    data: DATA.SALE_TYPES,
    // color: randColor(),
    multiplier: 3,
    minSize: 10,
  }).render();

  new WordCloud({
    title: "",
    tag: ".studio-visit-sources-cloud",
    data: DATA.STUDIO_VISIT_SOURCES,
    // color: randColor(),
    multiplier: 3.5,
    minSize: 10,
  }).render();

  new WordCloud({
    title: "Who visited your studiothis past year?",
    tag: ".studio-visitors-cloud",
    data: DATA.STUDIO_VISITORS,
    // color: randColor(),
    multiplier: 2,
    minSize: 10,
  }).render();

  // ------------------------ PIE CHARTS
  
  new PieChart({
    title: "Did you sell any work online?",
    data: DATA.ANY_ONLINE_SALES,
    color: randColor(),
    tag: ".any-online-sales",
  }).render()

  // ------------------------ BAR GRAPHS

  new BarGraph({
    title: "Did you maintain a studio website in 2019?",
    tag: ".personal-website",
    data: DATA.PERSONAL_WEBSITE,
    color: randColor(),
    angle: true,
    width: 400,
  }).render()

  new BarGraph({
    title: "How well did your primary platform serve you?",
    tag: ".social-media-service-rating",
    data: DATA.SOCIAL_MEDIA_SERVICE_RATING,
    color: randColor(),
    width: 400,
  }).render()
  
  new BarGraph({
    title: "Did you pay for soc.media promotion? Did it work?",
    tag: ".graph-paid-social-media",
    data: DATA.PAID_SOCIAL_MEDIA,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();
  
  new BarGraph({
    title: "Did you use Instagram more or less than last year?",
    tag: ".instagram-more-less",
    data: DATA.INSTAGRAM_MORE_LESS,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How often did you make Instagram studio posts?",
    tag: ".graph-instagram-frequency",
    data: DATA.INSTAGRAM_FREQUENCY,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "Did you use Facebook more or less than last year?",
    tag: ".graph-facebook-more-less",
    data: DATA.FACEBOOK_MORE_LESS,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How often did you make Facebook studio posts?",
    tag: ".graph-facebook-frequency",
    data: DATA.FACEBOOK_POST_FREQUENCY,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How much of a priority was soc. media use?",
    tag: ".graph-social-media-priority",
    data: DATA.SOC_MEDIA_PRIORITY,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "Rate treatment from collectors / buyers.",
    tag: ".graph-collector-treatment",
    data: DATA.COLLECTOR_TREATMENT,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How much work did you sell total?",
    tag: ".graph-sales-sum",
    data: DATA.SALES_SUM,
    color: randColor(),
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "What platforms did you sell work on?",
    tag: ".graph-sale-platforms",
    data: DATA.SALE_PLATFORMS,
    color: randColor(),
    angle: true,
    width: 800,
  }).render();

  new WordCloud({
    title: "What city / neighborhood do you live in?",
    tag: ".cities-neighborhoods-cloud",
    data: DATA.CITIES_NEIGHBORHOODS,
    color: randColor(),
    multiplier: 15,
    minSize: 8,
  }).render();

  new WordCloud({
    title: "What kinds of work did you sell?",
    tag: ".sales-mediums-cloud",
    data: DATA.SALES_MEDIUMS,
    color: randColor(),
    multiplier: 3,
    minSize: 12,
  }).render();

  new WordCloud({
    title: "Who did you sell work to?",
    tag: ".graph-buyers",
    data: DATA.BUYERS_CLOUD,
    color: randColor(),
    multiplier: 1.5,
    minSize: 12,
  }).render();

  new BarGraph({
    title: "How many studio visits did you have?",
    data: DATA.VISIT_COUNT,
    color: randColor(),
    tag: ".graph-visit-count",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "How much of a priority were studio visits?",
    data: DATA.VISIT_PRIORITY,
    color: randColor(),
    tag: ".graph-visit-priority",
    width: 400,
    angle: true,
  }).render()
  
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
    title: "How many shows did you apply for?",
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