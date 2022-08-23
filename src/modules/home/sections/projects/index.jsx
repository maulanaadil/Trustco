import React from 'react'

import PropTypes from 'prop-types'

import * as styles from './styles'

import { BlobShape, BlobOutlineShape } from './assets'
import StayCationLogo from './assets/logoClient/staycation.png'
import StayCation from './assets/logoClient/staycation-project.png'

export default function ProjectsSection() {
    return (
        <section className={styles.sProjects} id='projects'>
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
            <BlobShape className='absolute max-w-[520px] left-[-50px] bottom-0 z-[-2]' />
            <BlobOutlineShape className='absolute max-w-[520px] left-[-50px] bottom-[-20px] z-[-2]' />
            <div className={styles.sProjectContainer}>
                <ProjectItem
                    id={1}
                    logo={StayCationLogo}
                    image={StayCation}
                    title='Staycation'
                    type='Marketplace Hotel Integrated System'
                    year='2021'
                />
                <ProjectItem
                    id={1}
                    logo={StayCationLogo}
                    image={StayCation}
                    title='Staycation'
                    type='Marketplace Hotel Integrated System'
                    year='2021'
                />
                <ProjectItem
                    id={1}
                    logo={StayCationLogo}
                    image={StayCation}
                    title='Staycation'
                    type='Marketplace Hotel Integrated System'
                    year='2021'
                />
                <ProjectItem
                    id={1}
                    logo={StayCationLogo}
                    image={StayCation}
                    title='Staycation'
                    type='Marketplace Hotel Integrated System'
                    year='2021'
                />
            </div>
        </section>
    )
}

function ProjectItem({ id, logo, image, title, type, year }) {
    return (
        <div className={styles.sProjectItem}>
            <div className={styles.sProjectItemImageContainer}>
                <div className={styles.sProjectItemOverlay}>
                    <img
                        src={logo}
                        alt={`logo-${id}`}
                        className={styles.sProjectItemLogo}
                    />
                </div>
                <figure className={styles.sProjectItemImageWrapper}>
                    <img
                        src={image}
                        alt={`image-${id}`}
                        className={styles.sProjectItemImage}
                    />
                </figure>
            </div>
            <div className={styles.sProjectItemContent}>
                <div className={styles.sProjectItemContentWrapper}>
                    <p className={styles.sProjectItemTitle}>{title}</p>
                    <p className={styles.sProjectItemType}>{type}</p>
                </div>
                <p className={styles.sProjectItemYear}>{year}</p>
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
