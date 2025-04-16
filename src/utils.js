import { redirect  } from "react-router-dom"

export async function requireAuth(request) {
    const url = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("user")
    if (!isLoggedIn) {
       const response = redirect(`/login?message=you must Login.&redirectTo=${url}`)
       response.body = true;
       throw response;
    }
    return null;
}