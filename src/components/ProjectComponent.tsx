import './styles/ProjectComponent.scss';


export interface IProjectComponentProps {
  title: string;
  githubLink: string;
  iconLink: string;
  description: string;
}

export function ProjectComponent(props: IProjectComponentProps) {

  return (
    <div className="project_container">
      <p className='project_title'>
      <a href={props.githubLink}>{props.title}</a>
      </p>
      <div className='link_and_description'>
        <a href={props.githubLink}>
          <img src={props.iconLink} alt="@" className='project_icon' />
        </a>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}
