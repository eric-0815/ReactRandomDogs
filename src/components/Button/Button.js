import "./Button.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Button_Click(props) {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <button className="button" onClick={refreshPage}>
      New Dogs
    </button>
  );
}
export default Button_Click;
