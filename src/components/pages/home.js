import React, {Component} from 'react';

class home extends React.Component{
    render(){
        return(
<div>
<div id="myNavbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
            <a href="#" class="navbar-brand">Media</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#header">Home</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#team">Devlopers</a></li>
                <li><a href="#client">clients</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </div>
    </div>
</div>
   

 <div>
 <div id="header" class="header">
     <div class="container">
         <div class="row">
             <div class="col-lg-6 col-md-6 wow bounceInLeft">
                 <h1>Exposys</h1>
                 <p>This page is about the information regarding exposytem.This is a product management system inorder to Keep the records of the goods or products which are to be exported from a particular godowns or ware houses</p>
                 <a href="http://127.0.0.1:8000/polls" class="btn btn-lg btn-success" role="button" >Redirect to Portal</a>
             </div>
             <div class="col-lg-6 col-md-6 wow bounceInRight">
                 <img src="packosys/images/Responsive-Web-Design.png" alt=""/>
             </div>
         </div>
     </div>
 </div>
 </div>

 
 <div id="services" class="services">
     <div class="container">
         <h2 class="wow fadeInUp">Services</h2>
         <p class="wow fadeInUp" data-wow-delay="0.4">All the services provided are mentioned below</p>
         <div class="row">
             <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.8s">
                 <i class="fa fa-desktop" aria-hidden="true"></i>
                 <h4>webapp info</h4>
                 <p>The information regardinh the products for the company base</p>
             </div>
             <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.4s">
                <i class="fas fa-map-marked-alt" aria-hidden="true"></i>
                 <h4>Product Status</h4>
                 <p>To know the status of the package or product</p>
             </div>
             <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.8s">
                 <i class="fa fa-database" aria-hidden="true"></i>
                  <h4>Database</h4>
                 <p>Maintaining,Updation,Deletion and Addind details to the database </p>
             </div>
             <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.4s">
                <i class="fas fa-tasks" aria-hidden="true"></i>
                 <h4>Tasks</h4>
                 <p>Complete the tasks given to the employee</p>
             </div>
         </div>
     </div>
 </div>
  
<div>
 
 
<div id="team" className="team">
    <div className="container">
        <div className="row">
            <h2 className="wow fadeInUp"> Devlopers</h2>
            <p className="wow fadeInUp" data-wow-delay="0.4"></p>
    <div className="col-lg-3 col-md-3 wow fadeInLeft" > </div>
         <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1s">
                <img src="packosys/images/veer.jpg" className="img-circle" alt=""/>
                <h4>Veeresh K</h4>
                <b>Frontend Dev</b>
                <p></p>
                <a href="/#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="/#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="/#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="/#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
            </div>
            <div className="col-lg-3 col-md-3  wow bounceInRight"  data-wow-delay="1s">
                <img src="packosys/images/chai.jpg" className="img-circle" alt=""/>
                <h4>Chaitanya V</h4>
                <b>Backend Dev</b>
                <p></p>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
           
        </div>
        </div>
    </div>
</div>
</div>

<div>x
<div id="client" class="clients">
    <div class="container">
        <div class="row">
            <h2 class="wow fadeInUp">Trusted by</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4">The top 4 Mncs leading in the world </p>
            <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="2s">
                <li><img src="packosys/images/clients/58428e7da6515b1e0ad75ab5.png" alt=""/></li>
                
            </div>
            <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.6s">
                <li><img src="packosys/images/clients/580b57fcd9996e24bc43c518 (1).png" alt=""/></li>
            </div>
            <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.2s">
                <li><img src="packosys/images/clients/client3.png" alt=""/></li>
            </div>
            <div class="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.8s">
                <li><img src="packosys/images/clients/client4.png" alt=""/></li>
            </div>
        </div>
    </div>
</div>
</div>

<div>
<div id="contact" class="contact">
    <div class="container .bg-success">
        <div class="row">
            <h2 class="wow fadeInUp">Contact</h2>
            <p class="wow fadeInUp" data-wow-delay="0.4">Fell free to give your valuble suggestions</p>
            <div class="col-lg-6 col-md-6">
                <div class="input-group input-group-lg wow fadeInUp" data-wow-delay="0.8s">
                    <span class="input-group-addon" id="sizing-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon1" placeholder="Full Name"/>
                </div>
                <div class="input-group input-group-lg wow fadeInUp" data-wow-delay="1.2s">
                    <span class="input-group-addon" id="sizing-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon1" placeholder="Email Address"/>
                </div>
                <div class="input-group input-group-lg wow fadeInUp" data-wow-delay="1.6s">
                    <span class="input-group-addon" id="sizing-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon1" placeholder="Phone Number"/>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="input-group wow fadeInUp" data-wow-delay="2s">
                    <textarea name="" id="" cols="80" rows="6" class="form-control"></textarea>
                </div>
                <button class="btn btn-lg wow fadeInUp" data-wow-delay="2.4s">Submit Your Message</button>
            </div>
        </div>
    </div>
</div>
</div>

 
 <div id="footer" class="footer">
     <div class="container">
         <div class="row">
             <div class="col-lg-4 col-md-4">
                 <h4 class="wow fadeInUp">Contact Us</h4>
                 <p><i class="fa fa-home" aria-hidden="true"></i> 111 Wall Street, New York, 22222</p>
                 <p><i class="fa fa-envelope" aria-hidden="true"></i> info@media.com</p>
                 <p><i class="fa fa-phone" aria-hidden="true"></i> +1 222 222 2222</p>
                 <p><i class="fa fa-globe" aria-hidden="true"></i> www.media.com</p>
             </div>
             <div class="col-lg-4 col-md-4">
                 <h4>About</h4>
                 <p><i class="fa fa-square-o" aria-hidden="true"></i> About Us</p>
                 <p><i class="fa fa-square-o" aria-hidden="true"></i> Privacy</p>
                 <p><i class="fa fa-square-o" aria-hidden="true"></i> Term & Condition</p>
             </div>
             <div class="col-lg-4 col-md-4">
                 <h4>Stay in touch</h4>
                 <i class="social fa fa-facebook" aria-hidden="true"></i>
                 <i class="social fa fa-twitter" aria-hidden="true"></i>
                <i class="social fa fa-linkedin" aria-hidden="true"></i>
                <i class="social fa fa-pinterest" aria-hidden="true"></i>
                <i class="social fa fa-youtube" aria-hidden="true"></i>
                <i class="social fa fa-github" aria-hidden="true"></i><br/>
                <input type="email" placeholder="Subscribe For Updates"/><button class="btn btn-success">Subscribe</button>
             </div>
         </div>
     </div>
 </div>
</div>


        )
    }
}
export default home;