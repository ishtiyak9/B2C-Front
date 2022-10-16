import {React , useEffect, useState} from 'react';
import './WorkingSection.css'
import work1 from "../../../images/workingTypeSection/1.png";

const fakeData =[
    {
        header : 'Lorem impousf sfsdfsdfh',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. my text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: 'http://propeller.in/components/list/img/40x40.png'
        ,
        category: 'seller'

    },
    {
        header : 'Lorem impousf sfsdfsdfh',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: 'http://propeller.in/components/list/img/40x40.png'
        ,
        category: 'seller'

    },
    {
        header : 'Lorem impousf sfsdfsdfh',
        text: 'loren lkfnsl flsflsdfs dfs dummy text of the printing and typesetting industry. since the 1500s.',
        image: 'http://propeller.in/components/list/img/40x40.png',
        category: 'seller'

    },
    {
        header : 'Lorem impousf sfsdfsdfh',
        text: 'loren lkfnsl flsflsdfs dfs',
        image: 'http://propeller.in/components/list/img/40x40.png',
        category: 'requester'

    },
]

const WorkingSection = () => {

    const[works, setWorks] =useState([])


    const [category, setCategory] = useState('seller')

    useEffect(() =>{
        const selectedCategory = fakeData.filter(work => work.category === category)
        setWorks(selectedCategory)
    },[category])


    const [selectedText, toggleText] = useState(-1);

    function openText(index) {
        toggleText(selectedText === index ? -1 : index);
    }



    return (
        <div className='row customWorkingSection'>
            <div className="col-md-4">
                <p className='workingTitle'>How it works</p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="switch6" style={{ background: "#FFFFFF",
                    border: "2px solid #E6E8EC",
                    boxSizing: "border-box",
                    borderRadius: "90px"}}>
                    <label className="switch6-light" onClick="">
                        <input type="checkbox"/>
							<span>
								<span className='sellerText' onClick={() =>setCategory('seller')}>Seller</span>
								<span className='requesterText' onClick={() =>setCategory('requester')}>Requester</span>
							</span >
                        <a href="#requester" className="customToggleBtn">.</a>

                    </label>
                </div>
            </div>
            <hr className="solidWorkingType"/>
            <div className="row">
                <div className='col-md-6 workingTypeContainer'>
                    <ul>
                            {works.map(( item, index) => (
                                <li key={`item-${index}`} className={`item ${selectedText === index ? 'open' : ''}`}>
                                    <h4 className='workingTypeTitle' onClick={() => openText(index)}>{item.header}</h4>
                                    <p className='customText'>{item.text}</p>
                                </li>
                            ))}

                    </ul>

                </div>
                <div className='col-md-6'>
                    <div className="row">
                        <div className="col-md-4 col-sm-12 customWorkPosition">
                            <img className='customWorkMargin' src={work1} alt="work1"/>
                            <img className='customWorkMargin' src={work1} alt="work2"/>
                            <img className='customWorkMargin' src={work1} alt="work3"/>
                        </div>
                        <div className="col-md-4 col-sm-12 offset-md-1 text-center">
                            <img className='customWorkMargin' src={work1} alt="work4"/>
                            <img  className='customWorkMargin' src={work1} alt="work5"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WorkingSection;