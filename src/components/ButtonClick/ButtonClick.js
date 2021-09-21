import "./ButtonClick.css";
import "bootstrap/dist/css/bootstrap.css";

function ButtonClick() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <button data-testid="btn_test" className="button" onClick={refreshPage}>
      New Dogs
    </button>
  );
}
export default ButtonClick;
