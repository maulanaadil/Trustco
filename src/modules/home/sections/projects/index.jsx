import React from 'react'

import PropTypes from 'prop-types'

import * as styles from './styles'

export default function ProjectsSection() {
    return (
        <section className={styles.sProjects}>
            <div className={styles.sProjectsTitleWrapper}>
                <h2 className={styles.sProjectsTitle}>Selected Projects</h2>
                <h5 className={styles.sProjectSubTitle}>
                    Prepared for{' '}
                    <span className={styles.sProjectSubTitleUnderline}>
                        You
                    </span>{' '}
                    next
                </h5>
            </div>
            <div className={styles.sProjectContainer}>
                <div className='col-span-5'>anjay</div>
                <div className='col-span-5'>anjay</div>
                <div className='col-span-5'>anjay</div>
                <div className='col-span-5'>anjay</div>
            </div>
        </section>
    )
}

function ProjectItem({ id, logo, image, title, type, year }) {
    return (
        <div className=''>
            {/* Overlay */}
            <div className=''>
                <img src={logo} alt={`logo-${id}`} />
            </div>
            <figure className=''>
                {/* ProjectImage */}
                <img src={image} alt={`image-${id}`} />
            </figure>
            {/* ProjectContent */}
            <div className=''>
                <div className=''>
                    <p className=''>{title}</p>
                    <p className=''>{type}</p>
                </div>
                <p className=''>{year}</p>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}
