import React, { useState } from 'react'
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
import { Navigate } from 'react-router-dom'
import { STORAGE_TOKEN_KEY_NAME } from '../../auth/jwtDefaultConfig'
import USERS from '../../fake-db/users'

function Login(props) {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()
  const onSubmit = (d) => {
    setLoading(true)
    setTimeout(() => {
      const user = USERS.find(
        (u) => u.email === d.email && u.password === d.password,
      )
      if (user) {
        localStorage.setItem('userData', JSON.stringify(user))
        localStorage.setItem(STORAGE_TOKEN_KEY_NAME, 'fake-token')
        toast('Login Successful!', { type: 'success' })
        setLoading(false)
        window.location.reload()
      } else {
        toast('Invalid email or password', { type: 'error' })
        setLoading(false)
      }
    }, 3000)
  }
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
