function Header() {

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
        <header className="main-header">
            <div className="img-container"><svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080"><defs></defs><path className="cls-1" d="m361.04,572.94l1.4,8.53c1.17,8.46,2.22,17.51,3.14,27.18.92,9.66,1.39,19.29,1.42,28.86.02,9.58-.79,18.88-2.41,27.91-1.63,9.03-4.5,17.28-8.61,24.73-4.11,7.46-9.65,13.74-16.59,18.86-6.95,5.12-15.84,8.57-26.67,10.35-11.7,1.93-22.37,1-32.01-2.79-9.64-3.79-18.08-9.47-25.34-17.03s-13.16-16.41-17.72-26.53c-4.56-10.12-7.74-20.63-9.54-31.55-.79-4.78-1.18-10.2-1.18-16.28s.77-11.87,2.31-17.38c1.54-5.51,3.92-10.34,7.13-14.49,3.21-4.15,7.74-6.71,13.59-7.67,6.28-1.04,11.29.01,15.04,3.13,3.74,3.12,6.75,7.25,9.05,12.36,2.29,5.12,4.16,10.77,5.63,16.95,1.46,6.19,2.96,11.9,4.49,17.14,1.53,5.24,3.41,9.55,5.63,12.92,2.23,3.37,5.29,4.74,9.19,4.1,4.55-.75,7.79-3.39,9.71-7.91,1.93-4.52,3.03-9.67,3.3-15.44.27-5.77.1-11.52-.51-17.27-.61-5.74-1.18-10.2-1.71-13.39-2.1-12.74-5.18-25.03-9.24-36.86-4.07-11.83-8.64-23.75-13.74-35.77-2.57-6.12-5.26-12.33-8.08-18.65-2.82-6.31-4.77-12.76-5.86-19.37-1.27-7.73-.36-14.37,2.73-19.9,3.1-5.53,8.43-8.93,16.02-10.17,5.63-.93,10.27-.47,13.92,1.39,3.64,1.85,7.47,4.79,11.47,8.8,6.14,6.23,11.64,13.63,16.5,22.17,4.86,8.55,9.07,17.56,12.63,27.01,3.56,9.46,6.59,19.07,9.09,28.82,2.49,9.75,4.44,18.84,5.83,27.26Z"/><path className="cls-1" d="m477.74,695.69c-13.22,2.18-25.27.6-36.17-4.73-10.89-5.33-20.51-13.33-28.83-24-8.32-10.66-15.33-23.47-21.02-38.43-5.69-14.95-9.94-30.96-12.75-48.03-2.62-15.92-3.61-32.36-2.94-49.29.66-16.93,3.37-32.57,8.13-46.91,4.76-14.33,11.75-26.59,20.99-36.76,9.23-10.16,21.21-16.46,35.95-18.89,14.3-2.36,26.94-.29,37.91,6.2,10.97,6.49,20.39,15.69,28.25,27.6,7.86,11.91,14.35,25.62,19.46,41.14,5.11,15.52,8.98,31.24,11.61,47.16,2.92,17.75,4.01,34.81,3.25,51.17-.76,16.37-3.55,31.14-8.39,44.32-4.84,13.19-11.83,24.15-20.96,32.9-9.13,8.75-20.63,14.27-34.5,16.55Zm-27.46-191.08c-4.12.68-7.36,2.96-9.72,6.86-2.36,3.89-4.06,8.79-5.09,14.69-1.03,5.9-1.41,12.39-1.13,19.47.28,7.09,1,14.15,2.16,21.2,1.31,7.97,3.11,15.85,5.4,23.65,2.29,7.81,4.93,14.73,7.93,20.78,3,6.05,6.28,10.77,9.84,14.15,3.56,3.39,7.4,4.74,11.52,4.06,4.76-.78,8.14-3.91,10.14-9.38,1.99-5.46,3.22-11.86,3.68-19.18.46-7.32.35-14.78-.35-22.38-.7-7.6-1.45-13.9-2.28-18.9-1.01-6.14-2.46-12.56-4.34-19.27-1.89-6.7-4.17-12.81-6.86-18.33-2.69-5.52-5.76-9.97-9.21-13.38-3.46-3.4-7.35-4.75-11.68-4.04Z"/><path className="cls-1" d="m686.77,442.53c2.58,15.7,1.25,30.59-4,44.65-5.25,14.07-13.34,26.44-24.27,37.12,6.72.29,12.74,1.7,18.05,4.21,5.31,2.52,9.93,5.9,13.86,10.16,3.93,4.26,7.2,9.27,9.82,15.03,2.62,5.76,4.47,11.94,5.56,18.54,2.14,12.97,1.13,24.76-3.02,35.38-4.15,10.62-10.26,19.8-18.33,27.56-8.07,7.76-17.43,14.09-28.09,19-10.66,4.91-21.51,8.27-32.56,10.09-6.07,1-12.21,1.54-18.43,1.63-6.22.09-12.23-.56-18.01-1.94-2.06-.36-4.14-2.88-6.25-7.56-2.11-4.68-4.12-10.48-6.04-17.41-1.92-6.92-3.77-14.45-5.55-22.57-1.79-8.12-3.4-15.91-4.85-23.39-1.46-7.47-2.65-14.05-3.58-19.74-.94-5.68-1.59-9.67-1.97-11.94-1.31-7.96-2.63-15.98-3.96-24.06-1.33-8.07-2.44-16.13-3.31-24.17-.34-2.05-.81-5.24-1.41-9.58-.61-4.34-1.29-9.19-2.06-14.56-.77-5.36-1.48-11.03-2.13-17-.65-5.97-1.13-11.56-1.43-16.77-.3-5.21-.26-9.71.11-13.51.38-3.8,1.14-6.26,2.29-7.39,4.42-4.23,9.41-8.39,14.97-12.46,5.56-4.07,11.41-7.78,17.53-11.12,6.13-3.34,12.33-6.24,18.6-8.67,6.28-2.44,12.34-4.13,18.19-5.1,8.01-1.32,15.96-1.4,23.83-.24,7.87,1.16,14.96,3.67,21.27,7.54,6.31,3.87,11.72,9,16.22,15.38,4.5,6.39,7.48,14.02,8.94,22.89Zm-50.98,26.97c-.64-3.87-2.24-6.52-4.82-7.97-2.58-1.44-5.71-1.86-9.39-1.26-3.04.5-6.12,1.71-9.25,3.63-3.14,1.92-5.71,4.22-7.71,6.88-.54.79-.82,2.82-.83,6.1-.02,3.28.14,6.93.47,10.96.33,4.04.73,7.83,1.21,11.37.47,3.55.8,5.89.99,7.02.08.46.2,1.19.37,2.22.17,1.02.4,2.1.7,3.21.29,1.12.62,2.12.99,2.99.36.88.76,1.28,1.2,1.21,3.68-.61,7.24-2.65,10.67-6.14,3.43-3.48,6.37-7.59,8.82-12.32,2.45-4.72,4.31-9.65,5.58-14.77,1.27-5.12,1.61-9.49,1.01-13.14Zm14.94,98.84c-.64-3.87-2.39-6.38-5.25-7.55-2.86-1.16-5.92-1.48-9.17-.94-3.04.5-6.11,1.77-9.22,3.8-3.12,2.04-5.59,4.25-7.42,6.65-.57.57-.87,1.78-.9,3.65-.02,1.88.09,3.9.33,6.08.25,2.18.47,4.25.69,6.2.21,1.95.37,3.27.48,3.95.08.46.22,1.37.45,2.73.23,1.37.51,2.78.87,4.24.35,1.46.79,2.79,1.32,3.99.53,1.2,1.01,1.76,1.45,1.69,3.03-.5,6.24-1.96,9.63-4.39,3.38-2.42,6.42-5.26,9.12-8.51,2.69-3.25,4.77-6.8,6.25-10.67,1.48-3.86,1.94-7.5,1.38-10.92Z"/><path className="cls-1" d="m850.18,475.91c.6,3.64,1.2,8.63,1.8,14.95.59,6.33,1.05,13.15,1.37,20.46.31,7.31.27,14.8-.14,22.46-.41,7.66-1.2,14.69-2.37,21.07-1.17,6.39-2.97,11.71-5.38,15.96-2.42,4.25-5.57,6.7-9.47,7.34-4.77.79-9.23-.99-13.4-5.33-4.17-4.34-8.01-10.13-11.54-17.38-3.53-7.25-6.71-15.42-9.55-24.54-2.84-9.11-5.32-18.11-7.45-26.99-2.13-8.88-3.88-17.12-5.24-24.73-1.37-7.6-2.38-13.45-3.06-17.55-.67-4.1-1.53-9.27-2.56-15.53-1.03-6.25-1.86-12.95-2.48-20.1-.62-7.14-.91-14.28-.86-21.42.05-7.13.79-13.74,2.24-19.82,1.45-6.08,3.83-11.2,7.15-15.37,3.32-4.17,7.9-6.74,13.76-7.7,5.2-.86,9.86.78,13.99,4.88,4.13,4.11,7.83,9.7,11.11,16.75,3.28,7.06,6.15,15.06,8.63,23.99,2.47,8.94,4.59,17.77,6.36,26.47,1.77,8.71,3.21,16.82,4.34,24.35,1.13,7.53,2.05,13.45,2.76,17.77Zm15.18,130.7c.64,3.87.32,7.37-.94,10.5-1.27,3.13-3.15,5.89-5.64,8.29-2.5,2.39-5.3,4.32-8.4,5.76-3.1,1.44-6.28,2.44-9.53,2.97-4.77.79-9.54.22-14.3-1.68-4.77-1.9-7.61-5.7-8.55-11.39-.56-3.41-.16-6.69,1.22-9.84,1.37-3.15,3.3-5.98,5.78-8.49,2.48-2.51,5.3-4.61,8.48-6.3,3.17-1.69,6.27-2.79,9.31-3.29,4.98-.82,9.75-.26,14.3,1.68,4.54,1.94,7.31,5.87,8.28,11.78Z"/></svg></div>
            <nav>
                <ul>
                    <li>Articles</li>
                    <li>Personnes</li>
                    <li>{userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;