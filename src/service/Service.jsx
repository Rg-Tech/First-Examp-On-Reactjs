import React,{Component} from 'react';
import { useParams} from 'react-router-dom'
class Service extends Component {

    render() {
        const params =useParams();
        console.log(params);
        return (
            <>
                 <h1>Hello this Service Page;</h1>
            </>
        )
    }
}

export default Service;