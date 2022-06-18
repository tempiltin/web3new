import React from 'react'
import Key_icon1 from "../../assets/images/icons/Key_icon1.png"
import Key_icon2 from "../../assets/images/icons/Key_icon2.png"
import Key_icon3 from "../../assets/images/icons/Key_icon3.png"
import Key_icon4 from "../../assets/images/icons/Key_icon4.png"
const KeyPointsForCard = () => {

    const data = [
        {
            id:1,
            name:"Decentralized",
            img:Key_icon1,
            title:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing",
            
        },
    
        {
            id:2,
            name:"Secure Bridge",
            img:Key_icon2,
            title:"But I must explain to you how all this mistaken idea of new gem denouncing pleasure and praising pain",
            
        },
    
        {
            id:145,
            name:"Fair Allocations",
            img:Key_icon3,
            title:"When our power of choice is untrammelled and when nothing prevents our being able to do what we like best",
            
        },
    
        {
            id:14555,
            name:"Autopilot Liquidity",
            img:Key_icon4,
            title:"But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently",
            
        },
    
    ]
  return (

    <>
    
    
    {
        data.map(({name,img,title},index)=>{
            return(
                <div className="col-md-3" key={index}>

                <div
                  className="Key_Points_Items bbbbgg fadeInUp"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.4s",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                    <div className="Key_Points_Item_img">

                    <img src={img} alt="icon" className="img-fluid" />

                    </div>

                    <div className="Key_Points_Item_Text">

                        <h3>{name}</h3>

                        <p>{title}</p>

                    </div>

                </div>

              </div>
            )
        })
    }
    </>
   
  )
}

export default KeyPointsForCard