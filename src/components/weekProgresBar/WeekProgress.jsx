
import './WeekProgress.scss';

const WeekProgress = () => {


    return(
        <div className='weekprogress-container'>
            <div className='weekprogress-header'>Успехи за неделю</div>
            <div className='statistic-container'>
                <div className='statistic-item'>
                    <div className='statistic-description'>Создано</div>
                    <div className='statistic-circle'>
                        <div className='statistic-value'> 21</div>
                        <div className='statistic-bottom-description'>задач</div>
                    </div>
                </div>
                <div className='statistic-item'>
                    <div className='statistic-description'>Завершено</div>
                    <div className='statistic-circle'>
                        <div className='statistic-value'>3 </div>
                        <div className='statistic-bottom-description'>задач</div>
                    </div>
                </div>
                <div className='statistic-item'>
                    <div className='statistic-description'>Удалено</div>
                    <div className='statistic-circle'>
                        <div className='statistic-value'>123 </div>
                        <div className='statistic-bottom-description'>задач</div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WeekProgress;