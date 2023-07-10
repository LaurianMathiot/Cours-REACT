import Article from "./Article"

function AllCoworkings({coworkingsFromFakeApi}) {

    return(
        <>
            <h2>Tous les coworkings</h2>
            {coworkingsFromFakeApi.map((element) => (
                <Article element={element}/>
            ))}
        </>
    )
}

export default AllCoworkings