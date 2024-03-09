// eslint-disable-next-line react/prop-types
export default function UsStateComponent({stateName, deleteFn, focusFn}) {
    return (
        <div>
            <strong>{stateName}</strong>
            <div>
            <button onClick={() => {
                focusFn(stateName)
            }}>Focus</button> | <button onClick={() => {
                deleteFn(stateName);
            }}>Delete</button>
            </div>
        </div>
    )
}