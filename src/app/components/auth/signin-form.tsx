"use client"

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation"

export const SigninForm = () => {
      const router = useRouter();
      const [emailField, setEmailField] = useState('');
      const [passwordField, setPasswordField] = useState('');
      
      const handleEnterButton = () => {
            router.replace('/home')
      }

      return (
            <>
                  <Input
                        value={emailField}
                        placeholder="Digite seu E-mail"
                        onChange={(t) => setEmailField(t)}
                  />

                  <Input
                        password
                        value={passwordField}
                        placeholder="Digite sua Senha"
                        onChange={(t) => setPasswordField(t)}
                  />

                  <Button
                        size={1}
                        label="Entrar"
                        onClick={handleEnterButton}
                  />
            </>
      )
}