import React from 'react';
import img from '../asset/man1.png';
import './Home.css';

const Home = () => {
  return (
    <>
         <div className="container">
            <div className="ribbon">
                <div className="reb"></div>
            </div>
            <div className="contain">
                <div className="btn">
                    Company Name
                </div>
                <div className="para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Modi repellendus odit cumque sapiente, aspernatur quo expedita 
                    quia harum nam deserunt totam. Illo consequatur mollitia maxime 
                    tempora delectus quas, eius soluta dolore dolorem? Unde, reprehenderit 
                    eaque autem explicabo tenetur consequuntur impedit nulla consectetur 
                    alias dolorem, error porro facere incidunt. Omnis deleniti dolorem 
                    nesciunt optio vel odio, accusamus perspiciatis voluptates sint qui 
                    quia, molestiae rerum sequi, expedita aliquid pariatur est blanditiis 
                    magni?
                </div>
                <div className="dot"></div>
                <div className="head1">Meet our team</div>
                <div className="btn" id='btn1'>
                    Leadership / Management Team
                </div>
                
                <div className="teams">
                    <div className="col">
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Founder name]</div>
                            <div className="subTitle">Founder/CEO</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Founder name]</div>
                            <div className="subTitle">Founder/CEO</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[VP name]</div>
                            <div className="subTitle">VP,Development & Growth</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[VP name]</div>
                            <div className="subTitle">VP, Sales & Marketing</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[VP name]</div>
                            <div className="subTitle">VP, Finance & Operation</div>
                        </div>
                    </div>
                </div>

<div className="header">
<div className="ribbon1"></div>
                <div className="btn" id='btn1'>
                    Development Team
                </div>
</div>
                
                
                <div className="teams">
                    <div className="col">
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Developer Name]</div>
                            <div className="subTitle">Team Lead,SE</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Developer Name]</div>
                            <div className="subTitle">Software Engineer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Developer Name]</div>
                            <div className="subTitle">Software Engineer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Developer Name]</div>
                            <div className="subTitle">Software Engineer</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Developer Name]</div>
                            <div className="subTitle">Software Engineer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Developer Name]</div>
                            <div className="subTitle">Software Engineer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Developer Name]</div>
                            <div className="subTitle">Software Engineer</div>
                        </div>
                    </div>
                </div>

                <div className="header">

                <div className="btn" id='btn1'>
                    Sales and marketing Team
                </div>
                <div className="ribbon2"></div>
                </div>

                <div className="teams">
                    <div className="col">
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Employee Name]</div>
                            <div className="subTitle">Team Lead</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Employee Name]</div>
                            <div className="subTitle">Sales Officer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Employee Name]</div>
                            <div className="subTitle">Sales Officer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Employee Name]</div>
                            <div className="subTitle">Sales OfficerO</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Founder name]</div>
                            <div className="subTitle">Marketing Officer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Founder name]</div>
                            <div className="subTitle">Marketing Officer</div>
                        </div>
                        <div className="lead1">
                            <img src={img} alt="" />
                            <div className="title">[Founder name]</div>
                            <div className="subTitle">Marketing Officer</div>
                        </div>
                    </div>
                   
                </div>
                
                
            </div>
            
        </div>
        <div className="ribbon3">
            <div className="rib"></div>
        </div>
    </>
  )
}

export default Home