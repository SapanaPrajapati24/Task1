import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/StringProgram';
import data from './my-data.json';
import img1 from './images/delete.png';


function App() {
  const [users,setUser]=useState(data);
  const [serchTerm,setSearchTerm] = useState('')
  const [inputText,setInputText]= useState("") 

  const [value,setValue1]=useState("");
  const [state,setState]=useState(data);


  //for get value from dropdown
  const [result,setValue] = useState(users.name);
  
  // const [addAddress,setAddress] = useState({
  //   address : ''
  // })


//for assending and desending data
const [order,setOrder] = useState("ASC");
const sorting =(col) =>{
  if(order === "ASC"){
      const sorted = [...users].sort((a,b) => 
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUser(sorted);
      setOrder("DSC")
  }

  if(order === "DSC"){
    const sorted = [...users].sort((a,b) => 
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
    setUser(sorted);
    setOrder("ASC")
}
}


const sortingAge =(col) =>{
  if(order === "ASC"){
      const sorted = [...users].sort((a,b) => 
        a[col] > b[col] ? 1 : -1
      );
      setUser(sorted);
      setOrder("DSC")
  }

  if(order === "DSC"){
    const sorted = [...users].sort((a,b) => 
      a[col] < b[col] ? 1 : -1
    );
    setUser(sorted);
    setOrder("ASC")
}
}



//for delete records
const onDeleteRecord = (records) => {
  setUser(pre => {
    return pre.filter(users => users.id !== records.id)
  })
}



function addElement() {
  console.log(value,"work");
   users[value].address = inputText;
  setState(!state);
}


return (
    <div className="app-container">
      <input className='search' type="text" placeholder='Search Here.....' onChange={event => {setSearchTerm(event.target.value)}}/>

     

    
      <table>
        <thead>
          <th  onClick={() => sorting("name")}>NAME &uarr;&#8595;</th>
          <th onClick={() => sortingAge("age")}>AGE &uarr;&#8595;</th>
          <th onClick={() => sortingAge("salary")}>SALARY &uarr;&#8595;</th>
          <th>ADDRESS</th>
          {/* <th></th> */}
        </thead>
        <tbody>

          {users.filter((val) => {
           
            if(serchTerm == ""){
              return val
            }else if(val.name.toLowerCase().includes(serchTerm.toLowerCase())){
              return val
            }else if(val.age.toString().includes(serchTerm.toString())){
              return val
            }else if(val.salary.toString().includes(serchTerm.toString())){
              return val
            }
          }).map((user) =>
           <tr>
           <td>{user.name} </td>
           <td>{user.age}</td>
           <td>${user.salary}</td>
           <td>{user.address}</td>

          <td> <img className='imgg' src={img1} onClick={() => onDeleteRecord(user)}/></td>
          
           </tr>
          )}
        
        </tbody>
      </table>


      <div className='myDiv'>    
      <h2>Add Address</h2>
    
     <select  value={result} onChange={(e) => {setValue1(e.target.value)}}>
        <option>----select Name----</option>
          {
            users.map((userr) => (<option value={userr.value}>{userr.name}</option>)
          )}
    
    </select>
    {/* <p>Selected Name is : {result}</p> */}

    

      
        <input id='takeAddress' type="text" name="address" required="required" placeholder='Enter Address' 
          onChange={(e) => {setInputText(e.target.value)}}
        />
        <button className='myBtn' onClick={() => addElement()}>Add Address</button>
    
      </div>
    
</div>
  );
}

export default App;
