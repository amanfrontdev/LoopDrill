import React from 'react'
// import MobileAppDev from '../components/services/MobileAppDev'
// import WebSolution from '../components/services/WebSolution'
// import Ecommerce from '../components/services/Ecommerce'
// import Artificial from '../components/services/Artificial'
// import Design from '../components/services/Design'
// import Devops from '../components/services/Devops'
import Cards from '../components/services/Cards'
import { cardsData } from '../data/Data'

const ITServices = () => {
    return (
        <div>
            {/* <MobileAppDev/> */}
            <Cards cardsData={cardsData} />
            {/* <WebSolution/>
            <Ecommerce/>
            <Artificial/>
            <Design/>
            <Devops/> */}
        </div>
    )
}

export default ITServices
