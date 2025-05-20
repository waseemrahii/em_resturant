import BottomButton from "../../AllCards/BottomButton";
import TitleHead from "../../Header/TitleHead";

const CreateTax = () => {
  return (
    <>
      <TitleHead
        title={"Taxes"}
        desc2={"> Taxes"}
        link={"/settings/create-tax"}
        desc={"Create Taxes"}
      />
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Tax Details
          </legend>
          <div className="bg-white p-4 grid grid-cols-1 gap-4 md:grid-cols-2  ">
            <div>
              <label
                htmlFor="deliveryCharges"
                className="block text-gray-700 font-semibold text-[1rem] my-3"
              >
                Tax Title
              </label>
              <input
                type="number"
                id="deliveryCharges"
                className="w-full p-2 bg-[#F5F5F5] border rounded"
              />
              <label htmlFor="" className="text-[.8rem] text-gray-400">
                Insert Tax Title
              </label>
            </div>
            <div>
              <label
                htmlFor="deliveryCharges"
                className="block text-gray-700 font-semibold text-[1rem] my-3"
              >
                Country
              </label>
              <select
                name="country"
                id="counrty"
                className="w-full p-2 bg-[#F5F5F5] border rounded"
              >
                <option value="country">Pakistan </option>
                <option value="country">UAE </option>
              </select>
              <label htmlFor="" className="text-[.8rem] text-gray-400">
                Select Country
              </label>
            </div>
            <div>
              <label
                htmlFor="deliveryCharges"
                className="block text-gray-700 font-semibold text-[1rem] my-3"
              >
                Tax Type
              </label>
              <select
                name="country"
                id="counrty"
                className="w-full p-2 bg-[#F5F5F5] border rounded"
              >
                <option value="country">Fix</option>
                <option value="country">Percentage </option>
              </select>
              <label htmlFor="" className="text-[.8rem] text-gray-400">
                Select Tax Type
              </label>
            </div>
            <div>
              <label
                htmlFor="minDeliveryKm"
                className="block text-gray-700 font-semibold text-[1rem] my-3"
              >
                Tax Amount
              </label>
              <input
                type="number"
                id="minDeliveryKm"
                defaultValue={3}
                className="w-full p-2 bg-[#F5F5F5] border rounded"
              />
              <label htmlFor="" className="text-[.8rem] text-gray-400">
                Insert Tax Amount
              </label>
            </div>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default CreateTax;
