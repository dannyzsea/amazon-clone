import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Header() {
    return (
        //BEM convention for className
        <div className="header">
        
<ViewHeadlineOutlinedIcon className="header__iconm"/>

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
             <ExpandMoreOutlinedIcon className="header__navInnerLineTwoIcon"/>
        </div>
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Returns</span>
            <span className="header__navInnerLineTwo"> & Orders </span>
            <ExpandMoreOutlinedIcon className="header__navInnerLineTwoIcon"/>
        </div>
        <div className="header__navInner">
            <span className="header__navInnerLineONe"> Try Prime</span>
        </div>
        <div className="header__navInner">
            <ShoppingCartOutlinedIcon className="header__navInnerCart"/>
        </div>
        </div>

        </div>
        
    )
}

export default Header
