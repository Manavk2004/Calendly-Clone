export default function TimeSelect({ 
    step,
    value,
    onChange,
    thisDay,
    SelectedDay
 }: { 
    step: 30 | 60 
    value: string,
    onChange: (value: string) => void,
    thisDay: string,
    SelectedDay: string
}){

    const times = [];

    for(let i = 0; i < 24; i ++){
        times.push((i<10 ? '0'+ i : i) + ':00')
        if(step === 30){
            times.push((i<10 ? '0'+i : i) + ':30')
        }
    }


    return (
        <>
            {thisDay === SelectedDay ? 
                <select value={value} onChange={e => onChange(e.target.value)}>
                    {times.map((time, key) => (
                        <option key={key} value={time}>{time}</option>
                    ))}
                </select>
            : null}
            {thisDay !== SelectedDay ?
                <select disabled value={value} onChange={e => onChange(e.target.value)}>
                    {times.map((time, key) => (
                        <option key={key} value={time}>{time}</option>
                    ))}
                </select>
            : null}
        </>
    )
}