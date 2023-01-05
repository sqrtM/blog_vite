import { ProjectComponent } from '../components/ProjectComponent';
import './styles/Projects.scss'


export default function Projects() {
  return (
    <div id='project_list'>
      <ProjectComponent 
          title="react-rpg"
          githubLink="https://github.com/sqrtM/react-rpg"
          iconLink="https://raw.githubusercontent.com/sqrtM/react-rpg/master/public/at-icon.png"
          description="browser-based rougelike rendered exclusively using HTML elements and styled with (S)CSS. the first project i ever made in javascript"
      />
      <ProjectComponent 
          title="arturia minilab mkii step sequencer — java edition"
          githubLink="https://github.com/sqrtM/MkiiStepSequencer_JavaEdition"
          iconLink="https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png"
          description="a much-needed re-design of my python step sequencer"
      />
      <ProjectComponent 
          title="lickipedia"
          githubLink="https://github.com/sqrtM/lickipedia-ideo"
          iconLink="https://cdn11.bigcommerce.com/s-hii7479o/images/stencil/original/products/9519/25644/musical_notes__43735.1523639135.png?c=2"
          description="a twitter-style approach to sharing and saving your favorite licks."
      />
      <ProjectComponent 
          title="arturia minilab mkii step sequencer"
          githubLink="https://github.com/sqrtM/arturia_mkii_step_sequencer"
          iconLink="http://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
          description="standalone step sequencer for the minilab mkii, written in python."
      />
      <ProjectComponent 
          title="blog (back)"
          githubLink="https://github.com/sqrtM/blog_back"
          iconLink="/src/assets/cowboy-icon.png"
          description="the backend for the blog you're reading right now (java)"
      />
      <ProjectComponent 
          title="blog (front)"
          githubLink="https://github.com/sqrtM/blog_vite"
          iconLink="/src/assets/cowboy-icon.png"
          description="the frontend for the blog you're reading right now (typescript)"
      />
    </div>
  );
}
