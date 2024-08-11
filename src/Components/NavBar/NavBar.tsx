import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export const NavBar = () => {

    return (
      <nav className="bg-[#F8F9FA]">
      <div className="container mx-auto flex justify-between  items-center p-6">
        <div className="flex items-center space-x-8">
          <div className="logo">
            <img src="../src/assets/logo/freshcart-logo.svg" alt="Logo" />
          </div>
          <div className="list">
            <ul className="flex space-x-6 text-center" >
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Carts</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Category</a></li>

            </ul>
          </div>
        </div>
        <div className="social-Media flex space-x-2">
          <ul className="flex flex-row space-x-8 mx-6">
            <li>
              <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>

          <div className="login flex space-x-3">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </nav>
    
    )
}