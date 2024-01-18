import React, { useState } from "react";
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
  Col
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import TodoActions from "../../redux/todo/actions";

function Todo() {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  // react-hook-form
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (todo) => {
    todo["id"] = nanoid();
    dispatch(TodoActions.add(todo));
    setModal(!modal);
    reset({});
  };

  return (
    <Container>
      <Card
        className="mt-5 bg-dark shadow-lg p-3 mb-5 rounded"
        style={{ maxWidth: 500, margin: "auto" }}
      >
        <CardHeader>
          <CardTitle>
            <Row>
              <Col sm={9}>Todo List</Col>
              <Col sm={3}>
                <Button size="sm" color="dark" onClick={() => setModal(!modal)}>
                  {t("add_new")}
                </Button>
              </Col>
            </Row>
          </CardTitle>
        </CardHeader>
        <CardBody>
          {todoList.length < 1 ? (
            <CardBody>Todo is empty, Try adding new!</CardBody>
          ) : (
            todoList.map((todo, key) => {
              return (
                <CardBody className="shadow-sm p-3  rounded" key={key}>
                  <Row>
                    <Col sm={10}>
                      <p style={{ color: "#fff" }}>{todo.name}</p>
                    </Col>
                    <Col sm={2}>
                      <span
                        onClick={() => dispatch(TodoActions.delete(todo.id))}
                        style={{ cursor: "pointer", color: "#fff" }}
                      >
                        X
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              );
            })
          )}
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
                render={({ field }) => (
                  <Input {...field} type="text" autoFocus />
                )}
                control={control}
              />
              {errors.todo && (
                <span className="text-danger">This field is required</span>
              )}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Add Now</Button>{" "}
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
  );
}

export default Todo;
