import Article from "./Article"

function BestCoworkings({coworkingsFromFakeApi}) {

    return(
        <>
            <h2>Les meilleurs coworkings</h2>
            {coworkingsFromFakeApi.map(element => (
                (element.rating >= 4) && (
                <Article element={element} />
            )))}
        </>
    )
}

export default BestCoworkings