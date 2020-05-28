import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";

const Collabs = () => {

    const [state, dispatch] = useStoreContext();

    return (  
    <div>
        <h4>Your collaborators.</h4>
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
            {state.curUser.collaborators.map(collab => (
                <tr key={collab._id}>
                    <td>{collab.name}</td>
                    <td>{collab.skills}</td>
                    <td>{collab.email}</td>
                    <td>{collab.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

  
  export default Collabs;