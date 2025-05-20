import BottomButton from "../../AllCards/BottomButton";
import TitleHead from "../../Header/TitleHead";

const EditLanguages = () => {
  return (
    <>
      <TitleHead
        title={"Add Language"}
        desc2={"> Langauge "}
        link={"/settingd/edit-languages"}
        desc={"Add Langauge"}
      />
      <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Add Langauge
          </legend>
          <div className="grid grid-cols-2 gap-5">
            <div className=" col-span-2 md:col-span-1 ">
              <label
                className="block text-gray-700 text-md font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="shadow appearance-none border rounded w-full  bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
              />
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <label
                className="block text-gray-700 text-md font-semibold mb-2"
                htmlFor="name"
              >
                Slug
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="ar "
                className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
              />{" "}
              <h1 className="text-sm text-gray-300">Like: en,es,ar</h1>
            </div>

            <div className="flex items-center gap-4  col-span-2 md:col-span-1">
              <input type="checkbox" name="" id="active" className="h-5 w-5" />
              <label
                htmlFor="active"
                className="block text-gray-700 text-md font-semibold mb-2"
              >
                Active
              </label>
            </div>
            <div className="flex items-center gap-4  col-span-2 md:col-span-1">
              <input type="checkbox" name="" id="left" className="h-5 w-5" />
              <label
                htmlFor="left"
                className="block text-gray-700 text-md font-semibold mb-2"
              >
                Is RTL (Right To Left)
              </label>
            </div>
          </div>
        </fieldset>

        <BottomButton />
      </div>
    </>
  );
};

export default EditLanguages;
