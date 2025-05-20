import { GrCurrency } from "react-icons/gr";
import BottomButton from "../../AllCards/BottomButton";
import TitleHead from "../../Header/TitleHead";
// import BottomButton from "../../../AllCards/DashboardCards/BottomButton";

const CreateCurrencies = () => {
  return (
    <>
      <TitleHead
        title={"Currencies List"}
        desc={" Currencies List"}
        desc2={"> Currency Create"}
        link={"/create-currencies"}
      />
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
            <div className="flex items-center gap-1">
              <GrCurrency className="text-md" />
              <h1 className="uppercase">Currencies</h1>
            </div>
          </legend>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-gray-700 text-[1rem] font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                defaultValue={""}
                type="text"
                className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-gray-700 text-[1rem] font-semibold mb-2"
                htmlFor="title"
              >
                Code
              </label>
              <input
                id="title"
                name="title"
                defaultValue=""
                type="text"
                className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-gray-700 text-[1rem] font-semibold mb-2"
                htmlFor="title"
              >
                Symbol
              </label>
              <input
                id="title"
                name="title"
                defaultValue=""
                type="text"
                className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-gray-700 text-[1rem] font-semibold mb-2"
                htmlFor="title"
              >
                Digit After Decimal Point
              </label>
              <input
                id="number"
                name="number"
                defaultValue={0}
                type="number"
                className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
              />

              <h1 className="text-[.8rem] text-gray-400">
                Enter Digit After Decimal Point ( Ex: insert 2 then it shows
                0.00 amount)
              </h1>
            </div>

            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-4  col-span-2 md:col-span-1">
                <input type="checkbox" name="" id="offer" className="h-5 w-5" />
                <label
                  htmlFor="offer"
                  className="block text-gray-700 text-[1rem] font-semibold mb-2"
                >
                  Symbal At Right
                </label>
              </div>
              <div className="flex items-center gap-4  col-span-2 md:col-span-1">
                <input
                  type="checkbox"
                  name=""
                  id="active"
                  className="h-5 w-5"
                />
                <label
                  htmlFor="active"
                  className="block text-gray-700 text-[1rem] font-semibold mb-2"
                >
                  Active
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default CreateCurrencies;
