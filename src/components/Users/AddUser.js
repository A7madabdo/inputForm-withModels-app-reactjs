import React from "react";

import Styles from "./AddUser.module.css";

const AddUser = (props) => {

    const AddUserHundluer = event =>{
        event.preventDefault();
    }

    return (
        <form onSubmit={AddUserHundluer}>
            <lable htmlFor="username">User Name</lable>
            <input className={Styles.input} type="text" id="username" />
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" />
            <button className={Styles.btn} type="submit">Add User</button>
        </form>
    )
}

export default AddUser;
