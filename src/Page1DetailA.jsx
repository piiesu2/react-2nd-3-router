import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { state } = location;
  const history = useHistory();

  const onClickGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <p>{state}</p>
      <button onClick={onClickGoBack}>戻る</button>
    </div>
  );
};
