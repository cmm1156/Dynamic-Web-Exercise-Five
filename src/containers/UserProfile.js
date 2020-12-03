import React from "react";
import UserProfileComponent from "../components/UserProfileComponent";

// userInformation is being passed into the function as a prop
// this is function is essentially just passing down userInformation to the UserProfileComponent
function UserProfile({ userInformation }) {
  return (
    <div>
      <h1>User Profile</h1>
      {/*this userInformation={userInformation} sets the default parameter to the userInformation prop/parameter from this function 
      SEE UserProfileComponent
      This function is just sending down the user prop
      this step technically is not necessary in this case, but is helpful for larger websites */}
      <UserProfileComponent userInformation={userInformation} />
    </div>
  );
}

export default UserProfile;
