import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fbDataRequest } from '../utils/services/fbDataRequest';
import { Form, Button } from "semantic-ui-react";
import DisplayPosts from "../utils/DisplayPosts";
import DisplayPost from "../utils/DisplayPost";


export class TrackPath extends Component {

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         value: value
    //     };
    // }


    render() {

        let Content;
        console.log(window.location.pathname.split('/'));

        if (0 === 0){
            Content = (
                <div>
                </div>
            )
        } else if (this.state.displayOption === 1){
            Content = (
                <div>
                </div>
            )
        }
        //     Content = (
        //         <div>
        //             <DisplayPosts posts={this.state.dataPosts} />
        //             <br />
        //             <Button onClick={this.handleBack}>Back</Button>
        //         </div>
        //     )
        // } else if (this.state.displayOption === 2){
        //     Content = (
        //         <div>
        //             <DisplayPost />
        //             <br />
        //             <Button onClick={this.handleBack}>Back</Button>
        //         </div>
        //     )
        // }


        return (
            <div>
                    {Content}
            </div>
        );
    }


}



export default TrackPath;
