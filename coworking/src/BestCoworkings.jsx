import Article from "./Article"

function BestCoworkings({coworkingsFromFakeApi}) {

    return(
        <section className="coworkings-section best-coworking-section">
            <h2>Les meilleurs coworkings</h2>
            {coworkingsFromFakeApi.map(coworking => (
                (coworking.rating >= 4) && (
                <Article coworking={coworking} />
            )))}
        </section>
    )
}

export default BestCoworkings