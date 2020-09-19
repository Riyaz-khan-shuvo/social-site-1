import React, { useState } from 'react';
import './Name.css'
const Name = (props) => {
    // const fake = props.fake;
    // console.log(fake.name);
    const {name , email , profile , cover , phone , id} =props.fake;
    const [mobile , setMobile] = useState('');
    const showPhone = ()=> setMobile(phone); 
    return (
        <div>
            <div className="social-site">
                <div className="cover">
                    <img src={cover} alt=""/>
                </div>
                <div className="profile">
                    <img src={profile} alt=""/>
                </div>
                <h1 className="text-center"> {id} </h1>
                <h1>Name: {name}</h1>
                <h3>Email:  {email} </h3>
                <h3>Phone: {mobile}  </h3>
                <button onClick={showPhone}>Show Phone Number</button>
                <button>Add me</button>
                
            </div>
        </div>
    );
};

export default Name;














// import React, { useState } from 'react';
// import FakeData from '../../FakeData/FakeData';
// import './Name.css';
// import { faHome , faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const Name = (props) => {
//     const [fake , setFake] = useState(FakeData);
//     return (
//         <div>
           
//             {
//             fake.map(fak=> <AllInformation fake={fak}></AllInformation> )
//             }
           
//         </div>
//     );
// };


// function AllInformation(props) {
//     const {name , email, address  , phone , profile , cover} = props.fake;
//     return(
//         <div>
//             <div className='social-site'>
//                 <div className='cover'>
//                     <img src={cover} alt=""/>
//                 </div>
//                 <div className='profile'>
//                     <img src={profile} alt=""/>
//                 </div>
//                 <h1>{name} (Tech Lover) </h1>
//                 <p>email:{email} </p>
//                 <p>Phone: {phone} </p>
//                 <button>Add <FontAwesomeIcon icon={faPlus} /></button>
//             </div>
//         </div>
//     );
// }


// export default Name;