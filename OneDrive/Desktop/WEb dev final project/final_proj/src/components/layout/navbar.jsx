import {Link} from "react-router-dom";
import {PropTypes} from 'prop-types';
import logo from "../../images/logo.png"
function Navbar({title}) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
            <div className="flex-none pr-2 mx-2">
                <img src ={logo} className="inline pr-5 text-3xl py-5" height = "75px" width = "75px"/>
                <Link to= '/' className="text-lg font-bold">
                    {title}
                </Link>
            </div>

            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to=  "/" className = "btn btn-ghost btn-sm rounded-btn">
                        Home
                    </Link> 
                    <Link to=  "/about" className = "btn btn-ghost btn-sm rounded-btn">
                        about
                    </Link> 
                </div>
            </div>

        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title : "Pokemon Finder",

}

Navbar.propTypes = {
    title: PropTypes.string,
}
export default Navbar