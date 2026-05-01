import styles from "./css/Header.module.css";

function Header() {
  return (
    <header className={styles["header"]}>
      <h2 className="">e-commerce</h2>
      <ul className="">
        <li>
          <a href="" className="">
            Home
          </a>
        </li>
        <li>
          <a href="" className="">
            Orders
          </a>
        </li>
        <li>
          <a href="" className="">
            Products
          </a>
          <div className="">
            <ul className="">
              <li className="">
                <a href="" className="">
                  Men
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  Women
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  Kids
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="" className="">
            Sign up / Log in
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
