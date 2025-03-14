import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand"  href="#">Product Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="OrderDetailsPage" className="nav-link active" aria-current="page" href="#">
         Order Details
          </Link>
        </li>
        <li className="nav-item">
          <Link to="AddOrderPage" className="nav-link active" aria-current="page" href="#">
         Add Order
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
 