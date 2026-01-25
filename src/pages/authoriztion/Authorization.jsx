import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { server } from "../../bff"
import { useState } from "react"
import styled from "styled-components"
import { Input, Button, H2 } from "../../components"
import { Link } from "react-router-dom"
import { forwardRef } from "react"
import { setUser } from "../../action"
import { useDispatch } from "react-redux"

const AuthorizationSchema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин...")
        .matches(/\w+$/, "Неверный логин. Допускается буквы и цифры")
        .min(3, "Неверно заполнен логин. Минимум 3 символа")
        .max(15, "Неверно заполнен логин. Максимум 15 символов"),
    password: yup
        .string()
        .required("Заполните пароль...")
        .matches(/[\w#%]/, "Неверно заполнен пароль. Допускаются буквы, цифры и значки #%")
        .min(6, "Неверно заполнен пароль. Минимум 6 символов")
        .max(30, "Неверно заполнен пароль. Максимум 30 символов")
})

const Error = styled.div`
    background-color: #fcadad;
    font-size: 18px;
    padding: 10px;
    margin: 10px 0 0 0;
`

const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: underline;
    margin: 20px 0;
    font-size: 18px;
    

`


const AuthorizationContainer = ({ className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            login: "",
            password: ""
        },
        resolver: yupResolver(AuthorizationSchema)
    })

    const [serverError, setServerError] = useState()

    const dispatch = useDispatch()

    const onSubmit = (el) => {
        console.log(el)
        server.authorize(el.login, el.password).then(({ res, error }) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`)
                return;
            }

            dispatch(setUser(res))
        })
    }
    const formError = errors?.login?.message || errors?.password?.message
    const errorMessage = formError || serverError


    return (
        <div className={className}>
            <H2>Авторизация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="Логин..." {...register("login", {
                    onChange: () => setServerError(null)
                })} />
                <Input type="password" placeholder="Пароль..." {...register("password", {
                    onChange: () => setServerError(null)
                })} />

                <Button type="submit" disabled={!!formError}>Авторизоваться</Button>

                {errorMessage && <Error>{errorMessage}</Error>}


                <StyledLink to="/register">Регистрация</StyledLink>

            </form>
        </div>
    )
}

export const Authorization = styled(AuthorizationContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`