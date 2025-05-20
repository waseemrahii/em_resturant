import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography"; // Import Typography for text styling
import FormHead from "../../Forms/FormHead";

const ServicesForm = () => {
  return (
    <>
      <fieldset className="max-w-4xl my-4 mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
        <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
          Services
        </legend>
        <div className="flex flex-col mt-3">
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                <span className="text-[.7rem] md:text-[.9rem]">Free Wi-Fi</span>{" "}
              </Typography>
            } // Increased text size
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                <span className="text-[.7rem] md:text-[.9rem]">
                  Good for Breakfast
                </span>{" "}
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                <span className="text-[.7rem] md:text-[.9rem]">
                  Good for Dinner
                </span>{" "}
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                <span className="text-[.7rem] md:text-[.9rem]">
                  Good for Lunch
                </span>{" "}
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                <span className="text-[.7rem] md:text-[.9rem]">Live Music</span>{" "}
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                {" "}
                <span className="text-[.7rem] md:text-[.9rem]">
                  Outdoor Seating
                </span>
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                {" "}
                <span className="text-[.7rem] md:text-[.9rem]">
                  Takes Reservation
                </span>
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="h6">
                {" "}
                <span className="text-[.7rem] md:text-[.9rem]">
                  Vegetarian Friendly
                </span>
              </Typography>
            }
          />
        </div>
      </fieldset>
    </>
  );
};

export default ServicesForm;
