import React, { useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'

function Todo() {
  const [todoList, setTodoList] = React.useState([])
  const [modal, setModal] = useState(false)

  // react-hook-form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setTodoList([...todoList, data])
    localStorage.setItem('todoList', JSON.stringify(todoList))
    setModal(!modal)
  }

  useEffect(() => {
    const todo = localStorage.getItem('todoList')
      ? JSON.parse(localStorage.getItem('todoList'))
      : []
    setTodoList(todo)
  }, [])
  return (
    <Container>
      <Card className="mt-5" style={{ maxWidth: 500, margin: 'auto' }}>
        <CardHeader>
          <CardTitle>
            <Row>
              <Col sm={9}>Todo List</Col>
              <Col sm={3}>
                <Button
                  size="sm"
                  color="primary"
                  onClick={() => setModal(!modal)}
                >
                  Add New
                </Button>
              </Col>
            </Row>
          </CardTitle>
        </CardHeader>
        <CardBody>
          {todoList.map((todo, key) => {
            return <CardBody key={key}>{todo.name}</CardBody>
          })}
        </CardBody>
      </Card>

      {/* Add New Modal */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Add New Todo</ModalHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormGroup>
              <Label>Todo Name</Label>
              <Controller
                name="name"
                rules={{ required: true }}
                render={({ field }) => <Input {...field} type="text" />}
                control={control}
              />
              {errors.todo && (
                <span className="text-danger">This field is required</span>
              )}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Add Now</Button>{' '}
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
  )
}

export default Todo
