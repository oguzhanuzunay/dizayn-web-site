import text from '@/constants/texts.js';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = ({lang}) => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>Next.js</p>

        <ul className={styles.links}>
          {text[lang].menuList.map((pageName) => (
            <Link
              key={pageName}
              href={`/${pageName.toLowerCase()}`}
            >
              <li>{pageName}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
