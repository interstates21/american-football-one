

const HABITS = [
    {
        id: 'd7cbc56a-e4c8-11eb-ba80-0242ac130004',
        name: 'Meditation',
        priority: 5,
        week: {
            'Monday': false,
            'Tuesday': false,
            'Wednesday': false,
            'Thursday': true,
            'Friday': false,
            'Saturday': false,
            'Sunday': false,
        }
    },
    {
        id: 'ee78b930-e4c8-11eb-ba80-0242ac130004',
        name: 'Guitar',
        priority: 4,
        week: {
            'Monday': false,
            'Tuesday': false,
            'Wednesday': false,
            'Thursday': false,
            'Friday': false,
            'Saturday': false,
            'Sunday': false,
        }
    },
    {
        id: 'f7c02258-e4c8-11eb-ba80-0242ac130004',
        name: 'Running',
        priority: 5,
        week: {
            'Monday': false,
            'Tuesday': false,
            'Wednesday': false,
            'Thursday': false,
            'Friday': false,
            'Saturday': false,
            'Sunday': false,
        }
    },
    {
        id: '0b2da568-e4c9-11eb-ba80-0242ac130004',
        name: 'Coding',
        priority: 1,
        week: {
            'Monday': false,
            'Tuesday': false,
            'Wednesday': false,
            'Thursday': false,
            'Friday': false,
            'Saturday': false,
            'Sunday': false,
        }
    },
    {
        id: '05e2f2f2-e4c9-11eb-ba80-0242ac130004',
        name: 'Reading business self-help books',
        priority: 5,
        week: {
            'Monday': false,
            'Tuesday': false,
            'Wednesday': false,
            'Thursday': false,
            'Friday': false,
            'Saturday': false,
            'Sunday': false,
        }
    },
]



const findIndexById = (id) => {
    let i=0;
    while(i<HABITS.length){
        if (id === HABITS[i].id){
            return i;
        }
        i++
    }
return -1
    
}

const toggleHabit = (habitId, dayName) => {
    const currentIndex = findIndexById(habitId)
const currentState =  HABITS[currentIndex].week[dayName]
    HABITS[currentIndex].week[dayName] =  !currentState

}


const renderHabit = () => {
    
}

const renderHabits = () => {
    let i = 0;
}

const calculateStatsForHabit = (habitid) => {
    // Calculate how many days completed for habit
const currentIndex = findIndexById(habitid)
let count = 0
const week = HABITS[currentIndex].week
// loop for object keys
for (const dayName in week) {
   if(week[dayName]){
count++
   }
  }
return count
}

const createNewHabit = () => {

}

toggleHabit('d7cbc56a-e4c8-11eb-ba80-0242ac130004', 'Tuesday')
const totaldays = calculateStatsForHabit('d7cbc56a-e4c8-11eb-ba80-0242ac130004')

console.log (HABITS)
console.log(totaldays)