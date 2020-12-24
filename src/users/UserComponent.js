import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

export function UserComponent() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(setUsers)
  }, []);

  const [currentTodos, setCurrentTodos] = useState([]);
  useEffect(() => {
    if (currentUser) {
      console.log('loading user todos', currentUser.id);
      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(value => setCurrentTodos(value.filter(t => t.userId === currentUser.id)));
    }

  }, [currentUser]);

  const [currentTodo, setCurrentTodo] = useState(null);

  return <Container>
    <Row>
      <Col md={4}>
        <ListGroup>
          {users.map(u => <ListGroupItem action onClick={() => setCurrentUser(u)}>{u.name}</ListGroupItem>)}
        </ListGroup>
      </Col>
      <Col md={4}>
          <ListGroup>
            {currentTodos.map(t => <ListGroupItem action onClick={() => setCurrentTodo(t)}>{t.title}</ListGroupItem>)}
          </ListGroup>
      </Col>
      {currentTodo ?
        <Col md={4}>
          <Card
            border={currentTodo.completed? 'success' : 'danger'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Text>{currentTodo.title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        : null}
    </Row>

  </Container>;
}
