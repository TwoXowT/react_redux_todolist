import {AiOutlineHome, BsPeople, MdSportsFootball, MdWorkOutline, RiTodoFill} from "react-icons/all";
import './Navbar.scss';

const Navbar = () => {

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
                <div className='category-item'>
                    <AiOutlineHome color='#f9f9f9' fontSize='2em'/>
                    <p>Дом</p>
                </div>

                <div className='category-item'>
                    <BsPeople color='#f9f9f9' fontSize='2em'/>
                    <p>Семья</p>
                </div>
                <div className='category-item'>
                    <MdWorkOutline color='#f9f9f9' fontSize='2em'/>
                    <p>Работа</p>
                </div>
                <div className='category-item'>
                    <MdSportsFootball color='#f9f9f9' fontSize='2em'/>
                    <p>Спорт</p>
                </div>
            </div>
            <div className='navbar-statistic-paragraph'>Данные</div>
            <div className='navbar-statistic-container'>

            </div>
        </div>
    )
}

export default Navbar;