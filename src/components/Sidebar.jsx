import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="sidebar w-75 h-[88vh]">
      <ul className="link-list flex flex-col p-5 justify-between h-full">
        <div className="flex flex-col gap-5">
          <Link to={"/"}>
            <li className="py-3 px-5 bg-indigo-700 text-indigo-100 rounded-2xl">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="py-3 px-5 bg-indigo-700 text-indigo-100 rounded-2xl">About</li>
          </Link>
        </div>
        <Link to={"/edit-values"}>
          <li className="py-3 px-5 bg-indigo-900 text-indigo-100 rounded-2xl">Edit options</li>
        </Link>
      </ul>
    </div>
  );
}
export default Sidebar;
