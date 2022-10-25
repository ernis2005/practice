
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import s from '../../styles/Home.module.scss'
function Paginatin({ currentPege, totalCount, paginate }) {


    const pages = []

    for (let i = 1; i <= Math.ceil(totalCount / currentPege); i++) {
        pages.push(i)
    }
    return (
        <div className={s.Paginatin}>

            <div className={s.Paginatin}>
                {
                    pages.map((number) => (
                        <div key={number}>
                            <button 
                            className={s.Paginatin_button}
                            onClick={() => {
                                paginate(number)
                            
                            }}  >
                            {
                                number
                            }
                            </button>
                        
                              
                        
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export default Paginatin