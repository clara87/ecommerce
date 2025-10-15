import AuthButtons from "./AuthButtons";
import CarButton from "./CarButton";
import DashboardButton from "./DashboardButton";
import NavbarBase from "./NavbarBase";
import Icon from "./Icon";
function Navbar({ isLogin, isAdmin, logOut, cartItem }) {
  return (
    <div className="bg-gray-900  w-full flex item-center   gap-4">
      <div className="bg-gray-900  w-full flex item-center  justify-start gap-4  py-2 px-2">
        <Icon />
      </div>
      <div className="bg-gray-900  w-full flex item-center  justify-end gap-4  py-2 px-2">
        <NavbarBase />
        <CarButton cartItem={cartItem} isLogin={isLogin} />
        <DashboardButton isAdmin={isAdmin} />
        <AuthButtons isLogin={isLogin} logOut={logOut} />
      </div>
    </div>
  );
}
export default Navbar;
