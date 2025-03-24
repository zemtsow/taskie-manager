/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { IoIosArrowBack } from "react-icons/io";


const Selector = ({ value, setValue, items, className, label }: { className?: string, value: string, setValue: any, items: string[], label?: string }) => {
    const [open, setOpen] = React.useState(false)
    const ref = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current !== undefined && ref.current !== null) {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    setOpen(false)
                }
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div className="flex flex-col w-full">
            {label && <label className="block text-secondary text-sm mb-1">{label}</label>}
            <button ref={ref} type="button" onClick={() => setOpen(!open)} className={`${className} p-3 border-[1px] border-secondary rounded-xl bg-primary text-secondary relative w-full text-left`}>
                <div className="flex flex-row items-center justify-between">
                    {value}
                    <IoIosArrowBack className={`${open ? "rotate-90" : "rotate-0"} duration-300`} />
                </div>
                {open && <div className="absolute h-[150px] z-10 overflow-y-auto top-12 right-0 left-0 flex flex-col items-start justify-start border-[1px] border-secondary rounded-xl bg-primary">
                    {items.map((item) => (
                        <button type="button" onClick={() => setValue(item)} className={`${value === item ? "opacity-100" : "opacity-50"} flex flex-row items-center gap-1 hover:opacity-100 duration-300 w-full p-3 text-left text-secondary`}>
                            {value === item && <IoIosArrowBack className={"rotate-180 duration-300"} />} {item}
                        </button>
                    ))}
                </div>}
            </button>
        </div>
    )
}

export default Selector