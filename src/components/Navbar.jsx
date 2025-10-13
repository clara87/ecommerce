
import AuthButtons from "./AuthButtons"
import CarButton from "./CarButton"
import DashboardButton from "./DashboardButton"
function Navbar({isLogin,isAdmin, logOut, cartItem}) {
    return (
        <div className="bg-gray-900 flex item-center  flex-wrap gap-4">    
            <CarButton cartItem={cartItem} isLogin={isLogin}/>
            <DashboardButton isAdmin={isAdmin}/>     
            <AuthButtons isLogin={isLogin}  logOut={logOut}/>
        </div>
    )
}
export default Navbar