import React from 'react';

const aboutme = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-img-top"> turn into img element</div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutme;