import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import todoSlice from "@redux/features/todo/todoSlice";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import AppModal from "@components/Modal";
import AppLayout from "@layouts";
import { XOutlined } from "@ant-design/icons";

function Todo() {
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const TodoActions = todoSlice.actions;

  const onSubmit = (todo) => {
    todo["id"] = nanoid();
    dispatch(TodoActions.add(todo));
    setModal(!modal);
  };

  return (
    <AppLayout>
      <Card
        style={{ maxWidth: 576, margin: "auto" }}
        title="Todo List"
        extra={
          <Button onClick={() => setModal(!modal)} type="primary">
            Add New
          </Button>
        }
      >
        {todo.length < 1 ? (
          <Typography.Paragraph>
            Todo is empty, Try adding new!
          </Typography.Paragraph>
        ) : (
          todo.map((todo, key) => {
            return (
              <Row>
                <Col sm={10}>
                  <Typography.Paragraph>{todo.name}</Typography.Paragraph>
                </Col>
                <Col sm={2}>
                  <Button
                    type="text"
                    onClick={() => dispatch(TodoActions.delete(todo.id))}
                  >
                    <XOutlined />
                  </Button>
                </Col>
              </Row>
            );
          })
        )}
      </Card>

      {/* Add New Modal */}
      <AppModal
        open={modal}
        onClose={() => setModal(false)}
        title="Add New Todo"
        isOk={false}
        isCancel={false}
      >
        <Form onFinish={onSubmit}>
          <Form.Item label="Todo Name" name="name" rules={[{ required: true }]}>
            <Input autoFocus />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </AppModal>
    </AppLayout>
  );
}

export default Todo;
