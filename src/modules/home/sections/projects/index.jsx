import React from 'react'

import PropTypes from 'prop-types'

import dataProjects from '../../../../assets/data/projects'
import * as styles from './styles'

import {
    BlobShape,
    BlobOutlineShape,
} from '../../../../assets/ilustration/index'

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
                {dataProjects
                    .sort((a, b) => a.year - b.year)
                    .map((item) => (
                        <ProjectItem
                            id={item.id}
                            logo={item.logo}
                            title={item.title}
                            type={item.type}
                            year={item.year}
                        >
                            <img
                                imgClassName={styles.sProjectItemImage}
                                alt={`project-${item.id}`}
                                src={item.projectImage}
                            />
                        </ProjectItem>
                    ))}
            </div>
        </section>
    )
}

function ProjectItem({ id, logo, title, type, year, children }) {
    return (
        <div className={styles.sProjectItem}>
            <div className={styles.sProjectItemImageContainer}>
                <div className={styles.sProjectItemOverlay}>
                    <div className={styles.sProjectItemImageContainerWrapper}>
                        <img
                            src={logo}
                            alt={`logo-${id}`}
                            className={styles.sProjectItemLogo}
                        />
                    </div>
                </div>
                <figure className={styles.sProjectItemImageWrapper}>
                    {children}
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
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
