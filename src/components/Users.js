import React, { useState} from 'react';

export const Users = ({name,image,email}) => {
    const [del, setDel]=useState(true);
    const [edit,setEdit] = useState(false);
    const [name1,setName1] = useState(name)
    const [email1,setEmail1]=useState(email)
    
    const remove=()=>{
        setEdit(false)
        setDel(false)
    }

    const handleName=(event)=>{
        event.persist()
        setName1(event.target.value)
    }

    const handleEmail=(event)=>{
        event.persist()
        setEmail1(event.target.value)
    }
    
    const save=(e)=>{
        e.preventDefault();
        setEdit(false)
        setDel(true)
    }

    const modify=()=>{
        setEdit(true)
        setDel(false)
    }
    
    if(edit===true){
        return(
            <div className="mb-3">
                <form onSubmit={save} className="was-validated">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control m-auto" value={name1} onChange={handleName} required ></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control m-auto" value={email1} onChange={handleEmail} required ></input>
                    </div>
                    <button class="btn btn-primary" type="submit" >Save</button>
                </form>
            </div>
        )
    }
    else if(del===false){
        return(<div></div>)
    }
    else{
        return(
            <div className="card mb-3">
                <img className="card-img-top" src={image} alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name1}</h5>
                    <a className="card-text" href={"mailto:"+email1}>{email1}</a>
                    <div className="py-4">
                        <button type="button" onClick={modify} name="edit" id="edit" className="mb-3 btn btn-block btn-primary">Edit</button>
                        <button type="button" onClick={remove} name="delete" id="delete"  className="mb-3 btn btn-block btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Users;
