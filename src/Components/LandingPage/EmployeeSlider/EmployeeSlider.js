import React from 'react';
import Slider from "react-slick";
import employee1 from '../../../images/employeeSlider/person.png'
import './EmployeeSlider.css'
import leftArrow from '../../../images/employeeSlider/leftArrow.png'
import rightArrow from '../../../images/employeeSlider/rightArrow.png'

const employeeData=[{

    image:employee1,
    title: "Alexander Sam",
    subTitle: "UX/UI Designer, Designed over 100 websites, iOS and \n" +
        "Android mobile apps.",
    content :` “B2B” has enabled me to build a professional career I love and live a life I love, while constantly developing new skills.`,

},
    {

        image:employee1,
        title: "Alexander Sam",
        subTitle: "UX/UI Designer, Designed over 100 websites, iOS and \n" +
            "Android mobile apps.",
        content :` “B2B” has enabled me to build a professional career I love and live a life I love, while constantly developing new skills.`,
    },
    {

        image:employee1,
        title: "Alexander Sam",
        subTitle: "UX/UI Designer, Designed over 100 websites, iOS and \n" +
            "Android mobile apps.",
        content :` “B2B” has enabled me to build a professional career I love and live a life I love, while constantly developing new skills.`,
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
       <>
           <img className='leftArrowCustom' src={leftArrow} alt="" onClick={onClick}/>
           <div
               className={className}
               style={{ ...style, display: "block", background: "#009444", height: "68px", width: '68px', borderRadius: '50%', zIndex: '99'}}
               onClick={onClick}
           >
           </div>
       </>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <>
            <div>
                <img className='rightArrowCustom' src={rightArrow} alt="" onClick={onClick}/>
                <div className={className}
                     style={{ ...style, display: "block", background: "#009444", height: "68px", width: '68px', borderRadius: '50%', zIndex: '99'}}
                     onClick={onClick}>

                </div>
            </div>


        </>

    );
}

const EmployeeSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="card__container">
            <Slider {...settings} className="card__container--inner">
                {employeeData.map((item, index, key= {index}) => {
                    return (
                        <div className='sliderBG'>
                            <div>
                                <img className='sliderImg' src={item.image} alt="item"/>
                            </div>
                            <div className='sliderText'>
                                <h2 className="sliderTitle">Alexander Sam</h2>
                                <h4 className="sliderSubTitle">UX/UI Designer, Designed over 100 websites, iOS and
                                    Android mobile apps.</h4>
                                <p className='sliderPara'>“B2B” has enabled me to build a professional career I love and live a life I love, while constantly developing new skills."</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>


    );
};

export default EmployeeSlider;