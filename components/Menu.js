import Link from "next/link";

const menu = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "Sphinx Dance",
    value: "/about",
  },
  {
    label: "Emin Durak",
    value: "/emin-durak",
  },
];

function Menu() {
  return (
    <nav className="navbar">
      {menu.map((item) => (
        <div key={item.label} className="navbar-item">
          <Link href={item.value}>{item.label}</Link>
        </div>
      ))}
    </nav>
  );
}

export default Menu;
