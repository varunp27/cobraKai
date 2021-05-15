import React from 'react';

export default class AboutUs extends React.Component {


    render() {
        return(
            <div className='aboutus-body'>
                <h1>About Us</h1>

                <p>
                    <strong>Aware</strong> is a serverless website that allows users 
                    to upload their Facebook data, understand how Facebook is using their data, 
                    and how they are using Facebook. Aware was built using ReactJS and D3. 
                    Aware does not use, store, or share any data that users upload, 
                    as we do no maintain a database or server to do so.
                </p>
                
                <h3>Our Privacy Statement:</h3>
                <p>
                    We value privacy, so we will not store any of the data you upload. 
                    Once you finish reviewing our insights and finish your session, 
                    your data will be permanently deleted from our systems. 
                    Our intention behind creating this app is solely to educate Facebook users 
                    about what data is stored on them and how it is used.
                </p>

                <h3>Our Demo Video:</h3>
                <iframe width="900" height="506"
                    src="https://www.youtube.com/embed/xklzK51ZbK0">
                </iframe>

                <h3>Team Members:</h3>
                <p>Shray Arora : shray8@uw.edu</p>
                <p>Trevor Leung : trevor22@uw.edu</p>
                <p>Varun Patel : varunp27@uw.edu</p>
                <p>Ranjith Ramkishore : ranjith.ramkishore@gmail.com</p>


                <h3>GitHub Repo:</h3>
                <p className="bottom-aboutus"><a href='https://github.com/varunp27/cobraKai'>Aware Github Repo</a></p>
                <p id="help">With help from Yim Register, iPhD Student</p>
            </div>
        )
    }
}