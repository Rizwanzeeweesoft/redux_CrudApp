import React, { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { EditList, UpdateList } from '../Redux/Actions/action';

const FormEdit = () => {
    const param = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(EditList(param.id))
    }, [])

    const editproduct = useSelector(state => state.posts.items.data)

    const title = editproduct.title
    const body = editproduct.body

    
    console.log('title==', title)
    console.log('body==', body)

    const [editData, seteditData] = useState({
        body: body,
        title: title
    });

    const changeHandle = (e) => {
        seteditData({ ...editData, [e.target.name]: e.target.value })
    }


    // const [Email, setEmail] = useState("");
    // const [Phone, setPhone] = useState("");
    // const [DateofBirth, setDateofBirth] = useState("");
    // const [Password, setPassword] = useState("");
    // const [confirmPassword, setconfirmPassword] = useState("");
    // const [Country, setCountry] = useState("");
    // const [City, setCity] = useState("");
    // const [State, setState] = useState("");


    /////// Error State ////////
    // const [ErrFirstname, SetErrFirstname] = useState();
    // const [ErrLastname, SetErrLastname] = useState();
    // const [ErrEmail, SetErrEmail] = useState();
    // const [ErrCountry, SetErrCountry] = useState();
    // const [ErrCity, SetErrCity] = useState();
    // const [ErrState, SetErrState] = useState();
    // const [ErrPhone, SetErrPhone] = useState();
    // const [ErrDateofBirth, SetErrDateofBirth] = useState();


    const SubmitHandle = (event) => {
        event.preventDefault();

        // var errorcount = 0;

        // if (FirstName === "" || FirstName.trim() === "") {
        //     SetErrFirstname("*FirstName is required.");
        //     errorcount++;
        // }
        // else if (!/^[a-zA-Z ]*$/g.test(FirstName)) {
        //     SetErrFirstname("FirstName contain only letters");
        //     errorcount++;
        // }
        // else {
        //     SetErrFirstname("");
        // }

        // if (LastName === "" || LastName.trim() === "") {
        //     SetErrLastname("*LastName is required.");
        //     errorcount++;
        // }
        // else if (!/^[a-zA-Z ]*$/g.test(LastName)) {
        //     SetErrLastname("LastName contain only letters");
        //     errorcount++;
        // }
        // else {
        //     SetErrLastname("");
        // }

        // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        // if (Email === "" || Email.trim() === "") {
        //     SetErrEmail("*Email is required.");
        //     errorcount++;
        // } else if (!pattern.test(Email)) {

        //     SetErrEmail("*Email is invalid.");
        //     errorcount++;
        // } else {
        //     SetErrEmail("");
        // }

        // if (Country === "" || Country.trim() === "") {
        //     SetErrCountry("*Country is required.");
        //     errorcount++;
        // } else {
        //     SetErrCountry("");
        // }

        // if (City === "" || City.trim() === "") {
        //     SetErrCity("*City is required.");
        //     errorcount++;
        // } else {
        //     SetErrCity("");
        // }

        // if (State === "" || State.trim() === "") {
        //     SetErrState("*State is required.");
        //     errorcount++;
        // } else {
        //     SetErrState("");
        // }

        // if (Phone === "" || Phone.trim() === "") {
        //     SetErrPhone("*Phone number is required.");
        //     errorcount++;
        // } else if (Phone.length < 10) {
        //     SetErrPhone("*Phone number should be greater than 10.");
        //     errorcount++;
        // }
        // else if (Phone.length > 10) {
        //     SetErrPhone("*Phone number should be smaller than 10.");
        //     errorcount++;
        // } else {
        //     SetErrPhone("");
        // }



        // if (DateofBirth === "" || DateofBirth.trim() === "") {
        //     SetErrDateofBirth("*Date of Birth is required.");
        //     errorcount++;
        // } else {
        //     SetErrDateofBirth("");
        // }


        dispatch(UpdateList(param.id, editData));
        // history.push('/Home');

    }

    return (
        <>
            <section class="Login">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-sm-2">
                            <div class="LoginCard default-form">
                                <h5>Edit User</h5>
                                <form onSubmit={(event) => SubmitHandle(event)}>
                                    <div class="form-group">
                                        <label for="">Body</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Name"
                                            name="body"
                                            value={editData.body}
                                            onChange={(event) => changeHandle(event)} />

                                    </div>
                                    <div class="form-group">
                                        <label for="">Title</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Name"
                                            name="title"
                                            value={editData.title}
                                            onChange={(event) => changeHandle(event)} />

                                    </div>
                                    {/* <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="email" class="form-control" placeholder="Email" name="Email"
                                            value={Email}
                                            onChange={(event) => setEmail(event.target.value)} />
                                        <p className="text-danger">{ErrEmail}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Phone</label>
                                        <input type="number" class="form-control" placeholder="phone"
                                            value={Phone}
                                            name="Phone" onChange={(event) => setPhone(event.target.value)} />
                                        <p className="text-danger">{ErrPhone}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Country</label>
                                        <select name="Country" id="" class="form-control" onChange={(event) => setCountry(event.target.value)}>
                                            <option value={Country} selected>--select--</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UAE">UAE</option>
                                        </select>
                                        <p className="text-danger">{ErrCountry}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="">City</label>
                                        <select name="City" id="" class="form-control" onChange={(event) => setCity(event.target.value)}>
                                            <option value={City} selected disabled>--select--</option>
                                            <option value="Indore">Indore</option>
                                            <option value="New York">New York</option>
                                            <option value="Ahmedabad">Ahmedabad</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Dubai">Dubai</option>
                                        </select>
                                        <p className="text-danger">{ErrCity}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="">State</label>

                                        <select name="State" id="" class="form-control" onChange={(event) => setState(event.target.value)}>
                                            <option value={State} selected disabled>--select--</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="no state">no state</option>
                                        </select>
                                        <p className="text-danger">{ErrState}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Date of Birth</label>
                                        <input value={DateofBirth} type="date" className="form-control" name="DateofBirth" onChange={(event) => setDateofBirth(event.target.value)} />
                                        <p className="text-danger">{ErrDateofBirth}</p>
                                    </div> */}

                                    <div class="form-group text-left">
                                        <button type="submit" class="cardbutton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFetchEdit: async (id) => {
//             await dispatch(UpdateList(id));
//         },
//     }
// };

// const mapStateToProps = (state) => ({
//     posts: state.posts.items,
// });

export default connect(null, { EditList, UpdateList })(FormEdit);