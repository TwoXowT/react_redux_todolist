import {useEffect, useState} from "react";
import {AiOutlineCalendar, AiOutlineClockCircle} from "react-icons/all";
import './TimeData.scss'


const TimeData= () => {
    const [time, setTime]= useState(new Date().toLocaleTimeString())
    const [date, setDate] = useState(new Date())
    function tick(){
        setTime(new Date().toLocaleTimeString())
    }
    var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    function currentDate(){
        return date.getDay()-1 + ' '+ months[date.getMonth()] +' '+ date.getFullYear()
    }

    useEffect(()=>{
        setInterval(() => tick(), 1000);
    })


    return(
        <div className='timedata-container'>
            <h1>Такс такс такс </h1>
            <div className='timedata-wrapper'>
                <div className='timedata-item'>
                    <p>На часах у нас</p>
                    <div className='timedata-val'>
                        <AiOutlineClockCircle fontSize='2em'/>
                        <p>{time}</p>
                    </div>

                </div>
                <div className='timedata-item'>
                    <p>А сегодня у нас</p>
                    <div className='timedata-val'>
                        <AiOutlineCalendar fontSize='2em'/>
                        <p>{currentDate()} </p>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default TimeData;
