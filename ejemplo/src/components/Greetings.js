import react from 'react'

export default function Greetings(props) {
    const {groupInfo, funcion} = props 
    const { grupo, day } = groupInfo 
 console.log(props)
 console.log(groupInfo)
 console.log(grupo)
 console.log(day)
    
    return(
        <div>
            <button onClick={() => funcion(grupo)}>Greetings</button>

            </div>
    )
}

export function GoodBye(params) {
    return(
<div>
            <h3>nos vemos mañana </h3>
            
            </div>
    )
    
}