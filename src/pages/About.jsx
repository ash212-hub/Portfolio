import React from 'react' 
 import sidedp from "../props/orig-removebg-preview.png"
 import idea from "../props/idea.png"
 import plan from "../props/plan.png"
    import operate from "../props/operation.png"
    import coding from "../props/coding.png"
    import building from "../props/building.png"
    import dovelop from "../props/dovelopment.png"
    import  deploy from "../props/deployment.png"
   import { motion } from 'framer-motion'
    
    

const About = ({about}) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(61, 178, 194,0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(61, 178, 194,1)"
    }
  }
 
  return (
    <div
    ref={about}
    className='Aboutpage container '>
      <div className="aboutmee  rounded-4 bg-black d-flex   ">
        
 
 
      <div className="order1  d-flex align-items-center justify-content-center overflow-hidden" style={{width:"35%"}}>
      <img id='sidedp' src={sidedp} alt="" />
      </div>



      <div className="order2 text-light  overflow-scroll" style={{width:"45%"}} >
    
        <div className="idea">
        <h3 className=' mb-2 mt-2'> &#x2726; what do I do &#x2726; </h3>
          <div className="esxtract d-flex align-items-center justify-content-center">
          <div className="enegram text-start p-3" style={{borderRight:"1px solid white "}}>
           
            <h6>Followed by thoughts </h6>
            <h6>Turn into ideas</h6>
            <h6>Working on ideas into plans</h6>
            <h6>Operating into coding </h6>
            <h6>Building envirment needs</h6>
            <h6>Dovelopment nessicity</h6>
           </div>




           <div className="bounded p-2">
               these are my working ways
           </div>
           
          </div>
          <p>i am responsible for designing, developing, and maintaining web applications using the MERN technology stack</p>
          <p>showing perfextion in my work is my weakness</p>
          <p>Stay updated with emerging technologies and advocate for their integration.</p>  
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
        </div>



          <div className="sig position-relative" style={{transform:"translateX(-15rem)"}}>
          <svg className=' position-absolute' version="1.1" viewBox="0 0 2048 779" width="18rem" height="4rem" xmlns="http://www.w3.org/2000/svg">
<motion.path
 variants={icon}
 initial="hidden"
 animate="visible"
 transition={{pathLength:{duration:4,repeat:Infinity,ease:"easeInOut"},
 fill:{duration:4,repeat:Infinity,ease:"easeInOut"}
}}
transform="translate(1386,76)" d="m0 0h7l6 3 5 6 2 15v14l-2 22-5 34-5 22-12 33-9 20-9 16-13 24-4 9-8 16-8 19-4 17-2 22-1 36-1 17v49l3 6 56-2 111-7 47-4 54-3 15-2 22-1 17-2 23-1 3-1 17-1 32-1 20-2 52-3 11-2 46-3 12-2 30-2 13-2 22-1 5-2 23-3 3-3 5-9 14-1 10 3h8l5 1 15 1 4 4-1 6-8 4-19 4-43 5-18 3-33 2-78 9-32 3-60 3-40 3-35 2-54 4-37 3-142 10-25 2-33 2-34 4-6 3-1 5-1 77 2 27v47l-2 22-3 11-4 8-12 12-9 4h-15l-22-5-28-8-23-6-30-8-25-8-33-9-55-16-32-10-55-16-19-5-28-8-25-7-12-4-16-4-40-11-16-4-36-10-30-8-10-4h-10l-16 8-19 10-22 8-17 4-34 5h-22l-7-3-4-7-1-5v-9l2-5 5-4 4 2-2 8v7l5 5 16-1 10-2 17-2 18-5 8-3 10-4 3-2 9-3 4-3-1-7-4-3-13-4-27-6-30-8-32-9-11-3-39-7-25-5-16-4-43-7-23-5-19-4-33-5-7-2-27-2-14-3-23-2-56-2h-12l-16-1h-20l-12-2-7-4-19-1-18-5-11-6-13-13-5-10-1-6 2-9 8-16 12-17 9-10 10-7 3-2v-6l-10-3-11-2-19-7-23-8-11-7-10-9-5-10v-14l4-11 11-12 12-12 13-10 21-12 18-11 24-10 10-4 13-3 24-9 13-1h24l11 4 12 7 5 5 2 5v14l-9 19-4 10-9 3-3 9-6 7-11 9-2 1-16 1 1-3 9-4 6-5 4-11 5-10 8-7 6-7h2l1-9-4-3-10-5-5-4-5-1h-17l-7-4h-9l-6 2-17 1-5 5-5 3-10-1-7 3-6 5-11 4-11 7-16 6-9 7-5 6-8 7-7 9-2 5v18l3 9 4 2 16 9 19 9 11 4 20 3 5 1h9l7-1 12-2 9-5 4-3 4 1 17-10 17-6 16-9 8-5 8-2 11-7 18-13 11-8 11-9 5-10 4-9 6-9 5-8 5-1 5 3 2 5v15l-5 23-4 26-2 21-4 31v19l9-2 8-7 5-5 14-15 10-6h7l5 5v8l-10 15-11 14-6 9-1 4 4 7 27 21 9 9 1 3-6-1-28-13-9-4-6-4-11-10h-4l-5 8-3 8-4 2-9 1-7-4-4 2-5 6-2-1 1-6 3-8v-15l5-19 1-6v-23l6-35 1-10v-18l-3-5-5 2-13 10-18 13-7 4-12 3-7 10-10 1-23 12-20 8-6 3-2 4 1 4 1 1 10 1 5 3 8 1h7l24 8 14 6 9 8 5 9 4 20v8l-4 9-7 10-11 8-13 11-1 4 5 1 34 2h36l12 1h69l10-1h16l1-4 2-1 2 4 24 1 18-1 17 1h66l34 1h49l42 2 54 1 16 1h15l6-4 5-12 3-15 2-21v-35l-1-11-6-16-6-15-7-12-8-11-8-10-9-10-12-13-6-4-16-2-18 5-42 6-34 4-16 3-21 2-28 1h-8l-7 1h-27l-10 3-5 5-3 8v17l3 13 6 9 8 9v2l4 2 5 2 7-1 6-3 5-8 7 1 4 6v7l-3 6-6 5-11 4-11 1-10-3-11-7-8-8-9-13-6-16-3-16-1-11h-13l-2-2 1-9 2-2 14-4 6-9 7-11 15-16 16-12 16-9 13-10 10-6 15-6 12-3 16-1 3-1h33l17 4 13 5 16 8 19 10 13 8 10 4 8 6 9 4h6l5-5 9-14 14-15 9-5 8-3 8-5 25-10 16-5 19-3 24-1 3-1h10l11 4 5 6 1 2v8l-5 6-15 9-16 7-12 3-16 6-19 5-12 3-15 4-13 4-15 2-7 3-3 7v8l4 7 13 12 11 9 8 7 16 10 30 14 14-1 6-3 5-4 16-7 11-7 4-3 10-5 11-9 6-5 10-13 9-14 6-21 4-26 3-18 3-5 2-2h7l3 4 4 21 1 40v31l-2 34v20l1 5 5-3 7-9 12-8 11-9 2-1h7l5 5 3 9 4 24 3 22 4 15 4 8 3 11h5l3-10 6-16 6-14 7-10 8-18 3-3h6l6 4 11 15 20 41 7 9 5 4 15 6 11 3 7 1h13l18-2 21-8 17-11 12-11 9-10 9-11 12-12 8-14 2-8 2-19 1-17 1-5 1-20 10-65 5-27 10-35 8-24 9-17 8-14 9-14 4-3zm-4 21-5 4-6 8-8 17-6 20-6 19-8 28-4 20-2 15-1 3-3 27-1 8v10l2 5 4-2 12-19 4-8 13-29 10-28 6-22 3-8 1-7 1-23 2-11-1-4v-8l1-8-3-6zm-500 104-20 3-12 1-20 9-10 4-14 8-13 9-8 6-1 1 1 7h6l5-2 18-2 9-4 6-1 16-3 17-6 10-2 20-7 8-5 6-6-1-3-14-6zm-275 23-9 2-21 5-10 5-12 8-7 3-8 6-9 11-7 11-4 5 1 5h15l33-1 36-3 29-4 12-2 24-2 2-1h22l10-4 11-3-2-4-7-6-16-11-11-5-9-4-20-6-5-2-13-2zm357 53-6 5-8 11-11 12-15 11-11 8-25 14-9 8-1 5 9 8 10 8 13 13 10 14 5 10 1 9-2 10-5 9-9 7-7 2-11 1h-31l-14-1-20-6h-5l-6 7-4 15v7l2 4 6 1h42l7 1h11l24 2h30l34 2 85 3h44l34 2h27l9 1 31-1h24l74-1 3-2 2-11 4-70v-9l-2-5-4-1-6 4-8 8-7 8-8 7-5 5-19 12-17 9-24 6-9 1h-22l-15-3-15-6-10-7-7-6-12-21-11-22-3-2-4 8-5 15-3 12-7 12-6 10-7 11-2 1h-9l-5-3-7-11-8-16-8-19-4-15-2-9-3-6-6 3-13 14-7 10-5 10-5 6-4 1-5-4-4-10-2-9-1-51 3-35-1-14-3-7zm-153 59-2 2 1 9 4 6 5 2 6-4 4-4-1-5-4-4-7-2zm41 21-5 4-5 5-12 9-5 8-2 8v29l4 4 16 7 15 3h18l10-2 2-1 13-2 8-4 3-8-1-10-7-14-11-12-18-13-16-10zm-657 3-15 3-12 7-2 2-8 3-5 5-6 10-7 3-6 7-4 10-1 3v13l4 8 12 11 10 6 8 3h12l9 2 18 1 5-2 19-2 27-9 14-8 8-7v-2h2l7-10 1-3v-14l-4-12-5-8-10-5-21-6-8-3-25-4zm309 113-26 2-9 1-10 4 5 5 10 1 10 4 19 3 9 3h12l19 6 16 3 14 4 10 2 30 8 67 15 14 4 20 4h11l16-9 7-7 10-8 11-14 11-12 2-3v-7l-2-3-18-1-59-2-55-2-18-1h-13l-11 1-9-1h-65l-4 1h-9zm303 8-6 5-17 25-11 13-16 16-5 4-1 4 4 4 17 4 12 5 11 2 10 5 23 4 61 18 51 14 16 5 19 5 22 6 13 4 92 27 41 11 17 5 9 3 13 3 14 5 26 8 19 5 6 2h7l4-2h7l16 4 11-1 5-5 4-9 3-13 2-22v-43l-1-13-2-45-2-31v-16l-5-6-35 1h-27l-134-1-60-2-39-2-150-5z" fill=" rgba(61, 178, 194,1)
"/>
<path transform="translate(1168,227)" d="m0 0h10l8 7 6 10 1 9-5 10-9 12-6 7-4 1-7-8-6-13-2-7v-9l4-10 6-7z" fill="#718CD4"/>
<path transform="translate(458,433)" d="m0 0h6l1 1-1 7-11 11-4 3-5-1-9-7v-3l16-5z" fill="#728DD4"/>
<path transform="translate(221,296)" d="m0 0h4l1 3-3 7-4 3-3 1h-8l-1-5 6-5z" fill="#748ED5"/>
<path transform="translate(131,401)" d="m0 0 3 1-4 11-1 12h-1l-1-10h-2l3-9z" fill="#FEFEFE"/>
<path transform="translate(228,295)" d="m0 0 3 1-5 2v-2z" fill="#D5DDF2"/>
<path transform="translate(231,294)" d="m0 0 2 1z" fill="#FEFEFE"/>
</svg>
          </div>
      </div>









      <div className="order3 position-relative d-flex align-items-center justify-content-center flex-column  " style={{width:"20%"}}>
        
        
        
        
        
         
        


{/* 
        <div className="way1 w-25 border border-1 border-light rounded-4 " style={{height:"5rem"}}>
        < img className='portrait w-100 h-100 rounded-4 end-0' src={idea} alt="" style={{transform:"translateX()translateY()"}}/>
        </div>


        <div className="way2 w-25 border border-1 border-light rounded-4 " style={{height:"5rem"}}>
        < img className='portrait  w-100 h-100  rounded-4 end-0' src={plan} alt="" />
        </div>



        <div className="way3 w-25 border border-1 border-light rounded-4 " style={{height:"5rem"}}>
        < img className='portrait  w-100 h-100  rounded-4 end-0' src={operate} alt="" />
        </div>


        <div className="way4 w-25 border border-1 border-light rounded-4 " style={{height:"5rem"}}>
        < img className='portrait  w-100 h-100 rounded-4 end-0' src={coding} alt="" />
        </div>


        <div className="way5 w-25 border border-1 border-light rounded-4 " style={{height:"5rem"}}>
           < img className='portrait  w-100 h-100   rounded-4 end-0' src={building} alt="" />
        </div>



        <div className="way6 w-25 border border-1 border-light rounded-4 " style={{height:"5rem"}}>
        < img className='portrait  w-100 h-100  rounded-4 end-0' src={dovelop} alt="" />
        </div>


        <div className="way7 w-25 border border-1 border-light  rounded-4 " style={{height:"5rem"}}>
        < img className='portrait  w-100 h-100  rounded-4 end-0' src={deploy} alt="" />
        </div> */}








 <div className="extraas  position-relative d-flex align-items-center justify-content-center flex-column" style={{width:"100%"}}>
  
 <div className="task1 w-25 border-4 border border-light d-flex align-items-center justify-content-end rounded-5 z-3" style={{height:"4rem",transform:"translateX(2rem)"}}>
       <div className="way1 w-75 border border-1 border-light rounded-4 " style={{height:"5rem",transform:"scale(0.8)"}}>
        < img className='portrait w-100 h-100 rounded-4 end-0' src={idea} alt="" style={{transform:"translateX()translateY()"}}/>
        </div>
       </div>


       <div className="task2 w-25 border-4 border border-light d-flex align-items-center justify-content-start rounded-5 z-3" style={{height:"4rem",transform:"translateX(-2rem)translateY(-4px)"}}>
       <div className="way1 w-75 border border-1 border-light rounded-4 " style={{height:"5rem",transform:"scale(0.8)"}}>
        < img className='portrait w-100 h-100 rounded-4 end-0' src={plan} alt="" style={{transform:"translateX()translateY()"}}/>
        </div>
       </div>


       <div className="task3 w-25 border-4 border border-light d-flex align-items-center justify-content-end rounded-5 z-3" style={{height:"4rem",transform:"translateX(2rem)translateY(-8px)"}}>
       <div className="way3 w-75 border border-1 border-light rounded-4 " style={{height:"5rem",transform:"scale(0.8)"}}>
        < img className='portrait  w-100 h-100  rounded-4 end-0' src={operate} alt="" />
        </div>
       </div>


       <div className="task4 w-25 border-4 border border-light d-flex align-items-center justify-content-start rounded-5 z-3" style={{height:"4rem",transform:"translateX(-2rem)translateY(-12px)"}}>
       <div className="way4 w-75 border border-1 border-light rounded-4 " style={{height:"5rem",transform:"scale(0.8)"}}>
        < img className='portrait  w-100 h-100 rounded-4 end-0' src={coding} alt="" />
        </div>
       </div>


       <div className="task5 w-25 border-4 border border-light d-flex align-items-center justify-content-end rounded-5 z-3" style={{height:"4rem",transform:"translateX(2rem)translateY(-16px)"}}>
       <div className="way5 w-75 border border-1 border-light rounded-4 " style={{height:"5rem",transform:"scale(0.8)"}}>
           < img className='portrait  w-100 h-100   rounded-4 end-0' src={building} alt="" />
        </div>
       </div>

       <div className="task6 w-25 border-4 border border-light d-flex align-items-center justify-content-start rounded-5 z-3" style={{height:"4rem",transform:"translateX(-2rem)translateY(-20px)"}}>
       <div className="way6 w-75 border border-1 border-light rounded-4 " style={{height:"5rem",transform:"scale(0.8)"}}>
        < img className='portrait  w-100 h-100  rounded-4 end-0' src={dovelop} alt="" />
        </div>
       </div>


       <div className="task7 w-25 border-4 border border-light d-flex align-items-center justify-content-end rounded-5 z-3" style={{height:"4rem" ,transform:"translateX(2rem)translateY(-24px)"}}>
       <div className="way7 w-75 border border-1 border-light  rounded-4 " style={{height:"5rem",transform:"scale(0.8)"}}>
        < img className='portrait  w-100 h-100  rounded-4 end-0' src={deploy} alt="" />
        </div>
       </div>

       <div
       
       className="strip position-absolute bg-primary z-0"  ></div>

 </div>




 





      </div>






 




 


 
 
 
       

        

 


 
    

 

      </div>
    </div>
  )
}

export default About
