import { faTrash, faSignOutAlt, faWindowClose, faPlusSquare, faUserEdit, faSpinner, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faWindowClose, faPlusSquare, faUserEdit, faSpinner, faLocationArrow);
}

export default Icons;