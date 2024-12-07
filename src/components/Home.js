import { Link } from 'react-router-dom';

export const Home = () => { //Named export, correct syntax
  return (
    <div>
      Home Page
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};


