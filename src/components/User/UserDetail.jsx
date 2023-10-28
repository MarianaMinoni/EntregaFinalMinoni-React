import React, {useContext} from 'react'
import UserContext from '../../context/userContext/UserContext'

const UserDetail = () => {

    const {user, editUser} = useContext(UserContext)
   
    const changeName = (e) => {
      console.log(e.target.value)
      editUser(e.target.value, user.age)
    }

   

  return (
    <div>
      <h3>Datos del usuario</h3>
        <p>Nombre: {user.name}</p>
        <p>Edad: {user.age}</p>
        <label>Ingrese su nombre</label>
        <br />
        <input type = 'text' value = {user.name} onChange={changeName}></input>
        </div>
  )
}

export default UserDetail