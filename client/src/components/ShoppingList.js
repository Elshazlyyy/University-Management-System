import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCourses, deleteCourse } from '../actions/courseActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getCourses();
    }

    onDeleteClick = id => {
        this.props.deleteCourse(id);
    };

    render() {
        const { courses } = this.props.course;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {courses.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    course: state.course
});

export default connect(
    mapStateToProps,
    { getCourses, deleteCourse }
)(ShoppingList);