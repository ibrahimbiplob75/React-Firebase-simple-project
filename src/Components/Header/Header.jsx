import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../provider/AuthContext";



const Header = () => {
    const { signInUser, logout } = useContext(Context);
    console.log(signInUser)
     const { user } = useContext(Context);

     const handleLogout=()=>{
        logout()
          .then(() => {
            
          })
          .catch((error) => {
            alert("Have some error",error)
          });
     }

    return (
      <div>
        <div className="navbar bg-base-100 justify-around shadow-2xl mt-6">
          <div className="">
            <a className="btn btn-ghost normal-case text-xl">
              {user ?
                user?.email :"Ibrahim"
                
                }
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="navbar-center  ">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/login">LogIn</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              {user ? (
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={"../../assets/image/DU profile.png"} />
                  </div>
                </label>
              ) : (
                ""
              )}

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;