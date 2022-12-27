import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './styles/App.scss';
import axios from 'axios';

const url = "localhost%38080/api/groups";
const POST_OPTIONS = {
  method: 'POST',
  url: url,
  data: {
    name: "four big guys",
    city: "here",
    country: "myass"
  }
}


function Blog(): JSX.Element {

  const [groups, setGroups] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch('api/groups')
      .then(response => response.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
        console.log(data)
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }


  async function handleSubmit(event: { preventDefault: () => void; }): Promise<void> {
    event.preventDefault();
    axios.get('http://localhost:8080/api/groups')
      .then(response => { if (response.status === 200) {
        axios.post("http://localhost:8080/api/group", {
          name: "it do be workin tho..."
        })
      }})
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            groups.map((group: any) =>
              <div key={group.id}>
                {group.name}
              </div>
            )
          }
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="input" id="0" onChange={() => handleChange} />
            <input type="submit" value="submit" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default Blog;
