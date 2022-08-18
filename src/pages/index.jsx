import React from 'react'
import { Button } from '@components'

const IndexPage = () => {
    return (
        <div>
            <Button variant='primary' fullWidth>
                Example Button
            </Button>
            <Button variant='secondaryOutline' size='normal'>
                Example Button
            </Button>

            <Button variant='normal' disabledOutline>
                Example Button
            </Button>
        </div>
    )
}

export default IndexPage
