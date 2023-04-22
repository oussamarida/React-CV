import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Certification() {

   
    return (
        <div className='container mt-4'>

<section className='section'>
  <div className='project-container row'>
    <div className='project-card col-12 col-md-4 mb-4'>
      <Card  className="card" style={{backgroundColor :"black"}} >
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        DevOps, Cloud, and Agile Foundations
      

        </div>
      
          <a href="https://www.coursera.org/account/accomplishments/specialization/38J3AZB5QSZM" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Go to Coursera</a>
      </Card>
    </div>
    <div className='project-card col-12 col-md-4 mb-4'>
      <Card  className="card" style={{backgroundColor :"black"}} >
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        Developing Back-End Apps with Node.js and Express
      

        </div>
      
          <a href="https://www.coursera.org/account/accomplishments/verify/MQVCDVFZ3TD9" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Go to Coursera</a>
      </Card>
    </div>
  
    <div className='project-card col-12 col-md-4 mb-4'>
      <Card className="card" style={{backgroundColor :"black"}}>
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        Data Collection and Processing with Python
        </div>
        <a href="https://www.coursera.org/account/accomplishments/verify/WH64L5W9RX2D" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Go to Coursera</a>

        
      </Card>
    </div>
  </div>
</section>


        </div>
    )
}

