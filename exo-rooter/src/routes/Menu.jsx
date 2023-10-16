import { NavLink, Outlet } from "react-router-dom";



function Menu() {
  return (
    <div >
      <header class="navbar navbar-expand-lg bg-body-tertiary">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/form">Formulaire</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </header>
      <Outlet />
      <p>Mon pied de page</p>
    </div>
  );
}

export default Menu