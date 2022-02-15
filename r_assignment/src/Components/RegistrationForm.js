import { useState } from "react";
import ThankYou from "./ThankYou";

const RegistrationForm = () => {

    const [show,setShow] = useState(false)
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        education: "",
        bio: "",
        dob: ""
    });

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {

        let myData = "\nForm data:\n" +
            "\nFirst Name: " + user.firstName +
            "\nLast Name: " + user.lastName +
            "\nEmail: " + user.email +
            "\nEducation: " + user.education +
            "\nBio: " + user.bio +
            "\nDOB: " + user.dob;
        alert(myData);
        setShow(true);

       

    };


    return (
        <div className="formbg">

          {show ? <ThankYou /> :(
            <form onSubmit={handleSubmit}>

                <div>
                    <input
                        type="text"
                        name="firstName"
                        autoComplete="off"
                        value={user.firstName}
                        onChange={handleInput}
                        placeholder="First Name"
                        required />
                </div>
                <div>
                    <input
                        type="text"
                        name="lastName"
                        autoComplete="off"
                        placeholder="Last Name"
                        value={user.lastName}
                        onChange={handleInput}
                        required />
                </div>
                <div>
                    <input
                        type="email"
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                        name="email"
                        placeholder="Email"
                        required />
                </div>
                <div>
                    <input
                        type="text"
                        name="education"
                        autoComplete="off"
                        value={user.education}
                        onChange={handleInput}
                        placeholder="Education"
                        required />
                </div>
                <div>
                    <textarea
                        autoComplete="off"
                        value={user.bio}
                        onChange={handleInput}
                        name="bio"
                        placeholder="Bio" required>
                    </textarea>
                </div>
                <div>
                    <input
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                        value={user.dob}
                        onChange={handleInput}
                        date={new Date().toString()} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                
             <div>
               
             </div>
            </form>

          )}
        </div>
    );
}

export default RegistrationForm;    