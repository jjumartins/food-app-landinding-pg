import styles from './style.module.css'
import Logo from '../../assets/Logo.svg'

export const Header = () => {
  return (<>
    <header>
      <div className='container'>
        <div className={styles.logoBox}>
        <img src={Logo} alt="Logo Food App" />
        </div>
      </div>
    </header>
  </>)
}