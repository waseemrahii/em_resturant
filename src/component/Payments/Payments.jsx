import ResturantPayments from "./ResturantPayments";
import RestaurantPayOut from "./RestaurantPayOut";
import RestaurantPayOutDetails from "./RestaurantPayOutDetails";
import DriverPayments from "./DriverPayments";
import DriverPayOut from "./DriverPayOut";
import DriverPayOutDetailes from "./DriverPayOutDetailes";
import WalletTransaction from "./WalletTransaction";
import PayOutRequest from "./PayOutRequest";
import DriverPayOutRequest from "./DriverPayOutRequest";
import TitleHead from "../Header/TitleHead";


const Payments = () => {
  return (
    <div>
      <TitleHead title="Payments" desc="Payments" />
      <div>
        <ResturantPayments />
      </div>
    </div>
  );
};

export default Payments;
