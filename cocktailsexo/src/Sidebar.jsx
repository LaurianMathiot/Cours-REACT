
const Sidebar = ({userFromApi}) => {

    return (
        <div className="sidebar">
            <div className="profile-infos">
                <h2>Profil</h2>
                <div className="name-age">
                    <h3>{userFromApi.firstName} {userFromApi.lastName}</h3>
                    <p>{userFromApi.age} ans</p>
                </div>
                <h4>{userFromApi.job}</h4>
                <p>{userFromApi.email}</p>
                <p className="phone"><strong>{userFromApi.phone}</strong></p>
                <p>{userFromApi.adress}</p>
                <p>{userFromApi.zipCode} {userFromApi.city}, {userFromApi.country}</p>
            </div>
        </div>
    )
}

export default Sidebar