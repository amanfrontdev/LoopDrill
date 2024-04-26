import React from 'react'

import Cards from '../components/services/Cards'
import { cardsData, cardsData1, cardsData2, cardsData3, headings } from '../data/Data'
import Paragraph from '../components/services/Paragraph'

const ITServices = () => {
    return (
        <div>
            <div>
                <p>Mobile Services</p>
                <Cards cardsData={cardsData} />
            </div>
            <div>
                <p className='bg-DarkBlack text-customLightPurple text-lg px-20'>laptop Services</p>
                <Cards cardsData={cardsData1} />
            </div>

            <Cards cardsData={cardsData2} />
            <Cards cardsData={cardsData3} />
        </div>
    )
}

export default ITServices
