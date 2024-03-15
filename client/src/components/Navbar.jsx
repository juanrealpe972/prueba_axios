import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800 flex justify-between px-5 py-2">
      <Link to="/" className="text-white font-bold">
        <h1>API REST SQL</h1>
      </Link>

      <ul className="flex gap-x-2">
        <li>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/new"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
          >
            Create task
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
