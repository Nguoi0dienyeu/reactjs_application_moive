import React, { Fragment }  from "react";
import { Container } from "@material-ui/core";
import {Row,Col, Input} from "antd";
import Form from "antd/lib/form/Form";
export default function LoginForm() {
  return(
    <Fragment>
      <Container>
        <Row gutter={12} layout="vertical">
          <Col span={12}>
            <Form.Item>
              <Input type="text"/>
            </Form.Item>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}