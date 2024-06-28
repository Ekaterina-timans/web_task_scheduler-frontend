import { useFormContext } from "react-hook-form"
import { useDeleteTask } from "./hooks/useDeleteTask"
import { FaRegEdit } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
import styles from "./Task.module.scss"
import { useCallback, useState } from "react"
import { IoIosArrowDropdown, IoIosArrowDropup  } from "react-icons/io"
import { IoCalendarClearOutline } from "react-icons/io5"
import { colorsPriority } from "./colors.data"
import { useProgressBar } from "../../../hooks/useProgressBar"
import { useUpload } from "./hooks/file/useUpload"
import { useFiles } from "./hooks/file/useFiles"
import { useUpdateTask } from "./hooks/useUpdateTask"
import Dots from "../../ui/loader/Dots"
import Circle from "../../ui/loader/Circle"
import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(LocalizedFormat)

export function TaskBlock({ item }) {
    const { reset } = useFormContext()
    const { deleteTask, isDeletePending } = useDeleteTask(item.id)
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
    const { backgroundColor, progressColor, progress } = useProgressBar(item, colorsPriority)
    const { files, isLoading } = useFiles(item.id)

    const handleFileChange = (file) => {}

    const { mutateAsync: uploadFile } = useUpload(item.id, handleFileChange)

    const handleUpload = useCallback((e) => {
        const file = e.target.files[0]
        if (file) {
            uploadFile(file)
        }
    }, [uploadFile])

    const toggleDescriptionVisibility = () => {
        setIsDescriptionVisible(!isDescriptionVisible)
    }
    const isChecked = item.status == true
    const { updateTask } = useUpdateTask(item.id)

    const handleCheckboxChange = (event) => {
        const newStatus = event.target.checked
        updateTask({ id: item.id, data: { status: newStatus } })
    }

    return (
        <div className={styles.task} style={{ backgroundColor: backgroundColor }}>
                <div className={styles.header} style={{ background: `linear-gradient(to right, ${progressColor} ${progress}%, ${backgroundColor} ${progress}%)`}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            style={{width: '19px', height: '19px', marginRight: '5px'}}
                        />
                        <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                            {item.title}
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center'}}>

                        {item.dataEnd && (
                            <div style={{ marginRight: '15px' }}>
                                <IoCalendarClearOutline size={20} style={{ marginRight: '5px' }} />
                                {dayjs(item.dataEnd).format('LL')}
                            </div>
                        )}

                        <button 
                            onClick={() => {
                                reset({
                                    id: item.id,
                                    title: item.title,
                                    description: item.description,
                                    status: item.status,
                                    priority: item.priority,
                                    dataEnd: item.dataEnd
                                })
                            }}
                            className={styles.btn}>
                            <FaRegEdit size={25} />
                        </button>

                        <button onClick={() => deleteTask()} className={styles.btn}>
                            { isDeletePending ? <Circle /> : <AiOutlineDelete size={27} />}
                        </button>
                        <button onClick={toggleDescriptionVisibility} className={styles.btnShow}>
                            {isDescriptionVisible ? <IoIosArrowDropup size={27} /> : <IoIosArrowDropdown size={27} />}
                        </button>
                    </div>
                </div>
            <div className={styles.description} style={{ maxHeight: isDescriptionVisible ? '400px' : '0px', padding: isDescriptionVisible ? '10px 10px 0' : '0px' }}>
                {isDescriptionVisible && (
                    <div className={styles.content}>
                        {item.description}
                    </div>
                )}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <label className={styles.file}>
                        <input type="file" onChange={handleUpload} />		
                        <span>Choose file</span>
                    </label>
                    <div>
                        { isLoading ? (
                            <Dots />
                        ) : files.length ? (files && files.map(file => (
                                <div key={file.id}>
                                    <a href={`/download/${file.id}`} download={file.file_name} style={{textDecoration: 'none', color: '#000'}}>
                                        <span>{file.file_name}</span>
                                    </a>
                                </div>
                            )))
                        : ('')
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}