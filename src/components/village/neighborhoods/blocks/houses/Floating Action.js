import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button} from 'react-floating-action-button'


 const FloatingActionButton = () => {
    return (
        <Container className="floating-action">
            <Link to='/new_listing'>
            <Button
                tooltip="Upload what you need"
                icon="fas fa-user-plus"
                styles={{backgroundColor: '#01579b', color: 'white'}}>
                <span style={{ fontWeight: 'bold', fontSize: 30}}>+</span>
            </Button>
            </Link>
        </Container>
    )
}

export default FloatingActionButton