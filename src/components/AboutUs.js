import React from 'react';

export default class AboutUs extends React.Component {


    render() {
        return(
            <div className='aboutus-body'>
                <h1>About Us</h1>

                <h5><strong>Aware</strong> is a serverless website that allows users to upload their Facebook data, understand how Facebook is using their data, and how they are using Facebook. Aware was built using ReactJS and D3. Aware does not use, store, or share any data that users upload, as we do no maintain a database or server to do so.</h5>

                <iframe width="900" height="506"
                    src="https://www.youtube.com/embed/17jBk_iGfGQ">
                </iframe>

                <h3>Team Members</h3>
                <p>Shray Arora : shray8@uw.edu</p>
                <p>Trevor Leung : trevor22@uw.edu</p>
                <p>Varun Patel : varunp27@uw.edu</p>
                <p>Ranjith Ramkishore : ranjith.ramkishore@gmail.com</p>


                <h5>Here's a link to our github repo</h5>
                <p className="bottom-aboutus"><a href='https://github.com/varunp27/cobraKai'>Aware Github Repo</a></p>
                <p>With help from Yim Register, iPhD Student</p>
            </div>
        )
    }
}