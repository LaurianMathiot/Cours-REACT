function Experiences(postsFeedFromFakeApi) {
    const experiencesFromFakeApi = [
        {
            id: 1,
            title: "Développeur front",
            company: "Company 1",
            description: "Développement d'une application web front",
            startDate: "2021-01-01",
            endDate: "2021-02-01",
            isCurrent: false,
        },
        {
            id: 2,
            title: "Développeur back",
            company: "Company 2",
            description: "Développement d'une application web back",
            startDate: "2022-02-01",
            endDate: "2022-03-01",
            isCurrent: false,
        },
        {
            id: 3,
            title: "Développeur fullstack",
            company: "Company 3",
            description: "Développement d'une application web fullstack",
            startDate: "2023-03-01",
            endDate: null,
            isCurrent: true,
        },
    ]; 

    return(
        <div className="experiences-container">
            <div>
                <h2>Experiences</h2></div>
                {experiencesFromFakeApi.map(element => (
                    <div className="experience">
                        <p>{element.startDate} → {element.isCurrent ? <span className="current-experience">aujourd'hui</span> : element.endDate}</p>
                        <h3>{element.title}</h3>
                        <p>{element.company}</p>
                        <p>{element.description}</p>
                    </div>
            ))}
        </div>
    )
  }
  
  export default Experiences;