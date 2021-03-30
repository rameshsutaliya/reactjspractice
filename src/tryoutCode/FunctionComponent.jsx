import React from "react";

function MyInfo() {
    return<div>
        <h1>Ramesh Sutaliya</h1>
        <p>
            A Software engineer. Currently working at xyz company. I completed xx degree from yy university in yyyy.
            I basically knows these technologies: HTML, CSS, JavaScript, React, MySql, DynamoDB, Java, Python, C++,
            Git, data structure, Algorithms, CD/CI etc.
        </p>
        <div>
            <div>
                My Top three Likes:
                <ol>
                    <li>
                        Chess
                    </li>
                    <li>
                        Code
                    </li>
                    <li>
                        Travel
                    </li>
                </ol>
            </div>
            <div>
                Other likes:
                <ul>
                    <li>Reading</li>
                    <li>Writing</li>
                    <li>Astrology & Physics</li>
                </ul>
            </div>
        </div>
    </div>;
}

export default MyInfo;