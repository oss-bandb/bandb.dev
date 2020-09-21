import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Project } from "@components"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const StyledSwiper = styled(Swiper)`
    padding-bottom: 2em;
`

const ProjectSwiper = ({ projects, className }) => {
    return (
        <StyledSwiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className={className}
        >
            {projects.map((project, i) => (
                <SwiperSlide key={i}>
                    <Project data={project} />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    )
}

ProjectSwiper.proptTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectSwiper
