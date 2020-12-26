import {memo, useState} from "react";
import {Card, Container, Form} from "react-bootstrap";

const ChildComponent = memo(function ChildComponent() {
  console.log('rendering child...')
  const [text, setText] = useState();
  return (<>
      <Card>
        <Card.Header>Child Component wrapped in React.memo()</Card.Header>
        <Card.Title>Value: {text}</Card.Title>
        <Form.Group>
          <Form.Control size="sm" type="text" placeholder="Change child components state value here..."
                        onChange={e => setText(e.target.value)}/>
        </Form.Group>
      </Card>

    </>
  )
    ;
});

export function ParentComponent() {
  console.log('rendering parent...')
  const [text, setText] = useState();
  return (<Container>
    <h1>Example for React.memo</h1>
    Normally, a child component renders, when the parent component renders. This also applies to state changes.
    If an input's text field value is tied to a state variable, the child component would re-render on every
    character that changes in the input field. If rendering the child component is expensive, this can become a
    performance issue. In order to solve that, react provides the <i>memo</i> function. Wrapping a function component
    with
    <i>memo</i> will suppress re-renderings of that component if the input props did not change. Below, you can try
    it out. Open the devtools and see what happens when you change parent and child's state.
    <Card style={{marginTop: 50}}>
      <Card.Header>Parent Component</Card.Header>
      <Card.Body>
        <Card.Title>Value: {text}</Card.Title>
        <Form.Group>
          <Form.Control size="sm" type="text" placeholder="Type here to change the parent's component state"
                        onChange={e => setText(e.target.value)}/>
        </Form.Group>
        <ChildComponent/>
      </Card.Body>
    </Card>
  </Container>);
}
