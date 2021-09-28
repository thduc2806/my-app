import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import Icon from '@atlaskit/icon';
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo'
import ColorBox from "./components/ColorBox";

function App() {
  return (
    <div className="app">
      <AtlassianIcon />
      <h3>List To Do</h3>
      <ColorBox />
      <Textfield
        name="add-todo"
        placeholder='Inter to do ...'
        elemAfterInput={
          <Button isDisabled={true} appearance='primary'>
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
      ></Textfield>
      <TodoList />
    </div>
  );
}

export default App;
