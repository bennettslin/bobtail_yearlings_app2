import React from 'react'
import AlbumLink from '../../components/AlbumLink'

import { getPageElementForConfig } from '../../containers/Page'

export default getPageElementForConfig({
    isWide: true,
    noShare: true,
    children: (
        <AlbumLink />
    ),
})
