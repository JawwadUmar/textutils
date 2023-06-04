import React from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // })

    let myStyle = {
      color : props.mode ==='dark' ? 'white' : '#042743',
      backgroundColor: props.mode ==='dark' ? 'rgb(36 74 103)' : 'white',

    }

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color ===="white"){
    //         setMyStyle({
    //     backgroundColor: "white",
    //     color: "black",
    //     // border : "5px solid white"
    //         })

    //         setBtnText("Enable Dark Mode");
    //     }

    //     else{
    //         setMyStyle({
    //             backgroundColor: "black",
    //             color: "white"
    //                 })

    //         setBtnText("Enable Light Mode");

    //     }
    // }
  return (
    
    <div className='container'>
        <h1 className='my-3' style={{color : props.mode ==='dark' ? 'white' : '#042743'}}>About Us</h1>
        <div className="contaier my-2">     
          <p style={{color : props.mode ==='dark' ? 'white' : '#042743', backgroundColor:props.mode ==='dark'?'#042743': 'white' }}> TextUtils is a versatile online text analysis tool designed to simplify and enhance your text processing experience. With a user-friendly interface and a wide range of powerful features, TextUtils empowers users to efficiently manipulate, analyze, and optimize their textual content.</p>
          </div>
        <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils provides an array of tools to analyze your text in various ways. Whether you need to calculate word count, character count, or find the frequency of words, TextUtils has got you covered. Additionally, you can determine the reading time of your text, making it easier to estimate how long it will take to consume.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is built with cross-browser compatibility in mind, ensuring that you can access and utilize its features seamlessly on different web browsers. Whether you prefer Chrome, Firefox, Safari, or any other popular browser, TextUtils guarantees a consistent and reliable experience.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is completely free to use, allowing users to take advantage of its powerful features without any cost or subscription requirements. Whether you're a student, professional, or hobbyist, TextUtils provides a valuable resource for text analysis and manipulation, all at no charge. You can access the website anytime, anywhere, and make use of its extensive functionality without worrying about any financial commitments. Enjoy the convenience and benefits of TextUtils without any cost constraints, making it an accessible tool for everyone.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
<button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
</div> */}
    
    </div>
  )
}
