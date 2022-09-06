import logo from "../../img/android-icon-192x192.png"
import logoText from "../../img/Screenshot 2022-08-30 163311.jpg"
import { SearchBar } from "../../features/SearchBar/SearchBar"

export const Header = () => {
    return (
        <header className="App-header">
          <div className='App-header-logo'>
            <a href="#top" className='App-header-logo'>
              <img src={logo} alt="" className='App-header-logo-img'/>
              <img src={logoText} alt="" className='App-header-logo-textImg' />
            </a>
            
          </div>
          <SearchBar />
      </header>
    )
}