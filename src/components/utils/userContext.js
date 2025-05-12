import { createContext } from "react";
const userContext = createContext({
    loginUser : 'Default User',
})
export default userContext;
// Now we can Access the userContext anywhere in our app
// Let's Access user Context inside the header
// After accessing the user Context inside the header let us accessing the user Context inside the Card
// After accessing the user Context inside the card let us accessing the user Context inside the about us page and learn how can we use Context inisde the class Based Component
// After using the Context inside the Class Based Component Let us try to update the default value of the loginUser