
import Hoc from "./hoc";

interface Todo {
    id: number;
    title: string;
    
  }
function Todos({data} : {data : Todo[]}){
    
    //console.log("data from hoc", data)
    return (
        <div>
            <ul>{data.slice(0,10).map((u) => <li key={u.id}>{u.title}</li>)}</ul>

        </div>
    )
}

const SearchTodos = Hoc(Todos, "todos")

export default SearchTodos




/*

    const [todos, setTodos] = useState<any[]>([])
    const [term, setTerm] = useState<string>("")

    useEffect(() => {

        const onHittingApi = async() => {

            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            const data = res.data 
            setTodos(data)
        }

        onHittingApi()
    }, [])

    useEffect(() => {
        console.log("todos", todos)
    }, [todos])

    let filteredUsers = todos.slice(0,10).filter(({title}) =>  {
        return title.includes(term)
    })
    .map((e) => e.title)
    console.log("filteredUsers", filteredUsers)
*/