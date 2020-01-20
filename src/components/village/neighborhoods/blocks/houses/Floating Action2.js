import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button} from 'react-floating-action-button'

var FontAwesome = require('react-fontawesome')

 const FloatingActionButton2 = () => {
    return (
        <Container className="floating-action">
            <Link to='/new_thread'>
            <Button
                tooltip="Post new story"
                styles={{backgroundColor: '#01579b', color: 'white'}}>
                <FontAwesome
                    className="super-crazy-colors"
                    name="plus-square"
                    size="2x"
                    spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </Button>
            </Link>
        </Container>
    )
}

export default FloatingActionButton2