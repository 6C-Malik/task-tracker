import PropTypes from "prop-types";
import Button from "./Button";

export default function Header({ title, onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Fermer" : "Ajouter"}
        onClick={onAdd}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "To do list",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
