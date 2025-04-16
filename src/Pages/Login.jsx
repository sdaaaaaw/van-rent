import React from "react"
import { Form , useLoaderData , redirect , useActionData, useNavigation} from "react-router-dom"
import { loginUser } from "../api"

export function loader({request}){
  return new URL(request.url).searchParams.get("message")
}
export async function action({request}){
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url).searchParams.get("redirectTo") || ("/host")
  try{
  const data = await loginUser({email , password})
  localStorage.setItem("user" , true)
  const response = redirect(pathname)
  response.body = true;
  return response;
} catch(err){
   return err.message
}
}
export default function Login(){
  const message = useLoaderData()
  const error = useActionData()
  const navigation = useNavigation()
    return(
        <div className="form-container">
            <h1>Sign in to your account</h1>
            {error && <h2 className="red">{error}</h2>}
            {message && <h2 className="red" >{message}</h2>}
          <Form className="form-login" method="post" replace>
            <input type="email" name="email" placeholder="Email address"/>
            <input type="password" name="password" placeholder="password"/>
            <button disabled={navigation.state === "submitting"}>
             {navigation.state === "submitting" ? "submitting" : "Log in" }
            </button>
          </Form>
        </div>
    )
}