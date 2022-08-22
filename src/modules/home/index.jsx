import React from 'react'
import {
    ClientSection,
    AboutSection,
    HeroSection,
    HowWeWorkSection,
    ProjectsSection,
} from './sections'

import * as styles from './styles'

export default function HomeModules() {
    return (
        <div className={styles.sHome}>
            <HeroSection />
            <ClientSection />
            <AboutSection />
            <HowWeWorkSection />
            <ProjectsSection />
        </div>
    )
}
