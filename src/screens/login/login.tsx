import * as yup from "yup";
import { Grid } from "@mui/material";
import { useCallback, useState } from "react";

import { Wrapper } from "./login.styled";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import Error from "../../components/errorMessage/error";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = useCallback(
    (event: any) => {
      const { target } = event;
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSend = useCallback(
    async (event: any) => {
      try {
        const schema = yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required(),
        });

        await schema.validate(data);
        setError("");
      } catch (e: any) {
        console.log(e.errors[0]);
        setError(e.errors[0]);
      }
    },
    [data]
  );

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        {error ? <Error>{error}</Error> : null}
        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
    </Wrapper>
  );
}
