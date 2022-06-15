import { HTMLAttributes, memo, ReactNode, useEffect, useState } from "react"

import { Breadcrumb, IBreadcrumbsProps, IConvertBreadcrumbFunc } from "./types"
import clsx from "clsx"
import { Link, useLocation } from "react-router-dom"
import { _translateDict_ } from "shared/lib"

const convertBreadcrumb: IConvertBreadcrumbFunc = (
    title,
    replaceCharacterList,
    transformLabel?
) => {
    let transformedTitle = title.split(/[?#]/)[0]

    if (transformLabel) {
        return transformLabel(transformedTitle)
    }

    if (replaceCharacterList) {
        for (let i = 0; i < replaceCharacterList.length; i++) {
            transformedTitle = transformedTitle.replaceAll(
                replaceCharacterList[i].from,
                replaceCharacterList[i].to
            )
        }
    }

    const translateTransformedTittle =
        _translateDict_[transformedTitle] !== undefined
            ? _translateDict_[transformedTitle]
            : transformedTitle
    // decode for utf-8 characters and return ascii.
    return decodeURI(translateTransformedTittle)
}

interface BreadcrumbsProps extends IBreadcrumbsProps {
    separator?: string | ReactNode
    className?: HTMLAttributes<HTMLElement>["className"]
    listItemClassName?: HTMLAttributes<HTMLElement>["className"]
}

const convertBreadcrumbs = (sourcePath: string): Breadcrumb[] => {
    const linkPath = sourcePath.split("/")
    linkPath.shift()

    const pathArray = linkPath.map((path, i) => {
        return {
            breadcrumb: path,
            href: "/" + linkPath.slice(0, i + 1).join("/"),
        }
    })

    return pathArray
}

export const BreadCrumbs = memo(
    ({
        rootLabel,
        omitRootLabel,
        labelsToUppercase,
        replaceCharacterList,
        className,
        transformLabel,
        omitIndexList,
        listItemClassName,
        inactiveItemClassName,
        separator = "/",
        activeItemClassName,
    }: BreadcrumbsProps) => {
        const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([])
        const location = useLocation()
        useEffect(() => {
            if (location) setBreadcrumbs(convertBreadcrumbs(location.pathname))
        }, [location])

        return (
            <nav className={className} aria-label="breadcrumbs">
                {!omitRootLabel && (
                    <>
                        <Link
                            to="/"
                            className={clsx(
                                inactiveItemClassName,
                                labelsToUppercase && "uppercase",
                                listItemClassName
                            )}
                        >
                            {convertBreadcrumb(
                                rootLabel || "Главная",
                                replaceCharacterList,
                                transformLabel
                            )}
                        </Link>
                        <span className="ml-2">{separator}</span>
                    </>
                )}
                {breadcrumbs.map((breadcrumb, i) => {
                    if (
                        !breadcrumb ||
                        breadcrumb.breadcrumb.length === 0 ||
                        (omitIndexList &&
                            omitIndexList.find((value) => value === i))
                    ) {
                        return
                    }
                    return (
                        <>
                            <Link
                                to={breadcrumb.href}
                                key={breadcrumb.href}
                                className={clsx(
                                    i === breadcrumbs.length - 1
                                        ? activeItemClassName
                                        : inactiveItemClassName,
                                    "flex",
                                    listItemClassName,

                                    labelsToUppercase && "uppercase"
                                )}
                            >
                                {convertBreadcrumb(
                                    breadcrumb.breadcrumb,
                                    replaceCharacterList,
                                    transformLabel
                                )}
                            </Link>
                            {i !== breadcrumbs.length - 1 && (
                                <span className="ml-2">{separator}</span>
                            )}
                        </>
                    )
                })}
            </nav>
        )
    }
)

BreadCrumbs.displayName = "Breadcrumbs"
