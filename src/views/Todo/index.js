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
    localStorage.setItem('todoList', JSON.stringify([...todoList, data]))
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
      <Card
        className="mt-5 bg-dark shadow-lg p-3 mb-5 rounded"
        style={{ maxWidth: 500, margin: 'auto' }}
      >
        <CardHeader>
          <CardTitle>
            <Row>
              <Col sm={9}>Todo List</Col>
              <Col sm={3}>
                <Button size="sm" color="dark" onClick={() => setModal(!modal)}>
                  Add New
                </Button>
              </Col>
            </Row>
          </CardTitle>
        </CardHeader>
        <CardBody>
          {todoList.map((todo, key) => {
            return (
              <CardBody className="shadow-sm p-3  rounded" key={key}>
                {todo.name}
              </CardBody>
            )
          })}
        </CardBody>
      </Card>

      {/* Add New Modal */}
      <Modal
        className="text-dark"
        isOpen={modal}
        toggle={() => setModal(!modal)}
      >
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
            <Button color="success">Add Now</Button>{' '}
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
  )
}

export default Todo
