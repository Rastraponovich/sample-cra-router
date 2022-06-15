import { IConvertBreadcrumbFunc, IGetPathFromUrlFunc } from "./types"
import { useCallback, useMemo, useState } from "react"
import { _translateDict_ } from "shared/lib"

const getPathFromUrl: IGetPathFromUrlFunc = (url) => {
    return url.split(/[?#]/)[0]
}

export const useBreadcrumbs: IConvertBreadcrumbFunc = (
    title,
    replaceCharacterList,
    transformLabel?
) => {
    const [transformedTitle, setTransformedTitle] = useState(
        getPathFromUrl(title)
    )

    if (transformLabel) {
        return transformLabel(transformedTitle)
    }

    if (replaceCharacterList) {
        for (let i = 0; i < replaceCharacterList.length; i++) {
            setTransformedTitle(
                transformedTitle.replaceAll(
                    replaceCharacterList[i].from,
                    replaceCharacterList[i].to
                )
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
