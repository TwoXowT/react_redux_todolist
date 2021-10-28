import {
    AiOutlineHome,
    AiOutlinePlusCircle,
    BsPeople,
    MdSportsFootball,
    MdWorkOutline,
    RiTodoFill
} from "react-icons/all";
import React, {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Context from "react-redux/lib/components/Context";
import './Navbar.scss';
import {addCategory} from "../../store/actionCreators/actionCreators";

const Navbar = () => {
    const [context, setContext] = useContext(Context);
    const [isShow, setIsShow]= useState(true)
    const [newCategory,setNewCategory] = useState(null)
    const dispatch = useDispatch();
    const category = useSelector(state => state)

    function handleKeyDown(e){
        if (e.key === 'Enter') {
            dispatch(addCategory(newCategory))
            setIsShow(!isShow)
            setNewCategory('')
        }
    }

    function handleChange(e) {
        setNewCategory(e.target.value)
    }
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
                {isShow ? (
                <div className='category-item' onClick={()=>{setIsShow(!isShow)}}>
                    <AiOutlinePlusCircle fontSize="1.7em"/>
                    <p className='category-name' >
                        Добавить
                    </p>
                </div>):
                    (<div className='category-item-add'
                  >
                        <input placeholder="Категория"
                               value={newCategory}
                               onChange={handleChange}
                               className='category-item-input'
                               onKeyDown={handleKeyDown}
                        />
                    </div>)
                }
            </div>
            {/*<div className='navbar-statistic-paragraph'>Данные</div>*/}
            {/*<div className='navbar-statistic-container'></div>*/}
        </div>
    )
}

export default Navbar;
