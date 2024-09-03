
import Hoc from './hoc';

interface users {
  id: number;
  name: string;
  
}
function Users({data} : {data : users[]}) {
 
  return (
    
    <div>
    <ul>{data.map((u) => <li key={u.id}>{u.name}</li>)}</ul>

</div>
  )
}

const SearchUsers = Hoc(Users, "users")
export default SearchUsers

/*
 const [users, setUsers] = useState<any[]>([])
  const [term, setTerm] = useState<string>("")

  useEffect(() => {
   
    const onHittingApi = async() => {

      
      
      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const data = res.data
     
      setUsers(data)
      
      
      }
      

      catch(err){
        console.log("error while fetching")
      }
     
    
    }
    
  
    onHittingApi()
   
  }, [])

  useEffect(() => {
   
      console.log("users", users);
    
  }, [users])


  const filteredUsers = users.filter(({ name }) =>
    name.toLowerCase().includes(term.toLowerCase())
  );



   <div>
      <h1>users list</h1>
      <input type='search' value={term} onChange={(e) => setTerm(e.target.value)}/>
      <ul>{filteredUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}</ul>
    </div>
*/