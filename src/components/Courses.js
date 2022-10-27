import './Courses.css'

const courses = [
    {
        id: '0',
        title: 'Cours intro',
        description: '',
        answer: ''
    },
    {
        id: '1',
        title: 'Cours un',
        description: '',
        answer: ''
    },
    {
        id: '2',
        title: 'Cours deux',
        description: '',
        answer: ''
    }
]

function Courses () {
    return (
        <div>
            <h1>Liste des cours</h1>
            <div class="courses">
                <div class="course">
                    {courses[0].title}
                </div>
                <div class="course">
                    {courses[1].title}
                </div>
                <div class="course">
                    {courses[2].title}
                </div>
            </div>  
        </div>
    )
}

export default Courses;