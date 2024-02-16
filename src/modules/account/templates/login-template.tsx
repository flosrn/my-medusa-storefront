"use client"

import { useEffect, useState } from "react"

import Login from "@modules/account/components/login"
import Register from "@modules/account/components/register"
import Spinner from "@modules/common/icons/spinner"
import { setJwtToken } from "app/actions"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
  LOADING = "loading",
}

const LoginTemplate = ({ token }: { token: string }) => {
  const [currentView, setCurrentView] = useState("sign-in")

  useEffect(() => {
    if (token) {
      setCurrentView("loading")
      setJwtToken(token).then((r) => r)
    }
  }, [token])

  return (
    <div className="w-full flex justify-start px-8 py-8">
      {currentView === "loading" ? (
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center w-full h-full text-ui-fg-base">
            <Spinner size={36} />
          </div>
        </div>
      ) : currentView === "register" ? (
        <Register setCurrentView={setCurrentView} />
      ) : (
        <Login setCurrentView={setCurrentView} />
      )}
    </div>
  )
}

export default LoginTemplate
