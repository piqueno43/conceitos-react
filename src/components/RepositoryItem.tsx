interface IRepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}
export function RepositoryItem(props: IRepositoryItemProps) {
  return (
   <li>
    <strong>{props.repository.name}</strong><br />
    <p>{props.repository.description}</p>
    <a href={props.repository.html_url} target="_blank">
      Acessar Repositório
    </a>
  </li>
  )
}
