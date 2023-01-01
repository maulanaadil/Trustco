import React from 'react'

import PropTypes from 'prop-types'

import * as styles from './styles'

import {
    BlobShape,
    BlobOutlineShape,
} from '../../../../assets/ilustration/index'

import Evocative from '../../../../assets/images/logoClient/evocative.png'
import VirtuePictures from '../../../../assets/images/logoClient/virtue.png'
import Pandeglang from '../../../../assets/images/logoClient/pandeglang.png'
import Staycation from '../../../../assets/images/logoClient/staycation.png'

import EvocativeProject from '../../../../assets/images/projects/evocative-project.png'
import VirtueProject from '../../../../assets/images/projects/virtue-project.png'
import PandeglangProject from '../../../../assets/images/projects/pandeglang-project.png'
import StaycationProject from '../../../../assets/images/projects/staycation-project.png'

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
                    <img
                        imgClassName={styles.sProjectItemImage}
                        alt='project-1'
                        src={EvocativeProject}
                    />
                </ProjectItem>
                <ProjectItem
                    id={2}
                    logo={VirtuePictures}
                    title='Virtue Pictures'
                    type='Company Website Revamp'
                    year='2022'
                >
                    <img
                        imgClassName={styles.sProjectItemImage}
                        alt='project-2'
                        src={VirtueProject}
                    />
                </ProjectItem>
                <ProjectItem
                    id={3}
                    logo={Pandeglang}
                    title='Pandeglang Raya Mart'
                    type='Point of Sales Integrated System'
                    year='2022'
                >
                    <img
                        src={PandeglangProject}
                        alt='project-3'
                        className={styles.sProjectItemImage}
                    />
                </ProjectItem>
                <ProjectItem
                    id={4}
                    logo={Staycation}
                    title='Staycation'
                    type='Marketplace Hotel Integrated System'
                    year='2021'
                >
                    <img
                        src={StaycationProject}
                        alt='project-4'
                        className={styles.sProjectItemImage}
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
