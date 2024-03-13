import { Link } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/contact`}>contact</Link>
          </li>
          <li>
            <Link to={`/posts/1`}>Posts</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
