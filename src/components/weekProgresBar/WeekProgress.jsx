
import './WeekProgress.scss';
import {useSelector} from "react-redux";

const WeekProgress = () => {

    const data = useSelector(state => state)
    return(
        <div className='weekprogress-container'>
            <div className='weekprogress-header'>Успехи за неделю</div>
            <div className='statistic-container'>
                <div className='statistic-item'>
                    <div className='statistic-description'>Создано</div>
                    <div className='statistic-circle'>
                        <div className='statistic-value'>{data.countCreate}</div>
                        <div className='statistic-bottom-description'>задач</div>
                    </div>
                </div>
                <div className='statistic-item'>
                    <div className='statistic-description'>Завершено</div>
                    <div className='statistic-circle'>
                        <div className='statistic-value'>{data.countDone}</div>
                        <div className='statistic-bottom-description'>задач</div>
                    </div>
                </div>
                <div className='statistic-item'>
                    <div className='statistic-description'>Удалено</div>
                    <div className='statistic-circle'>
                        <div className='statistic-value'>{data.countDelete}</div>
                        <div className='statistic-bottom-description'>задач</div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WeekProgress;