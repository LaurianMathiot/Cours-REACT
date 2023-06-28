function Profile() {

    const userInfosFromFakeApi = {
        firstName: "John",
        lastName: "Doe",
        age: 42,
        email: "contact@johndoe.fr",
        phone: "0123456789",
        adress: "1 rue de la Paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        job: "Développeur web"
        };

    
    return (
        <div className="profile-infos">
            <div><h2>Profil</h2></div>
            <div className="name-age">
                <h3>{userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</h3>
                <p>{userInfosFromFakeApi.age} ans</p>
            </div>
            <h4>{userInfosFromFakeApi.job}</h4>
            <p>{userInfosFromFakeApi.email}</p>
            <p className="phone"><strong>{userInfosFromFakeApi.phone}</strong></p>
            <p>{userInfosFromFakeApi.adress}</p>
            <p>{userInfosFromFakeApi.zipCode} {userInfosFromFakeApi.city}, {userInfosFromFakeApi.country}</p>
        </div>
    );
  }
  
  export default Profile;