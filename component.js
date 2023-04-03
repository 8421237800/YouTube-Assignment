import React, { useState } from 'react'


export function Vblock() {
    return <>
    <Navbar/>
    <Main/>
    </>
}
function Navbar(params) {
    return<>
      {/* nav bar strart */}
  <div className="topnav sticky-sm-top">
    <div className="topnav-centered">
      <a>
        {/* <input
          className="rounded-pill w-100"
          type="text"
          placeholder="Search.."
        /> */}
      </a>
    </div>
    <a href="#contact">
      <h5>YouTube</h5>
    </a>
    <div className="topnav-right">
      <img
        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
        alt="Avatar"
        className="avatar"
      />
    </div>
  </div>
  {/* nav bar End  */}
    </>
}
function Main() {

                 
  const[Smriti,setSmriti] = useState({

   
    video:"https://www.youtube.com/embed/vO8OFaMBcs8",
    title:"3 बातें जो जीवन बदल दे - Jaya Kishori - Motivational Video",
    avtar:"https://yt3.googleusercontent.com/ytc/AL5GRJU_-rwUGRwVGkvcR7DxKqA3Qpwcx2rGkik8qTPs=s176-c-k-c0x00ffffff-no-rj",
    nameytf:"Jaya Kishori",
    subscribers:"4.78M subscribers",
    text:"Jaya Kishori started her spiritual journey at the tender age of seven. Ever since her childhood awakening, she developed a staunch belief in fate and believed that nothing is ever planned – it’s all destined."
     }
     );

     function Person1(){
      setSmriti({
        
        video:"https://www.youtube.com/embed/vO8OFaMBcs8",
        title:"3 बातें जो जीवन बदल दे - Jaya Kishori - Motivational Video",
        avtar:"https://yt3.googleusercontent.com/ytc/AL5GRJU_-rwUGRwVGkvcR7DxKqA3Qpwcx2rGkik8qTPs=s176-c-k-c0x00ffffff-no-rj",
        nameytf:"Jaya Kishori",
        subscribers:"4.78M subscribers",
        text:"Jaya Kishori started her spiritual journey at the tender age of seven. Ever since her childhood awakening, she developed a staunch belief in fate and believed that nothing is ever planned – it’s all destined."
        })
     }

     function Person2(){
      setSmriti({

        video:"https://www.youtube.com/embed/s2NISyShKXM",
        tital:"Daily Gratitude Affirmations - By Sandeep Maheshwari | Hindi",
        avtar:"https://yt3.ggpht.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s88-c-k-c0x00ffffff-no-rj",
        nameytf:"Sandeep Maheshwari ",
        subscribers:"3.88M subscribers",
        text:"Sandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success, happiness and contentment. Just like any middle class guy, he too had a bunch of unclear dreams and a blurred vision of his goals in life. All he had was an undying learning attitude to hold on to. Rowing through ups and downs, it was time that taught him the true meaning of his life."
      })
    }

    function Person3(){
      setSmriti({
        video:"https://www.youtube.com/embed/qqHDGaC9ahg",
        tital:" Best Motivational Speech by Sonu Sharma | Thyagraj Stadium | ",
        avtar:"https://yt3.ggpht.com/ytc/AL5GRJUNRWL1K76rn_1FRAWfFo4L4aD5S4AUQVR65-V7fw=s88-c-k-c0x00ffffff-no-rj",
        nameytf:" Sonu Sharma ",
        subscribers:"3.48M subscribers",
        text:"An Author, Educator, Business Consultant and a successful Entrepreneur, he is a much sought-after speaker. Today he is one of the Youngest Inspirational Speaker in India He inspires and encourages individuals to realise their true potential. He has taken his dynamic personal messages to opposite sides of the globe."
  }
          
     );
    }
       // function Secondvideo() {
          //   setmain({
          //     video:"https://www.youtube.com/embed/qqHDGaC9ahg",
          //     tital:" Best Motivational Speech by Sonu Sharma | Thyagraj Stadium | ",
          //     avatar:"https://yt3.ggpht.com/ytc/AL5GRJUNRWL1K76rn_1FRAWfFo4L4aD5S4AUQVR65-V7fw=s88-c-k-c0x00ffffff-no-rj",
          //     nameytf:" Sonu Sharma ",
          //     subscribers:"3.48M subscribers",
          //     text:"An Author, Educator, Business Consultant and a successful Entrepreneur, he is a much sought-after speaker. Today he is one of the Youngest Inspirational Speaker in India He inspires and encourages individuals to realise their true potential. He has taken his dynamic personal messages to opposite sides of the globe."
          //   })
          // }

          function Person4(){
            setSmriti({
              video:"https://www.youtube.com/embed/lPQN83HVz4U",
              tital:"The Power of Women - Every girl should watch this | Motivational story | Inspirational video",
              avtar:"https://yt3.ggpht.com/ytc/AL5GRJUlnQvF69XK1PsxwzhOtdV6HAuOmHIAE9pfmaZZ=s88-c-k-c0x00ffffff-no-rj",
              nameytf:"Anant Drishti Films ",
              subscribers:"18.6K subscribers",
              text:"A woman can always succeed to her desired dreams. This is a motivational story of a woman who had dreamt of being a pilot. A woman has the capability and ability of being anything that man can do. There is always a boundary when any women wants to succeed in her life out of the so called society rules"
              
            })
          }
  // function thirdvideo() {
          //   setmain({
          //     video:"https://www.youtube.com/embed/lPQN83HVz4U",
          //     tital:"The Power of Women - Every girl should watch this | Motivational story | Inspirational video",
          //     avatar:"https://yt3.ggpht.com/ytc/AL5GRJUlnQvF69XK1PsxwzhOtdV6HAuOmHIAE9pfmaZZ=s88-c-k-c0x00ffffff-no-rj",
          //     nameytf:"Anant Drishti Films ",
          //     subscribers:"18.6K subscribers",
          //     text:"A woman can always succeed to her desired dreams. This is a motivational story of a woman who had dreamt of being a pilot. A woman has the capability and ability of being anything that man can do. There is always a boundary when any women wants to succeed in her life out of the so called society rules"
          //   })
          // }
          function Person5(){
            setSmriti({
              video:"https://www.youtube.com/embed/T9BmrHVPRJ0",
              tital:"सफलता का नया सूत्र, Motivational Video in Hindi for Success by Vivek Bindra",
              avtar:"https://yt3.ggpht.com/Yy09nKUAprlICWXCB8mzYMpN788eYnwTcxbgG0gOc_yxdINpdUP4iPQK_f5r3xsjN7LIq933WQ=s88-c-k-c0x00ffffff-no-rj",
              nameytf:"Dr.Vivek Bindra ",
              subscribers:"3.48M subscribers",
              text:"Do you want to increase stress or the best things in life? The people you surround yourself with can determine the quality of the future. Watch this video in which Dr. Vivek Bindra explains some of the most important lessons in life that are crucial if you want to be successful in life. "
              
            })
          }
         // function fourthvideo() {
          //   setmain({
          //     video:"https://www.youtube.com/embed/T9BmrHVPRJ0",
          //     tital:"सफलता का नया सूत्र, Motivational Video in Hindi for Success by Vivek Bindra",
          //     avatar:"https://yt3.ggpht.com/Yy09nKUAprlICWXCB8mzYMpN788eYnwTcxbgG0gOc_yxdINpdUP4iPQK_f5r3xsjN7LIq933WQ=s88-c-k-c0x00ffffff-no-rj",
          //     nameytf:"Dr.Vivek Bindra ",
          //     subscribers:"3.48M subscribers",
          //     text:"Do you want to increase stress or the best things in life? The people you surround yourself with can determine the quality of the future. Watch this video in which Dr. Vivek Bindra explains some of the most important lessons in life that are crucial if you want to be successful in life. "
              
          //   })
          // }

          const [show, smritiji]=useState(false)
   function Smrit() {
    smritiji(true)
    // harmanpreetji(true)
    vedaji(true)
    ruchaji(true)
   taniyaji(true)

   }
   function Smrif() {
    smritiji(false)
   }
   const [show1,  harmanpreetji]=useState(true)
   function Haramit() {
    smritiji(true)
    // harmanpreetji(true)
    vedaji(true)
    ruchaji(true)
   taniyaji(true)

   
   }
   function Haramif() {
    harmanpreetji(false)
   }
   const [show2, vedaji]=useState(true)
   function Vedajit() {
    smritiji(true)
    harmanpreetji(true)
    // vedaji(true)
    ruchaji(true)
   taniyaji(true)


  }
   function vedif() {
    vedaji(false)
   }
   const [show3, ruchaji]=useState(true)
   function Ruchit() {
    smritiji(true)
    harmanpreetji(true)
    vedaji(true)
    // ruchaji(true)
   taniyaji(true)


   }
   function Ruchif() {
   ruchaji(false)
   }
   const [show4, taniyaji]=useState(true)
   function Taniyat() {
    smritiji(true)
    harmanpreetji(true)
    vedaji(true)
    ruchaji(true)
  //  taniyaji(true)


   }
   function Taniyaif() {
    taniyaji(false)
   }






    return<>
    <div className="container">
  <div className="cleaefix">
    <div className="row">
      <div className="col-sm-9">
        <div className=" mb-3 mt-2">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div            >
          <iframe
          width={560}
          height={500}
            className="card-img-top"
            src={Smriti.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          /></div>
          <div className="card-body">
            <h4 className="card-title">{Smriti.title}</h4>
            <p className=""></p>
            <div className="container">
              <img
                src={Smriti.avtar}
                alt={Smriti.title}
                style={{ width: "10%" }}
              />
              <p>
                <span>
                  {Smriti.nameytf}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={10}
                    fill="currentColor"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  ><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </span>
                <br />
                <small className="text-body-secondary">
              <h6 className="sd">{Smriti.subscribers}</h6>
                </small>
              </p>
            </div>
            <p />
            <p>
              <span>
                {Smriti.text}
              {/* </span>
              <span id="dots">...</span>
              <span id="more"> */}
              </span>
            </p>
            {/* <div onclick={myFunction()} type="button" id="myBtn">
              Read more
            </div> */}
          </div>
        </div>
      </div>
      <div  className="col-sm-3">
        {/* {show?<Cards vi={"https://www.youtube.com/embed/vO8OFaMBcs8"} tit={"3 बातें जो जीवन बदल दे - Jaya Kishori..."} sub={"4.78M subscriber "} s={()=>{Originalf();Originalt()}}/>:null}
        {show1?<Cards vi={"https://www.youtube.com/embed/s2NISyShKXM"} tit={"Daily Gratitude Affirmations"} sub={"3.88M "} s={()=>{firstvideof();tirstvideot()}}/>:null}
        {show2?<Cards vi={"https://www.youtube.com/embed/qqHDGaC9ahg"}  tit={" Best Motivational Speech... "} sub={"3.48M subscribers "} s={()=>{secondvf();secondvt()}}/>:null}
        {show3?<Cards vi={"https://www.youtube.com/embed/lPQN83HVz4U"} tit={" The Power of Women - Every girl should ... "} sub={"3.48M subscribers "} s={()=>{thirdvf();thirdvt()}}/>:null}
        {show4?<Cards vi={"https://www.youtube.com/embed/T9BmrHVPRJ0"} tit={" सफलता का नया सूत्र, Motivational Video..."} sub={"3.48M subscribers "} s={()=>{fourthvideof();fourthvideot()}}/>:null} */}
          {show?<Cards vi={"https://www.youtube.com/embed/vO8OFaMBcs8"} tit={"3 बातें जो जीवन बदल दे - Jaya Kishori..."} sub={"4.78M subscriber "} s={()=>{Person1();Smrif();Smrit()}}></Cards>:null}
           {show1?<Cards vi={"https://www.youtube.com/embed/s2NISyShKXM"} tit={"Daily Gratitude Affirmations"} sub={"4.78M subscriber"} s={()=>{Person2();Haramif(); Haramit()}} ></Cards>:null}
           {show2?<Cards vi={"https://www.youtube.com/embed/qqHDGaC9ahg"} tit={"Best Motivational Speech..."} sub={"3.48M subscribers"} s={()=>{Person3();vedif(); Vedajit()}}></Cards>:null}
           {show3?<Cards vi={"https://www.youtube.com/embed/lPQN83HVz4U"} tit={"The Power of Women - Every girl should ... "}sub={"3.48M subscribers"} s={()=>{Person4();Ruchif(); Ruchit()}} ></Cards>:null}
           {show4?<Cards vi={"https://www.youtube.com/embed/T9BmrHVPRJ0"} tit={"सफलता का नया सूत्र, Motivational Video..."} sub={"3.48M subscribers"} s={()=>{Person5();Taniyaif(); Taniyat()}} ></Cards>:null}



      </div>
    </div>
  </div>
</div>
    </>
}

function Cards(props) {
    return<>
            <div className="card mb-3  mb-3 mt-2" onClick={props.s} style={{ maxWidth: "540",border:"0px" }}>
  <div className="row g-0" >
    <div className="col-md-7">
      {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
      <iframe
        width={200}
        height={250}
        className="img-fluid rounded-start m-1 mb-0 play"
        src={props.vi}
        allow="accelerometer; autoplay;  gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
      />
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h6 className="card-title">{props.tit}</h6>
        <p className="card-text" />
        <p className="card-text">
          <small className="text-body-secondary">
            {props.sub}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            ><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </small>
        </p>
      </div>
    </div>
  </div>
</div>
    </>
}