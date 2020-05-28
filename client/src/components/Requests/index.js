import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const Requests = () => {

    const [state, dispatch] = useStoreContext();

    let curUser = state.curUser;

    const acceptRequest = async (id) => {
        console.log("accept request");

        const userIds = {
            curId: state.curUser._id,
            otherId: id
        }

        console.log(userIds);

        await API.removeRequests(userIds);
        await API.saveCollab(userIds);

        for (let i = 0; i < curUser.requestors.length; i++) {
            if (curUser.requestors[i] === id) {
                curUser.requestors[i].splice(i, 1);
            }
        }

        console.log(curUser);

        dispatch({type: "SAVE_CURRENT_USER", user: curUser});

    }

    const denyRequest = async (id) => {
        console.log("deny request");

        const userIds = {
            curId: state.curUser._id,
            otherId: id
        }

        console.log(userIds);

        await API.removeRequests(userIds);

        dispatch({type: "SAVE_CURRENT_USER", user: curUser});
    }


    return (  
    <div>
        <h4>You have new collaborate requests!</h4>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {state.curUser.requestors.map(request => (
                <tr key={request._id}>
                    <td>{request.name}</td>
                    <td>{request.skills}</td>
                    <td>{request.email}</td>
                    <td>{request.phone}</td>
                    <td>
                        <button onClick={() => acceptRequest(request._id)}>Accept</button>
                        <button onClick={() => denyRequest(request._id)}>Deny</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

  
  export default Requests;