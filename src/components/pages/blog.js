import React from 'react'
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <h2>
                Python Exercises
            </h2>

            <div>
                <Link to="/about-me">Read More about who I am</Link>
            </div>
        </div>
    )    
}