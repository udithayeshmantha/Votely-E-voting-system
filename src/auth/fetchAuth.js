import { handleApiCall } from "../api/handleApiCall"

const fetchAuth = async () => {
    if (localStorage.getItem("userId")){
        handleApiCall(
            ""
        )
    }
}