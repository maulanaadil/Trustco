import React from 'react'

import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './styles'

import { BlobShape, BlobOutlineShape } from './assets'

import Evocative from './assets/logoClient/evocative.png'
import VirtuePictures from './assets/logoClient/virtue.png'
import Pandeglang from './assets/logoClient/pandeglang.png'
import Staycation from './assets/logoClient/staycation.png'

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
                    logo={Evocative}
                    title='Evocative'
                    type='Company Website Revamp'
                    year='2022'
                >
                    <StaticImage
                        imgClassName={styles.sProjectItemImage}
                        alt='project-1'
                        src='./assets/logoClient/evocative-project.png'
                    />
                </ProjectItem>
                <ProjectItem
                    id={2}
                    logo={VirtuePictures}
                    title='Virtue Pictures'
                    type='Company Website Revamp'
                    year='2022'
                >
                    <StaticImage
                        imgClassName={styles.sProjectItemImage}
                        alt='project-2'
                        src='./assets/logoClient/virtue-project.png'
                    />
                </ProjectItem>
                <ProjectItem
                    id={3}
                    logo={Pandeglang}
                    title='Pandeglang Raya Mart'
                    type='Point of Sales Integrated System'
                    year='2022'
                >
                    <StaticImage
                        imgClassName={styles.sProjectItemImage}
                        alt='project-3'
                        src='./assets/logoClient/pandeglang-project.png'
                    />
                </ProjectItem>
                <ProjectItem
                    id={4}
                    logo={Staycation}
                    title='Staycation'
                    type='Marketplace Hotel Integrated System'
                    year='2021'
                >
                    <StaticImage
                        imgClassName={styles.sProjectItemImage}
                        alt='project-4'
                        src='./assets/logoClient/staycation-project.png'
                    />
                </ProjectItem>
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
