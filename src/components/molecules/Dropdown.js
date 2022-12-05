import React, { useEffect, useRef, useState } from 'react'

const Dropdown = (props) => {
    const [toggle, setToggle] = useState(false);
    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)
    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            // user click toggle
            if (dropdown_content_el.current && dropdown_content_el.current.contains(e.target)) {
                setToggle(true);
            } else {
                // user click outside toggle and content
                if (dropdown_toggle_el.current && !dropdown_toggle_el.current.contains(e.target)) {
                    setToggle(false);
                }
            }
        })
    }, [])
    return (
        <div>
            <div ref={dropdown_toggle_el}>
                {props.renderToggle ? props.renderToggle() : ''}
            </div>
            <div ref={dropdown_content_el}>
                {
                    props.content_data && props.renderItems 
                        ?  props.content_data.map((item, index) => props.renderItems(item, index))
                        : ''
                }
            </div>
        </div>
    )
}

export default Dropdown