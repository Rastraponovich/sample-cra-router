import { Fragment, HTMLAttributes, ReactNode } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import clsx from "clsx"

interface SelectProps<T> {
    items: T[]
    onSelect(item: T): void
    selected: T
    label?: string | ReactNode
    disabled?: boolean
    containerClassName?: HTMLAttributes<any>["className"]
}

export const Select = <T = any,>({
    items,
    onSelect,
    disabled,
    selected,
    label,
    containerClassName,
}: SelectProps<T | any>) => {
    return (
        <div className={containerClassName}>
            <Listbox value={selected} onChange={onSelect} disabled={disabled}>
                {label && (
                    <Listbox.Label className="foucus:text-gray-900 mb-2 px-1 first-letter:uppercase">
                        {label}
                    </Listbox.Label>
                )}
                <div className="relative">
                    <Listbox.Button className="group relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 disabled:cursor-default disabled:opacity-30 sm:text-sm">
                        <span className="block truncate">{selected?.name}</span>
                        <span
                            className={clsx(
                                "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                            )}
                        >
                            <SelectorIcon
                                className=" h-5 w-5 text-gray-400 duration-300 group-hover:text-gray-500 group-active:text-gray-900 "
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {items.map((item, itemIdx) => (
                                <Listbox.Option
                                    key={itemIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-amber-100 text-amber-900"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {item.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
