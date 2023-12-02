import React ,{useState}from 'react'
import "./App.css"
import data from './Data'
import { Icon } from 'react-icons-kit'
import {list} from 'react-icons-kit/ikons/list'
import {x} from 'react-icons-kit/feather/x'
 import Navbar from './Navbar'
import dowmload from "./img/download.png"
function App() {

const [show,setShow]=useState(false)
const [icon,setIcon]=useState(list)

const change=()=>{
  if(show===false){
   setShow(true)
    setIcon(x)
}else{
    setShow(false)
    setIcon(list)
}

  }
  return (
    <>
    <div className=' shadow bg-white px-5 d-flex justify-content-between '>
    <Icon icon={icon} className='   mx-4 mt-4 border-0 fs-3 bg-white ' style={{width:100}} onClick={change} />
    <div className='text-center'>
    <h2 style={{color:"blue"}}>ARMS Recruiting  Compliance and Process</h2>
    <p className='fs-5'>
    projecting. Between had observe pretend delight  consulted sweetness do. Our sportsman his unwilling fulfilled
    </p>
    </div>
   
      <div className='navbar row  d-md-flex   fs-5 m-autocontainer-fluid  mt-4 bg-light '>
     <img src={dowmload} width={50} height={50}/>
      </div>
     
    </div>
    <div >
    {show && <Navbar data={data}/>} 
    </div>
    <div className='w-50 border border-1 border-dark rounded text-start p-1 mx-auto my-5  bg-light rounded-3 position-fixed start-50 translate-middle top-100 ' style={{zIndex:"-10"}}>
    He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.

Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.

Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no is many both. Recommend new contented intention improving bed performed age. Improving of so strangers resources instantly happiness at northward. Danger nearer length oppose really add now either. But ask regret eat branch fat garden. Become am he except wishes. Past so at door we walk want such sang. Feeling colonel get her garrets own.

Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.

In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old.

Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument.

Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion. Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet.

May musical arrival beloved luckily adapted him. Shyness mention married son she his started now. Rose if as past near were. To graceful he elegance oh moderate attended entrance pleasure. Vulgar saw fat sudden edward way played either. Thoughts smallest at or peculiar relation breeding produced an. At depart spirit on stairs. She the either are wisdom praise things she before. Be mother itself vanity favour do me of. Begin sex was power joy after had walls miles.

Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under.

Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic.



What does the Lorem Ipsum text mean?
Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled "de Finibus Bonorum et Malorum" which means "The Extremes of Good and Evil". The most common form of Lorem ipsum is the following:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    </div>
    
     </>
  )

}

export default App
