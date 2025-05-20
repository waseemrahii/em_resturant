import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import ButtonHead from "../Header/ButtonHead";
import CategoryButtons from "./CategoryButtons";

const CreateCategories = () => {
  return (
    <div className="mx-5 my-3 shadow-md hover:shadow-lg">
      <CategoryButtons/>
      <ButtonHead tab1="Categories Information" tab2="Review Attribute" link="/review-attribute"/>
      
    </div>
  );
};

export default CreateCategories;
