import React, { Component } from 'react';
import './styles.css';

// $(document).ready(function () {
//     $(document).on("click", ".super-button", function () {
//         $(".main, .half, .overlay, .button-line, .super-button, .content").addClass("active");
//         setTimeout(function () {
//             $(".main *").css("z-index", "1");
//         }, 3000);
//     });
// });
class HulkClick extends Component {
    handleClick = () => {
        console.log('This is the hulk');
    }

    render() {
        return (
            <button onClick={this.handleClick}>Move the hulk</button>
        )
    }
}
export default HulkClick;