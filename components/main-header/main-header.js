import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import HeaderBg from "@/components/main-header-bg/main-header-bg";
import NavLink from "../nav-link/nav-link";

export default function Header() {
  return (
    <>
      <HeaderBg />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="logo" width={500} height={500} priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
