import notebook from "../../assets/labnotebook.png";
import moviesearch from "../../assets/movie-search.png";
import weather from "../../assets/weather-dashboard.png";
import planner from "../../assets/daily-planer.png";
import notetaker from "../../assets/notetaker.png";
import codequiz from "../../assets/codequiz.png";
import oink from "../../assets/oink.png";
import techblog from "../../assets/tech_blog.jpeg";



const projectData = [
    {
      id: 1,
      image_path: notebook,
      title: "Virtual Lab Notebook",
      description: "SQL/Node/Formidable",
      repo_url: "https://github.com/emsaw721/lab-rats",
      deployed_url: "https://obscure-lake-69191.herokuapp.com"
    },
    {
      id: 2,
      image_path: moviesearch,
      title: "Movie Search App",
      description: "API/Tailwindcss/Javascript",
      repo_url: "https://github.com/deadseal001/movie-search-app",
      deployed_url: "https://deadseal001.github.io/movie-search-app/"
    },
    {
      id: 3,
      image_path: oink,
      title: "OINK The Budget management app",
      description: "MERN/Apollo Graphql.",
      repo_url: "https://github.com/emsaw721/stacks-on-stacks",
      deployed_url: "https://guarded-gorge-65763.herokuapp.com/"
    },
    {
      id: 4,
      image_path: weather,
      title: "Weather DashBorad",
      description: "API/Javascript",
      repo_url: "https://github.com/deadseal001/weather-dashboard",
      deployed_url: "https://deadseal001.github.io/weather-dashboard/"
    },
    {
      id: 5,
      image_path: planner,
      title: "Daily Planer",
      description: "Javascript/moment",
      repo_url: "https://github.com/deadseal001/daily-planner",
      deployed_url: "https://deadseal001.github.io/daily-planner/"
    },
    {
      id: 6,
      image_path: notetaker,
      title: "Notetaker",
      description: "Javascript/Heroku.",
      repo_url: "https://github.com/deadseal001/Note-Taker",
      deployed_url: "https://note-taker-wl.herokuapp.com/"
    },
    {
      id: 7,
      image_path: codequiz,
      title: "JavaScript Quiz",
      description: "JavaScript.",
      repo_url: "https://github.com/deadseal001/code-quizg",
      deployed_url: "https://deadseal001.github.io/code-quiz/"
    },
    {
      id: 8,
      image_path: techblog,
      title: "Tech Blog",
      description: "MySQL/handlebars.",
      repo_url: "https://github.com/deadseal001/Tech_Blog",
      deployed_url: "https://tech-blog-wl.herokuapp.com/"
    }

];

export default projectData;