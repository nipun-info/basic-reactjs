
// export default function Person() {
//     return (
//         <div>
//             <h2>I aam a person component</h2>
//         </div>
//     );
// }

import { Component } from "react";

export default class Person extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2> </h2>
                <p>Name: {this.props.name} and Age: {this.props.age}</p>
            </div>
        )
    }
}

