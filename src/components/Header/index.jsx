import Logo from '../../assets/Logo.svg'

export const Header = () => {
  return (<>
    <header>
      <div className='container'>
        <img src={Logo} alt="Logo Food App" />
      </div>
    </header>
  </>)
}