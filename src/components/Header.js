import logo from '../logo.png'

const Header = () => {

    return(
        <div className='absolute z-10'>
            <img className="w-64 px-8 py-2 bg-gradient-to-b from-black" src={logo} alt="logo" />
        </div>
    )
}
export default Header