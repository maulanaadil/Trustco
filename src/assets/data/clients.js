import { v4 as uuidv4 } from 'uuid'

import Evocative from '../images/logoClient/evocative.png'
import Virtue from '../images/logoClient/virtue.png'
import Telkomsel from '../images/logoClient/telkomsel.png'
import Vidio from '../images/logoClient/vidio.png'
import Staycation from '../images/logoClient/staycation.png'
import Pandeglang from '../images/logoClient/pandeglang.png'
import CampusPedia from '../images/logoClient/campuspedia.png'
import Musentex from '../images/logoClient/musentex.png'

const clients = [
    {
        id: uuidv4(),
        logo: Evocative,
        alt: 'EvocativeClub-logo',
    },
    {
        id: uuidv4(),
        logo: Virtue,
        alt: 'VirtuePictures-logo',
    },
    {
        id: uuidv4(),
        logo: Telkomsel,
        alt: 'Telkomsel-logo',
    },
    {
        id: uuidv4(),
        logo: Vidio,
        alt: 'Vidio-logo',
    },
    {
        id: uuidv4(),
        logo: Musentex,
        alt: 'Musentex-logo',
    },
    {
        id: uuidv4(),
        logo: Staycation,
        alt: 'Staycation-logo',
    },
    {
        id: uuidv4(),
        logo: Pandeglang,
        alt: 'Pandeglang-logo',
    },
    {
        id: uuidv4(),
        logo: CampusPedia,
        alt: 'CampusPedia-logo',
    },
]

export default clients
