import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const handleChange = (event) => {
    console.log(event.target.name)
    event.target.name = event.target.checked
    console.log(event.target.checked )
    // setState({ ...state, [event.target.name]: event.target.checked });
};
// function TasksListItems() {
//
//
//     return tasks.map((task) =>  <ui-checkbox type="checkbox"><li key={task.name}>{task.name}</li></ui-checkbox>);
// }

function App() {
    const  tasks =  [
        {name : 'create skeleton of todo', complete : true},
        {name : 'add ability to add tasks', complete : true},
        {name : 'clear task name after clicking "Add"', complete : false},
        {name : 'put "Add" button in one line with input', complete : false},
        {name : 'add new task by hitting Enter instead of clicking "Add"', complete : false},
        {name : 'replace <input> with <ui-checkbox> in tasks list', complete : false},
        {name : 'when task is complete cross it out', complete : false},
        {name : 'split tasks into "pending" and "complete" tabs using keen-ui component <ui-tabs>', complete : false},
        {name : 'don\'t allow to add empty tasks', complete : false},
        {name : 'make list of tasks scrollable, if there\'re are a lot of tasks', complete : false},
        {name : 'extract list item into a separate vue.js component', complete : false},
        {name : 'persist tasks list in a local storage', complete : false},
        {name : 'add animation on task completion', complete : false},
    ]
  return (
    <div className="App">
      <div className="todo">
        <h1 className="title">Checklist</h1>
          <ol>
              {tasks.map((task) => (
                      <div>
                          <FormControlLabel
                              control={
                                  <Checkbox
                                      checked={task.complete}
                                      onClick={() => {console.log(task);
                                                    task.complete = !task.complete
                                      }}
                                      name="checkedB"
                                      color="primary"
                                  />
                              }
                              label={task.name}
                          />
                      </div>
                  )
              )}
          </ol>
      </div>
    </div>
  );
}

export default App;
