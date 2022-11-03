//Given the data below, define a type alias for representing users.
type User = {
    name: string,
    age: number,
    occupation?: string
}

let users: User[] = [
    {
        name: 'John Smith', age: 30, occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller', age: 28
    }
]

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Birds = {
    fly: () => void
}

type Fish = {
    swim: () => void
}
let pet: Fish | Birds = {
    fly() {
        console.log('fly')
    },
}

//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday'

//

// let user = getUser();console.log(user?.address?.street);
// let x = foo ?? bar();

let value: unknown = 'a';
if (typeof value === 'string') console.log(value.toUpperCase());