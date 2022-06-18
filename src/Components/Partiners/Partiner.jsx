import React, { useEffect, useState } from "react";
import logo from "../../assets/images/partner/1.png";

const Partiner = () => {
  const data = [
    {
      id: 1,
      img: logo,
    },
    {
      id: 1645,
      img: logo,
    },
    {
      id: 146,
      img: logo,
    },
    {
      id: 15,
      img: logo,
    },
    {
      id: 16456,
      img: logo,
    },
    {
      id: 14564645,
      img: logo,
    },
    {
      id: 18678645645,
      img: logo,
    },
    {
      id: 1867865478,
      img: logo,
    },
    {
      id: 186767,
      img: logo,
    },
    {
      id: 14833686,
      img: logo,
    },
    {
      id: 1786434,
      img: logo,
    },
    {
      id: 138435478,
      img: logo,
    },
    {
      id: 17863354535,
      img: logo,
    },
    {
      id: 13453788,
      img: logo,
    },
    {
      id: 848431,
      img: logo,
    },
    {
      id: 186363,
      img: logo,
    },
    {
      id: 154354,
      img: logo,
    },
    {
      id: 14452542,
      img: logo,
    },
    {
      id: 1424254453454,
      img: logo,
    },
    {
      id: 1688798786546461304741239874123984123,
      img: logo,
    },
  ];
 
  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(5);
  // const [show , setShow] = useState(true);

  const showMoreItems = () =>{
    setVisible(prevValue => prevValue + 5)
  }
    useEffect(() => {
      // fetch("")
      // .then(res => res.json())
      // .then((data) => setItems(data) )
      setItems(data) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div className="Our_PARTNERSContnetSect">
      <ul className="OurPartnatList">
        {items.slice(0 , visible).map((item) => (
          <li key={item.id}>
            <img src={item.img} className="img-fluid" alt="" />
          </li>
        ))}
      </ul>
      <div className="ShowMoreBtnSect">
          {
            items.length
          }
        <button onClick={showMoreItems} className="readon white-btn black-shape showMoreLogoBtn">
            <span className="btn-text btn-text-1">Show More </span>
            <span className="hover-shape1"></span>
            <span className="hover-shape2"></span>
            <span className="hover-shape3"></span>
        </button>
      </div>
    </div>
  );
};

export default Partiner;
