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

        let profile = await API.getProfileInfo(state.curUser.email);
        dispatch({type: "SAVE_CURRENT_USER", user: profile.data});

    }

    const denyRequest = async (id) => {
        console.log("deny request");

        const userIds = {
            curId: state.curUser._id,
            otherId: id
        }

        console.log(userIds);

        await API.removeRequests(userIds);
        let profile = await API.getProfileInfo(state.curUser.email);

        dispatch({type: "SAVE_CURRENT_USER", user: profile.data});
    }


    return (  
    <div>
        <h4>Collaborate requests:</h4>
        <table id="people">
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
                    <td>
                        {request.skills.map(skill => (
                            <p className="eachskill" key={request._id}>{skill}  </p>
                        ))}
                    </td>
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