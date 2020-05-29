import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";

const Requested = () => {

    const [state, dispatch] = useStoreContext();

    console.log(state);


    return (  
    <div>
        <h4>These people have not responded to your collaborate request:</h4>
        <table id="people">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            {state.curUser.requests.map(request => (
                <tr key={request._id}>
                    <td key={request._id}>{request.name}</td>
                    <td>
                        {request.skills.map(skill => (
                            <p className="eachskill" key={request._id}>{skill}  </p>
                        ))}
                    </td>
                    <td key={request._id}>{request.email}</td>
                    <td key={request._id}>{request.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

  
  export default Requested;