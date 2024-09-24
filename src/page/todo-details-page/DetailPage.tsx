import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { togglTodo } from "../../slices/toolkitSlice";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const todo = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id === Number(id))
  );

  const dispatch = useDispatch();

  if (!todo) return <div className="text-3xl">Todo not found</div>;

  const handleToggle = () => {
    dispatch(togglTodo(todo.id));
  };

  return (
    <main className="bg-black flex px-20 pt-20 w-full">
      <div className="max-w-full">
        <h1 className="text-5xl mb-5 break-all">{todo.title}</h1>
        <p className="text-xl font-bold mb-3">Created at: {todo.timeCreate}</p>
        <p className="text-lg flex flex-col w-full break-all">
          {todo.description}
        </p>
        <hr className="w-full bg-white my-5" />
        <span className="flex items-center mb-4">
          <span className="mr-3">Status:</span>
          <span
            className={`${
              todo.complete ? "text-green-500" : "text-red-500"
            } font-semibold`}
          >
            {todo.complete ? "Complete" : "Uncomplete"}
          </span>
        </span>
        <button onClick={handleToggle} className="hover:text-purple-900">
          {todo.complete ? "Mark if uncomplete" : "Mark if complete"}
        </button>
      </div>
    </main>
  );
};

export default DetailPage;
