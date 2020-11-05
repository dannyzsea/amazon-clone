import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        //BEM convention for className
        <div className="header">
          <img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon"
          />  
        {/* search bar*/}
          <div className="header__search">
           <input type="text" className="header__searchInput" />
           <SearchIcon
          className="header__searchIcon"

           />
          </div>
        

        {/* navigation bar */}
        <div className="header__nav">
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Hello</span>
            <span className="header__navInnerLineTwo">Accounts & Lists </span>
        </div>
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Returns</span>
            <span className="header__navInnerLineTwo"> & Orders </span>
        </div>
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Try Prime</span>
        </div>
        
        </div>

        </div>
        
    )
}

export default Header
