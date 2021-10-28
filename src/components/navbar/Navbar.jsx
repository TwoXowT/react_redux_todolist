import {AiOutlineHome, BsPeople, MdSportsFootball, MdWorkOutline, RiTodoFill} from "react-icons/all";
import './Navbar.scss';
import {useContext} from "react";
import Context from "react-redux/lib/components/Context";
import {useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";

const Navbar = () => {
    const [context, setContext] = useContext(Context);
    const category = useSelector(state => state)

    let activeCategoty = 'category-item'


    const items = category.category.map((element) =>{
        return(
            <div className={context === element ? ('categoty-item-active'):('category-item')}
                 onClick={()=>{setContext(element)} }>
                <p className='category-name'>
                    {element}
                </p>
            </div>
        ) })

    return(
        <div className='navbar-container'>
            <div className='navbar-header'>
                <div className='navbar-icon'>
                    <RiTodoFill color="#f9f9f9" fontSize="3em"> </RiTodoFill>
                </div>
                <div className='navbar-name-app'>Cool Todo</div>
            </div>
            <div className='navbar-category-paragraph'> Категории </div>

            <div className='navbar-category-container'>
                {items}

            </div>
            <div className='navbar-statistic-paragraph'>Данные</div>
            <div className='navbar-statistic-container'>

            </div>
        </div>
    )
}

export default Navbar;
