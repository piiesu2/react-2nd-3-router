import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();

  const onClickButtonDetailA = () => {
    history.push("/page1/detaila", arr);
  };

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link
        to={{
          pathname: "/page1/detaila",
          state: arr
        }}
      >
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailb">DetailB</Link>
      <br />
      <button onClick={onClickButtonDetailA}>DetailA</button>
    </div>
  );
};
