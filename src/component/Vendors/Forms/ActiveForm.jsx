import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography"; // Import Typography for text styling
import FormHead from "../../Forms/FormHead";

const ActiveForm = () => {
  return (
    <>
      <fieldset className="max-w-4xl mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
        <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
          Restaurant (Activate/Deactivate)
        </legend>

        <div className="p-2 flex flex-col ">
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                <span className="text-[.8rem] md:text-[1rem]">Active</span>
              </Typography>
            } // Increased text size
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                <span className="text-[.8rem] md:text-[1rem]">
                  Rest Restaurant Password ?
                </span>
              </Typography>
            } // Increased text size
          />
          <h1 className="text-[.8rem] text-gray-400">
            Note : If you checked, "Reset restaurant password?" and clicked on
            "Send mail" button, it will send an email to restaurant's email
            address. From where restaurant can reset his/her password using
            given link in an email. Please check your spam folder if you not get
            mail in inbox.
          </h1>
          <div className="my-3">
            <button className="text-[1rem] font-semibold text-white px-3 py-2 rounded-md hover:bg-primary-700 bg-primary-900">
              Send Mail
            </button>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ActiveForm;
