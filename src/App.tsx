import { useEffect, useState } from 'react';
import './styles/App.scss';


function Blog(): JSX.Element {

  const [groups, setGroups] = useState<any>([]);
  const [loading, setLoading] = useState(false);

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
      </header>
    </div>
  );
}

export default Blog;
