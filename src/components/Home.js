import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Home Page
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
}

export default Home;
