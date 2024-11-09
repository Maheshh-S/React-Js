import React from "react";
import UserContext from "./UserContext";

// Define a provider component to manage the user context state
const UserContextProvider = ({ children }) => {
    // Create a `user` state to store user information, initially set to `null`
    const [user, setUser] = React.useState(null);

    return (
        // Use the Provider component to make `user` and `setUser` accessible to child components
        <UserContext.Provider value={{ user, setUser }}>
            {children} {/* Render any child components passed as children */}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
