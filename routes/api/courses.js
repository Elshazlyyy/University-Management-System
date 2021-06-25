const express = require('express');
const router = express.Router();

// Course Model
const Course = require('../../models/Course');

// @route   GET api/courses
// @desc    Get All Courses
// @access  Public
router.get('/', (req, res) => {
    Course.find()
        .sort({ date: -1 })
        .then(courses => res.json(courses));
});

// @route   POST api/courses
// @desc    Create An Course
// @access  Public
router.post('/', (req, res) => {
    const newCourse = new Course({
        name: req.body.name
    });

    newCourse.save().then(course => res.json(course));
});

// @route   DELETE api/courses/:id
// @desc    Delete A Course
// @access  Public
router.delete('/:id', (req, res) => {
    Course.findById(req.params.id)
        .then(course => course.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;