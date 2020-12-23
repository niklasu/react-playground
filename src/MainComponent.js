import {useEffect, useState} from "react";
import {Button, ButtonGroup, Container} from "react-bootstrap";

export function MainComponent() {
    const [currentTodo, setCurrentTodo] = useState({});
    const [selectedTodoId, setSelectedTodoId] = useState(0);

    useEffect(() => {
        console.log('fetching todo')
        fetch(`https://jsonplaceholder.typicode.com/todos/${selectedTodoId}`)
            .then(response => response.json())
            .then(setCurrentTodo)
    }, [selectedTodoId])
    return (
        <Container>
            <h3>Select Todo By id</h3>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={() => setSelectedTodoId(1)}>1</Button>
                <Button onClick={() => setSelectedTodoId(21)}>21</Button>
                <Button onClick={() => setSelectedTodoId(42)}>42</Button>
            </ButtonGroup>
            <h3 style={{marginTop: 20}}>TODO</h3>
            <p>Title: {currentTodo.title}</p>
            <p>Completed? {currentTodo.completed?.toString()}</p>
            <SmallUserComponent userId={currentTodo.userId}/>
        </Container>
    );
}

export function SmallUserComponent(props) {
    const [user, setUser] = useState({});
    const {userId} = props;
    useEffect(() => {
        console.log('fetching user')
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(setUser)
    }, [userId])
    return (
        <>
            <h3>Author</h3>
            <p>Name: {user.name}</p>
            <p>Website: {user.website}</p>
        </>
    );
}
