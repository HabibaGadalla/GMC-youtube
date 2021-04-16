import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const UserActions = () => {
  return (
    <div className="actions">
      <span>
        <FontAwesomeIcon icon={faThumbsUp} /> 1.7 M
      </span>
      <span>
        <FontAwesomeIcon icon={faThumbsDown} />
        200
      </span>
      <span>
        <FontAwesomeIcon icon={faShare} />
        Share
      </span>
      <span>
        <FontAwesomeIcon icon={faPlus} />
        Save
      </span>
    </div>
  );
};
