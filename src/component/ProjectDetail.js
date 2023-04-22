import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDetail() {

  const projets = [
    {
      title: "Taxi App",
      Link:"https://github.com/oussamarida/Taxi-api-django"

    },
    {
      title: "Pokedex flutter app",
      Link:"https://github.com/oussamarida/pokemon-flutter-dart-Api"
    },
    {
      title: "Location Voiture",
      Link:"https://github.com/oussamarida/location-voiture"
    },
    
  ];

  return (
    <div style={{ paddingTop: '5vh' }}>
      <section className="row justify-content-center" style={{ padding: '10vh 10vh 10vh 10vh' }}>
        {projets.map((projet, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4" >
            <div className="card" style={{backgroundColor :"black"}}>
              <div className="card-body">
                <h5 className="card-title" style={{textAlign: "center" , color:"white"}}>{projet.title}</h5>
                <p className="card-text" style={{textAlign: "center" , color:"white"}}>{projet.description}</p>
                <a href={projet.Link} className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Go to github</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default ProjectDetail;
