import React from 'react'

import Cards from '../components/services/Cards'
import { cardsData, cardsData1, cardsData2, cardsData3 } from '../data/Data'

const ITServices = () => {
    return (
        <div>
            
            <Cards cardsData={cardsData} />
            <Cards cardsData={cardsData1} />
            <Cards cardsData={cardsData2} />
            <Cards cardsData={cardsData3} />
        
        </div>
    )
}

export default ITServices
