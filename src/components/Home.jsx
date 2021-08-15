import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteuser, FetchList } from "../Redux/Actions/action"

const Home = () => {

    const dispatch = useDispatch();

    const onDelete = (myid) => {
        dispatch(deleteuser(myid));
    }

    useEffect(()=>{
        dispatch(FetchList())
    },[])

    const products = useSelector(state => state.posts.items.data )


    return (
        <div className="Card_Section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-header">
                                <Link to="/form" className="btn btn-primary float-right">Add</Link>
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">FullName</th>
                                            <th scope="col">Email</th>
                                            {/* <th scope="col">Phone</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">City</th>
                                            <th scope="col">State</th>
                                            <th scope="col">Date of Birth</th> */}
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                              products && products.length >= 0 && products.map((post, idx) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row" key={post.id}>{idx + 1}</th>
                                                            <td>{post.title} &nbsp; {post.LastName}</td>
                                                            <td>{post.body}</td>
                                                            {/* <td>{post.Phone}</td>
                                                            <th>{post.Address.Country}</th>
                                                            <td>{post.Address.City}</td>
                                                            <td>{post.Address.State}</td>
                                                            <td>{post.DateofBirth}</td> */}
                                                            <td>
                                                                <Link to={`/edit-user/${post.id}`}>
                                                                    <button type="button" className="btn btn-warning" style={{ color: "#fff", cursor: "pointer", fontSize: "12px" }}>Edit</button>
                                                                </Link>
                                                                &nbsp;
                                                                <button type="button" className="btn btn-danger" style={{ color: "#fff", fontSize: "12px" }} onClick={() => onDelete(post.id)} >Delete</button></td>
                                                        </tr>
                                                    )
                                                })
                                        
                                        }


                                        {
                                            ! products && 
                                            <p>No data available</p>
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onDelete: async (id) => {
//             await dispatch(deleteuser(id));
//         },
//     }
// };

export default connect(null,{deleteuser, FetchList})(Home);