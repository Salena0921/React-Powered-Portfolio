import React from 'react';
import Card from '../../Card/Card';

const web = (props) => {
    return(
        <div className="container">
            <h1>Web and Applications Portfolio</h1>
            <div className="row">
                <div className="col-3">
                   <Card
                    
                   />
                </div>
                <div className="col-3">
                   <Card/>
                </div>
                <div className="col-3">
                   <Card/>
                </div>
                <div className="col-3">
                   <Card/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                   <Card/>
                </div>
                <div className="col-3">
                   <Card/>
                </div>
                <div className="col-3">
                   <Card/>
                </div>
                <div className="col-3">
                   <Card/>
                </div>
            </div>
        </div>
    );
};

export default web;