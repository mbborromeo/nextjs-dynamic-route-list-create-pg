// import "./style.css";
// import { Menu } from "@headlessui/react";

const NavBar = () => {
  return (
    <nav>
      <div className="project-dropdown show-on-desktop">
        <select name="website" id="website">
          <option value="ether">Ether Photo Studio</option>
        </select>
      </div>

      <ul>
        <li>
          <a href="#">
            <span className="icon icon-home"></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon icon-website"></span>
            <span>Website</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon icon-crm"></span>
            <span>CRM</span>
          </a>
        </li>
        <li className="on">
          <a href="#">
            <span className="icon icon-marketing"></span>
            <span>Marketing</span>
          </a>
        </li>
        <li className="show-on-desktop">
          <a href="#">
            <span className="icon icon-invoices"></span>
            <span>Invoices</span>
          </a>
        </li>
        <li className="show-on-desktop">
          <a href="#">
            <span className="icon icon-money"></span>
            <span>Money</span>
          </a>
        </li>
        <li className="show-on-desktop make-last-item">
          <a href="#">
            <span className="icon icon-business"></span>
            <span>Business</span>
          </a>
        </li>
        <li className="hide-on-desktop">
          <a href="#">
            <span className="icon icon-more"></span>
            <span>More</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
