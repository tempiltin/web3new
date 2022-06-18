import React from "react";
import {FiLinkedin,FiInstagram,FiFacebook} from 'react-icons/fi'
import avatar from "../../assets/images/team/team-image.png";
const TeamMembers = () => {
    const data = [
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
        {
            id:1,
            avatar:avatar,
            name:"Berneice Tran",
            position:"Director",
            linkdenLink:"#!",
            instagramLikn:"#!",
            FacebookLink:"#!"
        },
    ]
  return (
<>
 {
    data.map(({avatar,name,position,linkdenLink,instagramLikn,FacebookLink},index)=> {
        return (
            <div className="col-lg-3 col-md-6" key={index}>
            <div className="team-item text-center active-shape">
              <img src={avatar} alt="" />
              <h4 className="team-title mb-8">
                <a href="#!">{name}</a>
              </h4>
                <div className="dsc">{position}</div>
                <ul className="team-icon-list">
                  <li>
                    <a href={linkdenLink}>
                      <FiLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href={instagramLikn}>
                      <FiInstagram />
                    </a>
                  </li>
                  <li>
                    <a href={FacebookLink}>
                      <FiFacebook />
                    </a>
                  </li>
                </ul>
                <span className="border-shadow shadow-1"></span>
                <span className="border-shadow shadow-2"></span>
                <span className="border-shadow shadow-3"></span>
                <span className="border-shadow shadow-4"></span>
            </div>
          </div>
        )
    })
 }
</>
  );
};

export default TeamMembers;
