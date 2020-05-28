import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";

const Requested = () => {

    const [state, dispatch] = useStoreContext();


    return (  
    <div>
        <h4>These people have not accepted your collaborate request.</h4>
        <table>
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
                    <td>{request.name}</td>
                    <td>{request.skills}</td>
                    <td>{request.email}</td>
                    <td>{request.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

  
  export default Requested;