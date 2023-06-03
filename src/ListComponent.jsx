import iconList from './assets/images/icon-list.svg'

export default function ListComponent() {
    return (
        <ul>
            <li>
              <img src={ iconList } alt="check mark" />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <img src={ iconList } alt="check mark" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
              <img src={ iconList } alt="check mark" />
              <p>And much more!</p>
            </li>
        </ul>
    )
}