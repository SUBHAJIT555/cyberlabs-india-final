import FacultyHero from "@/components/FacultyHero"
import FoundationFaculty from "@/components/FoundationFaculty"
import CoreFaculty from "@/components/CoreFaculty"
// import WhatAndWhyTeam from "@/components/WhatAndWhyTeam"
// import CallToAction from "@/components/CallToAction"
import WhatTruelySet from "@/components/WhatTruelySet"

const Faculty = () => {
    return (
        <>
            
            <div className="relative z-10">
                <FacultyHero />
                <FoundationFaculty />
                <CoreFaculty />
                <WhatTruelySet />
            </div>
        </>
    )
}

export default Faculty;