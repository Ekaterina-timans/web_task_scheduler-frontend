import ReminderNotification from "./ReminderNotification"
import WarningNotification from "./WarningNotification"

export function Notifications({ tasksItems, isLoading }) {

    return (
        <div style={{display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '48px' }}>
            <WarningNotification tasksItems={tasksItems} isLoading={isLoading}/>
            <ReminderNotification tasksItems={tasksItems} isLoading={isLoading}/>
        </div>
    )
}