import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import { STORAGE_TOKEN_KEY_NAME } from '../../auth/jwtDefaultConfig'
import USERS from '../../fake-db/users'
import { nanoid } from 'nanoid'
import history from '../../utils/history'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../redux/auth/actions'

function Login() {
  const dispatch = useDispatch()
  const { loading, token } = useSelector((state) => state.auth)
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()
  const onSubmit = (d) => {
    dispatch(loginAction(d))
  }
  useEffect(() => {
    if (token) {
      history.replace('/', true)
    }
  }, [token])
  return (
    <Card
      className="mt-5 bg-dark shadow-lg p-3 mb-5 rounded"
      style={{ maxWidth: 500, margin: 'auto' }}
    >
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Controller
              name="email"
              rules={{ required: true }}
              render={({ field }) => (
                <Input type="email" {...field} id="email" placeholder="Email" />
              )}
              control={control}
              defaultValue={'admin@demo.com'}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="email">Password</Label>
            <Controller
              name="password"
              rules={{ required: true, min: 6 }}
              render={({ field }) => (
                <Input
                  type="password"
                  {...field}
                  id="password"
                  placeholder="Password"
                />
              )}
              control={control}
              defaultValue={'admin'}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </FormGroup>
          <Button color="dark" className="mt-5" block>
            {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Login
