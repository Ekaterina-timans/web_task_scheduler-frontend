export function Heading({title}) {
    return (
        <div>
            <h1 style={{fontSize: '2.22rem', fontWeight: 500}}>{title}</h1>
            <div style={{marginTop: '0.75rem', marginBottom: '0.75rem', 
                height: '0.12rem', backgroundColor: 'rgba(255,255,255,.35)', width: '100%'}}/>
        </div>
    )
}