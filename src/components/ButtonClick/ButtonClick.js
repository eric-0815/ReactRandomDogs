import "./ButtonClick.css";
<<<<<<< Updated upstream:src/components/ButtonClick/ButtonClick.js
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function ButtonClick() {
=======
import "bootstrap/dist/css/bootstrap.css";

function ButtonClick(props) {
>>>>>>> Stashed changes:src/components/Button/Button.js
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
