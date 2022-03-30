export function RepositoryItem(props) {
  return(
    <li>
          <strong>{props.repository?.name ?? 'default'}</strong>
          <p>{props.repository?.description ?? 'Lorem ipsum dolor'}</p>

          
          <a href={props.repository?.link ?? "error"}>
            Acessar Repositório
          </a>
        </li>
  )
}