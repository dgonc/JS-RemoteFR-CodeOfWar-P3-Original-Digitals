import { Form } from "react-router-dom"

function UserForm() {
    return (
        <Form method="post">
            <label htmlFor="email">Email</label>{" "}
            <input type="text" id="email" name="email" /><br/>
            <label htmlFor="password">Password</label>{" "}
            <input type="text" id="password" name="password" /><br/>
            <label htmlFor="firstname">Firstname</label>{" "}
            <input type="text" id="firstname" name="firstname" /><br/>
            <label htmlFor="lastname">Lastname</label>{" "}
            <input type="text" id="lastname" name="lastname" /><br/>
            <button type="submit">Ajouter</button>
        </Form>
    );
}

export default UserForm;