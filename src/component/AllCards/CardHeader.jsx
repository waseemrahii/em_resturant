import { MdAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const CardHeader = ({ menulink, listmenu, createmenu, createlink }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4 py-2 rounded ">
      <Link
        to={menulink}
        className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2"
      >
        <TfiMenuAlt />
        {listmenu}
      </Link>
      <Link to={createlink}>
        <button className="bg-white hover:bg-primary-900 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center">
          <MdAdd className="text-xl font-bold" /> {createmenu}
        </button>
      </Link>
    </div>
  );
};

export default CardHeader;
