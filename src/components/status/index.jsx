import PropTypes from 'prop-types'
import './status.css'

export function Status({variant = 'gree', children}) {
    return <span className={`container--status ${variant}`}>{children}</span>
}

Status.PropTypes = {
    variant: PropTypes.oneOf(['gree', 'pink', 'orange']),
    children: PropTypes.string.isRequired
}