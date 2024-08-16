const adminLogin = require('./admin/adminLogin');
const addCourses = require('./courses/addcourses');
const registerAdmin = require('./admin/registerAdmin');
const addSlides = require('./slides/addslides');
const readCourse = require('./courses/readcourse');
const changeStatus = require('./courses/changeStatus');
const readSingleCourse = require('./courses/readsinglecourse');
const updateCourse = require('./courses/updateCourse');
const deleteSingleCourse = require('./courses/deleteSingleCourse');
const readSlides = require('./slides/readslides');
const deleteSingleSlides = require('./slides/deleteSingleslides');
const addTeams = require('./teams/addTeams');
const deleteSingleTeams = require('./teams/deleteSingleteams');
const readteams = require('./teams/readteams');
const readSingleslides = require('./slides/readsingleslides');
const updateSlides = require('./slides/updateSlides');
const changeSlidesStatus = require('./slides/changeSlidesStatus');
const readSingleTeams = require('./teams/readSingleTeams');
const deleteMultiCourse = require('./courses/deleteMulticourse');
const trueCourses = require('./courses/trueCourses');
const addVideo = require('./video/addVideo');
const readVideo = require('./video/readvideo');
const searchCourses = require('./courses/searchCourse');
const generate_otp = require('./otp/generateOTP');
const registerUser = require('./user/registerUser');
const reqPayment = require('./payment/reqPayment');
const trueSlides = require('./slides/trueslides');
const fetchUser = require('./user/readUser');
const updateTeam = require('./teams/updateTeam');
const userDelete = require('./user/userdelete');

module.exports = {
    registerAdmin,
    adminLogin,
    addCourses,
    addSlides,
    readCourse,
    changeStatus,
    readSingleCourse,
    updateCourse,
    deleteSingleCourse,
    deleteMultiCourse,
    trueCourses,
    searchCourses,
    readSlides,
    readSingleslides,
    deleteSingleSlides,
    trueSlides,
    addTeams ,
    updateTeam,
    readteams,
    deleteSingleTeams,
    updateSlides,
    changeSlidesStatus,
    readSingleTeams,
    addVideo,
    readVideo,
    generate_otp,
    registerUser,
    fetchUser,
    userDelete,
    reqPayment
}