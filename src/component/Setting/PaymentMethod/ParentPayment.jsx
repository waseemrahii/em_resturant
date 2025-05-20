import { Outlet } from "react-router-dom";
import PaymentMethod from "./PaymentMethod";

const ParentPayment = () => {
  return (
    <>
      <div>
        <PaymentMethod />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ParentPayment;
