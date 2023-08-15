import React from 'react';
import "./WhyChooseUs.css"

const data2 = [
    {
        id: "01",
        title: "The Best Price",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore?"
    },
    {
        id: "02",
        title: "The Best Price",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore?"
    },
    {
        id: "03",
        title: "The Best Price",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore?"
    },
    {
        id: "04",
        title: "The Best Price",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore?"
    }
]

const WhyChooseUs = () => {
  return (
    <div className='whyChooseUs secTop'>
        <div className="whyChooseUsCont p20">
            <h2 className='sectionTitle h2B'>Why Choose Us</h2>
            <div className="chooseItems">
                {data2.map((item) => (
                    <div className="chooseItem" key={item.id}>
                        <p className='no'>{item.id}</p>
                        <div className="chooseItem_content">
                            <h3 className='sectionSubTitle'>{item.title}</h3>
                            <p className='para'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs