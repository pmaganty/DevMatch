import React from "react";
import Header from "../components/Header";
import { useAuth0 } from "../react-auth0-spa"; //FOR AUTH
import ProfileHeader from "../components/ProfileHeader";
import ProfileContent from "../components/ProfileContent";

function Profile() {
  
    const { loading, user } = useAuth0();

    if (loading || !user) {
      return <div>Loading...</div>;
    }

    return (
    <div>
        {/* <AuthHeader /> */}
        <Header />
        <ProfileHeader />
        <ProfileContent />

        {/* <img src={user.picture} alt="Profile" />

        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code> */}
    </div>
  );
}

export default Profile;