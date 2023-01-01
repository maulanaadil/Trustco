import { v4 as uuidv4 } from 'uuid'
import Evocative from '../images/logoClient/evocative.png'
import VirtuePictures from '../images/logoClient/virtue.png'
import Pandeglang from '../images/logoClient/pandeglang.png'
import Staycation from '../images/logoClient/staycation.png'
import Musentex from '../images/logoClient/musentex.png'

import EvocativeProject from '../images/projects/EvocativeClub.png'
import VirtueProject from '../images/projects/VirtuePictures.png'
import PandeglangProject from '../images/projects/PandeglangRayaMart.png'
import StaycationProject from '../images/projects/Staycation.png'
import PersipanPandeglangProject from '../images/projects/PersipanPandeglang.png'
import MusentexProject from '../images/projects/Musentex.png'

const dataProjects = [
    {
        id: uuidv4(),
        title: 'Evocative',
        type: 'Company Website Revamp',
        year: '2022',
        logo: Evocative,
        projectImage: EvocativeProject,
    },
    {
        id: uuidv4(),
        title: 'Vitue Pictures',
        type: 'Company Website Revamp',
        year: '2022',
        logo: VirtuePictures,
        projectImage: VirtueProject,
    },
    {
        id: uuidv4(),
        title: 'Pandeglang Raya Mart',
        type: 'Point of Sales Integrated System',
        year: '2022',
        logo: Pandeglang,
        projectImage: PandeglangProject,
    },
    {
        id: uuidv4(),
        title: 'Staycation',
        type: 'Marketplace Hotel Integrated System',
        year: '2021',
        logo: Staycation,
        projectImage: StaycationProject,
    },
    {
        id: uuidv4(),
        title: 'Persipan Pandeglang',
        type: 'Company Website',
        year: '2022',
        logo: Pandeglang,
        projectImage: PersipanPandeglangProject,
    },
    {
        id: uuidv4(),
        title: 'Musentex',
        type: 'Marketplace Textile Integrated System',
        year: '2022',
        logo: Musentex,
        projectImage: MusentexProject,
    },
]

export default dataProjects
